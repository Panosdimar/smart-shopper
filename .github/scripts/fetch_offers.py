import os
import re
import json
import requests
import anthropic
from supabase import create_client
from datetime import datetime, timedelta

sb = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_KEY"])
ai = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

STORES = [
    {"id":"lidl_de","name":"Lidl","flag":"DE","currency":"EUR","url":"https://www.lidl.de/de/angebote"},
    {"id":"aldi_de","name":"Aldi","flag":"DE","currency":"EUR","url":"https://www.aldi-sued.de/de/angebote.html"},
    {"id":"rewe_de","name":"Rewe","flag":"DE","currency":"EUR","url":"https://www.rewe.de/angebote/"},
    {"id":"migros_ch","name":"Migros","flag":"CH","currency":"CHF","url":"https://www.migros.ch/de/angebote"},
    {"id":"lidl_fr","name":"Lidl FR","flag":"FR","currency":"EUR","url":"https://www.lidl.fr/nos-offres"},
]

HEADERS = {"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"}

def fetch_offers_from_text(store_id, store_name, flag, currency, text):
    try:
        prompt = "Extract supermarket offers. Return ONLY JSON array: [{\"product_id\":\"slug\",\"product_name\":\"Name\",\"price\":1.99,\"unit\":\"kg\"}]. Max 20 items. Store: " + store_name + " " + flag + " " + currency + "\n\n" + text[:3000]
        msg = ai.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=2000,
            messages=[{"role":"user","content":prompt}]
        )
        raw = msg.content[0].text.strip()
        raw = re.sub("```json|```","",raw).strip()
        match = re.search("\[.*\]",raw,re.DOTALL)
        if not match:
            print("No JSON array found: " + raw[:200])
            return []
        items = json.loads(match.group(0))

        week_end = (datetime.utcnow()+timedelta(days=7)).strftime("%Y-%m-%d")
        rows = []
        for item in items:
            if not item.get("product_name") or not item.get("price"):
                continue
            rows.append({
                "store_id":store_id,
                "store_name":store_name,
                "store_flag":flag,
                "product_id":item.get("product_id","").lower().replace(" ","_"),
                "product_name":item.get("product_name",""),
                "price":float(item.get("price",0)),
                "currency":currency,
                "unit":item.get("unit","pcs"),
                "valid_until":week_end,
                "created_at":datetime.utcnow().isoformat()
            })
        return rows
    except Exception as e:
        print("AI error " + store_name + ": " + str(e))
        return []

def fetch_store_page(store):
    try:
        resp = requests.get(store["url"],headers=HEADERS,timeout=15)
        text = re.sub("<[^>]+"," ",resp.text)
        text = re.sub("\s+"," ",text).strip()
        matches = re.finditer("([A-Za-z\s]{3,40})\s+(\d+[.,]\d{2})\s*(?:EUR|CHF)?",text)
        lines = [m.group(1).strip() + ": " + m.group(2) for m in matches]
        return "\n".join(lines[:100]) if lines else text[:3000]
    except Exception as e:
        print("Fetch error " + store["name"] + ": " + str(e))
        return None

def main():
    total = 0
    for store in STORES:
        print("--- " + store["name"] + " " + store["flag"] + " ---")
        text = fetch_store_page(store)
        if not text:
            print("Skipped")
            continue
        rows = fetch_offers_from_text(store["id"],store["name"],store["flag"],store["currency"],text)
        if rows:
            sb.table("prices").delete().eq("store_id",store["id"]).execute()
            sb.table("prices").insert(rows).execute()
            total += len(rows)
            print(str(len(rows)) + " offers saved")
        else:
            print("No offers found")
    print("Total: " + str(total) + " offers")

if __name__ == "__main__":
    main()
