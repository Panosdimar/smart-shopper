import os
import re
import json
import requests
import anthropic
from supabase import create_client
from datetime import datetime, timedelta

# Init clients

sb = create_client(os.environ[‘SUPABASE_URL’], os.environ[‘SUPABASE_KEY’])
ai = anthropic.Anthropic(api_key=os.environ[‘ANTHROPIC_API_KEY’])

# Supermarket flyer URLs (public PDFs updated weekly)

STORES = [
{
‘id’: ‘lidl_de’,
‘name’: ‘Lidl’,
‘flag’: ‘DE’,
‘currency’: ‘EUR’,
‘url’: ‘https://www.lidl.de/de/angebote’,
‘flyer_pattern’: r’https://[^”]+.pdf’
},
{
‘id’: ‘aldi_de’,
‘name’: ‘Aldi’,
‘flag’: ‘DE’,
‘currency’: ‘EUR’,
‘url’: ‘https://www.aldi-sued.de/de/angebote.html’,
‘flyer_pattern’: r’https://[^”]+prospekt[^”]+.pdf’
},
{
‘id’: ‘rewe_de’,
‘name’: ‘Rewe’,
‘flag’: ‘DE’,
‘currency’: ‘EUR’,
‘url’: ‘https://www.rewe.de/angebote/’,
‘flyer_pattern’: r’https://[^”]+angebot[^”]+.pdf’
},
{
‘id’: ‘migros_ch’,
‘name’: ‘Migros’,
‘flag’: ‘CH’,
‘currency’: ‘CHF’,
‘url’: ‘https://www.migros.ch/de/angebote’,
‘flyer_pattern’: r’https://[^”]+.pdf’
},
{
‘id’: ‘lidl_fr’,
‘name’: ‘Lidl FR’,
‘flag’: ‘FR’,
‘currency’: ‘EUR’,
‘url’: ‘https://www.lidl.fr/nos-offres’,
‘flyer_pattern’: r’https://[^”]+.pdf’
},
]

HEADERS = {
‘User-Agent’: ‘Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15’
}

def fetch_offers_from_text(store_id, store_name, flag, currency, text):
“”“Use Claude Haiku to extract products and prices from text.”””
try:
msg = ai.messages.create(
model=‘claude-haiku-4-5-20251001’,
max_tokens=2000,
messages=[{
‘role’: ‘user’,
‘content’: f””“Extract supermarket offers from this text. Return ONLY valid JSON array:
[{{“product_id”:“slug_name”,“product_name”:“Name”,“price”:1.99,“unit”:“kg or pcs or L”}}]

Rules:

- product_id: lowercase, underscores, no spaces (e.g. “chicken_breast”)
- price: number only
- Extract max 20 most relevant grocery items
- Skip non-food items, alcohol, tobacco
- Text from {store_name} ({flag}), currency {currency}

Text:
{text[:3000]}”””
}]
)

```
    raw = msg.content[0].text.strip()
    raw = re.sub(r'```json|```', '', raw).strip()
    items = json.loads(raw)

    now = datetime.utcnow().isoformat()
    week_end = (datetime.utcnow() + timedelta(days=7)).strftime('%Y-%m-%d')

    rows = []
    for item in items:
        if not item.get('product_name') or not item.get('price'):
            continue
        rows.append({
            'store_id': store_id,
            'store_name': store_name,
            'store_flag': flag,
            'product_id': item.get('product_id', '').lower().replace(' ', '_'),
            'product_name': item.get('product_name', ''),
            'price': float(item.get('price', 0)),
            'currency': currency,
            'unit': item.get('unit', 'pcs'),
            'valid_until': week_end,
            'created_at': now
        })

    return rows

except Exception as e:
    print(f'AI parse error for {store_name}: {e}')
    return []
```

def fetch_store_page(store):
“”“Fetch offers page and extract text.”””
try:
resp = requests.get(store[‘url’], headers=HEADERS, timeout=15)
resp.raise_for_status()

```
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', ' ', resp.text)
    text = re.sub(r'\s+', ' ', text).strip()

    # Look for price patterns
    price_context = []
    matches = re.finditer(r'([A-Za-zÀ-ÿ\s]{3,40})\s+(\d+[.,]\d{2})\s*(?:€|CHF|EUR)?', text)
    for m in matches:
        price_context.append(f"{m.group(1).strip()}: {m.group(2)}")

    if price_context:
        return '\n'.join(price_context[:100])
    return text[:3000]

except Exception as e:
    print(f'Failed to fetch {store["name"]}: {e}')
    return None
```

def save_to_supabase(rows):
“”“Save offers to Supabase, replacing old ones for same store.”””
if not rows:
return

```
store_id = rows[0]['store_id']

# Delete old entries for this store
sb.table('prices').delete().eq('store_id', store_id).execute()

# Insert new ones
result = sb.table('prices').insert(rows).execute()
print(f'Saved {len(rows)} offers for {store_id}')
return result
```

def main():
total = 0
for store in STORES:
print(f’\n— Fetching {store[“name”]} ({store[“flag”]}) —’)

```
    text = fetch_store_page(store)
    if not text:
        print('No text found, skipping.')
        continue

    rows = fetch_offers_from_text(
        store['id'], store['name'],
        store['flag'], store['currency'], text
    )

    if rows:
        save_to_supabase(rows)
        total += len(rows)
        print(f'Found {len(rows)} offers')
    else:
        print('No offers extracted')

print(f'\n✅ Done! Total: {total} offers saved to Supabase')
```

if **name** == ‘**main**’:
main()
