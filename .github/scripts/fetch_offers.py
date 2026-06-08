import os
import re
import json
import requests
from supabase import create_client
from datetime import datetime, timedelta

sb = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_KEY"])

ZIP_CODE = "79639"

DE_STORES = [
    {"id":"lidl_de","name":"Lidl","flag":"DE","currency":"EUR"},
    {"id":"aldi_de","name":"Aldi","flag":"DE","currency":"EUR"},
    {"id":"rewe_de","name":"Rewe","flag":"DE","currency":"EUR"},
    {"id":"edeka_de","name":"Edeka","flag":"DE","currency":"EUR"},
    {"id":"kaufland_de","name":"Kaufland","flag":"DE","currency":"EUR"},
]

STORE_NAME_MAP = {
    "lidl": "lidl_de",
    "aldi": "aldi_de",
    "rewe": "rewe_de",
    "edeka": "edeka_de",
    "kaufland": "kaufland_de",
    "penny": "penny_de",
}

def get_marktguru_key():
    try:
        resp = requests.get("https://www.marktguru.de", timeout=10)
        match = re.search(r'"apiKey"\s*:\s*"([^"]+)"', resp.text)
        if match:
            return match.group(1)
        match = re.search(r'apiKey=([a-zA-Z0-9_-]+)', resp.text)
        if match:
            return match.group(1)
    except Exception as e:
        print("Key error: " + str(e))
    return None

def fetch_marktguru_offers(api_key, zip_code):
    url = "https://api.marktguru.de/api/v1/offers/search"
    headers = {
        "x-apikey": api_key,
        "x-clientkey": "marktguru-web",
        "Content-Type": "application/json"
    }
    products = [
        "Milch", "Eier", "Butter", "Joghurt", "Käse",
        "Hähnchen", "Hackfleisch", "Lachs", "Wurst",
        "Brot", "Nudeln", "Reis", "Mehl", "Zucker",
        "Apfel", "Banane", "Tomate", "Karotte", "Kartoffel",
        "Wasser", "Saft", "Kaffee", "Tee",
        "Chips", "Schokolade", "Kekse"
    ]
    all_offers = []
    for product in products:
        try:
            payload = {
                "query": product,
                "zipCode": zip_code,
                "limit": 10
            }
            resp = requests.post(url, headers=headers, json=payload, timeout=10)
            if resp.status_code == 200:
                data = resp.json()
                offers = data.get("offers", data.get("results", []))
                all_offers.extend(offers)
        except Exception as e:
            print("Search error " + product + ": " + str(e))
    return all_offers

def parse_offers(offers):
    rows = []
    week_end = (datetime.utcnow() + timedelta(days=7)).strftime("%Y-%m-%d")
    seen = set()

    for offer in offers:
        try:
            name = offer.get("title", offer.get("name", ""))
            price = offer.get("price", offer.get("regularPrice", 0))
            store_name = offer.get("advertiser", offer.get("store", {}).get("name", ""))
            unit = offer.get("unit", "pcs")

            if not name or not price or not store_name:
                continue

            store_key = None
            for key, sid in STORE_NAME_MAP.items():
                if key.lower() in store_name.lower():
                    store_key = sid
                    break

            if not store_key:
                continue

            pid = re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_")
            dedup = pid + "_" + store_key
            if dedup in seen:
                continue
            seen.add(dedup)

            rows.append({
                "store_id": store_key,
                "store_name": store_name,
                "store_flag": "DE",
                "product_id": pid,
                "product_name": name,
                "price": float(price),
                "currency": "EUR",
                "unit": str(unit),
                "valid_until": week_end,
                "created_at": datetime.utcnow().isoformat()
            })
        except Exception as e:
            print("Parse error: " + str(e))
            continue

    return rows

def main():
    print("Getting Marktguru API key...")
    api_key = get_marktguru_key()

    if not api_key:
        print("No API key found - trying fallback key")
        api_key = "marktguru"

    print("Fetching offers for ZIP: " + ZIP_CODE)
    offers = fetch_marktguru_offers(api_key, ZIP_CODE)
    print("Raw offers found: " + str(len(offers)))

    rows = parse_offers(offers)
    print("Parsed rows: " + str(len(rows)))

    if rows:
        for store_id in set(r["store_id"] for r in rows):
            sb.table("prices").delete().eq("store_id", store_id).execute()

        sb.table("prices").insert(rows).execute()
        print("Saved " + str(len(rows)) + " offers to Supabase!")
    else:
        print("No offers to save")

if __name__ == "__main__":
    main()
