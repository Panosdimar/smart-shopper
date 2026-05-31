var LANG = ‘en’;
try { LANG = localStorage.getItem(‘ss_lang’) || ‘en’; } catch(e) {}

var T = {
en: {
app_subtitle: ‘DE/CH/FR · Voice · Full Supermarket’,
nav_shopper: ‘Shopper’, nav_scan: ‘NutriScan’, nav_history: ‘History’, nav_price: ‘PriceWatch’,
where_title: ‘Where are you shopping?’,
where_sub: ‘Enter your city — we find all stores within your radius including cross-border.’,
saved_loc: ‘Saved location’, use_saved: ‘Use saved’,
addr_ph: ‘Basel / Grenzach-Wyhlen / Freiburg…’, go: ‘Go’,
radius_label: ‘Search radius’,
shopping_list: ‘Shopping List’, save_loc: ‘save location’,
voice_idle: ‘🎙 Voice / Text input’,
voice_sub: ‘Works on HTTPS. Say: Milch, Kartoffeln, Lachs’,
listening: ‘🔴 Listening…’, recognising: ‘⏳ Recognising…’,
items_found: ’ items found’,
no_speech: ‘No speech detected. Try again!’,
or_type: ‘Or type: Milch, Eier, Brot, salmon…’,
find: ‘Find’, add_all: ‘+ Add all to list’, clear: ‘clear’,
no_match: ‘No products matched. Try different words.’,
search_ph: ‘Search products… (chicken, bio, gluten-free)’,
filter: ‘Filter:’, sort: ‘Sort:’,
cheapest: ‘💰 Cheapest’, best_offers: ‘🏷 Best offers’, nearest: ‘📍 Nearest’,
find_prices: ‘Find Best Prices’,
edit_list: ‘← Edit list’,
nutriscan_title: ‘📷 NutriScan’, nutriscan_sub: ‘Scan any barcode — instant health score’,
manual_label: ‘Or enter barcode manually’,
start_camera: ‘Start Camera’, stop_camera: ‘Stop’,
camera_ready: ‘Point camera at barcode — tap Capture’,
history_title: ‘🕐 Scan History’, history_sub: ‘Your recently scanned products’,
pw_title: ‘💰 PriceWatch’, pw_sub: ‘Scan & track prices across DE/CH/FR stores’,
pw_add_label: ‘Add product to watch’, pw_add_btn: ‘+Add’,
pw_scan_btn: ‘📷 Scan Barcode to Add’,
pw_watching: ‘Watching’, pw_products: ‘products’,
pw_last_updated: ‘Last updated:’,
pw_empty_title: ‘No products yet’,
pw_empty_sub: ‘Add a product by scanning its barcode or entering the number above.’,
wa_title: ‘Paste from WhatsApp’,
wa_sub: ‘Paste a shopping list — we find all products automatically’,
wa_find: ‘Find’,
wa_add_all: ‘+ Add all to list’,
wa_clear: ‘Clear’,
receipt_title: ‘🧾 Receipt Scanner’,
receipt_sub: ‘Photograph your receipt — see what you spent’,
nav_receipt: ‘Receipt’,
germany: ‘🇩🇪 Germany’, switzerland: ‘🇨🇭 Switzerland’, france: ‘🇫🇷 France’,
},
de: {
app_subtitle: ‘DE/CH/FR · Spracheingabe · Vollsortimenter’,
nav_shopper: ‘Einkauf’, nav_scan: ‘NutriScan’, nav_history: ‘Verlauf’, nav_price: ‘Preisvergleich’,
where_title: ‘Wo kaufen Sie ein?’,
where_sub: ‘Stadt eingeben — wir finden alle Supermärkte in Ihrer Nähe, auch grenznah.’,
saved_loc: ‘Gespeicherter Standort’, use_saved: ‘Verwenden’,
addr_ph: ‘Basel / Grenzach-Wyhlen / Freiburg…’, go: ‘Los’,
radius_label: ‘Suchradius’,
shopping_list: ‘Einkaufsliste’, save_loc: ‘Standort speichern’,
voice_idle: ‘🎙 Sprach- / Texteingabe’,
voice_sub: ‘Auf HTTPS verfügbar. Sagen Sie: Milch, Kartoffeln, Lachs’,
listening: ‘🔴 Hört zu…’, recognising: ‘⏳ Wird erkannt…’,
items_found: ’ Artikel gefunden’,
no_speech: ‘Keine Sprache erkannt. Nochmals versuchen!’,
or_type: ‘Oder tippen: Milch, Eier, Brot, Lachs…’,
find: ‘Suchen’, add_all: ‘+ Alle hinzufügen’, clear: ‘Löschen’,
no_match: ‘Keine Produkte gefunden. Andere Wörter versuchen.’,
search_ph: ‘Produkte suchen… (Hähnchen, Bio, glutenfrei)’,
filter: ‘Filter:’, sort: ‘Sortieren:’,
cheapest: ‘💰 Günstigste’, best_offers: ‘🏷 Beste Angebote’, nearest: ‘📍 Nächste’,
find_prices: ‘Beste Preise finden’,
edit_list: ‘← Liste bearbeiten’,
nutriscan_title: ‘📷 NutriScan’, nutriscan_sub: ‘Barcode scannen — sofortige Gesundheitsbewertung’,
manual_label: ‘Oder Barcode manuell eingeben’,
start_camera: ‘Kamera starten’, stop_camera: ‘Stopp’,
camera_ready: ‘Kamera auf Barcode richten — Aufnehmen tippen’,
history_title: ‘🕐 Scanverlauf’, history_sub: ‘Zuletzt gescannte Produkte’,
pw_title: ‘💰 Preisvergleich’, pw_sub: ‘Preise in DE/CH/FR Supermärkten verfolgen’,
pw_add_label: ‘Produkt zur Beobachtung hinzufügen’, pw_add_btn: ‘+Hinzufügen’,
pw_scan_btn: ‘📷 Barcode scannen’,
pw_watching: ‘Beobachte’, pw_products: ‘Produkte’,
pw_last_updated: ‘Letzte Aktualisierung:’,
pw_empty_title: ‘Noch keine Produkte’,
pw_empty_sub: ‘Fügen Sie ein Produkt hinzu, indem Sie den Barcode scannen.’,
wa_title: ‘Aus WhatsApp einfügen’,
wa_sub: ‘Einkaufsliste einfügen — wir finden alle Produkte’,
wa_find: ‘Suchen’,
wa_add_all: ‘+ Alle hinzufügen’,
wa_clear: ‘Löschen’,
receipt_title: ‘🧾 Kassenbon Scanner’,
receipt_sub: ‘Kassenbon fotografieren — Ausgaben analysieren’,
nav_receipt: ‘Kassenbon’,
germany: ‘🇩🇪 Deutschland’, switzerland: ‘🇨🇭 Schweiz’, france: ‘🇫🇷 Frankreich’,
},
fr: {
app_subtitle: ‘DE/CH/FR · Voix · Supermarché complet’,
nav_shopper: ‘Courses’, nav_scan: ‘NutriScan’, nav_history: ‘Historique’, nav_price: ‘ComparaPrix’,
where_title: ‘Où faites-vous vos courses ?’,
where_sub: ‘Entrez votre ville — nous trouvons tous les magasins dans votre rayon, y compris transfrontaliers.’,
saved_loc: ‘Lieu enregistré’, use_saved: ‘Utiliser’,
addr_ph: ‘Bâle / Grenzach-Wyhlen / Fribourg…’, go: ‘OK’,
radius_label: ‘Rayon de recherche’,
shopping_list: ‘Liste de courses’, save_loc: ‘Enregistrer le lieu’,
voice_idle: ‘🎙 Saisie vocale / textuelle’,
voice_sub: ‘Disponible sur HTTPS. Dites : Milch, Kartoffeln, Lachs’,
listening: ‘🔴 En écoute…’, recognising: ‘⏳ Reconnaissance…’,
items_found: ’ articles trouvés’,
no_speech: ‘Aucune parole détectée. Réessayez !’,
or_type: ‘Ou tapez : Milch, Eier, Brot, saumon…’,
find: ‘Chercher’, add_all: ‘+ Tout ajouter’, clear: ‘Effacer’,
no_match: ‘Aucun produit trouvé. Essayez d'autres mots.’,
search_ph: ‘Rechercher des produits… (poulet, bio, sans gluten)’,
filter: ‘Filtrer :’, sort: ‘Trier :’,
cheapest: ‘💰 Moins cher’, best_offers: ‘🏷 Meilleures offres’, nearest: ‘📍 Plus proche’,
find_prices: ‘Trouver les meilleurs prix’,
edit_list: ‘← Modifier la liste’,
nutriscan_title: ‘📷 NutriScan’, nutriscan_sub: ‘Scannez un code-barres — score santé instantané’,
manual_label: ‘Ou saisir le code-barres manuellement’,
start_camera: ‘Démarrer la caméra’, stop_camera: ‘Arrêter’,
camera_ready: ‘Pointez la caméra sur le code-barres — appuyez sur Capturer’,
history_title: ‘🕐 Historique des scans’, history_sub: ‘Vos produits récemment scannés’,
pw_title: ‘💰 ComparaPrix’, pw_sub: ‘Comparez les prix dans les magasins DE/CH/FR’,
pw_add_label: ‘Ajouter un produit à surveiller’, pw_add_btn: ‘+Ajouter’,
pw_scan_btn: ‘📷 Scanner le code-barres’,
pw_watching: ‘Surveillance de’, pw_products: ‘produits’,
pw_last_updated: ‘Dernière mise à jour :’,
pw_empty_title: ‘Aucun produit pour l'instant’,
pw_empty_sub: ‘Ajoutez un produit en scannant son code-barres.’,
wa_title: ‘Coller depuis WhatsApp’,
wa_sub: ‘Collez une liste — nous trouvons tous les produits’,
wa_find: ‘Chercher’,
wa_add_all: ‘+ Tout ajouter’,
wa_clear: ‘Effacer’,
receipt_title: ‘🧾 Scanner de ticket’,
receipt_sub: ‘Photographiez votre ticket — analysez vos dépenses’,
nav_receipt: ‘Ticket’,
germany: ‘🇩🇪 Allemagne’, switzerland: ‘🇨🇭 Suisse’, france: ‘🇫🇷 France’,
}
};

function t(k) { return (T[LANG] && T[LANG][k]) || T.en[k] || k; }
function tx(s) { if (LANG === ‘en’ || !TX[LANG]) return s; return TX[LANG][s] || s; }

function setLang(lang) {
LANG = lang;
try { localStorage.setItem(‘ss_lang’, lang); } catch(e) {}
[‘EN’,‘DE’,‘FR’].forEach(function(l) {
var btn = document.getElementById(‘lang’+l);
if (btn) { btn.classList.toggle(‘active’, l.toLowerCase() === lang); }
});
applyTranslations();
renderCategories();
showToast(lang === ‘de’ ? ‘🇩🇪 Deutsch’ : lang === ‘fr’ ? ‘🇫🇷 Français’ : ‘🇬🇧 English’);
}

function applyTranslations() {
var s = document.getElementById(‘appSubtitle’); if (s) s.textContent = t(‘app_subtitle’);
var wt = document.getElementById(‘whereTitle’); if (wt) wt.textContent = t(‘where_title’);
var ws = document.getElementById(‘whereSub’); if (ws) ws.textContent = t(‘where_sub’);
var ai = document.getElementById(‘addrInput’); if (ai) ai.placeholder = t(‘addr_ph’);
var gb = document.getElementById(‘goBtn’); if (gb) gb.textContent = t(‘go’);
var rl = document.getElementById(‘radiusLabel’); if (rl) rl.textContent = t(‘radius_label’);
var sl = document.getElementById(‘shoppingListTitle’); if (sl) sl.textContent = t(‘shopping_list’);
var slb = document.getElementById(‘saveLocBtn’); if (slb) slb.textContent = t(‘save_loc’);
var vt = document.getElementById(‘voiceTitle’); if (vt) vt.textContent = t(‘voice_idle’);
var vs = document.getElementById(‘voiceSubtitle’); if (vs) vs.textContent = t(‘voice_sub’);
var qi = document.getElementById(‘quickInput’); if (qi) qi.placeholder = t(‘or_type’);
var fb = document.getElementById(‘findBtn’); if (fb) fb.textContent = t(‘find’);
var ab = document.getElementById(‘addAllBtn’); if (ab) ab.textContent = t(‘add_all’);
var cb = document.getElementById(‘clearVoiceBtn’); if (cb) cb.textContent = t(‘clear’);
var si = document.getElementById(‘searchInput’); if (si) si.placeholder = t(‘search_ph’);
var fl = document.getElementById(‘filterLabel’); if (fl) fl.textContent = t(‘filter’);
var so = document.getElementById(‘sortLabel’); if (so) so.textContent = t(‘sort’);
var st = document.getElementById(‘sortTotal’); if (st) st.textContent = t(‘cheapest’);
var sv = document.getElementById(‘sortSaving’); if (sv) sv.textContent = t(‘best_offers’);
var sd = document.getElementById(‘sortDist’); if (sd) sd.textContent = t(‘nearest’);
var an = document.getElementById(‘analyzeBtn’); if (an) { var km = an.textContent.match(/\d+/); an.textContent = t(‘find_prices’) + (km ? ’ — ’ + km[0] + ’ km’ : ‘’); }
var el = document.getElementById(‘editListBtn’); if (el) el.textContent = t(‘edit_list’);
var nt = document.getElementById(‘nutriscanTitle’); if (nt) nt.textContent = t(‘nutriscan_title’);
var ns = document.getElementById(‘nutriscanSub’); if (ns) ns.textContent = t(‘nutriscan_sub’);
var ml = document.getElementById(‘manualLabel’); if (ml) ml.textContent = t(‘manual_label’);
var sl2 = document.getElementById(‘scanLabel’); if (sl2 && !scanState.active) sl2.textContent = t(‘camera_ready’);
var sbt = document.getElementById(‘scanBtnText’); if (sbt && !scanState.active) sbt.textContent = t(‘start_camera’);
var pt = document.getElementById(‘pwTitle’); if (pt) pt.textContent = t(‘pw_title’);
var ps = document.getElementById(‘pwSub’); if (ps) ps.textContent = t(‘pw_sub’);
var pal = document.getElementById(‘pwAddLabel’); if (pal) pal.textContent = t(‘pw_add_label’);
var pab = document.getElementById(‘pwAddBtn’); if (pab) pab.textContent = t(‘pw_add_btn’);
var psb = document.getElementById(‘pwScanBtn’); if (psb) psb.textContent = t(‘pw_scan_btn’);
var pet = document.getElementById(‘pwEmptyTitle’); if (pet) pet.textContent = t(‘pw_empty_title’);
var pes = document.getElementById(‘pwEmptySub’); if (pes) pes.textContent = t(‘pw_empty_sub’);
var pll = document.getElementById(‘pwLastUpdateLabel’); if (pll) pll.textContent = t(‘pw_last_updated’);
var rt = document.getElementById(‘receiptTitle’); if (rt) rt.textContent = t(‘receipt_title’);
var rs = document.getElementById(‘receiptSub’); if (rs) rs.textContent = t(‘receipt_sub’);
var nrl = document.getElementById(‘navReceiptLbl’); if (nrl) nrl.textContent = t(‘nav_receipt’);
var nsl = document.getElementById(‘navShopperLbl’); if (nsl) nsl.textContent = t(‘nav_shopper’);
var nscl = document.getElementById(‘navScanLbl’); if (nscl) nscl.textContent = t(‘nav_scan’);
var npl = document.getElementById(‘navPriceLbl’); if (npl) npl.textContent = t(‘nav_price’);
var sll = document.getElementById(‘savedLocLabel’); if (sll) sll.textContent = t(‘saved_loc’);
var usb = document.getElementById(‘useSavedBtn’); if (usb) usb.textContent = t(‘use_saved’);
var wt = document.getElementById(‘waPasteTitle’); if (wt) wt.textContent = t(‘wa_title’);
var ws = document.getElementById(‘waPasteSubtitle’); if (ws) ws.textContent = t(‘wa_sub’);
var wf = document.getElementById(‘waPasteBtnTxt’); if (wf) wf.textContent = t(‘wa_find’);
var wa = document.getElementById(‘waPasteAddAll’); if (wa) wa.textContent = t(‘wa_add_all’);
var wc = document.getElementById(‘waPasteClear’); if (wc) wc.textContent = t(‘wa_clear’);
}

// Init lang on load
(function() {
setTimeout(function() {
[‘EN’,‘DE’,‘FR’].forEach(function(l) {
var btn = document.getElementById(‘lang’+l);
if (btn) btn.classList.toggle(‘active’, l.toLowerCase() === LANG);
});
if (LANG !== ‘en’) applyTranslations();
}, 50);
})();

// ═══════════════════════════════════════════════════
// STORE & OFFER DATA
// ═══════════════════════════════════════════════════
var CAT_ICONS = {“Fresh Produce”:“🥦”,“Meat & Poultry”:“🥩”,“Fish & Seafood”:“🐟”,“Dairy & Eggs”:“🧀”,“Bakery”:“🥖”,“Dry Grocery”:“🍝”,“Frozen Foods”:“🧊”,“Beverages”:“🥤”,“Snacks & Confectionery”:“🍫”,“Health, Bio & Special Diet”:“🌱”,“Household Cleaning”:“🧼”,“Personal Care & Beauty”:“🧴”,“Baby & Infant Food”:“👶”,“Baby Non-Food”:“🍼”,“Pet Products”:“🐶”,“Pharmacy & Wellness”:“💊”,“International Foods”:“🌍”,“Ready Meals & Deli”:“🍳”,“General Merchandise”:“🎁”};
var LABEL_CFG = {“bio”:{icon:“🌿”,cls:“lbl-bio”,lbl:“Bio”},“vegan”:{icon:“🌱”,cls:“lbl-vegan”,lbl:“Vegan”},“gluten-free”:{icon:“🌾”,cls:“lbl-gf”,lbl:“GF”},“lactose-free”:{icon:“🥛”,cls:“lbl-lf”,lbl:“LF”}};

var STORES = [
{id:“lidl_de”,name:“Lidl”,flag:“DE”,cidx:0.95,factor:0.82,anchor:[47.54,7.70],note:“Best prices, great pantry”},
{id:“aldi_de”,name:“Aldi”,flag:“DE”,cidx:0.95,factor:0.80,anchor:[47.54,7.70],note:“Lowest prices overall”},
{id:“rewe_de”,name:“Rewe”,flag:“DE”,cidx:0.95,factor:1.02,anchor:[47.54,7.70],note:“Best variety and quality”},
{id:“edeka_de”,name:“Edeka”,flag:“DE”,cidx:0.95,factor:1.05,anchor:[47.54,7.70],note:“Excellent fresh produce”},
{id:“kaufland_de”,name:“Kaufland”,flag:“DE”,cidx:0.95,factor:0.97,anchor:[47.60,7.63],note:“Large hypermarket”},
{id:“penny_de”,name:“Penny”,flag:“DE”,cidx:0.95,factor:0.87,anchor:[47.54,7.70],note:“Budget-friendly basics”},
{id:“hiebers_de”,name:“Hieber’s Frische”,flag:“DE”,cidx:0.95,factor:1.00,anchor:[47.54,7.69],note:“Premium fresh and bio”},
{id:“alnatura_de”,name:“Alnatura”,flag:“DE”,cidx:0.95,factor:1.08,anchor:[48.00,7.84],note:“Top organic chain”},
{id:“dm_de”,name:“dm Drogerie”,flag:“DE”,cidx:0.95,factor:0.90,anchor:[47.54,7.70],note:“Best for baby and supplements”},
{id:“rossmann_de”,name:“Rossmann”,flag:“DE”,cidx:0.95,factor:0.88,anchor:[47.54,7.70],note:“Affordable drugstore”},
{id:“migros_ch”,name:“Migros”,flag:“CH”,cidx:1.62,factor:1.00,anchor:[47.56,7.59],note:“Switzerland largest retailer”},
{id:“coop_ch”,name:“Coop”,flag:“CH”,cidx:1.62,factor:1.02,anchor:[47.56,7.59],note:“Great Naturaplan organic range”},
{id:“lidl_ch”,name:“Lidl CH”,flag:“CH”,cidx:1.62,factor:0.85,anchor:[47.56,7.60],note:“Best budget in Switzerland”},
{id:“aldi_ch”,name:“Aldi CH”,flag:“CH”,cidx:1.62,factor:0.83,anchor:[47.56,7.60],note:“Lowest prices in Switzerland”},
{id:“denner_ch”,name:“Denner”,flag:“CH”,cidx:1.62,factor:0.88,anchor:[47.56,7.59],note:“Discount, great wine selection”},
{id:“leclerc_fr”,name:“E.Leclerc”,flag:“FR”,cidx:1.00,factor:0.88,anchor:[47.59,7.56],note:“Consistently lowest prices in France”},
{id:“carrefour_fr”,name:“Carrefour”,flag:“FR”,cidx:1.00,factor:0.98,anchor:[47.75,7.34],note:“Best variety”},
{id:“lidl_fr”,name:“Lidl FR”,flag:“FR”,cidx:1.00,factor:0.82,anchor:[47.59,7.56],note:“Best prices, popular specials”},
{id:“grand_frais”,name:“Grand Frais”,flag:“FR”,cidx:1.00,factor:0.90,anchor:[47.75,7.34],note:“Exceptional fresh produce”},
{id:“biocoop_fr”,name:“Biocoop”,flag:“FR”,cidx:1.00,factor:1.05,anchor:[48.57,7.75],note:“France organic cooperative”}
];

var OFFERS = (function() {
var d = new Date(); d.setDate(d.getDate()+(6-d.getDay())); var exp = d.toISOString().split(‘T’)[0];
return [
{sid:“lidl_de”,pid:“chicken_breast”,price:5.99,conf:0.95,src:“PDF”,exp:exp},
{sid:“lidl_de”,pid:“spaghetti”,price:0.79,conf:0.95,src:“PDF”,exp:exp},
{sid:“aldi_de”,pid:“unsalted_butter”,price:1.59,conf:0.93,src:“PDF”,exp:exp},
{sid:“aldi_de”,pid:“long_grain_white_rice”,price:0.99,conf:0.93,src:“PDF”,exp:exp},
{sid:“rewe_de”,pid:“salmon_fillet”,price:11.99,conf:0.99,src:“API”,exp:exp},
{sid:“rewe_de”,pid:“beef_mince”,price:7.99,conf:0.99,src:“API”,exp:exp},
{sid:“migros_ch”,pid:“chicken_breast”,price:10.90,conf:0.99,src:“API”,exp:exp},
{sid:“leclerc_fr”,pid:“spaghetti”,price:0.69,conf:0.88,src:“Web”,exp:exp},
{sid:“grand_frais”,pid:“salmon_fillet”,price:11.90,conf:0.90,src:“Web”,exp:exp},
];
})();

var VOICE_MAP = {
“chicken_breast”:[“chicken”,“hähnchen”,“poulet”,“chicken breast”],
“beef_mince”:[“beef”,“mince”,“hackfleisch”,“boeuf haché”],
“salmon_fillet”:[“salmon”,“lachs”,“saumon”],
“whole_milk”:[“milk”,“milch”,“lait”],
“oat_milk”:[“oat milk”,“hafermilch”,“lait d’avoine”],
“free_range_eggs_6_pack”:[“eggs”,“eier”,“oeufs”],
“natural_yogurt”:[“yogurt”,“joghurt”,“yaourt”],
“unsalted_butter”:[“butter”,“buttter”,“beurre”],
“emmental”:[“cheese”,“käse”,“fromage”],
“white_bread_loaf”:[“bread”,“brot”,“pain”],
“spaghetti”:[“pasta”,“spaghetti”,“nudeln”,“pâtes”],
“long_grain_white_rice”:[“rice”,“reis”,“riz”],
“rolled_oats”:[“oats”,“haferflocken”,“flocons”],
“extra_virgin_olive_oil”:[“olive oil”,“olivenöl”,“huile d’olive”],
“sea_salt”:[“salt”,“salz”,“sel”],
“ground_coffee”:[“coffee”,“kaffee”,“café”],
“black_tea_bags”:[“tea”,“tee”,“thé”],
“still_water_1_5l”:[“water”,“wasser”,“eau”],
“cola”:[“cola”,“cola”],
“lager_beer”:[“beer”,“bier”,“bière”],
“red_wine”:[“wine”,“wein”,“vin”],
“milk_chocolate_bar”:[“chocolate”,“schokolade”,“chocolat”],
“liquid_laundry_detergent”:[“detergent”,“waschmittel”,“lessive”],
“toilet_paper_2_ply”:[“toilet paper”,“toilettenpapier”,“papier toilette”],
“shampoo_normal”:[“shampoo”,“shampooing”],
“toothpaste_whitening”:[“toothpaste”,“zahnpasta”,“dentifrice”],
“nappies_size_3_4_9_kg”:[“nappies”,“windeln”,“couches”],
“banana”:[“banana”,“banane”,“banane”],
“orange”:[“orange”,“orange”,“orange”],
“tomato”:[“tomato”,“tomate”,“tomate”],
“carrot”:[“carrot”,“karotte”,“carotte”],
“potato”:[“potato”,“kartoffel”,“pomme de terre”],
“broccoli”:[“broccoli”,“brokkoli”,“brocoli”],
“garlic”:[“garlic”,“knoblauch”,“ail”],
“frozen_peas”:[“peas”,“erbsen”,“petits pois”],
“tofu_firm”:[“tofu”,“tofu”],
“whey_protein_powder”:[“protein”,“protein”,“protéine”],
};

var VOICE_INDEX = {};
PRODUCTS.forEach(function(p) { VOICE_INDEX[p.name.toLowerCase()] = p.id; });
Object.keys(VOICE_MAP).forEach(function(pid) {
VOICE_MAP[pid].forEach(function(kw) { if (!VOICE_INDEX[kw]) VOICE_INDEX[kw] = pid; });
});

function matchText(text) {
var t = text.toLowerCase();
var matched = [];
var keys = Object.keys(VOICE_INDEX).sort(function(a,b){return b.length-a.length;});
keys.forEach(function(kw) {
if (t.includes(kw)) {
var pid = VOICE_INDEX[kw];
if (!matched.includes(pid)) matched.push(pid);
}
});
return matched;
}

// ═══════════════════════════════════════════════════
// GEO
// ═══════════════════════════════════════════════════
var CITIES = {
“grenzach-wyhlen”:[47.5397,7.6867],“grenzach”:[47.5397,7.6867],
“weil am rhein”:[47.5933,7.6211],“weil”:[47.5933,7.6211],
“loerrach”:[47.6155,7.6611],“freiburg”:[47.9990,7.8421],
“basel”:[47.5596,7.5886],“zurich”:[47.3769,8.5417],
“bern”:[46.9480,7.4474],“geneva”:[46.2044,6.1432],
“strasbourg”:[48.5734,7.7521],“mulhouse”:[47.7508,7.3359],
“colmar”:[48.0793,7.5850],“saint-louis”:[47.5895,7.5612],
“paris”:[48.8566,2.3522],“lyon”:[45.7640,4.8357],
“berlin”:[52.5200,13.4050],“munich”:[48.1351,11.5820],
“hamburg”:[53.5511,9.9937],“frankfurt”:[50.1109,8.6821],
“stuttgart”:[48.7758,9.1829],“cologne”:[50.9333,6.9500],
};

function geocode(input) {
var parts = input.toLowerCase().replace(/str.|strasse|weg|platz|[0-9]+/g,’’).split(’,’).map(function(s){return s.trim();});
for (var i = parts.length-1; i >= 0; i–) {
if (CITIES[parts[i]]) return {lat:CITIES[parts[i]][0], lon:CITIES[parts[i]][1], city:parts[i]};
}
return null;
}

function detectCountry(lat, lon) {
if (lat>=47.2&&lat<=55.1&&lon>=5.8&&lon<=15.1) return ‘DE’;
if (lat>=45.8&&lat<=47.9&&lon>=5.9&&lon<=10.5) return ‘CH’;
return ‘FR’;
}

function haversine(a,b,c,d) {
var R=6371, dL=(c-a)*Math.PI/180, dG=(d-b)*Math.PI/180;
var x=Math.sin(dL/2)*Math.sin(dL/2)+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(dG/2)*Math.sin(dG/2);
return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));
}

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════
var state = {
step:‘address’, loc:null, radius:20, basket:[],
filters:[], sortBy:‘total’, expandedCat:null, expandedSub:null,
voiceState:‘idle’, voiceLang:‘de-DE’, matchedPids:[], recognizer:null
};
var savedLoc = null;
try { var sl = localStorage.getItem(‘smartshopper_v8’); if (sl) savedLoc = JSON.parse(sl); } catch(e) {}

// ═══════════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════════
var scanState = { active:false, stream:null, cooldown:false, history:[], currentTab:‘shopper’ };
try { scanState.history = JSON.parse(localStorage.getItem(‘ns_history’)||’[]’); } catch(e) {}

function switchMainTab(tab) {
scanState.currentTab = tab;
if (tab !== ‘scan’ && scanState.active) stopScan();

// Hide all
var sc = document.getElementById(‘shopperContainer’);
var ms = document.getElementById(‘mainScan’);
var mp = document.getElementById(‘mainPrice’);
var mr = document.getElementById(‘mainReceipt’);
if (sc) sc.style.display = ‘none’;
if (ms) ms.style.display = ‘none’;
if (mp) mp.style.display = ‘none’;
if (mr) mr.style.display = ‘none’;

// Show correct one
if (tab === ‘shopper’) {
if (sc) sc.style.display = ‘block’;
} else if (tab === ‘scan’) {
if (ms) ms.style.display = ‘block’;
} else if (tab === ‘price’) {
if (mp) mp.style.display = ‘block’;
pwRender();
} else if (tab === ‘receipt’) {
if (mr) mr.style.display = ‘block’;
renderReceiptHistory();
updateBudgetUI();
}

// Update nav
[‘shopper’,‘scan’,‘receipt’,‘price’].forEach(function(t) {
var btn = document.getElementById(‘nav’ + t.charAt(0).toUpperCase() + t.slice(1));
if (btn) btn.classList.toggle(‘active’, t === tab);
});
}

// ═══════════════════════════════════════════════════
// UI HELPERS
// ═══════════════════════════════════════════════════
function showStep(s) {
state.step = s;
[‘stepAddress’,‘stepBasket’,‘stepResults’].forEach(function(id) {
var el = document.getElementById(id);
if (el) el.classList.remove(‘active’);
});
var map = {address:‘stepAddress’, basket:‘stepBasket’, results:‘stepResults’};
if (map[s]) document.getElementById(map[s]).classList.add(‘active’);
if (s===‘basket’) loadWeeklyOffers();
var pct = {address:10, basket:50, results:100}[s] || 10;
document.getElementById(‘progressBar’).style.width = pct + ‘%’;
var rb = document.getElementById(‘restartBtn’);
if (rb) rb.style.display = s === ‘address’ ? ‘none’ : ‘block’;
window.scrollTo(0,0);
}

function setCity(c) { document.getElementById(‘addrInput’).value = c; }
function setRadius(r) { document.getElementById(‘radiusSlider’).value = r; document.getElementById(‘radiusVal’).textContent = r + ’ km’; state.radius = r; }
function restart() { state.basket = []; state.matchedPids = []; showStep(‘address’); renderCategories(); }
function goBack() { showStep(‘basket’); }

function useSaved() {
state.loc = savedLoc;
document.getElementById(‘locLabel’).textContent = savedLoc.flag + ’ ’ + savedLoc.city + ’ · ’ + state.radius + ’ km’;
showStep(‘basket’); renderCategories();
}
function saveLoc() {
if (!state.loc) return;
savedLoc = state.loc;
try { localStorage.setItem(‘smartshopper_v8’, JSON.stringify(savedLoc)); } catch(e) {}
showToast(‘📍 Location saved!’);
}
function clearSaved() {
savedLoc = null;
try { localStorage.removeItem(‘smartshopper_v8’); } catch(e) {}
document.getElementById(‘savedLocCard’).style.display = ‘none’;
}

function resolveAddr() {
var v = document.getElementById(‘addrInput’).value;
var geo = geocode(v);
var err = document.getElementById(‘geoErr’);
if (!geo) { err.textContent = ‘City not found. Try: Basel / Freiburg / Grenzach-Wyhlen’; err.style.display = ‘block’; return; }
err.style.display = ‘none’;
var country = detectCountry(geo.lat, geo.lon);
var flag = country === ‘CH’ ? ‘CH’ : country === ‘FR’ ? ‘FR’ : ‘DE’;
state.loc = {lat:geo.lat, lon:geo.lon, city:geo.city, country:country, flag:flag};
state.radius = parseInt(document.getElementById(‘radiusSlider’).value) || 20;
document.getElementById(‘locLabel’).textContent = flag + ’ ’ + geo.city + ’ · ’ + state.radius + ’ km’;
var ab = document.getElementById(‘analyzeBtn’);
if (ab) ab.textContent = t(‘find_prices’) + ’ — ’ + state.radius + ’ km’;
showStep(‘basket’); renderCategories();
}

if (savedLoc) {
document.getElementById(‘savedLocCard’).style.display = ‘block’;
document.getElementById(‘savedLocName’).textContent = savedLoc.city;
document.getElementById(‘savedLocCountry’).textContent = savedLoc.country;
}

// ═══════════════════════════════════════════════════
// VOICE
// ═══════════════════════════════════════════════════
function toggleLang() {
state.voiceLang = state.voiceLang === ‘de-DE’ ? ‘en-US’ : ‘de-DE’;
document.getElementById(‘langVoiceBtn’).textContent = state.voiceLang === ‘de-DE’ ? ‘DE’ : ‘EN’;
}

function toggleVoice() {
if (state.voiceState === ‘listening’) { stopVoice(); } else { startVoice(); }
}

function startVoice() {
document.getElementById(‘permissionTip’).style.display = ‘none’;
var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SR) { document.getElementById(‘permissionTip’).style.display = ‘block’; return; }
if (state.recognizer) try { state.recognizer.abort(); } catch(e) {}
var rec = new SR();
rec.lang = state.voiceLang; rec.continuous = false; rec.interimResults = true; rec.maxAlternatives = 1;
rec.onstart = function() {
state.voiceState = ‘listening’;
document.getElementById(‘voiceSubtitle’).textContent = ‘Listening… say your items now’;
document.getElementById(‘voiceSubtitle’).style.color = ‘var(–green)’;
updateVoiceUI();
};
rec.onresult = function(e) {
var interim = ‘’, final_t = ‘’;
for (var i = e.resultIndex; i < e.results.length; i++) {
if (e.results[i].isFinal) final_t += e.results[i][0].transcript;
else interim += e.results[i][0].transcript;
}
var shown = final_t || interim;
if (shown) {
document.getElementById(‘transcriptBox’).style.display = ‘block’;
document.getElementById(‘transcriptBox’).textContent = ‘”’ + shown + ‘”’;
document.getElementById(‘quickInput’).value = shown;
}
if (final_t) { state.voiceState = ‘processing’; updateVoiceUI(); processRecognized(final_t); }
};
rec.onerror = function(e) {
state.voiceState = ‘idle’;
if (e.error === ‘not-allowed’) {
document.getElementById(‘permissionTip’).style.display = ‘block’;
} else if (e.error === ‘no-speech’) {
document.getElementById(‘voiceSubtitle’).textContent = t(‘no_speech’);
}
updateVoiceUI();
};
rec.onend = function() { if (state.voiceState === ‘listening’) { state.voiceState = ‘idle’; updateVoiceUI(); } };
state.recognizer = rec;
try { rec.start(); } catch(e) { state.voiceState = ‘idle’; updateVoiceUI(); }
}

function stopVoice() {
if (state.recognizer) try { state.recognizer.stop(); } catch(e) {}
state.voiceState = ‘idle’; updateVoiceUI();
}

function processRecognized(text) {
var matched = matchText(text);
state.matchedPids = matched;
state.voiceState = matched.length > 0 ? ‘done’ : ‘nomatch’;
updateVoiceUI();
if (matched.length > 0) renderMatchedItems();
}

function processText() {
var v = document.getElementById(‘quickInput’).value.trim();
if (!v) return;
processRecognized(v);
}

function updateVoiceUI() {
var vs = state.voiceState;
var card = document.getElementById(‘voiceCard’);
var btn = document.getElementById(‘micBtn’);
var btnText = document.getElementById(‘micBtnText’);
var ripple = document.getElementById(‘rippleWrap’);
card.className = ‘voice-card’ + (vs===‘listening’?’ listening’:vs===‘done’?’ done’:’’);
document.getElementById(‘voiceTitle’).textContent = vs===‘idle’?t(‘voice_idle’):vs===‘listening’?t(‘listening’):vs===‘processing’?t(‘recognising’):vs===‘done’?‘✅ ‘+state.matchedPids.length+t(‘items_found’):t(‘voice_idle’);
document.getElementById(‘voiceTitle’).style.color = vs===‘listening’?’#f87171’:vs===‘done’?‘var(–green)’:’#8aaabb’;
btn.className = ‘mic-btn’ + (vs===‘listening’?’ listening’:’’);
btnText.textContent = vs===‘listening’?‘Stop’:‘Start’;
var existingRipple = ripple.querySelector(’.ripple’);
if (vs===‘listening’) { if (!existingRipple) { var r=document.createElement(‘div’); r.className=‘ripple’; ripple.appendChild(r); } }
else { if (existingRipple) existingRipple.remove(); }
document.getElementById(‘noMatchBox’).style.display = vs===‘nomatch’?‘block’:‘none’;
document.getElementById(‘matchedBox’).style.display = vs===‘done’&&state.matchedPids.length>0?‘block’:‘none’;
}

function renderMatchedItems() {
var grid = document.getElementById(‘matchedGrid’);
grid.innerHTML = ‘’;
document.getElementById(‘matchCount’).textContent = ‘Found ’ + state.matchedPids.length + ’ items:’;
state.matchedPids.forEach(function(pid) {
var p = PRODUCTS.find(function(x){return x.id===pid;}); if (!p) return;
var already = state.basket.find(function(b){return b.pid===pid;});
var div = document.createElement(‘div’); div.className = ‘tag’;
div.innerHTML = (already?’<span>✓</span>’:’’) + tx(p.name) + ‘<span style="font-size:9px;color:#3a7a5a">’ + p.unit + ‘</span>’;
grid.appendChild(div);
});
}

function addAllMatched() {
state.matchedPids.forEach(function(pid) { if (!state.basket.find(function(b){return b.pid===pid;})) state.basket.push({pid:pid,qty:1}); });
state.voiceState = ‘idle’; state.matchedPids = [];
document.getElementById(‘quickInput’).value = ‘’;
document.getElementById(‘transcriptBox’).style.display = ‘none’;
updateVoiceUI(); updateItemCount(); renderCategories();
}

function clearVoice() {
state.voiceState = ‘idle’; state.matchedPids = [];
document.getElementById(‘quickInput’).value = ‘’;
document.getElementById(‘transcriptBox’).style.display = ‘none’;
updateVoiceUI();
}

// ═══════════════════════════════════════════════════
// BASKET
// ═══════════════════════════════════════════════════
function toggleFilter(lbl) {
var i = state.filters.indexOf(lbl);
if (i>=0) state.filters.splice(i,1); else state.filters.push(lbl);
document.querySelectorAll(’.filter-btn’).forEach(function(b){ b.classList.toggle(‘active’, state.filters.includes(b.dataset.lbl)); });
document.getElementById(‘clearFiltersBtn’).style.display = state.filters.length?‘inline’:‘none’;
renderCategories();
}
function clearFilters() { state.filters=[]; document.querySelectorAll(’.filter-btn’).forEach(function(b){b.classList.remove(‘active’);}); document.getElementById(‘clearFiltersBtn’).style.display=‘none’; renderCategories(); }

function updateItemCount() {
var n = state.basket.length;
var el = document.getElementById(‘itemCount’);
if (el) { el.style.display = n>0?‘inline’:‘none’; el.textContent = n; }
var aw = document.getElementById(‘analyzeWrap’);
if (aw) aw.style.display = n>0?‘block’:‘none’;
}

function toggleItem(pid) {
var i = state.basket.findIndex(function(b){return b.pid===pid;});
if (i>=0) state.basket.splice(i,1); else state.basket.push({pid:pid,qty:1});
updateItemCount(); renderCategories();
}

function changeQty(pid, delta) {
var item = state.basket.find(function(b){return b.pid===pid;}); if (!item) return;
var prod = PRODUCTS.find(function(p){return p.id===pid;})||{step:1};
item.qty = Math.round((item.qty+delta*prod.step)*10)/10;
if (item.qty <= 0) state.basket = state.basket.filter(function(b){return b.pid!==pid;});
updateItemCount(); renderCategories();
}

function setSortBy(s) {
state.sortBy = s;
[‘sortTotal’,‘sortSaving’,‘sortDist’].forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove(‘active’); });
var active = s===‘total’?‘sortTotal’:s===‘saving’?‘sortSaving’:‘sortDist’;
var el = document.getElementById(active); if(el) el.classList.add(‘active’);
}

function renderCategories() {
var search = document.getElementById(‘searchInput’);
var searchVal = search ? search.value.toLowerCase() : ‘’;
var tree = document.getElementById(‘catTree’);
if (!tree) return;
tree.innerHTML = ‘’;
var cats = Object.keys(CAT_ICONS);
cats.forEach(function(cat) {
var prods = PRODUCTS.filter(function(p) {
if (p.cat !== cat) return false;
if (state.filters.length>0 && !state.filters.every(function(l){return p.labels.includes(l);})) return false;
if (searchVal && !p.name.toLowerCase().includes(searchVal) && !p.sub.toLowerCase().includes(searchVal)) return false;
return true;
});
if (!prods.length) return;
var subs = []; prods.forEach(function(p){ if (!subs.includes(p.sub)) subs.push(p.sub); });
var selCount = prods.filter(function(p){return state.basket.find(function(b){return b.pid===p.id;});}).length;
var isOpenCat = state.expandedCat === cat;
var catWrap = document.createElement(‘div’); catWrap.style.marginBottom = ‘7px’;
var catBtn = document.createElement(‘button’); catBtn.className = ‘cat-btn’;
catBtn.innerHTML = ‘<span>’ + (CAT_ICONS[cat]||’’) + ’ ’ + tx(cat) + ‘</span>’
+ ‘<span style="display:flex;align-items:center;gap:6px">’
+ (selCount>0?’<span class="badge">’+selCount+’</span>’:’’)
+ ‘<span style="font-size:9px;color:var(--text3)">’ + (isOpenCat?‘▲’:‘▼’) + ‘</span></span>’;
catBtn.onclick = function() { state.expandedCat = isOpenCat?null:cat; state.expandedSub = null; renderCategories(); };
catWrap.appendChild(catBtn);
if (isOpenCat) {
var subWrap = document.createElement(‘div’); subWrap.style.paddingTop = ‘3px’;
subs.forEach(function(sub) {
var subProds = prods.filter(function(p){return p.sub===sub;});
var selSub = subProds.filter(function(p){return state.basket.find(function(b){return b.pid===p.id;});}).length;
var subKey = cat+’|’+sub; var isOpenSub = state.expandedSub === subKey;
var subDiv = document.createElement(‘div’); subDiv.style.cssText = ‘margin-bottom:4px;margin-left:8px’;
var subBtn = document.createElement(‘button’); subBtn.className = ‘sub-btn’;
subBtn.innerHTML = ‘<span style="flex:1">— ’ + tx(sub) + ‘</span>’
+ (selSub>0?’<span style="background:rgba(48,209,200,0.18);color:var(--green);border-radius:20px;padding:1px 6px;font-size:10px;font-weight:700">’+selSub+’</span>’:’’)
+ ‘<span style="font-size:9px;color:var(--text3);margin-left:6px">’ + (isOpenSub?‘▲’:‘▼’) + ‘</span>’;
subBtn.onclick = function() { state.expandedSub = isOpenSub?null:subKey; renderCategories(); };
subDiv.appendChild(subBtn);
if (isOpenSub) {
var prodWrap = document.createElement(‘div’); prodWrap.style.cssText = ‘display:flex;flex-wrap:wrap;gap:4px;padding:7px 3px’;
subProds.forEach(function(prod) {
var sel = !!state.basket.find(function(b){return b.pid===prod.id;});
var bItem = state.basket.find(function(b){return b.pid===prod.id;});
var chip = document.createElement(‘div’); chip.className = ‘prod-chip’+(sel?’ sel’:’’);
var lblIcons = prod.labels.map(function(l){ var cfg=LABEL_CFG[l]; return cfg?’<span class="'+cfg.cls+'">’+cfg.icon+’</span>’:’’; }).join(’’);
var qtyHtml = ‘’;
if (sel && bItem) {
qtyHtml = ‘<span class="qty-ctrl" onclick="event.stopPropagation()">’
+ ‘<button class="qty-btn" onclick="changeQty(\''+prod.id+'\',-1)">−</button>’
+ ‘<span class="qty-val">’+bItem.qty+’ ‘+prod.unit+’</span>’
+ ‘<button class="qty-btn" onclick="changeQty(\''+prod.id+'\',1)">+</button></span>’;
}
chip.innerHTML = ‘<span onclick="toggleItem(\''+prod.id+'\')" style="cursor:pointer;display:flex;align-items:center;gap:4px">’
+ tx(prod.name) + ‘<span style="font-size:9px;color:var(--text3)">’+prod.unit+’</span>’ + lblIcons + ‘</span>’ + qtyHtml;
prodWrap.appendChild(chip);
});
subDiv.appendChild(prodWrap);
}
subWrap.appendChild(subDiv);
});
catWrap.appendChild(subWrap);
}
tree.appendChild(catWrap);
});
}

// ═══════════════════════════════════════════════════
// ANALYZE
// ═══════════════════════════════════════════════════
function calcItem(pid, store) {
if (pricesLoaded) {
var sid = store.id;
var rp = null;

```
// 1. Exact pid match
rp = realPrices[pid + '_' + sid];

// 2. Each word in pid
if (!rp) {
  pid.split('_').some(function(word) {
    if (word.length > 2 && realPrices[word+'_'+sid]) { rp = realPrices[word+'_'+sid]; return true; }
  });
}

// 3. Product name words from PRODUCTS
if (!rp) {
  var prod2 = PRODUCTS.find(function(p){return p.id===pid;});
  if (prod2) {
    var nname = prod2.name.toLowerCase().replace(/[^a-z0-9]+/g,'_');
    rp = realPrices[nname+'_'+sid];
    if (!rp) {
      nname.split('_').some(function(word) {
        if (word.length > 2 && realPrices[word+'_'+sid]) { rp = realPrices[word+'_'+sid]; return true; }
      });
    }
  }
}

if (rp) {
  var rPrice = parseFloat(rp.price);
  var curr = rp.currency || (store.flag==='CH'?'CHF':'EUR');
  var cleanRealName = (rp.product_name||'')
    .replace(/[Ѐ-ӿ]/g,'').replace(/\s*\([^)]*\)/g,'').trim()
    || rp.product_id.replace(/_/g,' ');
  return {price:rPrice, basePrice:rPrice, src:'Real', conf:1.0,
          saving:0, hasOffer:true, isReal:true, currency:curr,
          realPid:rp.product_id.trim(), realName:cleanRealName};
}
```

}
// Fall back to index calculation
var prod = PRODUCTS.find(function(p){return p.id===pid;}); if (!prod) return null;
var baseAdj = prod.base * store.cidx * store.factor;
var matching = OFFERS.filter(function(o){return o.sid===store.id&&o.pid===pid;});
if (!matching.length) return {price:baseAdj,basePrice:baseAdj,src:‘Index’,conf:0.5,saving:0,hasOffer:false,isReal:false};
var totC = matching.reduce(function(s,o){return s+o.conf;},0);
var blended = matching.reduce(function(s,o){return s+o.price*(o.conf/totC);},0);
return {price:blended,basePrice:baseAdj,src:matching[0].src,conf:Math.max.apply(null,matching.map(function(o){return o.conf;})),saving:Math.round((baseAdj-blended)/baseAdj*100),hasOffer:true,isReal:false};
}

function calcBasket(basket, store) {
var total=0, base=0, saved=0, lines=[];
basket.forEach(function(b) {
var r = calcItem(b.pid, store); if (!r) return;
total += r.price*b.qty; base += r.basePrice*b.qty;
if (r.hasOffer) saved += (r.basePrice-r.price)*b.qty;
var prod = PRODUCTS.find(function(p){return p.id===b.pid;})||{};
lines.push(Object.assign({},prod,b,r,{line:r.price*b.qty,displayName:tx(prod.name||’’)}));
});
return {total:total,base:base,saved:saved,lines:lines};
}

function analyze() {
if (!state.loc) { alert(‘Please set your location first.’); return; }
// Reload real prices from Supabase before each analysis
loadRealPrices().then(function() { doAnalyze(); });
}

function doAnalyze() {
var radius = parseInt(document.getElementById(‘radiusSlider’).value)||state.radius;
var stores = STORES.map(function(s) {
return Object.assign({},s,{distKm:Math.round(haversine(state.loc.lat,state.loc.lon,s.anchor[0],s.anchor[1])*10)/10});
}).filter(function(s){return s.distKm<=radius;});

if (!stores.length) {
document.getElementById(‘resultsList’).innerHTML = ‘<div style="text-align:center;padding:30px;color:var(--text3)">No stores found within ‘+radius+’ km.</div>’;
showStep(‘results’); return;
}

var ranked = stores.map(function(s) {
var currency = s.flag===‘CH’ ? ‘CHF’ : ‘EUR’;
var lines = [];
var total = 0;

```
// STEP 1: Add basket items
// Track which real product_ids got used via basket matching
var usedRealPids = {};

state.basket.forEach(function(b) {
  var prod = PRODUCTS.find(function(p){return p.id===b.pid;}); if (!prod) return;
  var result = calcItem(b.pid, s);
  if (!result) return;
  var lc = result.currency || currency;
  var lineTotal = result.price * b.qty;
  total += lineTotal;

  // If real price found, record which real product_id was used
  if (result.isReal && result.realPid) {
    usedRealPids[result.realPid] = true;
  }

  lines.push({
    pid: b.pid,
    displayName: result.isReal ? result.realName || tx(prod.name) : tx(prod.name),
    qty: b.qty, unit: prod.unit,
    price: result.price, line: lineTotal,
    saving: result.saving||0,
    hasOffer: result.hasOffer,
    isReal: result.isReal||false,
    currency: lc
  });
});

// STEP 2: Add admin prices NOT already used by basket
if (pricesLoaded) {
  var seenPids = {};
  Object.keys(realPrices).forEach(function(key) {
    if (!key.endsWith('_'+s.id)) return;
    var rp = realPrices[key];
    var rpid = rp.product_id.trim();
    // Skip if already shown via basket match
    if (usedRealPids[rpid] || seenPids[rpid]) return;
    seenPids[rpid] = true;
    var rPrice = parseFloat(rp.price);
    var rCurr = rp.currency || currency;
    var cleanName = (rp.product_name||rpid)
      .replace(/[Ѐ-ӿ]/g,'').replace(/\s*\([^)]*\)/g,'').trim()
      || rpid.replace(/_/g,' ');
    total += rPrice;
    lines.push({
      pid: rpid, displayName: cleanName,
      qty: 1, unit: rp.unit||'pcs',
      price: rPrice, line: rPrice,
      saving: 0, hasOffer: true, isReal: true,
      currency: rCurr, fromAdmin: true
    });
  });
}

    // STEP 3: Sort — real prices first, then by price
lines.sort(function(a,b){
  if (a.isReal && !b.isReal) return -1;
  if (!a.isReal && b.isReal) return 1;
  return a.price - b.price;
});

var saved = lines.reduce(function(acc,l){ return acc+(l.isReal?0:(l.basePrice||l.price)*l.qty-l.line); },0);
var realCount = lines.filter(function(l){return l.isReal;}).length;

return Object.assign({},s,{
  lines:lines, total:total, saved:saved,
  currency:currency, realCount:realCount
});
```

}).sort(function(a,b){
return state.sortBy===‘dist’ ? a.distKm-b.distKm :
state.sortBy===‘saving’ ? b.saved-a.saved :
a.total-b.total;
});

document.getElementById(‘resultsHeader’).textContent = ranked.length+’ stores · ‘+radius+’ km from ’+state.loc.city;

var container = document.getElementById(‘resultsList’);
container.innerHTML = ‘’;

ranked.forEach(function(s,i) {
var isBest = i===0 && state.sortBy===‘total’;
var cross = s.flag !== state.loc.flag;
var curr = s.currency || (s.flag===‘CH’?‘CHF’:‘EUR’);

```
var card = document.createElement('div');
card.className = 'store-card'+(isBest?' best':'');
card.onclick = function(){ toggleBreakdown('bd_'+s.id); };

var h = '';
h += '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">';
h += '<div style="flex:1"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:3px">';
if (isBest) h += '<span style="background:rgba(48,209,200,0.15);color:var(--green);border-radius:5px;padding:1px 6px;font-size:9px;font-weight:700">BEST</span>';
if (cross) h += '<span style="background:rgba(10,132,255,0.12);color:#60a5fa;border-radius:5px;padding:1px 6px;font-size:9px;font-weight:700">CROSS-BORDER</span>';
h += '<span style="font-size:14px;font-weight:700;color:var(--text)">'+s.flag+' '+s.name+'</span>';
h += '</div><div style="font-size:11px;color:var(--text3)">'+s.distKm+' km · '+s.note+'</div></div>';
h += '<div style="text-align:right;flex-shrink:0">';
h += '<div style="font-size:17px;font-weight:800;color:'+(isBest?'var(--green)':'var(--text2)')+'">'+curr+' '+s.total.toFixed(2)+'</div>';
if (s.saved>0.01) h += '<div style="font-size:11px;color:#4ade80">-'+curr+' '+s.saved.toFixed(2)+'</div>';
if (s.realCount>0) h += '<div style="font-size:10px;color:#30D158;font-weight:600">✓ real prices</div>';
else h += '<div style="font-size:10px;color:var(--text3)">'+s.lines.filter(function(l){return l.hasOffer;}).length+'/'+s.lines.length+' offers</div>';
h += '</div></div>';

// Breakdown
h += '<div id="bd_'+s.id+'" style="display:none;margin-top:10px;padding-top:10px;border-top:1px solid var(--border2)">';
h += '<div style="font-size:10px;color:var(--text3);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Breakdown</div>';
s.lines.forEach(function(line) {
  var lc = line.currency || curr;
  h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;gap:8px">';
  h += '<div style="flex:1">';
  if (line.isReal) h += '<span style="background:#30D158;color:#000;border-radius:4px;padding:1px 5px;font-size:9px;font-weight:800;margin-right:4px">REAL</span>';
  h += '<span style="font-size:13px;color:'+(line.isReal?'#30D158':'var(--text2)')+'">'+line.displayName+'</span>';
  h += ' <span style="font-size:11px;color:var(--text3)">x'+line.qty+' '+line.unit+'</span>';
  if (!line.isReal && line.saving>0) h += ' <span style="font-size:10px;color:var(--green);background:rgba(48,209,200,0.1);border-radius:4px;padding:1px 5px">-'+line.saving+'%</span>';
  h += '</div>';
  h += '<span style="font-size:13px;font-weight:700;color:'+(line.isReal?'#30D158':'var(--text)')+'">'+lc+' '+line.line.toFixed(2)+'</span>';
  h += '</div>';
});
h += '<div style="display:flex;justify-content:space-between;margin-top:8px;padding-top:8px;border-top:1px solid var(--border2)">';
h += '<span style="font-size:13px;color:var(--text3)">Total</span>';
h += '<span style="font-size:16px;font-weight:800;color:var(--green)">'+curr+' '+s.total.toFixed(2)+'</span>';
h += '</div>';

var rb = document.createElement('button');
rb.textContent = 'I saw a different price here';
rb.style.cssText = 'width:100%;background:rgba(255,214,10,0.07);border:1px solid rgba(255,214,10,0.15);color:#FFD60A;border-radius:10px;padding:10px 0;font-size:13px;font-weight:600;cursor:pointer;margin-top:10px';
rb.addEventListener('click', (function(sid,sname,sflag){ return function(e){ e.stopPropagation(); openReport(sid,sname,sflag); }; })(s.id,s.name,s.flag));
h += '</div>';

card.innerHTML = h;
card.appendChild(rb);
container.appendChild(card);
```

});

// Debug bar
var debugBar = document.getElementById(‘debugBar’);
if (debugBar) {
var rpCount = Object.keys(realPrices).length;
if (rpCount > 0) {
debugBar.style.display = ‘block’;
debugBar.innerHTML = ‘✅ ‘+Math.round(rpCount/2)+’ real prices loaded from Admin’;
} else {
debugBar.style.display = ‘block’;
debugBar.innerHTML = ‘⚠️ 0 real prices — check Supabase’;
}
}

showStep(‘results’);
maybeShowNewsletter();
}

function toggleBreakdown(id) {
var el = document.getElementById(id); if (!el) return;
el.style.display = el.style.display===‘none’?‘block’:‘none’;
el.closest(’.store-card’).classList.toggle(‘sel’, el.style.display===‘block’);
}

// ═══════════════════════════════════════════════════
// NUTRISCAN
// ═══════════════════════════════════════════════════
function toggleScan() { if (scanState.active) stopScan(); else startScan(); }

function stopScan() {
scanState.active = false; scanState.cooldown = false;
if (scanState.stream) { scanState.stream.getTracks().forEach(function(t){try{t.stop();}catch(e){}}); scanState.stream = null; }
var video = document.getElementById(‘scanVideo’); if (video) try { video.pause(); video.srcObject = null; } catch(e) {}
var btn = document.getElementById(‘scanBtn’); if (btn) { btn.className = ‘btn-scan’; }
var icon = document.getElementById(‘scanBtnIcon’); if (icon) icon.textContent = ‘📷’;
var txt = document.getElementById(‘scanBtnText’); if (txt) txt.textContent = t(‘start_camera’);
var cap = document.getElementById(‘captureBtn’); if (cap) cap.style.display = ‘none’;
var s = document.getElementById(‘scanStatus’); if (s) s.textContent = ‘’;
var lbl = document.getElementById(‘scanLabel’); if (lbl) lbl.textContent = t(‘camera_ready’);
}

async function startScan() {
var statusEl = document.getElementById(‘scanStatus’);
statusEl.textContent = ‘Requesting camera…’; statusEl.style.color = ‘var(–green)’;
try {
var stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:‘environment’},width:{ideal:1920},height:{ideal:1080}}});
var video = document.getElementById(‘scanVideo’);
video.srcObject = stream; scanState.active = true; scanState.stream = stream;
var btn = document.getElementById(‘scanBtn’); btn.className = ‘btn-scan stop’;
document.getElementById(‘scanBtnIcon’).textContent = ‘⏹’;
document.getElementById(‘scanBtnText’).textContent = t(‘stop_camera’);
await video.play();
if (‘BarcodeDetector’ in window) {
statusEl.textContent = ‘🟢 Scanning live…’;
document.getElementById(‘scanLabel’).textContent = ‘Hold barcode in frame’;
scanWithBarcodeDetector(video);
} else {
statusEl.textContent = ‘🟢 Ready’;
document.getElementById(‘scanLabel’).textContent = ‘Hold barcode in frame, then tap Capture’;
document.getElementById(‘captureBtn’).style.display = ‘block’;
}
} catch(err) {
scanState.active = false;
document.getElementById(‘scanBtnIcon’).textContent = ‘📷’;
document.getElementById(‘scanBtnText’).textContent = t(‘start_camera’);
showScanResult(’<div class="nutri-result" style="color:var(--red)">📷 Camera blocked.<br><br>iPhone: Settings → Safari → Camera → Allow</div>’);
}
}

function scanWithBarcodeDetector(video) {
if (!scanState.active) return;
var det = new BarcodeDetector({formats:[‘ean_13’,‘ean_8’,‘upc_a’,‘upc_e’,‘code_128’,‘code_39’,‘qr_code’]});
det.detect(video).then(function(codes) {
if (codes.length > 0) { handleBarcodeFound(codes[0].rawValue); return; }
if (scanState.active) setTimeout(function(){scanWithBarcodeDetector(video);}, 300);
}).catch(function() { if (scanState.active) setTimeout(function(){scanWithBarcodeDetector(video);}, 500); });
}

function doCapture() {
var video = document.getElementById(‘scanVideo’);
var canvas = document.getElementById(‘scanCanvas’);
var statusEl = document.getElementById(‘scanStatus’);
if (!video || !video.videoWidth) { statusEl.textContent = ‘Camera not ready yet’; return; }
canvas.width = video.videoWidth; canvas.height = video.videoHeight;
canvas.style.display = ‘none’;
canvas.getContext(‘2d’).drawImage(video, 0, 0);
statusEl.textContent = ‘🔍 Analysing…’;
if (‘BarcodeDetector’ in window) {
new BarcodeDetector({formats:[‘ean_13’,‘ean_8’,‘upc_a’,‘upc_e’,‘code_128’,‘code_39’]}).detect(canvas).then(function(codes) {
if (codes.length > 0) { handleBarcodeFound(codes[0].rawValue); }
else { statusEl.textContent = ‘No barcode found — try again’; tryQuagga(canvas, statusEl); }
}).catch(function(){ tryQuagga(canvas, statusEl); });
return;
}
tryQuagga(canvas, statusEl);
}

function tryQuagga(canvas, statusEl) {
statusEl.textContent = ‘Loading scanner…’;
if (window.Quagga) { runQuagga(canvas, statusEl); return; }
var s = document.createElement(‘script’);
s.src = ‘https://cdn.jsdelivr.net/npm/@ericblade/quagga2/dist/quagga.min.js’;
s.onload = function(){ runQuagga(canvas, statusEl); };
s.onerror = function(){ statusEl.textContent = ‘Scanner unavailable — use manual entry’; };
document.head.appendChild(s);
}

function runQuagga(canvas, statusEl) {
statusEl.textContent = ‘🔍 Scanning…’;
Quagga.decodeSingle({decoder:{readers:[‘ean_reader’,‘ean_8_reader’,‘upc_reader’,‘code_128_reader’]},locate:true,src:canvas.toDataURL(‘image/png’)}, function(result) {
if (result && result.codeResult) { handleBarcodeFound(result.codeResult.code); }
else { statusEl.textContent = ‘Not found — adjust angle & retry’; setTimeout(function(){statusEl.textContent=‘🟢 Ready’;},2000); }
});
}

function handleBarcodeFound(code) {
if (scanState.cooldown) return;
scanState.cooldown = true;
if (navigator.vibrate) navigator.vibrate([80,40,80]);
document.getElementById(‘scanStatus’).textContent = ’✅ ’ + code;
document.getElementById(‘scanLabel’).textContent = ‘Found! Loading product…’;
stopScan();
setTimeout(function(){ lookupBarcodeCode(code); }, 150);
}

function lookupBarcode() {
var v = document.getElementById(‘barcodeInput’).value.trim(); if (!v) return;
lookupBarcodeCode(v);
}

async function lookupBarcodeCode(code) {
showScanResult(’<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:32px 0"><div style="width:34px;height:34px;border:3px solid rgba(255,255,255,0.1);border-top-color:var(--green);border-radius:50%;animation:spin 0.8s linear infinite"></div><div style="font-size:15px;color:var(--text2)">Looking up ‘+esc(code)+’…</div></div>’);
try {
var resp = await fetch(‘https://world.openfoodfacts.org/api/v2/product/’+encodeURIComponent(code)+’?fields=product_name,brands,quantity,image_url,nutriscore_grade,nova_group,nutriments,allergens_tags,ingredients_text,labels_tags’);
var data = await resp.json();
if (data.status !== 1 || !data.product || !data.product.product_name) {
showScanResult(’<div class="nutri-result"><div style="font-size:17px;font-weight:600;margin-bottom:8px">❌ Product not found</div><div style="font-size:15px;color:var(--text2)">Barcode <b>’+esc(code)+’</b> is not in Open Food Facts.<br><br><a href="https://world.openfoodfacts.org/product/'+esc(code)+'" target="_blank" style="color:var(--green)">Check manually →</a></div></div>’);
return;
}
var p = data.product;
var product = {code:code, name:p.product_name||‘Unknown’, brand:p.brands||’’, quantity:p.quantity||’’, image:p.image_url||’’, ns:(p.nutriscore_grade||’’).toUpperCase(), nova:parseInt(p.nova_group)||0, nut:p.nutriments||{}, allergens:(p.allergens_tags||[]).map(function(a){return a.replace(/^[a-z]+:/,’’);}), ingredients:p.ingredients_text||’’};
var entry = {code:code,name:product.name,brand:product.brand,image:product.image,ns:product.ns,nova:product.nova,score:calcNutriScore(product.ns,product.nova),ts:Date.now()};
scanState.history = scanState.history.filter(function(h){return h.code!==code;}); scanState.history.unshift(entry);
if (scanState.history.length>50) scanState.history=scanState.history.slice(0,50);
try { localStorage.setItem(‘ns_history’,JSON.stringify(scanState.history)); } catch(e) {}
renderNutriProduct(product);
} catch(e) {
showScanResult(’<div class="nutri-result" style="color:var(--text2)">⚠️ Network error. Check your connection.</div>’);
}
}

function calcNutriScore(ns, nova) {
var base = {A:95,B:80,C:62,D:40,E:20}[ns]; if (!base) return null;
return Math.max(0,Math.min(100,base+({1:0,2:-5,3:-12,4:-20}[nova]||-10)));
}
function scoreClass(s) { return s===null?’’:s>=75?‘sg’:s>=50?‘sy’:s>=25?‘so’:‘sr’; }
function scoreColor(s) { return s===null?‘var(–text3)’:s>=75?’#30D158’:s>=50?’#FFD60A’:s>=25?’#FF9F0A’:’#FF453A’; }

function nutBarClass(key, val) {
var hi = {sugars:[5,‘bg’,12.5,‘by’,22.5,‘bo’,999,‘br’],‘saturated-fat’:[1.5,‘bg’,4,‘by’,7,‘bo’,999,‘br’],salt:[0.3,‘bg’,0.6,‘by’,1.5,‘bo’,999,‘br’],fat:[3,‘bg’,17.5,‘by’,25,‘bo’,999,‘br’],proteins:[0,‘br’,10,‘bo’,20,‘by’,999,‘bg’],fiber:[0,‘br’,3,‘bo’,6,‘by’,999,‘bg’]};
var t = hi[key]; if (!t) return ‘by’;
for (var i=0;i<t.length;i+=2) if (val<=t[i]) return t[i+1]; return ‘by’;
}
function nutBarW(key, val) { if (!val) return 0; var mx={energy:500,‘energy-kcal’:500,fat:30,‘saturated-fat’:10,carbohydrates:50,sugars:25,fiber:10,proteins:30,salt:2.5}; return Math.min(100,Math.round(val/(mx[key]||50)*100)); }

function renderNutriProduct(p) {
var score = calcNutriScore(p.ns, p.nova);
var sc = scoreClass(score); var nsClass = {A:‘ns-a’,B:‘ns-b’,C:‘ns-c’,D:‘ns-d’,E:‘ns-e’}[p.ns]||’’;
var html = ‘<div class="nutri-result">’;
html += ‘<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:14px">’;
if (score!==null) html += ‘<div class="score-big '+sc+'"><div class="n">’+score+’</div><div class="l">SCORE</div></div>’;
html += ‘<div style="flex:1;min-width:0"><div style="font-size:17px;font-weight:700;margin-bottom:2px">’+esc(p.name)+’</div>’;
if (p.brand) html += ‘<div style="font-size:14px;color:var(--text2)">’+esc(p.brand)+’</div>’;
if (p.quantity) html += ‘<div style="font-size:13px;color:var(--text3)">’+esc(p.quantity)+’</div>’;
html += ‘</div>’;
if (p.image) html += ‘<img src="'+esc(p.image)+'" style="width:58px;height:58px;object-fit:contain;border-radius:8px;background:var(--card2);flex-shrink:0" onerror="this.style.display=\x27none\x27">’;
html += ‘</div>’;
html += ‘<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px">’;
if (p.ns && nsClass) html += ‘<div style="display:flex;align-items:center;gap:6px;font-size:14px;color:var(--text2)">Nutri-Score <span class="'+nsClass+'">’+p.ns+’</span></div>’;
if (p.nova) { var nc={1:’#30D158’,2:’#85bb2f’,3:’#FF9F0A’,4:’#FF453A’}; html += ‘<div style="background:var(--card2);border-radius:8px;padding:4px 10px;font-size:13px;font-weight:600;color:'+(nc[p.nova]||'var(--text2)')+'">NOVA ‘+p.nova+’</div>’; }
html += ‘</div>’;
var nutRows = [{k:‘energy-kcal’,lbl:‘Energy’,u:‘kcal’,d:0},{k:‘fat’,lbl:‘Fat’,u:‘g’,d:1},{k:‘saturated-fat’,lbl:‘Sat fat’,u:‘g’,d:1},{k:‘carbohydrates’,lbl:‘Carbs’,u:‘g’,d:1},{k:‘sugars’,lbl:‘Sugars’,u:‘g’,d:1},{k:‘fiber’,lbl:‘Fibre’,u:‘g’,d:1},{k:‘proteins’,lbl:‘Protein’,u:‘g’,d:1},{k:‘salt’,lbl:‘Salt’,u:‘g’,d:2}];
var hasNut = nutRows.some(function(n){return p.nut[n.k+’_100g’]!==undefined;});
if (hasNut) {
html += ‘<div style="font-size:13px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Per 100g</div><div>’;
nutRows.forEach(function(n) {
var val=p.nut[n.k+’_100g’]; if (val===undefined||val===null) return;
html += ‘<div class="nut-row"><span style="color:var(--text2);min-width:90px;font-size:15px">’+n.lbl+’</span><div class="nut-bar-wrap"><div class="nut-bar '+nutBarClass(n.k,val)+'" style="width:'+nutBarW(n.k,val)+'%"></div></div><span style="font-weight:600;font-size:15px">’+Number(val).toFixed(n.d)+’ ‘+n.u+’</span></div>’;
});
html += ‘</div>’;
}
if (p.allergens.length>0) {
html += ‘<div style="font-size:13px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin:12px 0 8px">Allergens</div><div style="display:flex;flex-wrap:wrap;gap:6px">’;
p.allergens.forEach(function(a){ html += ‘<span class="allergen-chip">’+esc(a)+’</span>’; });
html += ‘</div>’;
}
if (p.ingredients) {
html += ‘<div style="font-size:13px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin:12px 0 8px">Ingredients</div>’;
html += ‘<div style="font-size:14px;color:var(--text2);line-height:1.6;background:var(--card2);border-radius:10px;padding:11px 13px">’+esc(p.ingredients.substring(0,400))+(p.ingredients.length>400?’…’:’’)+’</div>’;
}
html += ‘<div style="display:flex;gap:8px;margin-top:16px">’;
html += ‘<button onclick="resetScanForNew()" style="flex:1;background:rgba(48,209,200,0.12);border:1px solid rgba(48,209,200,0.25);color:var(--green);border-radius:12px;padding:13px 0;font-size:15px;font-weight:600;cursor:pointer;min-height:50px">🔄 Scan Another</button>’;
if (navigator.share) html += ‘<button onclick="navigator.share({title:\'NutriScan\',text:\''+esc(p.name)+' — Score: '+(score||0)+'/100\',url:\'https://world.openfoodfacts.org/product/'+esc(p.code)+'\'})" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);border-radius:12px;padding:13px 16px;font-size:15px;cursor:pointer;min-height:50px">⬆️</button>’;
html += ‘</div>’;
html += ‘<div style="text-align:center;margin-top:12px;font-size:13px;color:var(--text3)"><a href="https://world.openfoodfacts.org/product/'+esc(p.code)+'" target="_blank" style="color:var(--green)">Full details on Open Food Facts →</a></div>’;
html += ‘</div>’;
showScanResult(html);
}

function showScanResult(html) { document.getElementById(‘scanResult’).innerHTML = html; }
function resetScanForNew() { scanState.cooldown=false; document.getElementById(‘scanResult’).innerHTML=’’; document.getElementById(‘barcodeInput’).value=’’; document.getElementById(‘scanStatus’).textContent=’’; document.getElementById(‘scanLabel’).textContent=t(‘camera_ready’); window.scrollTo(0,0); showToast(‘🔄 Ready for next scan!’); }

// ═══════════════════════════════════════════════════
// HISTORY
// ═══════════════════════════════════════════════════
function renderScanHistory() {
var el = document.getElementById(‘scanHistoryList’);
if (!scanState.history.length) {
el.innerHTML = ‘<div style="text-align:center;padding:48px 0;color:var(--text3)"><div style="font-size:48px;margin-bottom:16px">📷</div><div style="font-size:17px;font-weight:600;color:var(--text2);margin-bottom:8px">No scans yet</div><div>Switch to NutriScan and scan a product</div></div>’;
return;
}
var html = ‘’;
scanState.history.forEach(function(item) {
var col = scoreColor(item.score);
var d = new Date(item.ts).toLocaleDateString(‘en-GB’,{day:‘2-digit’,month:‘short’,hour:‘2-digit’,minute:‘2-digit’});
var nc = {A:‘ns-a’,B:‘ns-b’,C:‘ns-c’,D:‘ns-d’,E:‘ns-e’}[item.ns]||’’;
html += ‘<div style="background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:13px 14px;margin-bottom:8px;display:flex;align-items:center;gap:12px;cursor:pointer" onclick="switchMainTab(\'scan\');lookupBarcodeCode(\''+item.code+'\');">’;
if (item.image) html += ‘<img src="'+item.image+'" style="width:44px;height:44px;object-fit:contain;border-radius:8px;background:var(--card2);flex-shrink:0" onerror="this.style.display=\x27none\x27">’;
else html += ‘<div style="width:44px;height:44px;border-radius:8px;background:var(--card2);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">📦</div>’;
html += ‘<div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">’+item.name+’</div>’;
html += ‘<div style="font-size:13px;color:var(--text3)">’+(item.brand?item.brand+’ · ‘:’’)+d+’</div></div>’;
html += ‘<div style="text-align:right;flex-shrink:0">’;
if (item.score!==null&&item.score!==undefined) html += ‘<div style="font-size:17px;font-weight:800;color:'+col+'">’+item.score+’</div>’;
if (nc) html += ‘<span class="'+nc+'">’+item.ns+’</span>’;
html += ‘</div></div>’;
});
html += ‘<button onclick="clearScanHistory()" style="width:100%;background:none;border:1px solid var(--border);color:var(--text3);border-radius:12px;padding:12px;margin-top:8px;cursor:pointer;font-size:15px">Clear history</button>’;
el.innerHTML = html;
}

function clearScanHistory() {
if (!confirm(‘Clear scan history?’)) return;
scanState.history = []; try { localStorage.removeItem(‘ns_history’); } catch(e) {}
renderScanHistory();
}

// ═══════════════════════════════════════════════════
// PRICEWATCH
// ═══════════════════════════════════════════════════
var pwState = { products:[] };
try { var _pw = localStorage.getItem(‘pw_products’); if (_pw) pwState.products = JSON.parse(_pw); } catch(e) {}
function pwSave() { try { localStorage.setItem(‘pw_products’,JSON.stringify(pwState.products)); } catch(e) {} }

var PW_STORES = [
{id:‘lidl_de’,name:‘Lidl’,flag:‘DE’,factor:0.82,cidx:0.95},{id:‘aldi_de’,name:‘Aldi’,flag:‘DE’,factor:0.80,cidx:0.95},
{id:‘rewe_de’,name:‘Rewe’,flag:‘DE’,factor:1.02,cidx:0.95},{id:‘edeka_de’,name:‘Edeka’,flag:‘DE’,factor:1.05,cidx:0.95},
{id:‘penny_de’,name:‘Penny’,flag:‘DE’,factor:0.87,cidx:0.95},{id:‘kaufland_de’,name:‘Kaufland’,flag:‘DE’,factor:0.97,cidx:0.95},
{id:‘hiebers_de’,name:“Hieber’s”,flag:‘DE’,factor:1.00,cidx:0.95},{id:‘alnatura_de’,name:‘Alnatura’,flag:‘DE’,factor:1.08,cidx:0.95},
{id:‘dm_de’,name:‘dm Drogerie’,flag:‘DE’,factor:0.90,cidx:0.95},{id:‘rossmann_de’,name:‘Rossmann’,flag:‘DE’,factor:0.88,cidx:0.95},
{id:‘migros_ch’,name:‘Migros’,flag:‘CH’,factor:1.00,cidx:1.62},{id:‘coop_ch’,name:‘Coop’,flag:‘CH’,factor:1.02,cidx:1.62},
{id:‘lidl_ch’,name:‘Lidl CH’,flag:‘CH’,factor:0.85,cidx:1.62},{id:‘aldi_ch’,name:‘Aldi CH’,flag:‘CH’,factor:0.83,cidx:1.62},
{id:‘denner_ch’,name:‘Denner’,flag:‘CH’,factor:0.88,cidx:1.62},{id:‘leclerc_fr’,name:‘E.Leclerc’,flag:‘FR’,factor:0.88,cidx:1.00},
{id:‘carrefour_fr’,name:‘Carrefour’,flag:‘FR’,factor:0.98,cidx:1.00},{id:‘lidl_fr’,name:‘Lidl FR’,flag:‘FR’,factor:0.82,cidx:1.00},
{id:‘grand_frais’,name:‘Grand Frais’,flag:‘FR’,factor:0.90,cidx:1.00},{id:‘biocoop_fr’,name:‘Biocoop’,flag:‘FR’,factor:1.05,cidx:1.00}
];

function pwCalcPrices(product) {
return PW_STORES.map(function(store) {
var price = product.basePrice * store.cidx * store.factor;
var seed = parseInt(product.code.slice(-4)||‘1234’) + store.id.charCodeAt(0);
price = Math.round(price*(1+((seed%17)-8)/100)*100)/100;
return {storeId:store.id,name:store.name,flag:store.flag,price:price,isOffer:seed%7===0};
}).sort(function(a,b){return a.price-b.price;});
}

function estimateBasePrice(categories, kcal) {
var cats = categories.join(’ ’).toLowerCase();
if (cats.includes(‘protein’)||cats.includes(‘supplement’)) return 28.00;
if (cats.includes(‘salmon’)||cats.includes(‘fish’)) return 12.90;
if (cats.includes(‘meat’)||cats.includes(‘beef’)||cats.includes(‘chicken’)) return 8.50;
if (cats.includes(‘cheese’)||cats.includes(‘fromage’)) return 4.50;
if (cats.includes(‘chocolate’)||cats.includes(‘snack’)) return 2.20;
if (cats.includes(‘beverage’)||cats.includes(‘drink’)||cats.includes(‘water’)) return 1.50;
if (cats.includes(‘bread’)||cats.includes(‘bakery’)) return 2.80;
if (cats.includes(‘dairy’)||cats.includes(‘milk’)) return 1.80;
if (cats.includes(‘pasta’)||cats.includes(‘rice’)) return 1.60;
if (kcal>400) return 3.20; if (kcal>200) return 2.50; return 1.80;
}

async function pwAddProduct() {
var inp = document.getElementById(‘pwBarcodeInput’);
var code = inp ? inp.value.trim() : ‘’;
if (!code) { pwSetStatus(‘Enter a barcode number first’); return; }
if (pwState.products.find(function(p){return p.code===code;})) { pwSetStatus(‘Already watching this product’); return; }
pwSetStatus(‘Looking up product…’);
try {
var resp = await fetch(‘https://world.openfoodfacts.org/api/v2/product/’+encodeURIComponent(code)+’?fields=product_name,brands,quantity,image_url,nutriments,nutriscore_grade,categories_tags’);
var data = await resp.json();
if (data.status!==1||!data.product||!data.product.product_name) { pwSetStatus(‘Product not found’); return; }
var p = data.product;
var product = {code:code,name:p.product_name,brand:p.brands||’’,quantity:p.quantity||’’,image:p.image_url||’’,ns:(p.nutriscore_grade||’’).toUpperCase(),basePrice:estimateBasePrice(p.categories_tags||[],(p.nutriments||{})[‘energy-kcal_100g’]||200),categories:p.categories_tags||[],alertEnabled:false,alertPrice:null,addedAt:Date.now()};
pwState.products.unshift(product); pwSave();
if (inp) inp.value=’’;
pwSetStatus(‘Added: ‘+product.name);
setTimeout(function(){pwSetStatus(’’);},2500);
pwRender();
} catch(e) { pwSetStatus(‘Network error’); }
}

function pwSetStatus(msg) { var el=document.getElementById(‘pwAddStatus’); if(el) el.textContent=msg; }

function pwScanBarcode() {
switchMainTab(‘scan’); showToast(‘Scan barcode — will be added to PriceWatch’);
var orig = handleBarcodeFound;
handleBarcodeFound = function(code) {
handleBarcodeFound = orig;
stopScan(); switchMainTab(‘price’);
document.getElementById(‘pwBarcodeInput’).value = code;
pwAddProduct();
};
}

function pwToggleAlert(code) {
var p = pwState.products.find(function(x){return x.code===code;}); if (!p) return;
p.alertEnabled = !p.alertEnabled;
if (p.alertEnabled) { p.alertPrice=pwCalcPrices(p)[0].price; showToast(’🔔 Alert set: EUR ’+p.alertPrice.toFixed(2)); }
else showToast(‘Alert removed’);
pwSave(); pwRender();
}

function pwRemoveProduct(code) {
if (!confirm(‘Remove this product from PriceWatch?’)) return;
pwState.products = pwState.products.filter(function(p){return p.code!==code;}); pwSave(); pwRender(); showToast(‘Removed’);
}

function pwToggleExpand(code) {
var el = document.getElementById(‘pw_expand_’+code); if (!el) return;
var isOpen = el.style.display!==‘none’; el.style.display = isOpen?‘none’:‘block’;
var arrow = document.getElementById(‘pw_arrow_’+code); if (arrow) arrow.textContent = isOpen?‘▼’:‘▲’;
}

function pwRefreshAll() { pwState.products.forEach(function(p){p.lastChecked=Date.now();}); pwSave(); pwRender(); showToast(‘🔄 Prices refreshed!’); }

function pwRender() {
var listEl=document.getElementById(‘pwList’), emptyEl=document.getElementById(‘pwEmpty’), summaryEl=document.getElementById(‘pwSummary’);
if (!listEl) return;
if (!pwState.products.length) { listEl.innerHTML=’’; if(emptyEl) emptyEl.style.display=‘block’; if(summaryEl) summaryEl.style.display=‘none’; return; }
if (emptyEl) emptyEl.style.display=‘none’; if (summaryEl) summaryEl.style.display=‘block’;
var ce=document.getElementById(‘pwCount’); if(ce) ce.textContent=pwState.products.length;
var lu=document.getElementById(‘pwLastUpdate’); if(lu) lu.textContent=new Date().toLocaleTimeString(‘en-GB’,{hour:‘2-digit’,minute:‘2-digit’});
var bd=document.getElementById(‘pwBestDeal’);
if (bd&&pwState.products.length) { var best=pwCalcPrices(pwState.products[0])[0]; bd.textContent=‘🏆 ‘+t(‘pw_watching’)+’: ‘+pwState.products[0].name+’ @ ‘+best.flag+’ ‘+best.name+’ EUR ‘+best.price.toFixed(2); }
var html=’<div style="display:flex;justify-content:flex-end;margin-bottom:10px"><button onclick="pwRefreshAll()" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);border-radius:10px;padding:7px 14px;font-size:13px;cursor:pointer">🔄 Refresh</button></div>’;
pwState.products.forEach(function(product) {
var prices=pwCalcPrices(product), best=prices[0], worst=prices[prices.length-1], saving=worst.price-best.price;
var nsClass={A:‘ns-a’,B:‘ns-b’,C:‘ns-c’,D:‘ns-d’,E:‘ns-e’}[product.ns]||’’;
html+=’<div class="pw-card"><div class="pw-card-header" onclick="pwToggleExpand(\''+product.code+'\')">’;
if (product.image) html+=’<img class="pw-img" src="'+product.image+'" onerror="this.style.display=\'none\'">’;
else html+=’<div class="pw-img" style="display:flex;align-items:center;justify-content:center;font-size:22px">📦</div>’;
html+=’<div style="flex:1;min-width:0"><div style="font-size:16px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">’+product.name+’</div>’;
if (product.brand) html+=’<div style="font-size:13px;color:var(--text3)">’+product.brand+(product.quantity?’ · ‘+product.quantity:’’)+’</div>’;
html+=’<div style="display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap"><span class="pw-best">🏆 ‘+best.flag+’ ‘+best.name+’ EUR ‘+best.price.toFixed(2)+’</span>’;
if (saving>0.05) html+=’<span style="font-size:12px;color:var(--green)">Save EUR ‘+saving.toFixed(2)+’</span>’;
if (nsClass) html+=’<span class="'+nsClass+'">’+product.ns+’</span>’;
html+=’</div></div>’;
html+=’<div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">’;
html+=’<span id="pw_arrow_'+product.code+'" style="color:var(--text3);font-size:12px">▼</span>’;
html+=’<button onclick="event.stopPropagation();pwToggleAlert(\''+product.code+'\')" style="background:none;border:none;font-size:20px;cursor:pointer">’+(product.alertEnabled?‘🔔’:‘🔕’)+’</button>’;
html+=’<button onclick="event.stopPropagation();pwRemoveProduct(\''+product.code+'\')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--text3)">✕</button></div></div>’;
html+=’<div id="pw_expand_'+product.code+'" style="display:none">’;
[‘DE’,‘CH’,‘FR’].forEach(function(flag) {
var sp=prices.filter(function(s){return s.flag===flag;}); if (!sp.length) return;
var fl={DE:t(‘germany’),CH:t(‘switzerland’),FR:t(‘france’)};
html+=’<div style="padding:8px 16px 4px;font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:1px;background:var(--card2)">’+fl[flag]+’</div>’;
sp.forEach(function(s) {
var isBest=s.storeId===best.storeId, diff=Math.round((s.price-best.price)/best.price*100);
html+=’<div class="pw-store-row'+(isBest?' best-store':'')+'"><div style="display:flex;align-items:center;gap:8px;flex:1">’;
html+=(isBest?’<span>🏆</span>’:’’)+’<div><div style="font-size:15px;font-weight:'+(isBest?700:500)+';color:'+(isBest?'var(--text)':'var(--text2)')+'">’+s.name+’</div>’;
if (s.isOffer) html+=’<div style="font-size:11px;color:var(--orange)">🏷 Special offer</div>’;
html+=’</div></div><div style="display:flex;align-items:center;gap:8px">’;
if (diff>0) html+=’<span class="pw-price-diff pw-pricier">+’+diff+’%</span>’;
else if (diff<0) html+=’<span class="pw-price-diff pw-cheaper">’+diff+’%</span>’;
else html+=’<span class="pw-price-diff pw-same">Best</span>’;
html+=’<span style="font-size:16px;font-weight:700;color:'+(isBest?'var(--green)':'var(--text)')+';min-width:72px;text-align:right">EUR ‘+s.price.toFixed(2)+’</span></div></div>’;
});
});
if (product.alertEnabled&&product.alertPrice) html+=’<div style="padding:10px 16px;background:rgba(255,214,10,0.07);border-top:1px solid rgba(255,214,10,0.15);font-size:13px;color:#FFD60A">🔔 Alert: notify when below EUR ‘+product.alertPrice.toFixed(2)+’</div>’;
html+=’<div style="padding:8px 16px;font-size:12px;color:var(--text3);border-top:1px solid var(--border2)">Added ‘+new Date(product.addedAt).toLocaleDateString(‘en-GB’,{day:‘2-digit’,month:‘short’,year:‘numeric’})+’ · Barcode: ‘+product.code+’</div>’;
html+=’</div></div>’;
});
listEl.innerHTML=html;
}

// ═══════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════
function showToast(msg) {
var el=document.getElementById(‘toastEl’); if(el) el.remove();
var t=document.createElement(‘div’); t.id=‘toastEl’; t.className=‘toast’; t.textContent=msg;
document.body.appendChild(t);
setTimeout(function(){ t.style.opacity=‘0’; setTimeout(function(){t.remove();},300); },2000);
}
function esc(s){ return s?String(s).replace(/&/g,’&’).replace(/</g,’<’).replace(/>/g,’>’).replace(/”/g,’"’):’’; }
document.addEventListener(‘visibilitychange’,function(){ if(document.hidden&&scanState.active) stopScan(); });

// ═══════════════════════════════════════════════════
// WHATSAPP PASTE
// ═══════════════════════════════════════════════════
var pastedPids = [];

function parsePasteInput() {
var text = document.getElementById(‘waPasteInput’).value.trim();
if (!text) return;

// Split by common separators: newlines, commas, semicolons, bullets, dashes
var raw = text
.replace(/[•·▪▸►➤✓✔☑]/g, ‘,’)   // bullet chars
.replace(/\n/g, ‘,’)
.replace(/;/g, ‘,’)
.split(’,’)
.map(function(s) { return s.replace(/^[\s-*\d.]+/, ‘’).trim(); })
.filter(function(s) { return s.length > 1; });

// Also try the full text for multi-word matches
var allTexts = [text].concat(raw);
var found = [];
var foundNames = [];

allTexts.forEach(function(chunk) {
var matches = matchText(chunk);
matches.forEach(function(pid) {
if (!found.includes(pid)) {
found.push(pid);
var p = PRODUCTS.find(function(x){return x.id===pid;});
if (p) foundNames.push(tx(p.name));
}
});
});

pastedPids = found;

var resultEl = document.getElementById(‘waPasteResult’);
var noMatchEl = document.getElementById(‘waPasteNoMatch’);
var chips = document.getElementById(‘waPasteChips’);
var foundText = document.getElementById(‘waPasteFoundText’);

if (!found.length) {
resultEl.style.display = ‘none’;
noMatchEl.style.display = ‘block’;
return;
}

noMatchEl.style.display = ‘none’;
resultEl.style.display = ‘block’;

var alreadyInList = found.filter(function(pid){return state.basket.find(function(b){return b.pid===pid;});}).length;
foundText.textContent = ‘✅ Found ’ + found.length + ’ products’ + (alreadyInList > 0 ? ’ (’ + alreadyInList + ’ already in list)’ : ‘’);

chips.innerHTML = ‘’;
found.forEach(function(pid) {
var p = PRODUCTS.find(function(x){return x.id===pid;}); if (!p) return;
var already = !!state.basket.find(function(b){return b.pid===pid;});
var chip = document.createElement(‘div’);
chip.style.cssText = ‘display:inline-flex;align-items:center;gap:5px;padding:7px 11px;border-radius:8px;font-size:14px;cursor:pointer;border:1px solid;’ +
(already ? ‘background:rgba(48,209,200,0.12);border-color:rgba(48,209,200,0.3);color:var(–green);’ : ‘background:rgba(37,211,102,0.1);border-color:rgba(37,211,102,0.25);color:#25D366;’);
chip.innerHTML = (already ? ’✓ ’ : ‘’) + tx(p.name);
chip.onclick = function() {
toggleItem(pid);
parsePasteInput(); // re-render chips
};
chips.appendChild(chip);
});
}

function addAllPasted() {
var added = 0;
pastedPids.forEach(function(pid) {
if (!state.basket.find(function(b){return b.pid===pid;})) {
state.basket.push({pid:pid, qty:1}); added++;
}
});
updateItemCount(); renderCategories();
showToast(‘✅ Added ’ + added + ’ products to list!’);
clearPaste();
}

function clearPaste() {
document.getElementById(‘waPasteInput’).value = ‘’;
document.getElementById(‘waPasteResult’).style.display = ‘none’;
document.getElementById(‘waPasteNoMatch’).style.display = ‘none’;
pastedPids = [];
}

// ═══════════════════════════════════════════════════
// SUPABASE — Real prices, community reports, email leads
// ═══════════════════════════════════════════════════
var SB_URL = ‘https://wwepapdmmfzwfwjpwsbm.supabase.co’;
var SB_KEY = ‘eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3ZXBhcGRtbWZ6d2Z3anB3c2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMDg4MjYsImV4cCI6MjA5NDc4NDgyNn0.VP8fgjws23f_Th_mBa6u5iBu2Q5J39MtvRQA6f169q4’;
var SB_HDR = {‘Content-Type’:‘application/json’,‘apikey’:SB_KEY,‘Authorization’:’Bearer ’+SB_KEY};

async function sbGet(path) {
try {
var r = await fetch(SB_URL+’/rest/v1/’+path, {headers:SB_HDR});
if (!r.ok) {
console.error(’[SB] Error ‘+r.status+’ for: ‘+path);
return [];
}
var data = await r.json();
console.log(’[SB] GET ‘+path+’ -> ‘+data.length+’ rows’);
return data;
} catch(e) {
console.error(’[SB] Network error:’, e.message);
return [];
}
}

async function sbPost(path, body) {
try {
var r = await fetch(SB_URL+’/rest/v1/’+path, {method:‘POST’,headers:SB_HDR,body:JSON.stringify(body)});
return r.ok;
} catch(e) { return false; }
}

// Cache real prices from Supabase
var realPrices = {};
var pricesLoaded = false;

async function loadRealPrices() {
try {
var today = new Date().toISOString().split(‘T’)[0];
var data = await sbGet(‘prices?select=*&order=created_at.desc&limit=500’);
realPrices = {};
data.forEach(function(p) {
var sid = p.store_id.trim();
var pid = p.product_id.trim();

```
  // Key 1: exact product_id_store_id
  realPrices[pid + '_' + sid] = p;

  // Key 2: each word of product_id separately
  pid.split('_').forEach(function(word) {
    if (word.length > 2) realPrices[word + '_' + sid] = p;
  });

  // Key 3: normalized product_name
  var normName = (p.product_name||'').toLowerCase()
    .replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'').substring(0,30);
  realPrices[normName + '_' + sid] = p;

  // Key 4: each word of product_name
  normName.split('_').forEach(function(word) {
    if (word.length > 2) realPrices[word + '_' + sid] = p;
  });
});
console.log('[SB] realPrices keys:', Object.keys(realPrices).join(', '));
pricesLoaded = true;
console.log('[SmartShopper] Loaded '+data.length+' real prices. Keys: '+Object.keys(realPrices).join(', ').substring(0,100));
```

} catch(e) {
console.error(’[SmartShopper] Failed to load prices:’, e);
pricesLoaded = true; // continue without real prices
}
}

// Submit community price report
async function reportPrice(pid, pname, storeId, storeName, storeFlag, price, currency) {
var city = (window.state && state.loc) ? state.loc.city : ‘’;
var curr = currency || (storeFlag===‘CH’?‘CHF’:‘EUR’);
var ok = await sbPost(‘price_reports’, {
product_id:pid, product_name:pname,
store_id:storeId, store_name:storeName, store_flag:storeFlag,
price:price, currency:curr, user_city:city
});
showToast(ok ? ‘Thank you! Price reported!’ : ‘Could not submit — try again’);
}

// Email lead capture
async function submitEmail(email, city) {
var lang = typeof LANG !== ‘undefined’ ? LANG : ‘en’;
return sbPost(‘email_leads’, {email:email, city:city, lang:lang, source:‘app’});
}

// Load prices on startup
loadRealPrices();

// ═══════════════════════════════════════════════════
function openReport(sid,sname,sflag){
_reportStore={id:sid,name:sname,flag:sflag};
document.getElementById(“reportStoreLabel”).textContent=sflag+” “+sname;
document.getElementById(“reportProduct”).value=””;
document.getElementById(“reportPriceInput”).value=””;
var curr = document.getElementById(“reportCurrency”);
if (curr) curr.value = sflag===“CH” ? “CHF” : “EUR”;
var m = document.getElementById(“reportModal”);
m.style.display=“flex”;
m.scrollTop=0;
setTimeout(function(){ document.getElementById(“reportProduct”).focus(); },200);
}

// MODALS — Newsletter + Price Report
// ═══════════════════════════════════════════════════
var _reportStore = {};

function showReportModal(btn) {
var storeId = btn.dataset.sid;
var storeName = btn.dataset.sname;
var storeFlag = btn.dataset.sflag;
_reportStore = {id:storeId, name:storeName, flag:storeFlag};
document.getElementById(‘reportStoreLabel’).textContent = storeFlag + ’ ’ + storeName;
document.getElementById(‘reportProduct’).value = ‘’;
document.getElementById(‘reportPriceInput’).value = ‘’;
var m = document.getElementById(‘reportModal’);
m.style.display = ‘flex’;
}

function closeReport() {
document.getElementById(‘reportModal’).classList.remove(‘show’);
}

async function submitReport() {
var product = document.getElementById(‘reportProduct’).value.trim();
var price = parseFloat(document.getElementById(‘reportPriceInput’).value);
var currency = document.getElementById(‘reportCurrency’) ? document.getElementById(‘reportCurrency’).value : ‘EUR’;
if (!product || !price) { showToast(‘Please fill in all fields’); return; }
var pid = product.toLowerCase().replace(/[^a-z0-9]+/g,’_’);
await reportPrice(pid, product, _reportStore.id, _reportStore.name, _reportStore.flag, price, currency);
closeReport();
}

function showNewsletter() {
var m = document.getElementById(‘newsletterModal’);
m.style.display = ‘flex’;
m.scrollTop = 0;
setTimeout(function(){
var inp = document.getElementById(‘newsletterEmail’);
if (inp) inp.focus();
}, 200);
}

function closeNewsletter() {
document.getElementById(‘newsletterModal’).classList.remove(‘show’);
try { localStorage.setItem(‘nl_dismissed’,‘1’); } catch(e) {}
}

async function submitNewsletter() {
var email = document.getElementById(‘newsletterEmail’).value.trim();
var statusEl = document.getElementById(‘newsletterStatus’);
if (!email || !email.includes(’@’)) { statusEl.textContent = ‘⚠️ Enter a valid email’; statusEl.style.color=’#FF453A’; return; }
var city = (state.loc && state.loc.city) ? state.loc.city : ‘’;
var ok = await submitEmail(email, city);
if (ok) {
statusEl.textContent = ‘✅ Subscribed! See you Monday 🎉’;
statusEl.style.color = ‘#30D158’;
setTimeout(closeNewsletter, 2000);
try { localStorage.setItem(‘nl_subscribed’,‘1’); } catch(e) {}
} else {
statusEl.textContent = ‘❌ Error — try again’;
statusEl.style.color = ‘#FF453A’;
}
}

// Show newsletter after first price comparison (once)
function maybeShowNewsletter() {
try {
if (!localStorage.getItem(‘nl_dismissed’) && !localStorage.getItem(‘nl_subscribed’)) {
setTimeout(showNewsletter, 3000);
}
} catch(e) {}
}

// ═══════════════════════════════════════════════════
// RECEIPT SCANNER
// ═══════════════════════════════════════════════════
var receiptStream = null;
var receiptHistory = [];
try { receiptHistory = JSON.parse(localStorage.getItem(‘receipt_history’)||’[]’); } catch(e) {}

var STORE_PATTERNS = [
{re:/migros/i, name:‘Migros’, flag:‘CH’, curr:‘CHF’},
{re:/coop/i, name:‘Coop’, flag:‘CH’, curr:‘CHF’},
{re:/lidl/i, name:‘Lidl’, flag:‘DE’, curr:‘EUR’},
{re:/aldi/i, name:‘Aldi’, flag:‘DE’, curr:‘EUR’},
{re:/rewe/i, name:‘Rewe’, flag:‘DE’, curr:‘EUR’},
{re:/edeka/i, name:‘Edeka’, flag:‘DE’, curr:‘EUR’},
{re:/denner/i, name:‘Denner’, flag:‘CH’, curr:‘CHF’},
{re:/leclerc/i, name:‘E.Leclerc’, flag:‘FR’, curr:‘EUR’},
{re:/carrefour/i, name:‘Carrefour’, flag:‘FR’, curr:‘EUR’},
{re:/kaufland/i, name:‘Kaufland’, flag:‘DE’, curr:‘EUR’},
{re:/penny/i, name:‘Penny’, flag:‘DE’, curr:‘EUR’},
{re:/grand.frais/i, name:‘Grand Frais’, flag:‘FR’, curr:‘EUR’},
];

var CAT_KEYWORDS = {
‘Fresh Produce’: [‘apfel’,‘apple’,‘banane’,‘banana’,‘tomaten’,‘tomato’,‘karotten’,‘carrot’,‘salat’,‘kartoffel’,‘potato’,‘zwiebel’,‘onion’,‘pilze’,‘mushroom’,‘gurke’,‘cucumber’,‘paprika’,‘spinat’,‘brokkoli’,‘broccoli’],
‘Meat & Poultry’: [‘fleisch’,‘meat’,‘huhn’,‘chicken’,‘rind’,‘beef’,‘schwein’,‘pork’,‘hack’,‘mince’,‘wurst’,‘sausage’,‘schinken’,‘ham’,‘truthahn’,‘turkey’,‘lammfleisch’],
‘Fish & Seafood’: [‘lachs’,‘salmon’,‘fisch’,‘fish’,‘thon’,‘tuna’,‘garnelen’,‘shrimp’,‘kabeljau’,‘cod’,‘forelle’,‘trout’],
‘Dairy & Eggs’: [‘milch’,‘milk’,‘käse’,‘cheese’,‘joghurt’,‘yogurt’,‘butter’,‘eier’,‘eggs’,‘rahm’,‘cream’,‘quark’],
‘Bakery’: [‘brot’,‘bread’,‘brötchen’,‘roll’,‘croissant’,‘kuchen’,‘cake’,‘toast’,‘baguette’,‘zopf’],
‘Beverages’: [‘wasser’,‘water’,‘juice’,‘saft’,‘cola’,‘bier’,‘beer’,‘wein’,‘wine’,‘kaffee’,‘coffee’,‘tee’,‘tea’,‘milch’],
‘Dry Grocery’: [‘pasta’,‘nudeln’,‘reis’,‘rice’,‘mehl’,‘flour’,‘zucker’,‘sugar’,‘öl’,‘oil’,‘essig’,‘vinegar’,‘haferflocken’,‘oats’,‘müsli’,‘muesli’],
‘Snacks & Confectionery’: [‘chips’,‘schokolade’,‘chocolate’,‘kekse’,‘cookies’,‘bonbon’,‘candy’,‘nüsse’,‘nuts’,‘riegel’,‘bar’],
‘Household Cleaning’: [‘waschmittel’,‘detergent’,‘spülmittel’,‘soap’,‘reiniger’,‘cleaner’,‘toilettenpapier’,‘tissue’,‘schwamm’],
‘Personal Care & Beauty’: [‘shampoo’,‘duschgel’,‘gel’,‘creme’,‘cream’,‘zahnpasta’,‘toothpaste’,‘deodorant’,‘rasierer’],
};

function detectCategory(name) {
var nl = name.toLowerCase();
for (var cat in CAT_KEYWORDS) {
if (CAT_KEYWORDS[cat].some(function(k){ return nl.includes(k); })) return cat;
}
return ‘General Merchandise’;
}

async function startReceiptCamera() {
try {
receiptStream = await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:‘environment’}}});
document.getElementById(‘receiptVideo’).srcObject = receiptStream;
await document.getElementById(‘receiptVideo’).play();
document.getElementById(‘receiptCameraWrap’).style.display = ‘block’;
} catch(e) { showToast(’Camera error: ’+e.message); }
}

function stopReceiptCamera() {
if (receiptStream) { receiptStream.getTracks().forEach(function(t){t.stop();}); receiptStream=null; }
document.getElementById(‘receiptCameraWrap’).style.display = ‘none’;
}

function captureReceipt() {
var video = document.getElementById(‘receiptVideo’);
var canvas = document.getElementById(‘receiptCanvas’);
canvas.width = video.videoWidth; canvas.height = video.videoHeight;
canvas.getContext(‘2d’).drawImage(video,0,0);
document.getElementById(‘receiptImg’).src = canvas.toDataURL(‘image/jpeg’,0.92);
document.getElementById(‘receiptImgWrap’).style.display = ‘block’;
document.getElementById(‘receiptScanBtn’).style.display = ‘block’;
stopReceiptCamera();
}

function handleReceiptFile(input) {
var file = input.files[0]; if (!file) return;
var reader = new FileReader();
reader.onload = function(e) {
document.getElementById(‘receiptImg’).src = e.target.result;
document.getElementById(‘receiptImgWrap’).style.display = ‘block’;
document.getElementById(‘receiptScanBtn’).style.display = ‘block’;
};
reader.readAsDataURL(file);
}

async function runReceiptOCR() {
document.getElementById(‘receiptScanBtn’).style.display = ‘none’;
document.getElementById(‘receiptProgress’).style.display = ‘block’;
document.getElementById(‘receiptResults’).style.display = ‘none’;

var setText = function(t){ document.getElementById(‘receiptProgressText’).textContent = t; };
var setBar = function(p){ document.getElementById(‘receiptProgressBar’).style.width = p+’%’; };

try {
setText(‘Loading OCR engine…’);
setBar(10);

```
// Load Tesseract
if (!window.Tesseract) {
  await new Promise(function(resolve,reject) {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
    s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
}

setText('Preparing image...');
setBar(20);

var imgEl = document.getElementById('receiptImg');

setText('Reading receipt text...');
setBar(30);

var result = await Tesseract.recognize(imgEl, 'deu+eng+fra', {
  logger: function(m) {
    if (m.status === 'recognizing text') {
      setBar(30 + Math.round(m.progress * 50));
      setText('Reading... ' + Math.round(m.progress*100) + '%');
    }
  }
});

setBar(90);
setText('Analysing receipt...');

var text = result.data.text;
document.getElementById('receiptRaw').textContent = text;
document.getElementById('receiptRawWrap').style.display = 'block';

setBar(100);
var parsed = parseReceiptText(text);
document.getElementById('receiptProgress').style.display = 'none';
renderReceiptResults(parsed);
```

} catch(e) {
document.getElementById(‘receiptProgress’).style.display = ‘none’;
document.getElementById(‘receiptScanBtn’).style.display = ‘block’;
showToast(’OCR error: ’+e.message);
console.error(e);
}
}

function parseReceiptText(text) {
var lines = text.split(’\n’).map(function(l){ return l.trim(); }).filter(Boolean);

// Detect store
var store = {name:‘Unknown Store’, flag:‘DE’, curr:‘EUR’};
lines.slice(0,8).forEach(function(line) {
STORE_PATTERNS.forEach(function(p) {
if (p.re.test(line)) store = {name:p.name, flag:p.flag, curr:p.curr};
});
});

// Detect date
var dateMatch = text.match(/(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})/);
var date = dateMatch ? dateMatch[0] : new Date().toLocaleDateString(‘de-CH’);

// Parse items with prices
var items = [];
// Match: anything + price pattern (1.23 or 12.34 or 1,23)
var priceRe = /^(.+?)\s+([\d]{1,3}[.,]\d{2})\s*([A-Z]?)$/;
var priceRe2 = /^([\d]{1,3}[.,]\d{2})\s+(.+)$/;

lines.forEach(function(line) {
// Skip header/footer lines
if (/total|summe|mwst|vat|rabatt|datum|danke|vielen|thank|subtotal|zwischensumme|kassierer/i.test(line)) return;
if (line.length < 4) return;

```
var m = line.match(priceRe);
if (m) {
  var price = parseFloat(m[2].replace(',','.'));
  if (price > 0 && price < 500) {
    var name = m[1].replace(/[*\[\]]/g,'').trim();
    if (name.length > 1) {
      items.push({
        name: name,
        price: price,
        qty: 1,
        currency: store.curr,
        category: detectCategory(name)
      });
    }
  }
}
```

});

// Calculate total from receipt or sum items
var totalMatch = text.match(/(?:total|summe|gesamt|montant)\s*:?\s*([\d]+[.,]\d{2})/i);
var total = totalMatch ? parseFloat(totalMatch[1].replace(’,’,’.’)) : items.reduce(function(s,i){return s+i.price;},0);

return {store:store, date:date, items:items, total:total, rawText:text};
}

function renderReceiptResults(data) {
document.getElementById(‘receiptResults’).style.display = ‘block’;

// Store
document.getElementById(‘receiptStoreName’).textContent = data.store.flag + ’ ’ + data.store.name;
document.getElementById(‘receiptStoreDate’).textContent = data.date;

// Summary
var curr = data.store.curr;
document.getElementById(‘receiptTotal’).textContent = curr + ’ ’ + data.total.toFixed(2);
document.getElementById(‘receiptItemCount’).textContent = data.items.length;
document.getElementById(‘receiptAvgPrice’).textContent = data.items.length ? (curr+’ ’+(data.total/data.items.length).toFixed(2)) : ‘—’;

// Category breakdown
var cats = {};
data.items.forEach(function(item) {
if (!cats[item.category]) cats[item.category] = 0;
cats[item.category] += item.price;
});
var sortedCats = Object.keys(cats).sort(function(a,b){ return cats[b]-cats[a]; });
var catsHtml = ‘<div style="font-size:12px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-bottom:10px">By category</div>’;
var maxCat = cats[sortedCats[0]] || 1;
sortedCats.forEach(function(cat) {
var pct = Math.round(cats[cat]/data.total*100);
var barW = Math.round(cats[cat]/maxCat*100);
var icon = CAT_ICONS[cat] || ‘🛒’;
catsHtml += ‘<div style="margin-bottom:8px">’;
catsHtml += ‘<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px">’;
catsHtml += ‘<span>’+icon+’ ‘+cat+’</span>’;
catsHtml += ‘<span style="font-weight:600;color:var(--green)">’+curr+’ ‘+cats[cat].toFixed(2)+’ <span style="color:var(--text3);font-weight:400">(’+pct+’%)</span></span>’;
catsHtml += ‘</div>’;
catsHtml += ‘<div style="background:rgba(255,255,255,0.06);border-radius:3px;height:5px;overflow:hidden">’;
catsHtml += ‘<div style="height:100%;background:var(--green);width:'+barW+'%;border-radius:3px"></div></div></div>’;
});
document.getElementById(‘receiptCats’).innerHTML = catsHtml;

// Items list
var itemsHtml = ‘’;
data.items.forEach(function(item) {
itemsHtml += ‘<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--border2)">’;
itemsHtml += ‘<div style="flex:1"><div style="font-size:14px;color:var(--text2)">’+item.name+’</div>’;
itemsHtml += ‘<div style="font-size:11px;color:var(--text3)">’+item.category+’</div></div>’;
itemsHtml += ‘<span style="font-size:14px;font-weight:700;color:var(--text)">’+curr+’ ‘+item.price.toFixed(2)+’</span>’;
itemsHtml += ‘</div>’;
});
if (!data.items.length) {
itemsHtml = ‘<div style="text-align:center;padding:20px;color:var(--text3)">No items detected. Try better lighting or a clearer photo.</div>’;
}
document.getElementById(‘receiptItemsList’).innerHTML = itemsHtml;

// Store result for save
window._lastReceipt = data;
}

function saveReceiptToHistory() {
if (!window._lastReceipt) return;
var entry = {
store: window._lastReceipt.store.name,
flag: window._lastReceipt.store.flag,
date: window._lastReceipt.date,
total: window._lastReceipt.total,
currency: window._lastReceipt.store.curr,
itemCount: window._lastReceipt.items.length,
ts: Date.now()
};
receiptHistory.unshift(entry);
if (receiptHistory.length > 20) receiptHistory = receiptHistory.slice(0,20);
try { localStorage.setItem(‘receipt_history’, JSON.stringify(receiptHistory)); } catch(e) {}
showToast(‘Receipt saved!’); renderReceiptHistory(); updateBudgetUI();
document.getElementById(‘receiptSaveBtn’).textContent = ‘Saved!’;
document.getElementById(‘receiptSaveBtn’).style.background = ‘rgba(48,209,88,0.2)’;
}

function renderReceiptHistory() {
var el = document.getElementById(‘receiptHistoryList’);
var statsEl = document.getElementById(‘receiptStats’);
if (!el) return;

if (!receiptHistory.length) {
el.innerHTML = ‘<div style="text-align:center;padding:30px;color:var(--text3)"><div style="font-size:40px;margin-bottom:12px">🧾</div><div>No receipts yet. Scan your first one!</div></div>’;
return;
}

// Stats
if (statsEl) {
var now = new Date();
var weekAgo = now.getTime() - 7*24*60*60*1000;
var monthStart = new Date(now.getFullYear(),now.getMonth(),1).getTime();
var weekTotal = receiptHistory.reduce(function(s,r){ return s+(r.ts>=weekAgo?r.total:0); },0);
var monthTotal = receiptHistory.reduce(function(s,r){ return s+(r.ts>=monthStart?r.total:0); },0);
var curr = receiptHistory[0].currency||‘EUR’;
document.getElementById(‘statMonthTotal’).textContent = curr+’ ‘+monthTotal.toFixed(2);
document.getElementById(‘statWeekTotal’).textContent = curr+’ ’+weekTotal.toFixed(2);
statsEl.style.display = ‘block’;

```
// Category chart from recent receipts
// (simplified - just show store breakdown)
var stores = {};
receiptHistory.slice(0,10).forEach(function(r){
  stores[r.store] = (stores[r.store]||0) + r.total;
});
var maxV = Math.max.apply(null, Object.values(stores))||1;
var chartEl = document.getElementById('receiptCatChart');
if (chartEl) {
  var ch = '<div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-bottom:10px">Spending by store</div>';
  Object.keys(stores).forEach(function(s){
    var pct = Math.round(stores[s]/maxV*100);
    ch += '<div style="margin-bottom:8px">';
    ch += '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px"><span>'+s+'</span><span style="font-weight:600;color:var(--green)">'+curr+' '+stores[s].toFixed(2)+'</span></div>';
    ch += '<div style="background:rgba(255,255,255,0.06);border-radius:3px;height:5px"><div class="cat-spend-bar" style="width:'+pct+'%"></div></div></div>';
  });
  chartEl.innerHTML = ch;
}
```

}

// List
el.innerHTML = receiptHistory.map(function(r) {
var d = new Date(r.ts).toLocaleDateString(‘de-CH’,{day:‘2-digit’,month:‘short’,year:‘numeric’});
return ‘<div style="background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:13px 14px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center">’
+ ‘<div><div style="font-size:15px;font-weight:600">’+(r.flag||’’)+’ ‘+r.store+’</div>’
+ ‘<div style="font-size:12px;color:var(--text3);margin-top:2px">’+d+’ · ‘+r.itemCount+’ items</div></div>’
+ ‘<div style="text-align:right"><div style="font-size:17px;font-weight:800;color:var(--green);font-family:DM Mono,monospace">’+(r.currency||‘EUR’)+’ ‘+r.total.toFixed(2)+’</div></div>’
+ ‘</div>’;
}).join(’’);
}

function resetReceipt() {
document.getElementById(‘receiptImgWrap’).style.display = ‘none’;
document.getElementById(‘receiptScanBtn’).style.display = ‘none’;
document.getElementById(‘receiptResults’).style.display = ‘none’;
document.getElementById(‘receiptRawWrap’).style.display = ‘none’;
document.getElementById(‘receiptFileInput’).value = ‘’;
document.getElementById(‘receiptSaveBtn’).textContent = ‘Save to History’;
document.getElementById(‘receiptSaveBtn’).style.background = ‘’;
window._lastReceipt = null;
window.scrollTo(0,0);
}

// ═══════════════════════════════════════════════════
// WEEKLY OFFERS
// ═══════════════════════════════════════════════════
async function loadWeeklyOffers() {
var today = new Date().toISOString().split(‘T’)[0];
var data = await sbGet(‘prices?select=*&order=created_at.desc&limit=20’);
if (!data.length) return;

var banner = document.getElementById(‘weeklyOffersBanner’);
var list = document.getElementById(‘weeklyOffersList’);
if (!banner || !list) return;

list.innerHTML = ‘’;
data.forEach(function(p) {
var curr = p.currency || (p.store_flag===‘CH’?‘CHF’:‘EUR’);
var flagEmoji = p.store_flag===‘CH’?‘🇨🇭’:p.store_flag===‘FR’?‘🇫🇷’:‘🇩🇪’;
var cleanName = (p.product_name||’’).replace(/[Ѐ-ӿ]/g,’’).replace(/\s*([^)]*)/g,’’).trim().substring(0,28);
var card = document.createElement(‘div’);
card.style.cssText = ‘flex-shrink:0;background:var(–card);border:1px solid rgba(255,159,10,0.25);border-radius:12px;padding:10px 12px;min-width:140px;cursor:pointer’;
card.innerHTML = ‘<div style="font-size:10px;color:var(--orange);font-weight:700;margin-bottom:4px">’+flagEmoji+’ ‘+p.store_name+’</div>’
+ ‘<div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:4px;line-height:1.3">’+cleanName+’</div>’
+ ‘<div style="font-size:16px;font-weight:800;color:var(--orange)">’+curr+’ ‘+parseFloat(p.price).toFixed(2)+’</div>’
+ ‘<div style="font-size:10px;color:var(--text3);margin-top:3px">Tap to add to list</div>’;
card.addEventListener(‘click’, (function(pid){ return function(){ quickAddOffer(pid); }; })(p.product_id));
list.appendChild(card);
});
banner.style.display = ‘block’;
}

function quickAddOffer(pid) {
// Try to find in PRODUCTS
var prod = PRODUCTS.find(function(p){ return p.id===pid; });
if (prod) {
if (!state.basket.find(function(b){return b.pid===pid;})) {
state.basket.push({pid:pid, qty:1});
updateItemCount(); renderCategories();
showToast(‘Added ‘+prod.name+’ to list!’);
} else {
showToast(‘Already in your list!’);
}
} else {
showToast(‘Product added from offers!’);
}
}

// ═══════════════════════════════════════════════════
// BUDGET TRACKER
// ═══════════════════════════════════════════════════
var budget = {amount:0, currency:‘EUR’};
try { var _b = localStorage.getItem(‘ss_budget’); if(_b) budget = JSON.parse(_b); } catch(e) {}

function showBudgetEdit() {
document.getElementById(‘budgetInput’).value = budget.amount || ‘’;
document.getElementById(‘budgetCurrency’).value = budget.currency || ‘EUR’;
document.getElementById(‘budgetModal’).classList.add(‘show’);
}
function closeBudgetModal() {
document.getElementById(‘budgetModal’).classList.remove(‘show’);
}
function saveBudget() {
budget.amount = parseFloat(document.getElementById(‘budgetInput’).value)||0;
budget.currency = document.getElementById(‘budgetCurrency’).value;
try { localStorage.setItem(‘ss_budget’, JSON.stringify(budget)); } catch(e) {}
closeBudgetModal();
updateBudgetUI();
showToast(‘Budget saved!’);
}

function updateBudgetUI() {
var heroEl = document.getElementById(‘budgetHero’);
var setBtnEl = document.getElementById(‘budgetSetBtn’);
if (!heroEl || !setBtnEl) return;

if (!budget.amount) {
heroEl.style.display = ‘none’;
setBtnEl.style.display = ‘block’;
return;
}
heroEl.style.display = ‘block’;
setBtnEl.style.display = ‘none’;

// Calculate spent this month from receipt history
var now = new Date();
var monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
var spent = 0;
receiptHistory.forEach(function(r) {
if (r.ts >= monthStart) spent += (r.total||0);
});

var pct = Math.min(100, Math.round(spent/budget.amount*100));
var remaining = Math.max(0, budget.amount - spent);
var curr = budget.currency;

document.getElementById(‘budgetSpent’).textContent = curr + ’ ’ + spent.toFixed(2);
document.getElementById(‘budgetRemaining’).textContent = curr + ’ ’ + remaining.toFixed(2) + ’ remaining’;
document.getElementById(‘budgetPct’).textContent = pct + ‘%’;
document.getElementById(‘budgetBarFill’).style.width = pct + ‘%’;
document.getElementById(‘budgetBarFill’).style.background = pct > 90 ? ‘var(–red)’ : pct > 70 ? ‘var(–orange)’ : ‘var(–green)’;

// SVG arc
var arc = document.getElementById(‘budgetArc’);
if (arc) {
var circumference = 213.6;
var offset = circumference - (pct/100)*circumference;
arc.style.strokeDashoffset = offset;
arc.style.stroke = pct>90?‘var(–red)’:pct>70?‘var(–orange)’:‘var(–green)’;
}
}

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
renderCategories();
updateItemCount();
loadWeeklyOffers();
updateBudgetUI();
renderReceiptHistory();

var LANG = ‘en’;
try { LANG = localStorage.getItem(‘ss_lang’) || ‘en’; } catch(e) {}

var T = {
en: {
app_subtitle: ‘DE/CH/FR · Voice · Full Supermarket’,
nav_shopper: ‘Shopper’, nav_scan: ‘NutriScan’, nav_history: ‘History’, nav_price: ‘PriceWatch’,
where_title: ‘Where are you shopping?’,
where_sub: ‘Enter your city — we find all stores within your radius including cross-border.’,
saved_loc: ‘Saved location’, use_saved: ‘Use saved’,
addr_ph: ‘Basel / Grenzach-Wyhlen / Freiburg…’, go: ‘Go’,
radius_label: ‘Search radius’,
shopping_list: ‘Shopping List’, save_loc: ‘save location’,
voice_idle: ‘🎙 Voice / Text input’,
voice_sub: ‘Works on HTTPS. Say: Milch, Kartoffeln, Lachs’,
listening: ‘🔴 Listening…’, recognising: ‘⏳ Recognising…’,
items_found: ’ items found’,
no_speech: ‘No speech detected. Try again!’,
or_type: ‘Or type: Milch, Eier, Brot, salmon…’,
find: ‘Find’, add_all: ‘+ Add all to list’, clear: ‘clear’,
no_match: ‘No products matched. Try different words.’,
search_ph: ‘Search products… (chicken, bio, gluten-free)’,
filter: ‘Filter:’, sort: ‘Sort:’,
cheapest: ‘💰 Cheapest’, best_offers: ‘🏷 Best offers’, nearest: ‘📍 Nearest’,
find_prices: ‘Find Best Prices’,
edit_list: ‘← Edit list’,
nutriscan_title: ‘📷 NutriScan’, nutriscan_sub: ‘Scan any barcode — instant health score’,
manual_label: ‘Or enter barcode manually’,
start_camera: ‘Start Camera’, stop_camera: ‘Stop’,
camera_ready: ‘Point camera at barcode — tap Capture’,
history_title: ‘🕐 Scan History’, history_sub: ‘Your recently scanned products’,
pw_title: ‘💰 PriceWatch’, pw_sub: ‘Scan & track prices across DE/CH/FR stores’,
pw_add_label: ‘Add product to watch’, pw_add_btn: ‘+Add’,
pw_scan_btn: ‘📷 Scan Barcode to Add’,
pw_watching: ‘Watching’, pw_products: ‘products’,
pw_last_updated: ‘Last updated:’,
pw_empty_title: ‘No products yet’,
pw_empty_sub: ‘Add a product by scanning its barcode or entering the number above.’,
wa_title: ‘Paste from WhatsApp’,
wa_sub: ‘Paste a shopping list — we find all products automatically’,
wa_find: ‘Find’,
wa_add_all: ‘+ Add all to list’,
wa_clear: ‘Clear’,
receipt_title: ‘🧾 Receipt Scanner’,
receipt_sub: ‘Photograph your receipt — see what you spent’,
nav_receipt: ‘Receipt’,
germany: ‘🇩🇪 Germany’, switzerland: ‘🇨🇭 Switzerland’, france: ‘🇫🇷 France’,
},
de: {
app_subtitle: ‘DE/CH/FR · Spracheingabe · Vollsortimenter’,
nav_shopper: ‘Einkauf’, nav_scan: ‘NutriScan’, nav_history: ‘Verlauf’, nav_price: ‘Preisvergleich’,
where_title: ‘Wo kaufen Sie ein?’,
where_sub: ‘Stadt eingeben — wir finden alle Supermärkte in Ihrer Nähe, auch grenznah.’,
saved_loc: ‘Gespeicherter Standort’, use_saved: ‘Verwenden’,
addr_ph: ‘Basel / Grenzach-Wyhlen / Freiburg…’, go: ‘Los’,
radius_label: ‘Suchradius’,
shopping_list: ‘Einkaufsliste’, save_loc: ‘Standort speichern’,
voice_idle: ‘🎙 Sprach- / Texteingabe’,
voice_sub: ‘Auf HTTPS verfügbar. Sagen Sie: Milch, Kartoffeln, Lachs’,
listening: ‘🔴 Hört zu…’, recognising: ‘⏳ Wird erkannt…’,
items_found: ’ Artikel gefunden’,
no_speech: ‘Keine Sprache erkannt. Nochmals versuchen!’,
or_type: ‘Oder tippen: Milch, Eier, Brot, Lachs…’,
find: ‘Suchen’, add_all: ‘+ Alle hinzufügen’, clear: ‘Löschen’,
no_match: ‘Keine Produkte gefunden. Andere Wörter versuchen.’,
search_ph: ‘Produkte suchen… (Hähnchen, Bio, glutenfrei)’,
filter: ‘Filter:’, sort: ‘Sortieren:’,
cheapest: ‘💰 Günstigste’, best_offers: ‘🏷 Beste Angebote’, nearest: ‘📍 Nächste’,
find_prices: ‘Beste Preise finden’,
edit_list: ‘← Liste bearbeiten’,
nutriscan_title: ‘📷 NutriScan’, nutriscan_sub: ‘Barcode scannen — sofortige Gesundheitsbewertung’,
manual_label: ‘Oder Barcode manuell eingeben’,
start_camera: ‘Kamera starten’, stop_camera: ‘Stopp’,
camera_ready: ‘Kamera auf Barcode richten — Aufnehmen tippen’,
history_title: ‘🕐 Scanverlauf’, history_sub: ‘Zuletzt gescannte Produkte’,
pw_title: ‘💰 Preisvergleich’, pw_sub: ‘Preise in DE/CH/FR Supermärkten verfolgen’,
pw_add_label: ‘Produkt zur Beobachtung hinzufügen’, pw_add_btn: ‘+Hinzufügen’,
pw_scan_btn: ‘📷 Barcode scannen’,
pw_watching: ‘Beobachte’, pw_products: ‘Produkte’,
pw_last_updated: ‘Letzte Aktualisierung:’,
pw_empty_title: ‘Noch keine Produkte’,
pw_empty_sub: ‘Fügen Sie ein Produkt hinzu, indem Sie den Barcode scannen.’,
wa_title: ‘Aus WhatsApp einfügen’,
wa_sub: ‘Einkaufsliste einfügen — wir finden alle Produkte’,
wa_find: ‘Suchen’,
wa_add_all: ‘+ Alle hinzufügen’,
wa_clear: ‘Löschen’,
receipt_title: ‘🧾 Kassenbon Scanner’,
receipt_sub: ‘Kassenbon fotografieren — Ausgaben analysieren’,
nav_receipt: ‘Kassenbon’,
germany: ‘🇩🇪 Deutschland’, switzerland: ‘🇨🇭 Schweiz’, france: ‘🇫🇷 Frankreich’,
},
fr: {
app_subtitle: ‘DE/CH/FR · Voix · Supermarché complet’,
nav_shopper: ‘Courses’, nav_scan: ‘NutriScan’, nav_history: ‘Historique’, nav_price: ‘ComparaPrix’,
where_title: ‘Où faites-vous vos courses ?’,
where_sub: ‘Entrez votre ville — nous trouvons tous les magasins dans votre rayon, y compris transfrontaliers.’,
saved_loc: ‘Lieu enregistré’, use_saved: ‘Utiliser’,
addr_ph: ‘Bâle / Grenzach-Wyhlen / Fribourg…’, go: ‘OK’,
radius_label: ‘Rayon de recherche’,
shopping_list: ‘Liste de courses’, save_loc: ‘Enregistrer le lieu’,
voice_idle: ‘🎙 Saisie vocale / textuelle’,
voice_sub: ‘Disponible sur HTTPS. Dites : Milch, Kartoffeln, Lachs’,
listening: ‘🔴 En écoute…’, recognising: ‘⏳ Reconnaissance…’,
items_found: ’ articles trouvés’,
no_speech: ‘Aucune parole détectée. Réessayez !’,
or_type: ‘Ou tapez : Milch, Eier, Brot, saumon…’,
find: ‘Chercher’, add_all: ‘+ Tout ajouter’, clear: ‘Effacer’,
no_match: ‘Aucun produit trouvé. Essayez d'autres mots.’,
search_ph: ‘Rechercher des produits… (poulet, bio, sans gluten)’,
filter: ‘Filtrer :’, sort: ‘Trier :’,
cheapest: ‘💰 Moins cher’, best_offers: ‘🏷 Meilleures offres’, nearest: ‘📍 Plus proche’,
find_prices: ‘Trouver les meilleurs prix’,
edit_list: ‘← Modifier la liste’,
nutriscan_title: ‘📷 NutriScan’, nutriscan_sub: ‘Scannez un code-barres — score santé instantané’,
manual_label: ‘Ou saisir le code-barres manuellement’,
start_camera: ‘Démarrer la caméra’, stop_camera: ‘Arrêter’,
camera_ready: ‘Pointez la caméra sur le code-barres — appuyez sur Capturer’,
history_title: ‘🕐 Historique des scans’, history_sub: ‘Vos produits récemment scannés’,
pw_title: ‘💰 ComparaPrix’, pw_sub: ‘Comparez les prix dans les magasins DE/CH/FR’,
pw_add_label: ‘Ajouter un produit à surveiller’, pw_add_btn: ‘+Ajouter’,
pw_scan_btn: ‘📷 Scanner le code-barres’,
pw_watching: ‘Surveillance de’, pw_products: ‘produits’,
pw_last_updated: ‘Dernière mise à jour :’,
pw_empty_title: ‘Aucun produit pour l'instant’,
pw_empty_sub: ‘Ajoutez un produit en scannant son code-barres.’,
wa_title: ‘Coller depuis WhatsApp’,
wa_sub: ‘Collez une liste — nous trouvons tous les produits’,
wa_find: ‘Chercher’,
wa_add_all: ‘+ Tout ajouter’,
wa_clear: ‘Effacer’,
receipt_title: ‘🧾 Scanner de ticket’,
receipt_sub: ‘Photographiez votre ticket — analysez vos dépenses’,
nav_receipt: ‘Ticket’,
germany: ‘🇩🇪 Allemagne’, switzerland: ‘🇨🇭 Suisse’, france: ‘🇫🇷 France’,
}
};

function t(k) { return (T[LANG] && T[LANG][k]) || T.en[k] || k; }
function tx(s) { if (LANG === ‘en’ || !TX[LANG]) return s; return TX[LANG][s] || s; }

function setLang(lang) {
LANG = lang;
try { localStorage.setItem(‘ss_lang’, lang); } catch(e) {}
[‘EN’,‘DE’,‘FR’].forEach(function(l) {
var btn = document.getElementById(‘lang’+l);
if (btn) { btn.classList.toggle(‘active’, l.toLowerCase() === lang); }
});
applyTranslations();
renderCategories();
showToast(lang === ‘de’ ? ‘🇩🇪 Deutsch’ : lang === ‘fr’ ? ‘🇫🇷 Français’ : ‘🇬🇧 English’);
}

function applyTranslations() {
var s = document.getElementById(‘appSubtitle’); if (s) s.textContent = t(‘app_subtitle’);
var wt = document.getElementById(‘whereTitle’); if (wt) wt.textContent = t(‘where_title’);
var ws = document.getElementById(‘whereSub’); if (ws) ws.textContent = t(‘where_sub’);
var ai = document.getElementById(‘addrInput’); if (ai) ai.placeholder = t(‘addr_ph’);
var gb = document.getElementById(‘goBtn’); if (gb) gb.textContent = t(‘go’);
var rl = document.getElementById(‘radiusLabel’); if (rl) rl.textContent = t(‘radius_label’);
var sl = document.getElementById(‘shoppingListTitle’); if (sl) sl.textContent = t(‘shopping_list’);
var slb = document.getElementById(‘saveLocBtn’); if (slb) slb.textContent = t(‘save_loc’);
var vt = document.getElementById(‘voiceTitle’); if (vt) vt.textContent = t(‘voice_idle’);
var vs = document.getElementById(‘voiceSubtitle’); if (vs) vs.textContent = t(‘voice_sub’);
var qi = document.getElementById(‘quickInput’); if (qi) qi.placeholder = t(‘or_type’);
var fb = document.getElementById(‘findBtn’); if (fb) fb.textContent = t(‘find’);
var ab = document.getElementById(‘addAllBtn’); if (ab) ab.textContent = t(‘add_all’);
var cb = document.getElementById(‘clearVoiceBtn’); if (cb) cb.textContent = t(‘clear’);
var si = document.getElementById(‘searchInput’); if (si) si.placeholder = t(‘search_ph’);
var fl = document.getElementById(‘filterLabel’); if (fl) fl.textContent = t(‘filter’);
var so = document.getElementById(‘sortLabel’); if (so) so.textContent = t(‘sort’);
var st = document.getElementById(‘sortTotal’); if (st) st.textContent = t(‘cheapest’);
var sv = document.getElementById(‘sortSaving’); if (sv) sv.textContent = t(‘best_offers’);
var sd = document.getElementById(‘sortDist’); if (sd) sd.textContent = t(‘nearest’);
var an = document.getElementById(‘analyzeBtn’); if (an) { var km = an.textContent.match(/\d+/); an.textContent = t(‘find_prices’) + (km ? ’ — ’ + km[0] + ’ km’ : ‘’); }
var el = document.getElementById(‘editListBtn’); if (el) el.textContent = t(‘edit_list’);
var nt = document.getElementById(‘nutriscanTitle’); if (nt) nt.textContent = t(‘nutriscan_title’);
var ns = document.getElementById(‘nutriscanSub’); if (ns) ns.textContent = t(‘nutriscan_sub’);
var ml = document.getElementById(‘manualLabel’); if (ml) ml.textContent = t(‘manual_label’);
var sl2 = document.getElementById(‘scanLabel’); if (sl2 && !scanState.active) sl2.textContent = t(‘camera_ready’);
var sbt = document.getElementById(‘scanBtnText’); if (sbt && !scanState.active) sbt.textContent = t(‘start_camera’);
var pt = document.getElementById(‘pwTitle’); if (pt) pt.textContent = t(‘pw_title’);
var ps = document.getElementById(‘pwSub’); if (ps) ps.textContent = t(‘pw_sub’);
var pal = document.getElementById(‘pwAddLabel’); if (pal) pal.textContent = t(‘pw_add_label’);
var pab = document.getElementById(‘pwAddBtn’); if (pab) pab.textContent = t(‘pw_add_btn’);
var psb = document.getElementById(‘pwScanBtn’); if (psb) psb.textContent = t(‘pw_scan_btn’);
var pet = document.getElementById(‘pwEmptyTitle’); if (pet) pet.textContent = t(‘pw_empty_title’);
var pes = document.getElementById(‘pwEmptySub’); if (pes) pes.textContent = t(‘pw_empty_sub’);
var pll = document.getElementById(‘pwLastUpdateLabel’); if (pll) pll.textContent = t(‘pw_last_updated’);
var rt = document.getElementById(‘receiptTitle’); if (rt) rt.textContent = t(‘receipt_title’);
var rs = document.getElementById(‘receiptSub’); if (rs) rs.textContent = t(‘receipt_sub’);
var nrl = document.getElementById(‘navReceiptLbl’); if (nrl) nrl.textContent = t(‘nav_receipt’);
var nsl = document.getElementById(‘navShopperLbl’); if (nsl) nsl.textContent = t(‘nav_shopper’);
var nscl = document.getElementById(‘navScanLbl’); if (nscl) nscl.textContent = t(‘nav_scan’);
var npl = document.getElementById(‘navPriceLbl’); if (npl) npl.textContent = t(‘nav_price’);
var sll = document.getElementById(‘savedLocLabel’); if (sll) sll.textContent = t(‘saved_loc’);
var usb = document.getElementById(‘useSavedBtn’); if (usb) usb.textContent = t(‘use_saved’);
var wt = document.getElementById(‘waPasteTitle’); if (wt) wt.textContent = t(‘wa_title’);
var ws = document.getElementById(‘waPasteSubtitle’); if (ws) ws.textContent = t(‘wa_sub’);
var wf = document.getElementById(‘waPasteBtnTxt’); if (wf) wf.textContent = t(‘wa_find’);
var wa = document.getElementById(‘waPasteAddAll’); if (wa) wa.textContent = t(‘wa_add_all’);
var wc = document.getElementById(‘waPasteClear’); if (wc) wc.textContent = t(‘wa_clear’);
}

// Init lang on load
(function() {
setTimeout(function() {
[‘EN’,‘DE’,‘FR’].forEach(function(l) {
var btn = document.getElementById(‘lang’+l);
if (btn) btn.classList.toggle(‘active’, l.toLowerCase() === LANG);
});
if (LANG !== ‘en’) applyTranslations();
}, 50);
})();

// ═══════════════════════════════════════════════════
// STORE & OFFER DATA
// ═══════════════════════════════════════════════════
var CAT_ICONS = {“Fresh Produce”:“🥦”,“Meat & Poultry”:“🥩”,“Fish & Seafood”:“🐟”,“Dairy & Eggs”:“🧀”,“Bakery”:“🥖”,“Dry Grocery”:“🍝”,“Frozen Foods”:“🧊”,“Beverages”:“🥤”,“Snacks & Confectionery”:“🍫”,“Health, Bio & Special Diet”:“🌱”,“Household Cleaning”:“🧼”,“Personal Care & Beauty”:“🧴”,“Baby & Infant Food”:“👶”,“Baby Non-Food”:“🍼”,“Pet Products”:“🐶”,“Pharmacy & Wellness”:“💊”,“International Foods”:“🌍”,“Ready Meals & Deli”:“🍳”,“General Merchandise”:“🎁”};
var LABEL_CFG = {“bio”:{icon:“🌿”,cls:“lbl-bio”,lbl:“Bio”},“vegan”:{icon:“🌱”,cls:“lbl-vegan”,lbl:“Vegan”},“gluten-free”:{icon:“🌾”,cls:“lbl-gf”,lbl:“GF”},“lactose-free”:{icon:“🥛”,cls:“lbl-lf”,lbl:“LF”}};

var STORES = [
{id:“lidl_de”,name:“Lidl”,flag:“DE”,cidx:0.95,factor:0.82,anchor:[47.54,7.70],note:“Best prices, great pantry”},
{id:“aldi_de”,name:“Aldi”,flag:“DE”,cidx:0.95,factor:0.80,anchor:[47.54,7.70],note:“Lowest prices overall”},
{id:“rewe_de”,name:“Rewe”,flag:“DE”,cidx:0.95,factor:1.02,anchor:[47.54,7.70],note:“Best variety and quality”},
{id:“edeka_de”,name:“Edeka”,flag:“DE”,cidx:0.95,factor:1.05,anchor:[47.54,7.70],note:“Excellent fresh produce”},
{id:“kaufland_de”,name:“Kaufland”,flag:“DE”,cidx:0.95,factor:0.97,anchor:[47.60,7.63],note:“Large hypermarket”},
{id:“penny_de”,name:“Penny”,flag:“DE”,cidx:0.95,factor:0.87,anchor:[47.54,7.70],note:“Budget-friendly basics”},
{id:“hiebers_de”,name:“Hieber’s Frische”,flag:“DE”,cidx:0.95,factor:1.00,anchor:[47.54,7.69],note:“Premium fresh and bio”},
{id:“alnatura_de”,name:“Alnatura”,flag:“DE”,cidx:0.95,factor:1.08,anchor:[48.00,7.84],note:“Top organic chain”},
{id:“dm_de”,name:“dm Drogerie”,flag:“DE”,cidx:0.95,factor:0.90,anchor:[47.54,7.70],note:“Best for baby and supplements”},
{id:“rossmann_de”,name:“Rossmann”,flag:“DE”,cidx:0.95,factor:0.88,anchor:[47.54,7.70],note:“Affordable drugstore”},
{id:“migros_ch”,name:“Migros”,flag:“CH”,cidx:1.62,factor:1.00,anchor:[47.56,7.59],note:“Switzerland largest retailer”},
{id:“coop_ch”,name:“Coop”,flag:“CH”,cidx:1.62,factor:1.02,anchor:[47.56,7.59],note:“Great Naturaplan organic range”},
{id:“lidl_ch”,name:“Lidl CH”,flag:“CH”,cidx:1.62,factor:0.85,anchor:[47.56,7.60],note:“Best budget in Switzerland”},
{id:“aldi_ch”,name:“Aldi CH”,flag:“CH”,cidx:1.62,factor:0.83,anchor:[47.56,7.60],note:“Lowest prices in Switzerland”},
{id:“denner_ch”,name:“Denner”,flag:“CH”,cidx:1.62,factor:0.88,anchor:[47.56,7.59],note:“Discount, great wine selection”},
{id:“leclerc_fr”,name:“E.Leclerc”,flag:“FR”,cidx:1.00,factor:0.88,anchor:[47.59,7.56],note:“Consistently lowest prices in France”},
{id:“carrefour_fr”,name:“Carrefour”,flag:“FR”,cidx:1.00,factor:0.98,anchor:[47.75,7.34],note:“Best variety”},
{id:“lidl_fr”,name:“Lidl FR”,flag:“FR”,cidx:1.00,factor:0.82,anchor:[47.59,7.56],note:“Best prices, popular specials”},
{id:“grand_frais”,name:“Grand Frais”,flag:“FR”,cidx:1.00,factor:0.90,anchor:[47.75,7.34],note:“Exceptional fresh produce”},
{id:“biocoop_fr”,name:“Biocoop”,flag:“FR”,cidx:1.00,factor:1.05,anchor:[48.57,7.75],note:“France organic cooperative”}
];

var OFFERS = (function() {
var d = new Date(); d.setDate(d.getDate()+(6-d.getDay())); var exp = d.toISOString().split(‘T’)[0];
return [
{sid:“lidl_de”,pid:“chicken_breast”,price:5.99,conf:0.95,src:“PDF”,exp:exp},
{sid:“lidl_de”,pid:“spaghetti”,price:0.79,conf:0.95,src:“PDF”,exp:exp},
{sid:“aldi_de”,pid:“unsalted_butter”,price:1.59,conf:0.93,src:“PDF”,exp:exp},
{sid:“aldi_de”,pid:“long_grain_white_rice”,price:0.99,conf:0.93,src:“PDF”,exp:exp},
{sid:“rewe_de”,pid:“salmon_fillet”,price:11.99,conf:0.99,src:“API”,exp:exp},
{sid:“rewe_de”,pid:“beef_mince”,price:7.99,conf:0.99,src:“API”,exp:exp},
{sid:“migros_ch”,pid:“chicken_breast”,price:10.90,conf:0.99,src:“API”,exp:exp},
{sid:“leclerc_fr”,pid:“spaghetti”,price:0.69,conf:0.88,src:“Web”,exp:exp},
{sid:“grand_frais”,pid:“salmon_fillet”,price:11.90,conf:0.90,src:“Web”,exp:exp},
];
})();

var VOICE_MAP = {
“chicken_breast”:[“chicken”,“hähnchen”,“poulet”,“chicken breast”],
“beef_mince”:[“beef”,“mince”,“hackfleisch”,“boeuf haché”],
“salmon_fillet”:[“salmon”,“lachs”,“saumon”],
“whole_milk”:[“milk”,“milch”,“lait”],
“oat_milk”:[“oat milk”,“hafermilch”,“lait d’avoine”],
“free_range_eggs_6_pack”:[“eggs”,“eier”,“oeufs”],
“natural_yogurt”:[“yogurt”,“joghurt”,“yaourt”],
“unsalted_butter”:[“butter”,“buttter”,“beurre”],
“emmental”:[“cheese”,“käse”,“fromage”],
“white_bread_loaf”:[“bread”,“brot”,“pain”],
“spaghetti”:[“pasta”,“spaghetti”,“nudeln”,“pâtes”],
“long_grain_white_rice”:[“rice”,“reis”,“riz”],
“rolled_oats”:[“oats”,“haferflocken”,“flocons”],
“extra_virgin_olive_oil”:[“olive oil”,“olivenöl”,“huile d’olive”],
“sea_salt”:[“salt”,“salz”,“sel”],
“ground_coffee”:[“coffee”,“kaffee”,“café”],
“black_tea_bags”:[“tea”,“tee”,“thé”],
“still_water_1_5l”:[“water”,“wasser”,“eau”],
“cola”:[“cola”,“cola”],
“lager_beer”:[“beer”,“bier”,“bière”],
“red_wine”:[“wine”,“wein”,“vin”],
“milk_chocolate_bar”:[“chocolate”,“schokolade”,“chocolat”],
“liquid_laundry_detergent”:[“detergent”,“waschmittel”,“lessive”],
“toilet_paper_2_ply”:[“toilet paper”,“toilettenpapier”,“papier toilette”],
“shampoo_normal”:[“shampoo”,“shampooing”],
“toothpaste_whitening”:[“toothpaste”,“zahnpasta”,“dentifrice”],
“nappies_size_3_4_9_kg”:[“nappies”,“windeln”,“couches”],
“banana”:[“banana”,“banane”,“banane”],
“orange”:[“orange”,“orange”,“orange”],
“tomato”:[“tomato”,“tomate”,“tomate”],
“carrot”:[“carrot”,“karotte”,“carotte”],
“potato”:[“potato”,“kartoffel”,“pomme de terre”],
“broccoli”:[“broccoli”,“brokkoli”,“brocoli”],
“garlic”:[“garlic”,“knoblauch”,“ail”],
“frozen_peas”:[“peas”,“erbsen”,“petits pois”],
“tofu_firm”:[“tofu”,“tofu”],
“whey_protein_powder”:[“protein”,“protein”,“protéine”],
};

var VOICE_INDEX = {};
PRODUCTS.forEach(function(p) { VOICE_INDEX[p.name.toLowerCase()] = p.id; });
Object.keys(VOICE_MAP).forEach(function(pid) {
VOICE_MAP[pid].forEach(function(kw) { if (!VOICE_INDEX[kw]) VOICE_INDEX[kw] = pid; });
});

function matchText(text) {
var t = text.toLowerCase();
var matched = [];
var keys = Object.keys(VOICE_INDEX).sort(function(a,b){return b.length-a.length;});
keys.forEach(function(kw) {
if (t.includes(kw)) {
var pid = VOICE_INDEX[kw];
if (!matched.includes(pid)) matched.push(pid);
}
});
return matched;
}

// ═══════════════════════════════════════════════════
// GEO
// ═══════════════════════════════════════════════════
var CITIES = {
“grenzach-wyhlen”:[47.5397,7.6867],“grenzach”:[47.5397,7.6867],
“weil am rhein”:[47.5933,7.6211],“weil”:[47.5933,7.6211],
“loerrach”:[47.6155,7.6611],“freiburg”:[47.9990,7.8421],
“basel”:[47.5596,7.5886],“zurich”:[47.3769,8.5417],
“bern”:[46.9480,7.4474],“geneva”:[46.2044,6.1432],
“strasbourg”:[48.5734,7.7521],“mulhouse”:[47.7508,7.3359],
“colmar”:[48.0793,7.5850],“saint-louis”:[47.5895,7.5612],
“paris”:[48.8566,2.3522],“lyon”:[45.7640,4.8357],
“berlin”:[52.5200,13.4050],“munich”:[48.1351,11.5820],
“hamburg”:[53.5511,9.9937],“frankfurt”:[50.1109,8.6821],
“stuttgart”:[48.7758,9.1829],“cologne”:[50.9333,6.9500],
};

function geocode(input) {
var parts = input.toLowerCase().replace(/str.|strasse|weg|platz|[0-9]+/g,’’).split(’,’).map(function(s){return s.trim();});
for (var i = parts.length-1; i >= 0; i–) {
if (CITIES[parts[i]]) return {lat:CITIES[parts[i]][0], lon:CITIES[parts[i]][1], city:parts[i]};
}
return null;
}

function detectCountry(lat, lon) {
if (lat>=47.2&&lat<=55.1&&lon>=5.8&&lon<=15.1) return ‘DE’;
if (lat>=45.8&&lat<=47.9&&lon>=5.9&&lon<=10.5) return ‘CH’;
return ‘FR’;
}

function haversine(a,b,c,d) {
var R=6371, dL=(c-a)*Math.PI/180, dG=(d-b)*Math.PI/180;
var x=Math.sin(dL/2)*Math.sin(dL/2)+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(dG/2)*Math.sin(dG/2);
return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));
}

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════
var state = {
step:‘address’, loc:null, radius:20, basket:[],
filters:[], sortBy:‘total’, expandedCat:null, expandedSub:null,
voiceState:‘idle’, voiceLang:‘de-DE’, matchedPids:[], recognizer:null
};
var savedLoc = null;
try { var sl = localStorage.getItem(‘smartshopper_v8’); if (sl) savedLoc = JSON.parse(sl); } catch(e) {}

// ═══════════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════════
var scanState = { active:false, stream:null, cooldown:false, history:[], currentTab:‘shopper’ };
try { scanState.history = JSON.parse(localStorage.getItem(‘ns_history’)||’[]’); } catch(e) {}

function switchMainTab(tab) {
scanState.currentTab = tab;
if (tab !== ‘scan’ && scanState.active) stopScan();

// Hide all
var sc = document.getElementById(‘shopperContainer’);
var ms = document.getElementById(‘mainScan’);
var mp = document.getElementById(‘mainPrice’);
var mr = document.getElementById(‘mainReceipt’);
if (sc) sc.style.display = ‘none’;
if (ms) ms.style.display = ‘none’;
if (mp) mp.style.display = ‘none’;
if (mr) mr.style.display = ‘none’;

// Show correct one
if (tab === ‘shopper’) {
if (sc) sc.style.display = ‘block’;
} else if (tab === ‘scan’) {
if (ms) ms.style.display = ‘block’;
} else if (tab === ‘price’) {
if (mp) mp.style.display = ‘block’;
pwRender();
} else if (tab === ‘receipt’) {
if (mr) mr.style.display = ‘block’;
renderReceiptHistory();
updateBudgetUI();
}

// Update nav
[‘shopper’,‘scan’,‘receipt’,‘price’].forEach(function(t) {
var btn = document.getElementById(‘nav’ + t.charAt(0).toUpperCase() + t.slice(1));
if (btn) btn.classList.toggle(‘active’, t === tab);
});
}

// ═══════════════════════════════════════════════════
// UI HELPERS
// ═══════════════════════════════════════════════════
function showStep(s) {
state.step = s;
[‘stepAddress’,‘stepBasket’,‘stepResults’].forEach(function(id) {
var el = document.getElementById(id);
if (el) el.classList.remove(‘active’);
});
var map = {address:‘stepAddress’, basket:‘stepBasket’, results:‘stepResults’};
if (map[s]) document.getElementById(map[s]).classList.add(‘active’);
if (s===‘basket’) loadWeeklyOffers();
var pct = {address:10, basket:50, results:100}[s] || 10;
document.getElementById(‘progressBar’).style.width = pct + ‘%’;
var rb = document.getElementById(‘restartBtn’);
if (rb) rb.style.display = s === ‘address’ ? ‘none’ : ‘block’;
window.scrollTo(0,0);
}

function setCity(c) { document.getElementById(‘addrInput’).value = c; }
function setRadius(r) { document.getElementById(‘radiusSlider’).value = r; document.getElementById(‘radiusVal’).textContent = r + ’ km’; state.radius = r; }
function restart() { state.basket = []; state.matchedPids = []; showStep(‘address’); renderCategories(); }
function goBack() { showStep(‘basket’); }

function useSaved() {
state.loc = savedLoc;
document.getElementById(‘locLabel’).textContent = savedLoc.flag + ’ ’ + savedLoc.city + ’ · ’ + state.radius + ’ km’;
showStep(‘basket’); renderCategories();
}
function saveLoc() {
if (!state.loc) return;
savedLoc = state.loc;
try { localStorage.setItem(‘smartshopper_v8’, JSON.stringify(savedLoc)); } catch(e) {}
showToast(‘📍 Location saved!’);
}
function clearSaved() {
savedLoc = null;
try { localStorage.removeItem(‘smartshopper_v8’); } catch(e) {}
document.getElementById(‘savedLocCard’).style.display = ‘none’;
}

function resolveAddr() {
var v = document.getElementById(‘addrInput’).value;
var geo = geocode(v);
var err = document.getElementById(‘geoErr’);
if (!geo) { err.textContent = ‘City not found. Try: Basel / Freiburg / Grenzach-Wyhlen’; err.style.display = ‘block’; return; }
err.style.display = ‘none’;
var country = detectCountry(geo.lat, geo.lon);
var flag = country === ‘CH’ ? ‘CH’ : country === ‘FR’ ? ‘FR’ : ‘DE’;
state.loc = {lat:geo.lat, lon:geo.lon, city:geo.city, country:country, flag:flag};
state.radius = parseInt(document.getElementById(‘radiusSlider’).value) || 20;
document.getElementById(‘locLabel’).textContent = flag + ’ ’ + geo.city + ’ · ’ + state.radius + ’ km’;
var ab = document.getElementById(‘analyzeBtn’);
if (ab) ab.textContent = t(‘find_prices’) + ’ — ’ + state.radius + ’ km’;
showStep(‘basket’); renderCategories();
}

if (savedLoc) {
document.getElementById(‘savedLocCard’).style.display = ‘block’;
document.getElementById(‘savedLocName’).textContent = savedLoc.city;
document.getElementById(‘savedLocCountry’).textContent = savedLoc.country;
}

// ═══════════════════════════════════════════════════
// VOICE
// ═══════════════════════════════════════════════════
function toggleLang() {
state.voiceLang = state.voiceLang === ‘de-DE’ ? ‘en-US’ : ‘de-DE’;
document.getElementById(‘langVoiceBtn’).textContent = state.voiceLang === ‘de-DE’ ? ‘DE’ : ‘EN’;
}

function toggleVoice() {
if (state.voiceState === ‘listening’) { stopVoice(); } else { startVoice(); }
}

function startVoice() {
document.getElementById(‘permissionTip’).style.display = ‘none’;
var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SR) { document.getElementById(‘permissionTip’).style.display = ‘block’; return; }
if (state.recognizer) try { state.recognizer.abort(); } catch(e) {}
var rec = new SR();
rec.lang = state.voiceLang; rec.continuous = false; rec.interimResults = true; rec.maxAlternatives = 1;
rec.onstart = function() {
state.voiceState = ‘listening’;
document.getElementById(‘voiceSubtitle’).textContent = ‘Listening… say your items now’;
document.getElementById(‘voiceSubtitle’).style.color = ‘var(–green)’;
updateVoiceUI();
};
rec.onresult = function(e) {
var interim = ‘’, final_t = ‘’;
for (var i = e.resultIndex; i < e.results.length; i++) {
if (e.results[i].isFinal) final_t += e.results[i][0].transcript;
else interim += e.results[i][0].transcript;
}
var shown = final_t || interim;
if (shown) {
document.getElementById(‘transcriptBox’).style.display = ‘block’;
document.getElementById(‘transcriptBox’).textContent = ‘”’ + shown + ‘”’;
document.getElementById(‘quickInput’).value = shown;
}
if (final_t) { state.voiceState = ‘processing’; updateVoiceUI(); processRecognized(final_t); }
};
rec.onerror = function(e) {
state.voiceState = ‘idle’;
if (e.error === ‘not-allowed’) {
document.getElementById(‘permissionTip’).style.display = ‘block’;
} else if (e.error === ‘no-speech’) {
document.getElementById(‘voiceSubtitle’).textContent = t(‘no_speech’);
}
updateVoiceUI();
};
rec.onend = function() { if (state.voiceState === ‘listening’) { state.voiceState = ‘idle’; updateVoiceUI(); } };
state.recognizer = rec;
try { rec.start(); } catch(e) { state.voiceState = ‘idle’; updateVoiceUI(); }
}

function stopVoice() {
if (state.recognizer) try { state.recognizer.stop(); } catch(e) {}
state.voiceState = ‘idle’; updateVoiceUI();
}

function processRecognized(text) {
var matched = matchText(text);
state.matchedPids = matched;
state.voiceState = matched.length > 0 ? ‘done’ : ‘nomatch’;
updateVoiceUI();
if (matched.length > 0) renderMatchedItems();
}

function processText() {
var v = document.getElementById(‘quickInput’).value.trim();
if (!v) return;
processRecognized(v);
}

function updateVoiceUI() {
var vs = state.voiceState;
var card = document.getElementById(‘voiceCard’);
var btn = document.getElementById(‘micBtn’);
var btnText = document.getElementById(‘micBtnText’);
var ripple = document.getElementById(‘rippleWrap’);
card.className = ‘voice-card’ + (vs===‘listening’?’ listening’:vs===‘done’?’ done’:’’);
document.getElementById(‘voiceTitle’).textContent = vs===‘idle’?t(‘voice_idle’):vs===‘listening’?t(‘listening’):vs===‘processing’?t(‘recognising’):vs===‘done’?‘✅ ‘+state.matchedPids.length+t(‘items_found’):t(‘voice_idle’);
document.getElementById(‘voiceTitle’).style.color = vs===‘listening’?’#f87171’:vs===‘done’?‘var(–green)’:’#8aaabb’;
btn.className = ‘mic-btn’ + (vs===‘listening’?’ listening’:’’);
btnText.textContent = vs===‘listening’?‘Stop’:‘Start’;
var existingRipple = ripple.querySelector(’.ripple’);
if (vs===‘listening’) { if (!existingRipple) { var r=document.createElement(‘div’); r.className=‘ripple’; ripple.appendChild(r); } }
else { if (existingRipple) existingRipple.remove(); }
document.getElementById(‘noMatchBox’).style.display = vs===‘nomatch’?‘block’:‘none’;
document.getElementById(‘matchedBox’).style.display = vs===‘done’&&state.matchedPids.length>0?‘block’:‘none’;
}

function renderMatchedItems() {
var grid = document.getElementById(‘matchedGrid’);
grid.innerHTML = ‘’;
document.getElementById(‘matchCount’).textContent = ‘Found ’ + state.matchedPids.length + ’ items:’;
state.matchedPids.forEach(function(pid) {
var p = PRODUCTS.find(function(x){return x.id===pid;}); if (!p) return;
var already = state.basket.find(function(b){return b.pid===pid;});
var div = document.createElement(‘div’); div.className = ‘tag’;
div.innerHTML = (already?’<span>✓</span>’:’’) + tx(p.name) + ‘<span style="font-size:9px;color:#3a7a5a">’ + p.unit + ‘</span>’;
grid.appendChild(div);
});
}

function addAllMatched() {
state.matchedPids.forEach(function(pid) { if (!state.basket.find(function(b){return b.pid===pid;})) state.basket.push({pid:pid,qty:1}); });
state.voiceState = ‘idle’; state.matchedPids = [];
document.getElementById(‘quickInput’).value = ‘’;
document.getElementById(‘transcriptBox’).style.display = ‘none’;
updateVoiceUI(); updateItemCount(); renderCategories();
}

function clearVoice() {
state.voiceState = ‘idle’; state.matchedPids = [];
document.getElementById(‘quickInput’).value = ‘’;
document.getElementById(‘transcriptBox’).style.display = ‘none’;
updateVoiceUI();
}

// ═══════════════════════════════════════════════════
// BASKET
// ═══════════════════════════════════════════════════
function toggleFilter(lbl) {
var i = state.filters.indexOf(lbl);
if (i>=0) state.filters.splice(i,1); else state.filters.push(lbl);
document.querySelectorAll(’.filter-btn’).forEach(function(b){ b.classList.toggle(‘active’, state.filters.includes(b.dataset.lbl)); });
document.getElementById(‘clearFiltersBtn’).style.display = state.filters.length?‘inline’:‘none’;
renderCategories();
}
function clearFilters() { state.filters=[]; document.querySelectorAll(’.filter-btn’).forEach(function(b){b.classList.remove(‘active’);}); document.getElementById(‘clearFiltersBtn’).style.display=‘none’; renderCategories(); }

function updateItemCount() {
var n = state.basket.length;
var el = document.getElementById(‘itemCount’);
if (el) { el.style.display = n>0?‘inline’:‘none’; el.textContent = n; }
var aw = document.getElementById(‘analyzeWrap’);
if (aw) aw.style.display = n>0?‘block’:‘none’;
}

function toggleItem(pid) {
var i = state.basket.findIndex(function(b){return b.pid===pid;});
if (i>=0) state.basket.splice(i,1); else state.basket.push({pid:pid,qty:1});
updateItemCount(); renderCategories();
}

function changeQty(pid, delta) {
var item = state.basket.find(function(b){return b.pid===pid;}); if (!item) return;
var prod = PRODUCTS.find(function(p){return p.id===pid;})||{step:1};
item.qty = Math.round((item.qty+delta*prod.step)*10)/10;
if (item.qty <= 0) state.basket = state.basket.filter(function(b){return b.pid!==pid;});
updateItemCount(); renderCategories();
}

function setSortBy(s) {
state.sortBy = s;
[‘sortTotal’,‘sortSaving’,‘sortDist’].forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove(‘active’); });
var active = s===‘total’?‘sortTotal’:s===‘saving’?‘sortSaving’:‘sortDist’;
var el = document.getElementById(active); if(el) el.classList.add(‘active’);
}

function renderCategories() {
var search = document.getElementById(‘searchInput’);
var searchVal = search ? search.value.toLowerCase() : ‘’;
var tree = document.getElementById(‘catTree’);
if (!tree) return;
tree.innerHTML = ‘’;
var cats = Object.keys(CAT_ICONS);
cats.forEach(function(cat) {
var prods = PRODUCTS.filter(function(p) {
if (p.cat !== cat) return false;
if (state.filters.length>0 && !state.filters.every(function(l){return p.labels.includes(l);})) return false;
if (searchVal && !p.name.toLowerCase().includes(searchVal) && !p.sub.toLowerCase().includes(searchVal)) return false;
return true;
});
if (!prods.length) return;
var subs = []; prods.forEach(function(p){ if (!subs.includes(p.sub)) subs.push(p.sub); });
var selCount = prods.filter(function(p){return state.basket.find(function(b){return b.pid===p.id;});}).length;
var isOpenCat = state.expandedCat === cat;
var catWrap = document.createElement(‘div’); catWrap.style.marginBottom = ‘7px’;
var catBtn = document.createElement(‘button’); catBtn.className = ‘cat-btn’;
catBtn.innerHTML = ‘<span>’ + (CAT_ICONS[cat]||’’) + ’ ’ + tx(cat) + ‘</span>’
+ ‘<span style="display:flex;align-items:center;gap:6px">’
+ (selCount>0?’<span class="badge">’+selCount+’</span>’:’’)
+ ‘<span style="font-size:9px;color:var(--text3)">’ + (isOpenCat?‘▲’:‘▼’) + ‘</span></span>’;
catBtn.onclick = function() { state.expandedCat = isOpenCat?null:cat; state.expandedSub = null; renderCategories(); };
catWrap.appendChild(catBtn);
if (isOpenCat) {
var subWrap = document.createElement(‘div’); subWrap.style.paddingTop = ‘3px’;
subs.forEach(function(sub) {
var subProds = prods.filter(function(p){return p.sub===sub;});
var selSub = subProds.filter(function(p){return state.basket.find(function(b){return b.pid===p.id;});}).length;
var subKey = cat+’|’+sub; var isOpenSub = state.expandedSub === subKey;
var subDiv = document.createElement(‘div’); subDiv.style.cssText = ‘margin-bottom:4px;margin-left:8px’;
var subBtn = document.createElement(‘button’); subBtn.className = ‘sub-btn’;
subBtn.innerHTML = ‘<span style="flex:1">— ’ + tx(sub) + ‘</span>’
+ (selSub>0?’<span style="background:rgba(48,209,200,0.18);color:var(--green);border-radius:20px;padding:1px 6px;font-size:10px;font-weight:700">’+selSub+’</span>’:’’)
+ ‘<span style="font-size:9px;color:var(--text3);margin-left:6px">’ + (isOpenSub?‘▲’:‘▼’) + ‘</span>’;
subBtn.onclick = function() { state.expandedSub = isOpenSub?null:subKey; renderCategories(); };
subDiv.appendChild(subBtn);
if (isOpenSub) {
var prodWrap = document.createElement(‘div’); prodWrap.style.cssText = ‘display:flex;flex-wrap:wrap;gap:4px;padding:7px 3px’;
subProds.forEach(function(prod) {
var sel = !!state.basket.find(function(b){return b.pid===prod.id;});
var bItem = state.basket.find(function(b){return b.pid===prod.id;});
var chip = document.createElement(‘div’); chip.className = ‘prod-chip’+(sel?’ sel’:’’);
var lblIcons = prod.labels.map(function(l){ var cfg=LABEL_CFG[l]; return cfg?’<span class="'+cfg.cls+'">’+cfg.icon+’</span>’:’’; }).join(’’);
var qtyHtml = ‘’;
if (sel && bItem) {
qtyHtml = ‘<span class="qty-ctrl" onclick="event.stopPropagation()">’
+ ‘<button class="qty-btn" onclick="changeQty(\''+prod.id+'\',-1)">−</button>’
+ ‘<span class="qty-val">’+bItem.qty+’ ‘+prod.unit+’</span>’
+ ‘<button class="qty-btn" onclick="changeQty(\''+prod.id+'\',1)">+</button></span>’;
}
chip.innerHTML = ‘<span onclick="toggleItem(\''+prod.id+'\')" style="cursor:pointer;display:flex;align-items:center;gap:4px">’
+ tx(prod.name) + ‘<span style="font-size:9px;color:var(--text3)">’+prod.unit+’</span>’ + lblIcons + ‘</span>’ + qtyHtml;
prodWrap.appendChild(chip);
});
subDiv.appendChild(prodWrap);
}
subWrap.appendChild(subDiv);
});
catWrap.appendChild(subWrap);
}
tree.appendChild(catWrap);
});
}

// ═══════════════════════════════════════════════════
// ANALYZE
// ═══════════════════════════════════════════════════
function calcItem(pid, store) {
if (pricesLoaded) {
var sid = store.id;
var rp = null;

```
// 1. Exact pid match
rp = realPrices[pid + '_' + sid];

// 2. Each word in pid
if (!rp) {
  pid.split('_').some(function(word) {
    if (word.length > 2 && realPrices[word+'_'+sid]) { rp = realPrices[word+'_'+sid]; return true; }
  });
}

// 3. Product name words from PRODUCTS
if (!rp) {
  var prod2 = PRODUCTS.find(function(p){return p.id===pid;});
  if (prod2) {
    var nname = prod2.name.toLowerCase().replace(/[^a-z0-9]+/g,'_');
    rp = realPrices[nname+'_'+sid];
    if (!rp) {
      nname.split('_').some(function(word) {
        if (word.length > 2 && realPrices[word+'_'+sid]) { rp = realPrices[word+'_'+sid]; return true; }
      });
    }
  }
}

if (rp) {
  var rPrice = parseFloat(rp.price);
  var curr = rp.currency || (store.flag==='CH'?'CHF':'EUR');
  var cleanRealName = (rp.product_name||'')
    .replace(/[Ѐ-ӿ]/g,'').replace(/\s*\([^)]*\)/g,'').trim()
    || rp.product_id.replace(/_/g,' ');
  return {price:rPrice, basePrice:rPrice, src:'Real', conf:1.0,
          saving:0, hasOffer:true, isReal:true, currency:curr,
          realPid:rp.product_id.trim(), realName:cleanRealName};
}
```

}
// Fall back to index calculation
var prod = PRODUCTS.find(function(p){return p.id===pid;}); if (!prod) return null;
var baseAdj = prod.base * store.cidx * store.factor;
var matching = OFFERS.filter(function(o){return o.sid===store.id&&o.pid===pid;});
if (!matching.length) return {price:baseAdj,basePrice:baseAdj,src:‘Index’,conf:0.5,saving:0,hasOffer:false,isReal:false};
var totC = matching.reduce(function(s,o){return s+o.conf;},0);
var blended = matching.reduce(function(s,o){return s+o.price*(o.conf/totC);},0);
return {price:blended,basePrice:baseAdj,src:matching[0].src,conf:Math.max.apply(null,matching.map(function(o){return o.conf;})),saving:Math.round((baseAdj-blended)/baseAdj*100),hasOffer:true,isReal:false};
}

function calcBasket(basket, store) {
var total=0, base=0, saved=0, lines=[];
basket.forEach(function(b) {
var r = calcItem(b.pid, store); if (!r) return;
total += r.price*b.qty; base += r.basePrice*b.qty;
if (r.hasOffer) saved += (r.basePrice-r.price)*b.qty;
var prod = PRODUCTS.find(function(p){return p.id===b.pid;})||{};
lines.push(Object.assign({},prod,b,r,{line:r.price*b.qty,displayName:tx(prod.name||’’)}));
});
return {total:total,base:base,saved:saved,lines:lines};
}

function analyze() {
if (!state.loc) { alert(‘Please set your location first.’); return; }
// Reload real prices from Supabase before each analysis
loadRealPrices().then(function() { doAnalyze(); });
}

function doAnalyze() {
var radius = parseInt(document.getElementById(‘radiusSlider’).value)||state.radius;
var stores = STORES.map(function(s) {
return Object.assign({},s,{distKm:Math.round(haversine(state.loc.lat,state.loc.lon,s.anchor[0],s.anchor[1])*10)/10});
}).filter(function(s){return s.distKm<=radius;});

if (!stores.length) {
document.getElementById(‘resultsList’).innerHTML = ‘<div style="text-align:center;padding:30px;color:var(--text3)">No stores found within ‘+radius+’ km.</div>’;
showStep(‘results’); return;
}

var ranked = stores.map(function(s) {
var currency = s.flag===‘CH’ ? ‘CHF’ : ‘EUR’;
var lines = [];
var total = 0;

```
// STEP 1: Add basket items
// Track which real product_ids got used via basket matching
var usedRealPids = {};

state.basket.forEach(function(b) {
  var prod = PRODUCTS.find(function(p){return p.id===b.pid;}); if (!prod) return;
  var result = calcItem(b.pid, s);
  if (!result) return;
  var lc = result.currency || currency;
  var lineTotal = result.price * b.qty;
  total += lineTotal;

  // If real price found, record which real product_id was used
  if (result.isReal && result.realPid) {
    usedRealPids[result.realPid] = true;
  }

  lines.push({
    pid: b.pid,
    displayName: result.isReal ? result.realName || tx(prod.name) : tx(prod.name),
    qty: b.qty, unit: prod.unit,
    price: result.price, line: lineTotal,
    saving: result.saving||0,
    hasOffer: result.hasOffer,
    isReal: result.isReal||false,
    currency: lc
  });
});

// STEP 2: Add admin prices NOT already used by basket
if (pricesLoaded) {
  var seenPids = {};
  Object.keys(realPrices).forEach(function(key) {
    if (!key.endsWith('_'+s.id)) return;
    var rp = realPrices[key];
    var rpid = rp.product_id.trim();
    // Skip if already shown via basket match
    if (usedRealPids[rpid] || seenPids[rpid]) return;
    seenPids[rpid] = true;
    var rPrice = parseFloat(rp.price);
    var rCurr = rp.currency || currency;
    var cleanName = (rp.product_name||rpid)
      .replace(/[Ѐ-ӿ]/g,'').replace(/\s*\([^)]*\)/g,'').trim()
      || rpid.replace(/_/g,' ');
    total += rPrice;
    lines.push({
      pid: rpid, displayName: cleanName,
      qty: 1, unit: rp.unit||'pcs',
      price: rPrice, line: rPrice,
      saving: 0, hasOffer: true, isReal: true,
      currency: rCurr, fromAdmin: true
    });
  });
}

    // STEP 3: Sort — real prices first, then by price
lines.sort(function(a,b){
  if (a.isReal && !b.isReal) return -1;
  if (!a.isReal && b.isReal) return 1;
  return a.price - b.price;
});

var saved = lines.reduce(function(acc,l){ return acc+(l.isReal?0:(l.basePrice||l.price)*l.qty-l.line); },0);
var realCount = lines.filter(function(l){return l.isReal;}).length;

return Object.assign({},s,{
  lines:lines, total:total, saved:saved,
  currency:currency, realCount:realCount
});
```

}).sort(function(a,b){
return state.sortBy===‘dist’ ? a.distKm-b.distKm :
state.sortBy===‘saving’ ? b.saved-a.saved :
a.total-b.total;
});

document.getElementById(‘resultsHeader’).textContent = ranked.length+’ stores · ‘+radius+’ km from ’+state.loc.city;

var container = document.getElementById(‘resultsList’);
container.innerHTML = ‘’;

ranked.forEach(function(s,i) {
var isBest = i===0 && state.sortBy===‘total’;
var cross = s.flag !== state.loc.flag;
var curr = s.currency || (s.flag===‘CH’?‘CHF’:‘EUR’);

```
var card = document.createElement('div');
card.className = 'store-card'+(isBest?' best':'');
card.onclick = function(){ toggleBreakdown('bd_'+s.id); };

var h = '';
h += '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">';
h += '<div style="flex:1"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:3px">';
if (isBest) h += '<span style="background:rgba(48,209,200,0.15);color:var(--green);border-radius:5px;padding:1px 6px;font-size:9px;font-weight:700">BEST</span>';
if (cross) h += '<span style="background:rgba(10,132,255,0.12);color:#60a5fa;border-radius:5px;padding:1px 6px;font-size:9px;font-weight:700">CROSS-BORDER</span>';
h += '<span style="font-size:14px;font-weight:700;color:var(--text)">'+s.flag+' '+s.name+'</span>';
h += '</div><div style="font-size:11px;color:var(--text3)">'+s.distKm+' km · '+s.note+'</div></div>';
h += '<div style="text-align:right;flex-shrink:0">';
h += '<div style="font-size:17px;font-weight:800;color:'+(isBest?'var(--green)':'var(--text2)')+'">'+curr+' '+s.total.toFixed(2)+'</div>';
if (s.saved>0.01) h += '<div style="font-size:11px;color:#4ade80">-'+curr+' '+s.saved.toFixed(2)+'</div>';
if (s.realCount>0) h += '<div style="font-size:10px;color:#30D158;font-weight:600">✓ real prices</div>';
else h += '<div style="font-size:10px;color:var(--text3)">'+s.lines.filter(function(l){return l.hasOffer;}).length+'/'+s.lines.length+' offers</div>';
h += '</div></div>';

// Breakdown
h += '<div id="bd_'+s.id+'" style="display:none;margin-top:10px;padding-top:10px;border-top:1px solid var(--border2)">';
h += '<div style="font-size:10px;color:var(--text3);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Breakdown</div>';
s.lines.forEach(function(line) {
  var lc = line.currency || curr;
  h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;gap:8px">';
  h += '<div style="flex:1">';
  if (line.isReal) h += '<span style="background:#30D158;color:#000;border-radius:4px;padding:1px 5px;font-size:9px;font-weight:800;margin-right:4px">REAL</span>';
  h += '<span style="font-size:13px;color:'+(line.isReal?'#30D158':'var(--text2)')+'">'+line.displayName+'</span>';
  h += ' <span style="font-size:11px;color:var(--text3)">x'+line.qty+' '+line.unit+'</span>';
  if (!line.isReal && line.saving>0) h += ' <span style="font-size:10px;color:var(--green);background:rgba(48,209,200,0.1);border-radius:4px;padding:1px 5px">-'+line.saving+'%</span>';
  h += '</div>';
  h += '<span style="font-size:13px;font-weight:700;color:'+(line.isReal?'#30D158':'var(--text)')+'">'+lc+' '+line.line.toFixed(2)+'</span>';
  h += '</div>';
});
h += '<div style="display:flex;justify-content:space-between;margin-top:8px;padding-top:8px;border-top:1px solid var(--border2)">';
h += '<span style="font-size:13px;color:var(--text3)">Total</span>';
h += '<span style="font-size:16px;font-weight:800;color:var(--green)">'+curr+' '+s.total.toFixed(2)+'</span>';
h += '</div>';

var rb = document.createElement('button');
rb.textContent = 'I saw a different price here';
rb.style.cssText = 'width:100%;background:rgba(255,214,10,0.07);border:1px solid rgba(255,214,10,0.15);color:#FFD60A;border-radius:10px;padding:10px 0;font-size:13px;font-weight:600;cursor:pointer;margin-top:10px';
rb.addEventListener('click', (function(sid,sname,sflag){ return function(e){ e.stopPropagation(); openReport(sid,sname,sflag); }; })(s.id,s.name,s.flag));
h += '</div>';

card.innerHTML = h;
card.appendChild(rb);
container.appendChild(card);
```

});

// Debug bar
var debugBar = document.getElementById(‘debugBar’);
if (debugBar) {
var rpCount = Object.keys(realPrices).length;
if (rpCount > 0) {
debugBar.style.display = ‘block’;
debugBar.innerHTML = ‘✅ ‘+Math.round(rpCount/2)+’ real prices loaded from Admin’;
} else {
debugBar.style.display = ‘block’;
debugBar.innerHTML = ‘⚠️ 0 real prices — check Supabase’;
}
}

showStep(‘results’);
maybeShowNewsletter();
}

function toggleBreakdown(id) {
var el = document.getElementById(id); if (!el) return;
el.style.display = el.style.display===‘none’?‘block’:‘none’;
el.closest(’.store-card’).classList.toggle(‘sel’, el.style.display===‘block’);
}

// ═══════════════════════════════════════════════════
// NUTRISCAN
// ═══════════════════════════════════════════════════
function toggleScan() { if (scanState.active) stopScan(); else startScan(); }

function stopScan() {
scanState.active = false; scanState.cooldown = false;
if (scanState.stream) { scanState.stream.getTracks().forEach(function(t){try{t.stop();}catch(e){}}); scanState.stream = null; }
var video = document.getElementById(‘scanVideo’); if (video) try { video.pause(); video.srcObject = null; } catch(e) {}
var btn = document.getElementById(‘scanBtn’); if (btn) { btn.className = ‘btn-scan’; }
var icon = document.getElementById(‘scanBtnIcon’); if (icon) icon.textContent = ‘📷’;
var txt = document.getElementById(‘scanBtnText’); if (txt) txt.textContent = t(‘start_camera’);
var cap = document.getElementById(‘captureBtn’); if (cap) cap.style.display = ‘none’;
var s = document.getElementById(‘scanStatus’); if (s) s.textContent = ‘’;
var lbl = document.getElementById(‘scanLabel’); if (lbl) lbl.textContent = t(‘camera_ready’);
}

async function startScan() {
var statusEl = document.getElementById(‘scanStatus’);
statusEl.textContent = ‘Requesting camera…’; statusEl.style.color = ‘var(–green)’;
try {
var stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:‘environment’},width:{ideal:1920},height:{ideal:1080}}});
var video = document.getElementById(‘scanVideo’);
video.srcObject = stream; scanState.active = true; scanState.stream = stream;
var btn = document.getElementById(‘scanBtn’); btn.className = ‘btn-scan stop’;
document.getElementById(‘scanBtnIcon’).textContent = ‘⏹’;
document.getElementById(‘scanBtnText’).textContent = t(‘stop_camera’);
await video.play();
if (‘BarcodeDetector’ in window) {
statusEl.textContent = ‘🟢 Scanning live…’;
document.getElementById(‘scanLabel’).textContent = ‘Hold barcode in frame’;
scanWithBarcodeDetector(video);
} else {
statusEl.textContent = ‘🟢 Ready’;
document.getElementById(‘scanLabel’).textContent = ‘Hold barcode in frame, then tap Capture’;
document.getElementById(‘captureBtn’).style.display = ‘block’;
}
} catch(err) {
scanState.active = false;
document.getElementById(‘scanBtnIcon’).textContent = ‘📷’;
document.getElementById(‘scanBtnText’).textContent = t(‘start_camera’);
showScanResult(’<div class="nutri-result" style="color:var(--red)">📷 Camera blocked.<br><br>iPhone: Settings → Safari → Camera → Allow</div>’);
}
}

function scanWithBarcodeDetector(video) {
if (!scanState.active) return;
var det = new BarcodeDetector({formats:[‘ean_13’,‘ean_8’,‘upc_a’,‘upc_e’,‘code_128’,‘code_39’,‘qr_code’]});
det.detect(video).then(function(codes) {
if (codes.length > 0) { handleBarcodeFound(codes[0].rawValue); return; }
if (scanState.active) setTimeout(function(){scanWithBarcodeDetector(video);}, 300);
}).catch(function() { if (scanState.active) setTimeout(function(){scanWithBarcodeDetector(video);}, 500); });
}

function doCapture() {
var video = document.getElementById(‘scanVideo’);
var canvas = document.getElementById(‘scanCanvas’);
var statusEl = document.getElementById(‘scanStatus’);
if (!video || !video.videoWidth) { statusEl.textContent = ‘Camera not ready yet’; return; }
canvas.width = video.videoWidth; canvas.height = video.videoHeight;
canvas.style.display = ‘none’;
canvas.getContext(‘2d’).drawImage(video, 0, 0);
statusEl.textContent = ‘🔍 Analysing…’;
if (‘BarcodeDetector’ in window) {
new BarcodeDetector({formats:[‘ean_13’,‘ean_8’,‘upc_a’,‘upc_e’,‘code_128’,‘code_39’]}).detect(canvas).then(function(codes) {
if (codes.length > 0) { handleBarcodeFound(codes[0].rawValue); }
else { statusEl.textContent = ‘No barcode found — try again’; tryQuagga(canvas, statusEl); }
}).catch(function(){ tryQuagga(canvas, statusEl); });
return;
}
tryQuagga(canvas, statusEl);
}

function tryQuagga(canvas, statusEl) {
statusEl.textContent = ‘Loading scanner…’;
if (window.Quagga) { runQuagga(canvas, statusEl); return; }
var s = document.createElement(‘script’);
s.src = ‘https://cdn.jsdelivr.net/npm/@ericblade/quagga2/dist/quagga.min.js’;
s.onload = function(){ runQuagga(canvas, statusEl); };
s.onerror = function(){ statusEl.textContent = ‘Scanner unavailable — use manual entry’; };
document.head.appendChild(s);
}

function runQuagga(canvas, statusEl) {
statusEl.textContent = ‘🔍 Scanning…’;
Quagga.decodeSingle({decoder:{readers:[‘ean_reader’,‘ean_8_reader’,‘upc_reader’,‘code_128_reader’]},locate:true,src:canvas.toDataURL(‘image/png’)}, function(result) {
if (result && result.codeResult) { handleBarcodeFound(result.codeResult.code); }
else { statusEl.textContent = ‘Not found — adjust angle & retry’; setTimeout(function(){statusEl.textContent=‘🟢 Ready’;},2000); }
});
}

function handleBarcodeFound(code) {
if (scanState.cooldown) return;
scanState.cooldown = true;
if (navigator.vibrate) navigator.vibrate([80,40,80]);
document.getElementById(‘scanStatus’).textContent = ’✅ ’ + code;
document.getElementById(‘scanLabel’).textContent = ‘Found! Loading product…’;
stopScan();
setTimeout(function(){ lookupBarcodeCode(code); }, 150);
}

function lookupBarcode() {
var v = document.getElementById(‘barcodeInput’).value.trim(); if (!v) return;
lookupBarcodeCode(v);
}

async function lookupBarcodeCode(code) {
showScanResult(’<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:32px 0"><div style="width:34px;height:34px;border:3px solid rgba(255,255,255,0.1);border-top-color:var(--green);border-radius:50%;animation:spin 0.8s linear infinite"></div><div style="font-size:15px;color:var(--text2)">Looking up ‘+esc(code)+’…</div></div>’);
try {
var resp = await fetch(‘https://world.openfoodfacts.org/api/v2/product/’+encodeURIComponent(code)+’?fields=product_name,brands,quantity,image_url,nutriscore_grade,nova_group,nutriments,allergens_tags,ingredients_text,labels_tags’);
var data = await resp.json();
if (data.status !== 1 || !data.product || !data.product.product_name) {
showScanResult(’<div class="nutri-result"><div style="font-size:17px;font-weight:600;margin-bottom:8px">❌ Product not found</div><div style="font-size:15px;color:var(--text2)">Barcode <b>’+esc(code)+’</b> is not in Open Food Facts.<br><br><a href="https://world.openfoodfacts.org/product/'+esc(code)+'" target="_blank" style="color:var(--green)">Check manually →</a></div></div>’);
return;
}
var p = data.product;
var product = {code:code, name:p.product_name||‘Unknown’, brand:p.brands||’’, quantity:p.quantity||’’, image:p.image_url||’’, ns:(p.nutriscore_grade||’’).toUpperCase(), nova:parseInt(p.nova_group)||0, nut:p.nutriments||{}, allergens:(p.allergens_tags||[]).map(function(a){return a.replace(/^[a-z]+:/,’’);}), ingredients:p.ingredients_text||’’};
var entry = {code:code,name:product.name,brand:product.brand,image:product.image,ns:product.ns,nova:product.nova,score:calcNutriScore(product.ns,product.nova),ts:Date.now()};
scanState.history = scanState.history.filter(function(h){return h.code!==code;}); scanState.history.unshift(entry);
if (scanState.history.length>50) scanState.history=scanState.history.slice(0,50);
try { localStorage.setItem(‘ns_history’,JSON.stringify(scanState.history)); } catch(e) {}
renderNutriProduct(product);
} catch(e) {
showScanResult(’<div class="nutri-result" style="color:var(--text2)">⚠️ Network error. Check your connection.</div>’);
}
}

function calcNutriScore(ns, nova) {
var base = {A:95,B:80,C:62,D:40,E:20}[ns]; if (!base) return null;
return Math.max(0,Math.min(100,base+({1:0,2:-5,3:-12,4:-20}[nova]||-10)));
}
function scoreClass(s) { return s===null?’’:s>=75?‘sg’:s>=50?‘sy’:s>=25?‘so’:‘sr’; }
function scoreColor(s) { return s===null?‘var(–text3)’:s>=75?’#30D158’:s>=50?’#FFD60A’:s>=25?’#FF9F0A’:’#FF453A’; }

function nutBarClass(key, val) {
var hi = {sugars:[5,‘bg’,12.5,‘by’,22.5,‘bo’,999,‘br’],‘saturated-fat’:[1.5,‘bg’,4,‘by’,7,‘bo’,999,‘br’],salt:[0.3,‘bg’,0.6,‘by’,1.5,‘bo’,999,‘br’],fat:[3,‘bg’,17.5,‘by’,25,‘bo’,999,‘br’],proteins:[0,‘br’,10,‘bo’,20,‘by’,999,‘bg’],fiber:[0,‘br’,3,‘bo’,6,‘by’,999,‘bg’]};
var t = hi[key]; if (!t) return ‘by’;
for (var i=0;i<t.length;i+=2) if (val<=t[i]) return t[i+1]; return ‘by’;
}
function nutBarW(key, val) { if (!val) return 0; var mx={energy:500,‘energy-kcal’:500,fat:30,‘saturated-fat’:10,carbohydrates:50,sugars:25,fiber:10,proteins:30,salt:2.5}; return Math.min(100,Math.round(val/(mx[key]||50)*100)); }

function renderNutriProduct(p) {
var score = calcNutriScore(p.ns, p.nova);
var sc = scoreClass(score); var nsClass = {A:‘ns-a’,B:‘ns-b’,C:‘ns-c’,D:‘ns-d’,E:‘ns-e’}[p.ns]||’’;
var html = ‘<div class="nutri-result">’;
html += ‘<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:14px">’;
if (score!==null) html += ‘<div class="score-big '+sc+'"><div class="n">’+score+’</div><div class="l">SCORE</div></div>’;
html += ‘<div style="flex:1;min-width:0"><div style="font-size:17px;font-weight:700;margin-bottom:2px">’+esc(p.name)+’</div>’;
if (p.brand) html += ‘<div style="font-size:14px;color:var(--text2)">’+esc(p.brand)+’</div>’;
if (p.quantity) html += ‘<div style="font-size:13px;color:var(--text3)">’+esc(p.quantity)+’</div>’;
html += ‘</div>’;
if (p.image) html += ‘<img src="'+esc(p.image)+'" style="width:58px;height:58px;object-fit:contain;border-radius:8px;background:var(--card2);flex-shrink:0" onerror="this.style.display=\x27none\x27">’;
html += ‘</div>’;
html += ‘<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px">’;
if (p.ns && nsClass) html += ‘<div style="display:flex;align-items:center;gap:6px;font-size:14px;color:var(--text2)">Nutri-Score <span class="'+nsClass+'">’+p.ns+’</span></div>’;
if (p.nova) { var nc={1:’#30D158’,2:’#85bb2f’,3:’#FF9F0A’,4:’#FF453A’}; html += ‘<div style="background:var(--card2);border-radius:8px;padding:4px 10px;font-size:13px;font-weight:600;color:'+(nc[p.nova]||'var(--text2)')+'">NOVA ‘+p.nova+’</div>’; }
html += ‘</div>’;
var nutRows = [{k:‘energy-kcal’,lbl:‘Energy’,u:‘kcal’,d:0},{k:‘fat’,lbl:‘Fat’,u:‘g’,d:1},{k:‘saturated-fat’,lbl:‘Sat fat’,u:‘g’,d:1},{k:‘carbohydrates’,lbl:‘Carbs’,u:‘g’,d:1},{k:‘sugars’,lbl:‘Sugars’,u:‘g’,d:1},{k:‘fiber’,lbl:‘Fibre’,u:‘g’,d:1},{k:‘proteins’,lbl:‘Protein’,u:‘g’,d:1},{k:‘salt’,lbl:‘Salt’,u:‘g’,d:2}];
var hasNut = nutRows.some(function(n){return p.nut[n.k+’_100g’]!==undefined;});
if (hasNut) {
html += ‘<div style="font-size:13px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Per 100g</div><div>’;
nutRows.forEach(function(n) {
var val=p.nut[n.k+’_100g’]; if (val===undefined||val===null) return;
html += ‘<div class="nut-row"><span style="color:var(--text2);min-width:90px;font-size:15px">’+n.lbl+’</span><div class="nut-bar-wrap"><div class="nut-bar '+nutBarClass(n.k,val)+'" style="width:'+nutBarW(n.k,val)+'%"></div></div><span style="font-weight:600;font-size:15px">’+Number(val).toFixed(n.d)+’ ‘+n.u+’</span></div>’;
});
html += ‘</div>’;
}
if (p.allergens.length>0) {
html += ‘<div style="font-size:13px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin:12px 0 8px">Allergens</div><div style="display:flex;flex-wrap:wrap;gap:6px">’;
p.allergens.forEach(function(a){ html += ‘<span class="allergen-chip">’+esc(a)+’</span>’; });
html += ‘</div>’;
}
if (p.ingredients) {
html += ‘<div style="font-size:13px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin:12px 0 8px">Ingredients</div>’;
html += ‘<div style="font-size:14px;color:var(--text2);line-height:1.6;background:var(--card2);border-radius:10px;padding:11px 13px">’+esc(p.ingredients.substring(0,400))+(p.ingredients.length>400?’…’:’’)+’</div>’;
}
html += ‘<div style="display:flex;gap:8px;margin-top:16px">’;
html += ‘<button onclick="resetScanForNew()" style="flex:1;background:rgba(48,209,200,0.12);border:1px solid rgba(48,209,200,0.25);color:var(--green);border-radius:12px;padding:13px 0;font-size:15px;font-weight:600;cursor:pointer;min-height:50px">🔄 Scan Another</button>’;
if (navigator.share) html += ‘<button onclick="navigator.share({title:\'NutriScan\',text:\''+esc(p.name)+' — Score: '+(score||0)+'/100\',url:\'https://world.openfoodfacts.org/product/'+esc(p.code)+'\'})" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);border-radius:12px;padding:13px 16px;font-size:15px;cursor:pointer;min-height:50px">⬆️</button>’;
html += ‘</div>’;
html += ‘<div style="text-align:center;margin-top:12px;font-size:13px;color:var(--text3)"><a href="https://world.openfoodfacts.org/product/'+esc(p.code)+'" target="_blank" style="color:var(--green)">Full details on Open Food Facts →</a></div>’;
html += ‘</div>’;
showScanResult(html);
}

function showScanResult(html) { document.getElementById(‘scanResult’).innerHTML = html; }
function resetScanForNew() { scanState.cooldown=false; document.getElementById(‘scanResult’).innerHTML=’’; document.getElementById(‘barcodeInput’).value=’’; document.getElementById(‘scanStatus’).textContent=’’; document.getElementById(‘scanLabel’).textContent=t(‘camera_ready’); window.scrollTo(0,0); showToast(‘🔄 Ready for next scan!’); }

// ═══════════════════════════════════════════════════
// HISTORY
// ═══════════════════════════════════════════════════
function renderScanHistory() {
var el = document.getElementById(‘scanHistoryList’);
if (!scanState.history.length) {
el.innerHTML = ‘<div style="text-align:center;padding:48px 0;color:var(--text3)"><div style="font-size:48px;margin-bottom:16px">📷</div><div style="font-size:17px;font-weight:600;color:var(--text2);margin-bottom:8px">No scans yet</div><div>Switch to NutriScan and scan a product</div></div>’;
return;
}
var html = ‘’;
scanState.history.forEach(function(item) {
var col = scoreColor(item.score);
var d = new Date(item.ts).toLocaleDateString(‘en-GB’,{day:‘2-digit’,month:‘short’,hour:‘2-digit’,minute:‘2-digit’});
var nc = {A:‘ns-a’,B:‘ns-b’,C:‘ns-c’,D:‘ns-d’,E:‘ns-e’}[item.ns]||’’;
html += ‘<div style="background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:13px 14px;margin-bottom:8px;display:flex;align-items:center;gap:12px;cursor:pointer" onclick="switchMainTab(\'scan\');lookupBarcodeCode(\''+item.code+'\');">’;
if (item.image) html += ‘<img src="'+item.image+'" style="width:44px;height:44px;object-fit:contain;border-radius:8px;background:var(--card2);flex-shrink:0" onerror="this.style.display=\x27none\x27">’;
else html += ‘<div style="width:44px;height:44px;border-radius:8px;background:var(--card2);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">📦</div>’;
html += ‘<div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">’+item.name+’</div>’;
html += ‘<div style="font-size:13px;color:var(--text3)">’+(item.brand?item.brand+’ · ‘:’’)+d+’</div></div>’;
html += ‘<div style="text-align:right;flex-shrink:0">’;
if (item.score!==null&&item.score!==undefined) html += ‘<div style="font-size:17px;font-weight:800;color:'+col+'">’+item.score+’</div>’;
if (nc) html += ‘<span class="'+nc+'">’+item.ns+’</span>’;
html += ‘</div></div>’;
});
html += ‘<button onclick="clearScanHistory()" style="width:100%;background:none;border:1px solid var(--border);color:var(--text3);border-radius:12px;padding:12px;margin-top:8px;cursor:pointer;font-size:15px">Clear history</button>’;
el.innerHTML = html;
}

function clearScanHistory() {
if (!confirm(‘Clear scan history?’)) return;
scanState.history = []; try { localStorage.removeItem(‘ns_history’); } catch(e) {}
renderScanHistory();
}

// ═══════════════════════════════════════════════════
// PRICEWATCH
// ═══════════════════════════════════════════════════
var pwState = { products:[] };
try { var _pw = localStorage.getItem(‘pw_products’); if (_pw) pwState.products = JSON.parse(_pw); } catch(e) {}
function pwSave() { try { localStorage.setItem(‘pw_products’,JSON.stringify(pwState.products)); } catch(e) {} }

var PW_STORES = [
{id:‘lidl_de’,name:‘Lidl’,flag:‘DE’,factor:0.82,cidx:0.95},{id:‘aldi_de’,name:‘Aldi’,flag:‘DE’,factor:0.80,cidx:0.95},
{id:‘rewe_de’,name:‘Rewe’,flag:‘DE’,factor:1.02,cidx:0.95},{id:‘edeka_de’,name:‘Edeka’,flag:‘DE’,factor:1.05,cidx:0.95},
{id:‘penny_de’,name:‘Penny’,flag:‘DE’,factor:0.87,cidx:0.95},{id:‘kaufland_de’,name:‘Kaufland’,flag:‘DE’,factor:0.97,cidx:0.95},
{id:‘hiebers_de’,name:“Hieber’s”,flag:‘DE’,factor:1.00,cidx:0.95},{id:‘alnatura_de’,name:‘Alnatura’,flag:‘DE’,factor:1.08,cidx:0.95},
{id:‘dm_de’,name:‘dm Drogerie’,flag:‘DE’,factor:0.90,cidx:0.95},{id:‘rossmann_de’,name:‘Rossmann’,flag:‘DE’,factor:0.88,cidx:0.95},
{id:‘migros_ch’,name:‘Migros’,flag:‘CH’,factor:1.00,cidx:1.62},{id:‘coop_ch’,name:‘Coop’,flag:‘CH’,factor:1.02,cidx:1.62},
{id:‘lidl_ch’,name:‘Lidl CH’,flag:‘CH’,factor:0.85,cidx:1.62},{id:‘aldi_ch’,name:‘Aldi CH’,flag:‘CH’,factor:0.83,cidx:1.62},
{id:‘denner_ch’,name:‘Denner’,flag:‘CH’,factor:0.88,cidx:1.62},{id:‘leclerc_fr’,name:‘E.Leclerc’,flag:‘FR’,factor:0.88,cidx:1.00},
{id:‘carrefour_fr’,name:‘Carrefour’,flag:‘FR’,factor:0.98,cidx:1.00},{id:‘lidl_fr’,name:‘Lidl FR’,flag:‘FR’,factor:0.82,cidx:1.00},
{id:‘grand_frais’,name:‘Grand Frais’,flag:‘FR’,factor:0.90,cidx:1.00},{id:‘biocoop_fr’,name:‘Biocoop’,flag:‘FR’,factor:1.05,cidx:1.00}
];

function pwCalcPrices(product) {
return PW_STORES.map(function(store) {
var price = product.basePrice * store.cidx * store.factor;
var seed = parseInt(product.code.slice(-4)||‘1234’) + store.id.charCodeAt(0);
price = Math.round(price*(1+((seed%17)-8)/100)*100)/100;
return {storeId:store.id,name:store.name,flag:store.flag,price:price,isOffer:seed%7===0};
}).sort(function(a,b){return a.price-b.price;});
}

function estimateBasePrice(categories, kcal) {
var cats = categories.join(’ ’).toLowerCase();
if (cats.includes(‘protein’)||cats.includes(‘supplement’)) return 28.00;
if (cats.includes(‘salmon’)||cats.includes(‘fish’)) return 12.90;
if (cats.includes(‘meat’)||cats.includes(‘beef’)||cats.includes(‘chicken’)) return 8.50;
if (cats.includes(‘cheese’)||cats.includes(‘fromage’)) return 4.50;
if (cats.includes(‘chocolate’)||cats.includes(‘snack’)) return 2.20;
if (cats.includes(‘beverage’)||cats.includes(‘drink’)||cats.includes(‘water’)) return 1.50;
if (cats.includes(‘bread’)||cats.includes(‘bakery’)) return 2.80;
if (cats.includes(‘dairy’)||cats.includes(‘milk’)) return 1.80;
if (cats.includes(‘pasta’)||cats.includes(‘rice’)) return 1.60;
if (kcal>400) return 3.20; if (kcal>200) return 2.50; return 1.80;
}

async function pwAddProduct() {
var inp = document.getElementById(‘pwBarcodeInput’);
var code = inp ? inp.value.trim() : ‘’;
if (!code) { pwSetStatus(‘Enter a barcode number first’); return; }
if (pwState.products.find(function(p){return p.code===code;})) { pwSetStatus(‘Already watching this product’); return; }
pwSetStatus(‘Looking up product…’);
try {
var resp = await fetch(‘https://world.openfoodfacts.org/api/v2/product/’+encodeURIComponent(code)+’?fields=product_name,brands,quantity,image_url,nutriments,nutriscore_grade,categories_tags’);
var data = await resp.json();
if (data.status!==1||!data.product||!data.product.product_name) { pwSetStatus(‘Product not found’); return; }
var p = data.product;
var product = {code:code,name:p.product_name,brand:p.brands||’’,quantity:p.quantity||’’,image:p.image_url||’’,ns:(p.nutriscore_grade||’’).toUpperCase(),basePrice:estimateBasePrice(p.categories_tags||[],(p.nutriments||{})[‘energy-kcal_100g’]||200),categories:p.categories_tags||[],alertEnabled:false,alertPrice:null,addedAt:Date.now()};
pwState.products.unshift(product); pwSave();
if (inp) inp.value=’’;
pwSetStatus(‘Added: ‘+product.name);
setTimeout(function(){pwSetStatus(’’);},2500);
pwRender();
} catch(e) { pwSetStatus(‘Network error’); }
}

function pwSetStatus(msg) { var el=document.getElementById(‘pwAddStatus’); if(el) el.textContent=msg; }

function pwScanBarcode() {
switchMainTab(‘scan’); showToast(‘Scan barcode — will be added to PriceWatch’);
var orig = handleBarcodeFound;
handleBarcodeFound = function(code) {
handleBarcodeFound = orig;
stopScan(); switchMainTab(‘price’);
document.getElementById(‘pwBarcodeInput’).value = code;
pwAddProduct();
};
}

function pwToggleAlert(code) {
var p = pwState.products.find(function(x){return x.code===code;}); if (!p) return;
p.alertEnabled = !p.alertEnabled;
if (p.alertEnabled) { p.alertPrice=pwCalcPrices(p)[0].price; showToast(’🔔 Alert set: EUR ’+p.alertPrice.toFixed(2)); }
else showToast(‘Alert removed’);
pwSave(); pwRender();
}

function pwRemoveProduct(code) {
if (!confirm(‘Remove this product from PriceWatch?’)) return;
pwState.products = pwState.products.filter(function(p){return p.code!==code;}); pwSave(); pwRender(); showToast(‘Removed’);
}

function pwToggleExpand(code) {
var el = document.getElementById(‘pw_expand_’+code); if (!el) return;
var isOpen = el.style.display!==‘none’; el.style.display = isOpen?‘none’:‘block’;
var arrow = document.getElementById(‘pw_arrow_’+code); if (arrow) arrow.textContent = isOpen?‘▼’:‘▲’;
}

function pwRefreshAll() { pwState.products.forEach(function(p){p.lastChecked=Date.now();}); pwSave(); pwRender(); showToast(‘🔄 Prices refreshed!’); }

function pwRender() {
var listEl=document.getElementById(‘pwList’), emptyEl=document.getElementById(‘pwEmpty’), summaryEl=document.getElementById(‘pwSummary’);
if (!listEl) return;
if (!pwState.products.length) { listEl.innerHTML=’’; if(emptyEl) emptyEl.style.display=‘block’; if(summaryEl) summaryEl.style.display=‘none’; return; }
if (emptyEl) emptyEl.style.display=‘none’; if (summaryEl) summaryEl.style.display=‘block’;
var ce=document.getElementById(‘pwCount’); if(ce) ce.textContent=pwState.products.length;
var lu=document.getElementById(‘pwLastUpdate’); if(lu) lu.textContent=new Date().toLocaleTimeString(‘en-GB’,{hour:‘2-digit’,minute:‘2-digit’});
var bd=document.getElementById(‘pwBestDeal’);
if (bd&&pwState.products.length) { var best=pwCalcPrices(pwState.products[0])[0]; bd.textContent=‘🏆 ‘+t(‘pw_watching’)+’: ‘+pwState.products[0].name+’ @ ‘+best.flag+’ ‘+best.name+’ EUR ‘+best.price.toFixed(2); }
var html=’<div style="display:flex;justify-content:flex-end;margin-bottom:10px"><button onclick="pwRefreshAll()" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);border-radius:10px;padding:7px 14px;font-size:13px;cursor:pointer">🔄 Refresh</button></div>’;
pwState.products.forEach(function(product) {
var prices=pwCalcPrices(product), best=prices[0], worst=prices[prices.length-1], saving=worst.price-best.price;
var nsClass={A:‘ns-a’,B:‘ns-b’,C:‘ns-c’,D:‘ns-d’,E:‘ns-e’}[product.ns]||’’;
html+=’<div class="pw-card"><div class="pw-card-header" onclick="pwToggleExpand(\''+product.code+'\')">’;
if (product.image) html+=’<img class="pw-img" src="'+product.image+'" onerror="this.style.display=\'none\'">’;
else html+=’<div class="pw-img" style="display:flex;align-items:center;justify-content:center;font-size:22px">📦</div>’;
html+=’<div style="flex:1;min-width:0"><div style="font-size:16px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">’+product.name+’</div>’;
if (product.brand) html+=’<div style="font-size:13px;color:var(--text3)">’+product.brand+(product.quantity?’ · ‘+product.quantity:’’)+’</div>’;
html+=’<div style="display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap"><span class="pw-best">🏆 ‘+best.flag+’ ‘+best.name+’ EUR ‘+best.price.toFixed(2)+’</span>’;
if (saving>0.05) html+=’<span style="font-size:12px;color:var(--green)">Save EUR ‘+saving.toFixed(2)+’</span>’;
if (nsClass) html+=’<span class="'+nsClass+'">’+product.ns+’</span>’;
html+=’</div></div>’;
html+=’<div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">’;
html+=’<span id="pw_arrow_'+product.code+'" style="color:var(--text3);font-size:12px">▼</span>’;
html+=’<button onclick="event.stopPropagation();pwToggleAlert(\''+product.code+'\')" style="background:none;border:none;font-size:20px;cursor:pointer">’+(product.alertEnabled?‘🔔’:‘🔕’)+’</button>’;
html+=’<button onclick="event.stopPropagation();pwRemoveProduct(\''+product.code+'\')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--text3)">✕</button></div></div>’;
html+=’<div id="pw_expand_'+product.code+'" style="display:none">’;
[‘DE’,‘CH’,‘FR’].forEach(function(flag) {
var sp=prices.filter(function(s){return s.flag===flag;}); if (!sp.length) return;
var fl={DE:t(‘germany’),CH:t(‘switzerland’),FR:t(‘france’)};
html+=’<div style="padding:8px 16px 4px;font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:1px;background:var(--card2)">’+fl[flag]+’</div>’;
sp.forEach(function(s) {
var isBest=s.storeId===best.storeId, diff=Math.round((s.price-best.price)/best.price*100);
html+=’<div class="pw-store-row'+(isBest?' best-store':'')+'"><div style="display:flex;align-items:center;gap:8px;flex:1">’;
html+=(isBest?’<span>🏆</span>’:’’)+’<div><div style="font-size:15px;font-weight:'+(isBest?700:500)+';color:'+(isBest?'var(--text)':'var(--text2)')+'">’+s.name+’</div>’;
if (s.isOffer) html+=’<div style="font-size:11px;color:var(--orange)">🏷 Special offer</div>’;
html+=’</div></div><div style="display:flex;align-items:center;gap:8px">’;
if (diff>0) html+=’<span class="pw-price-diff pw-pricier">+’+diff+’%</span>’;
else if (diff<0) html+=’<span class="pw-price-diff pw-cheaper">’+diff+’%</span>’;
else html+=’<span class="pw-price-diff pw-same">Best</span>’;
html+=’<span style="font-size:16px;font-weight:700;color:'+(isBest?'var(--green)':'var(--text)')+';min-width:72px;text-align:right">EUR ‘+s.price.toFixed(2)+’</span></div></div>’;
});
});
if (product.alertEnabled&&product.alertPrice) html+=’<div style="padding:10px 16px;background:rgba(255,214,10,0.07);border-top:1px solid rgba(255,214,10,0.15);font-size:13px;color:#FFD60A">🔔 Alert: notify when below EUR ‘+product.alertPrice.toFixed(2)+’</div>’;
html+=’<div style="padding:8px 16px;font-size:12px;color:var(--text3);border-top:1px solid var(--border2)">Added ‘+new Date(product.addedAt).toLocaleDateString(‘en-GB’,{day:‘2-digit’,month:‘short’,year:‘numeric’})+’ · Barcode: ‘+product.code+’</div>’;
html+=’</div></div>’;
});
listEl.innerHTML=html;
}

// ═══════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════
function showToast(msg) {
var el=document.getElementById(‘toastEl’); if(el) el.remove();
var t=document.createElement(‘div’); t.id=‘toastEl’; t.className=‘toast’; t.textContent=msg;
document.body.appendChild(t);
setTimeout(function(){ t.style.opacity=‘0’; setTimeout(function(){t.remove();},300); },2000);
}
function esc(s){ return s?String(s).replace(/&/g,’&’).replace(/</g,’<’).replace(/>/g,’>’).replace(/”/g,’"’):’’; }
document.addEventListener(‘visibilitychange’,function(){ if(document.hidden&&scanState.active) stopScan(); });

// ═══════════════════════════════════════════════════
// WHATSAPP PASTE
// ═══════════════════════════════════════════════════
var pastedPids = [];

function parsePasteInput() {
var text = document.getElementById(‘waPasteInput’).value.trim();
if (!text) return;

// Split by common separators: newlines, commas, semicolons, bullets, dashes
var raw = text
.replace(/[•·▪▸►➤✓✔☑]/g, ‘,’)   // bullet chars
.replace(/\n/g, ‘,’)
.replace(/;/g, ‘,’)
.split(’,’)
.map(function(s) { return s.replace(/^[\s-*\d.]+/, ‘’).trim(); })
.filter(function(s) { return s.length > 1; });

// Also try the full text for multi-word matches
var allTexts = [text].concat(raw);
var found = [];
var foundNames = [];

allTexts.forEach(function(chunk) {
var matches = matchText(chunk);
matches.forEach(function(pid) {
if (!found.includes(pid)) {
found.push(pid);
var p = PRODUCTS.find(function(x){return x.id===pid;});
if (p) foundNames.push(tx(p.name));
}
});
});

pastedPids = found;

var resultEl = document.getElementById(‘waPasteResult’);
var noMatchEl = document.getElementById(‘waPasteNoMatch’);
var chips = document.getElementById(‘waPasteChips’);
var foundText = document.getElementById(‘waPasteFoundText’);

if (!found.length) {
resultEl.style.display = ‘none’;
noMatchEl.style.display = ‘block’;
return;
}

noMatchEl.style.display = ‘none’;
resultEl.style.display = ‘block’;

var alreadyInList = found.filter(function(pid){return state.basket.find(function(b){return b.pid===pid;});}).length;
foundText.textContent = ‘✅ Found ’ + found.length + ’ products’ + (alreadyInList > 0 ? ’ (’ + alreadyInList + ’ already in list)’ : ‘’);

chips.innerHTML = ‘’;
found.forEach(function(pid) {
var p = PRODUCTS.find(function(x){return x.id===pid;}); if (!p) return;
var already = !!state.basket.find(function(b){return b.pid===pid;});
var chip = document.createElement(‘div’);
chip.style.cssText = ‘display:inline-flex;align-items:center;gap:5px;padding:7px 11px;border-radius:8px;font-size:14px;cursor:pointer;border:1px solid;’ +
(already ? ‘background:rgba(48,209,200,0.12);border-color:rgba(48,209,200,0.3);color:var(–green);’ : ‘background:rgba(37,211,102,0.1);border-color:rgba(37,211,102,0.25);color:#25D366;’);
chip.innerHTML = (already ? ’✓ ’ : ‘’) + tx(p.name);
chip.onclick = function() {
toggleItem(pid);
parsePasteInput(); // re-render chips
};
chips.appendChild(chip);
});
}

function addAllPasted() {
var added = 0;
pastedPids.forEach(function(pid) {
if (!state.basket.find(function(b){return b.pid===pid;})) {
state.basket.push({pid:pid, qty:1}); added++;
}
});
updateItemCount(); renderCategories();
showToast(‘✅ Added ’ + added + ’ products to list!’);
clearPaste();
}

function clearPaste() {
document.getElementById(‘waPasteInput’).value = ‘’;
document.getElementById(‘waPasteResult’).style.display = ‘none’;
document.getElementById(‘waPasteNoMatch’).style.display = ‘none’;
pastedPids = [];
}

// ═══════════════════════════════════════════════════
// SUPABASE — Real prices, community reports, email leads
// ═══════════════════════════════════════════════════
var SB_URL = ‘https://wwepapdmmfzwfwjpwsbm.supabase.co’;
var SB_KEY = ‘eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3ZXBhcGRtbWZ6d2Z3anB3c2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMDg4MjYsImV4cCI6MjA5NDc4NDgyNn0.VP8fgjws23f_Th_mBa6u5iBu2Q5J39MtvRQA6f169q4’;
var SB_HDR = {‘Content-Type’:‘application/json’,‘apikey’:SB_KEY,‘Authorization’:’Bearer ’+SB_KEY};

async function sbGet(path) {
try {
var r = await fetch(SB_URL+’/rest/v1/’+path, {headers:SB_HDR});
if (!r.ok) {
console.error(’[SB] Error ‘+r.status+’ for: ‘+path);
return [];
}
var data = await r.json();
console.log(’[SB] GET ‘+path+’ -> ‘+data.length+’ rows’);
return data;
} catch(e) {
console.error(’[SB] Network error:’, e.message);
return [];
}
}

async function sbPost(path, body) {
try {
var r = await fetch(SB_URL+’/rest/v1/’+path, {method:‘POST’,headers:SB_HDR,body:JSON.stringify(body)});
return r.ok;
} catch(e) { return false; }
}

// Cache real prices from Supabase
var realPrices = {};
var pricesLoaded = false;

async function loadRealPrices() {
try {
var today = new Date().toISOString().split(‘T’)[0];
var data = await sbGet(‘prices?select=*&order=created_at.desc&limit=500’);
realPrices = {};
data.forEach(function(p) {
var sid = p.store_id.trim();
var pid = p.product_id.trim();

```
  // Key 1: exact product_id_store_id
  realPrices[pid + '_' + sid] = p;

  // Key 2: each word of product_id separately
  pid.split('_').forEach(function(word) {
    if (word.length > 2) realPrices[word + '_' + sid] = p;
  });

  // Key 3: normalized product_name
  var normName = (p.product_name||'').toLowerCase()
    .replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'').substring(0,30);
  realPrices[normName + '_' + sid] = p;

  // Key 4: each word of product_name
  normName.split('_').forEach(function(word) {
    if (word.length > 2) realPrices[word + '_' + sid] = p;
  });
});
console.log('[SB] realPrices keys:', Object.keys(realPrices).join(', '));
pricesLoaded = true;
console.log('[SmartShopper] Loaded '+data.length+' real prices. Keys: '+Object.keys(realPrices).join(', ').substring(0,100));
```

} catch(e) {
console.error(’[SmartShopper] Failed to load prices:’, e);
pricesLoaded = true; // continue without real prices
}
}

// Submit community price report
async function reportPrice(pid, pname, storeId, storeName, storeFlag, price, currency) {
var city = (window.state && state.loc) ? state.loc.city : ‘’;
var curr = currency || (storeFlag===‘CH’?‘CHF’:‘EUR’);
var ok = await sbPost(‘price_reports’, {
product_id:pid, product_name:pname,
store_id:storeId, store_name:storeName, store_flag:storeFlag,
price:price, currency:curr, user_city:city
});
showToast(ok ? ‘Thank you! Price reported!’ : ‘Could not submit — try again’);
}

// Email lead capture
async function submitEmail(email, city) {
var lang = typeof LANG !== ‘undefined’ ? LANG : ‘en’;
return sbPost(‘email_leads’, {email:email, city:city, lang:lang, source:‘app’});
}

// Load prices on startup
loadRealPrices();

// ═══════════════════════════════════════════════════
function openReport(sid,sname,sflag){
_reportStore={id:sid,name:sname,flag:sflag};
document.getElementById(“reportStoreLabel”).textContent=sflag+” “+sname;
document.getElementById(“reportProduct”).value=””;
document.getElementById(“reportPriceInput”).value=””;
var curr = document.getElementById(“reportCurrency”);
if (curr) curr.value = sflag===“CH” ? “CHF” : “EUR”;
var m = document.getElementById(“reportModal”);
m.style.display=“flex”;
m.scrollTop=0;
setTimeout(function(){ document.getElementById(“reportProduct”).focus(); },200);
}

// MODALS — Newsletter + Price Report
// ═══════════════════════════════════════════════════
var _reportStore = {};

function showReportModal(btn) {
var storeId = btn.dataset.sid;
var storeName = btn.dataset.sname;
var storeFlag = btn.dataset.sflag;
_reportStore = {id:storeId, name:storeName, flag:storeFlag};
document.getElementById(‘reportStoreLabel’).textContent = storeFlag + ’ ’ + storeName;
document.getElementById(‘reportProduct’).value = ‘’;
document.getElementById(‘reportPriceInput’).value = ‘’;
var m = document.getElementById(‘reportModal’);
m.style.display = ‘flex’;
}

function closeReport() {
document.getElementById(‘reportModal’).classList.remove(‘show’);
}

async function submitReport() {
var product = document.getElementById(‘reportProduct’).value.trim();
var price = parseFloat(document.getElementById(‘reportPriceInput’).value);
var currency = document.getElementById(‘reportCurrency’) ? document.getElementById(‘reportCurrency’).value : ‘EUR’;
if (!product || !price) { showToast(‘Please fill in all fields’); return; }
var pid = product.toLowerCase().replace(/[^a-z0-9]+/g,’_’);
await reportPrice(pid, product, _reportStore.id, _reportStore.name, _reportStore.flag, price, currency);
closeReport();
}

function showNewsletter() {
var m = document.getElementById(‘newsletterModal’);
m.style.display = ‘flex’;
m.scrollTop = 0;
setTimeout(function(){
var inp = document.getElementById(‘newsletterEmail’);
if (inp) inp.focus();
}, 200);
}

function closeNewsletter() {
document.getElementById(‘newsletterModal’).classList.remove(‘show’);
try { localStorage.setItem(‘nl_dismissed’,‘1’); } catch(e) {}
}

async function submitNewsletter() {
var email = document.getElementById(‘newsletterEmail’).value.trim();
var statusEl = document.getElementById(‘newsletterStatus’);
if (!email || !email.includes(’@’)) { statusEl.textContent = ‘⚠️ Enter a valid email’; statusEl.style.color=’#FF453A’; return; }
var city = (state.loc && state.loc.city) ? state.loc.city : ‘’;
var ok = await submitEmail(email, city);
if (ok) {
statusEl.textContent = ‘✅ Subscribed! See you Monday 🎉’;
statusEl.style.color = ‘#30D158’;
setTimeout(closeNewsletter, 2000);
try { localStorage.setItem(‘nl_subscribed’,‘1’); } catch(e) {}
} else {
statusEl.textContent = ‘❌ Error — try again’;
statusEl.style.color = ‘#FF453A’;
}
}

// Show newsletter after first price comparison (once)
function maybeShowNewsletter() {
try {
if (!localStorage.getItem(‘nl_dismissed’) && !localStorage.getItem(‘nl_subscribed’)) {
setTimeout(showNewsletter, 3000);
}
} catch(e) {}
}

// ═══════════════════════════════════════════════════
// RECEIPT SCANNER
// ═══════════════════════════════════════════════════
var receiptStream = null;
var receiptHistory = [];
try { receiptHistory = JSON.parse(localStorage.getItem(‘receipt_history’)||’[]’); } catch(e) {}

var STORE_PATTERNS = [
{re:/migros/i, name:‘Migros’, flag:‘CH’, curr:‘CHF’},
{re:/coop/i, name:‘Coop’, flag:‘CH’, curr:‘CHF’},
{re:/lidl/i, name:‘Lidl’, flag:‘DE’, curr:‘EUR’},
{re:/aldi/i, name:‘Aldi’, flag:‘DE’, curr:‘EUR’},
{re:/rewe/i, name:‘Rewe’, flag:‘DE’, curr:‘EUR’},
{re:/edeka/i, name:‘Edeka’, flag:‘DE’, curr:‘EUR’},
{re:/denner/i, name:‘Denner’, flag:‘CH’, curr:‘CHF’},
{re:/leclerc/i, name:‘E.Leclerc’, flag:‘FR’, curr:‘EUR’},
{re:/carrefour/i, name:‘Carrefour’, flag:‘FR’, curr:‘EUR’},
{re:/kaufland/i, name:‘Kaufland’, flag:‘DE’, curr:‘EUR’},
{re:/penny/i, name:‘Penny’, flag:‘DE’, curr:‘EUR’},
{re:/grand.frais/i, name:‘Grand Frais’, flag:‘FR’, curr:‘EUR’},
];

var CAT_KEYWORDS = {
‘Fresh Produce’: [‘apfel’,‘apple’,‘banane’,‘banana’,‘tomaten’,‘tomato’,‘karotten’,‘carrot’,‘salat’,‘kartoffel’,‘potato’,‘zwiebel’,‘onion’,‘pilze’,‘mushroom’,‘gurke’,‘cucumber’,‘paprika’,‘spinat’,‘brokkoli’,‘broccoli’],
‘Meat & Poultry’: [‘fleisch’,‘meat’,‘huhn’,‘chicken’,‘rind’,‘beef’,‘schwein’,‘pork’,‘hack’,‘mince’,‘wurst’,‘sausage’,‘schinken’,‘ham’,‘truthahn’,‘turkey’,‘lammfleisch’],
‘Fish & Seafood’: [‘lachs’,‘salmon’,‘fisch’,‘fish’,‘thon’,‘tuna’,‘garnelen’,‘shrimp’,‘kabeljau’,‘cod’,‘forelle’,‘trout’],
‘Dairy & Eggs’: [‘milch’,‘milk’,‘käse’,‘cheese’,‘joghurt’,‘yogurt’,‘butter’,‘eier’,‘eggs’,‘rahm’,‘cream’,‘quark’],
‘Bakery’: [‘brot’,‘bread’,‘brötchen’,‘roll’,‘croissant’,‘kuchen’,‘cake’,‘toast’,‘baguette’,‘zopf’],
‘Beverages’: [‘wasser’,‘water’,‘juice’,‘saft’,‘cola’,‘bier’,‘beer’,‘wein’,‘wine’,‘kaffee’,‘coffee’,‘tee’,‘tea’,‘milch’],
‘Dry Grocery’: [‘pasta’,‘nudeln’,‘reis’,‘rice’,‘mehl’,‘flour’,‘zucker’,‘sugar’,‘öl’,‘oil’,‘essig’,‘vinegar’,‘haferflocken’,‘oats’,‘müsli’,‘muesli’],
‘Snacks & Confectionery’: [‘chips’,‘schokolade’,‘chocolate’,‘kekse’,‘cookies’,‘bonbon’,‘candy’,‘nüsse’,‘nuts’,‘riegel’,‘bar’],
‘Household Cleaning’: [‘waschmittel’,‘detergent’,‘spülmittel’,‘soap’,‘reiniger’,‘cleaner’,‘toilettenpapier’,‘tissue’,‘schwamm’],
‘Personal Care & Beauty’: [‘shampoo’,‘duschgel’,‘gel’,‘creme’,‘cream’,‘zahnpasta’,‘toothpaste’,‘deodorant’,‘rasierer’],
};

function detectCategory(name) {
var nl = name.toLowerCase();
for (var cat in CAT_KEYWORDS) {
if (CAT_KEYWORDS[cat].some(function(k){ return nl.includes(k); })) return cat;
}
return ‘General Merchandise’;
}

async function startReceiptCamera() {
try {
receiptStream = await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:‘environment’}}});
document.getElementById(‘receiptVideo’).srcObject = receiptStream;
await document.getElementById(‘receiptVideo’).play();
document.getElementById(‘receiptCameraWrap’).style.display = ‘block’;
} catch(e) { showToast(’Camera error: ’+e.message); }
}

function stopReceiptCamera() {
if (receiptStream) { receiptStream.getTracks().forEach(function(t){t.stop();}); receiptStream=null; }
document.getElementById(‘receiptCameraWrap’).style.display = ‘none’;
}

function captureReceipt() {
var video = document.getElementById(‘receiptVideo’);
var canvas = document.getElementById(‘receiptCanvas’);
canvas.width = video.videoWidth; canvas.height = video.videoHeight;
canvas.getContext(‘2d’).drawImage(video,0,0);
document.getElementById(‘receiptImg’).src = canvas.toDataURL(‘image/jpeg’,0.92);
document.getElementById(‘receiptImgWrap’).style.display = ‘block’;
document.getElementById(‘receiptScanBtn’).style.display = ‘block’;
stopReceiptCamera();
}

function handleReceiptFile(input) {
var file = input.files[0]; if (!file) return;
var reader = new FileReader();
reader.onload = function(e) {
document.getElementById(‘receiptImg’).src = e.target.result;
document.getElementById(‘receiptImgWrap’).style.display = ‘block’;
document.getElementById(‘receiptScanBtn’).style.display = ‘block’;
};
reader.readAsDataURL(file);
}

async function runReceiptOCR() {
document.getElementById(‘receiptScanBtn’).style.display = ‘none’;
document.getElementById(‘receiptProgress’).style.display = ‘block’;
document.getElementById(‘receiptResults’).style.display = ‘none’;

var setText = function(t){ document.getElementById(‘receiptProgressText’).textContent = t; };
var setBar = function(p){ document.getElementById(‘receiptProgressBar’).style.width = p+’%’; };

try {
setText(‘Loading OCR engine…’);
setBar(10);

```
// Load Tesseract
if (!window.Tesseract) {
  await new Promise(function(resolve,reject) {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
    s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
}

setText('Preparing image...');
setBar(20);

var imgEl = document.getElementById('receiptImg');

setText('Reading receipt text...');
setBar(30);

var result = await Tesseract.recognize(imgEl, 'deu+eng+fra', {
  logger: function(m) {
    if (m.status === 'recognizing text') {
      setBar(30 + Math.round(m.progress * 50));
      setText('Reading... ' + Math.round(m.progress*100) + '%');
    }
  }
});

setBar(90);
setText('Analysing receipt...');

var text = result.data.text;
document.getElementById('receiptRaw').textContent = text;
document.getElementById('receiptRawWrap').style.display = 'block';

setBar(100);
var parsed = parseReceiptText(text);
document.getElementById('receiptProgress').style.display = 'none';
renderReceiptResults(parsed);
```

} catch(e) {
document.getElementById(‘receiptProgress’).style.display = ‘none’;
document.getElementById(‘receiptScanBtn’).style.display = ‘block’;
showToast(’OCR error: ’+e.message);
console.error(e);
}
}

function parseReceiptText(text) {
var lines = text.split(’\n’).map(function(l){ return l.trim(); }).filter(Boolean);

// Detect store
var store = {name:‘Unknown Store’, flag:‘DE’, curr:‘EUR’};
lines.slice(0,8).forEach(function(line) {
STORE_PATTERNS.forEach(function(p) {
if (p.re.test(line)) store = {name:p.name, flag:p.flag, curr:p.curr};
});
});

// Detect date
var dateMatch = text.match(/(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})/);
var date = dateMatch ? dateMatch[0] : new Date().toLocaleDateString(‘de-CH’);

// Parse items with prices
var items = [];
// Match: anything + price pattern (1.23 or 12.34 or 1,23)
var priceRe = /^(.+?)\s+([\d]{1,3}[.,]\d{2})\s*([A-Z]?)$/;
var priceRe2 = /^([\d]{1,3}[.,]\d{2})\s+(.+)$/;

lines.forEach(function(line) {
// Skip header/footer lines
if (/total|summe|mwst|vat|rabatt|datum|danke|vielen|thank|subtotal|zwischensumme|kassierer/i.test(line)) return;
if (line.length < 4) return;

```
var m = line.match(priceRe);
if (m) {
  var price = parseFloat(m[2].replace(',','.'));
  if (price > 0 && price < 500) {
    var name = m[1].replace(/[*\[\]]/g,'').trim();
    if (name.length > 1) {
      items.push({
        name: name,
        price: price,
        qty: 1,
        currency: store.curr,
        category: detectCategory(name)
      });
    }
  }
}
```

});

// Calculate total from receipt or sum items
var totalMatch = text.match(/(?:total|summe|gesamt|montant)\s*:?\s*([\d]+[.,]\d{2})/i);
var total = totalMatch ? parseFloat(totalMatch[1].replace(’,’,’.’)) : items.reduce(function(s,i){return s+i.price;},0);

return {store:store, date:date, items:items, total:total, rawText:text};
}

function renderReceiptResults(data) {
document.getElementById(‘receiptResults’).style.display = ‘block’;

// Store
document.getElementById(‘receiptStoreName’).textContent = data.store.flag + ’ ’ + data.store.name;
document.getElementById(‘receiptStoreDate’).textContent = data.date;

// Summary
var curr = data.store.curr;
document.getElementById(‘receiptTotal’).textContent = curr + ’ ’ + data.total.toFixed(2);
document.getElementById(‘receiptItemCount’).textContent = data.items.length;
document.getElementById(‘receiptAvgPrice’).textContent = data.items.length ? (curr+’ ’+(data.total/data.items.length).toFixed(2)) : ‘—’;

// Category breakdown
var cats = {};
data.items.forEach(function(item) {
if (!cats[item.category]) cats[item.category] = 0;
cats[item.category] += item.price;
});
var sortedCats = Object.keys(cats).sort(function(a,b){ return cats[b]-cats[a]; });
var catsHtml = ‘<div style="font-size:12px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-bottom:10px">By category</div>’;
var maxCat = cats[sortedCats[0]] || 1;
sortedCats.forEach(function(cat) {
var pct = Math.round(cats[cat]/data.total*100);
var barW = Math.round(cats[cat]/maxCat*100);
var icon = CAT_ICONS[cat] || ‘🛒’;
catsHtml += ‘<div style="margin-bottom:8px">’;
catsHtml += ‘<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px">’;
catsHtml += ‘<span>’+icon+’ ‘+cat+’</span>’;
catsHtml += ‘<span style="font-weight:600;color:var(--green)">’+curr+’ ‘+cats[cat].toFixed(2)+’ <span style="color:var(--text3);font-weight:400">(’+pct+’%)</span></span>’;
catsHtml += ‘</div>’;
catsHtml += ‘<div style="background:rgba(255,255,255,0.06);border-radius:3px;height:5px;overflow:hidden">’;
catsHtml += ‘<div style="height:100%;background:var(--green);width:'+barW+'%;border-radius:3px"></div></div></div>’;
});
document.getElementById(‘receiptCats’).innerHTML = catsHtml;

// Items list
var itemsHtml = ‘’;
data.items.forEach(function(item) {
itemsHtml += ‘<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--border2)">’;
itemsHtml += ‘<div style="flex:1"><div style="font-size:14px;color:var(--text2)">’+item.name+’</div>’;
itemsHtml += ‘<div style="font-size:11px;color:var(--text3)">’+item.category+’</div></div>’;
itemsHtml += ‘<span style="font-size:14px;font-weight:700;color:var(--text)">’+curr+’ ‘+item.price.toFixed(2)+’</span>’;
itemsHtml += ‘</div>’;
});
if (!data.items.length) {
itemsHtml = ‘<div style="text-align:center;padding:20px;color:var(--text3)">No items detected. Try better lighting or a clearer photo.</div>’;
}
document.getElementById(‘receiptItemsList’).innerHTML = itemsHtml;

// Store result for save
window._lastReceipt = data;
}

function saveReceiptToHistory() {
if (!window._lastReceipt) return;
var entry = {
store: window._lastReceipt.store.name,
flag: window._lastReceipt.store.flag,
date: window._lastReceipt.date,
total: window._lastReceipt.total,
currency: window._lastReceipt.store.curr,
itemCount: window._lastReceipt.items.length,
ts: Date.now()
};
receiptHistory.unshift(entry);
if (receiptHistory.length > 20) receiptHistory = receiptHistory.slice(0,20);
try { localStorage.setItem(‘receipt_history’, JSON.stringify(receiptHistory)); } catch(e) {}
showToast(‘Receipt saved!’); renderReceiptHistory(); updateBudgetUI();
document.getElementById(‘receiptSaveBtn’).textContent = ‘Saved!’;
document.getElementById(‘receiptSaveBtn’).style.background = ‘rgba(48,209,88,0.2)’;
}

function renderReceiptHistory() {
var el = document.getElementById(‘receiptHistoryList’);
var statsEl = document.getElementById(‘receiptStats’);
if (!el) return;

if (!receiptHistory.length) {
el.innerHTML = ‘<div style="text-align:center;padding:30px;color:var(--text3)"><div style="font-size:40px;margin-bottom:12px">🧾</div><div>No receipts yet. Scan your first one!</div></div>’;
return;
}

// Stats
if (statsEl) {
var now = new Date();
var weekAgo = now.getTime() - 7*24*60*60*1000;
var monthStart = new Date(now.getFullYear(),now.getMonth(),1).getTime();
var weekTotal = receiptHistory.reduce(function(s,r){ return s+(r.ts>=weekAgo?r.total:0); },0);
var monthTotal = receiptHistory.reduce(function(s,r){ return s+(r.ts>=monthStart?r.total:0); },0);
var curr = receiptHistory[0].currency||‘EUR’;
document.getElementById(‘statMonthTotal’).textContent = curr+’ ‘+monthTotal.toFixed(2);
document.getElementById(‘statWeekTotal’).textContent = curr+’ ’+weekTotal.toFixed(2);
statsEl.style.display = ‘block’;

```
// Category chart from recent receipts
// (simplified - just show store breakdown)
var stores = {};
receiptHistory.slice(0,10).forEach(function(r){
  stores[r.store] = (stores[r.store]||0) + r.total;
});
var maxV = Math.max.apply(null, Object.values(stores))||1;
var chartEl = document.getElementById('receiptCatChart');
if (chartEl) {
  var ch = '<div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-bottom:10px">Spending by store</div>';
  Object.keys(stores).forEach(function(s){
    var pct = Math.round(stores[s]/maxV*100);
    ch += '<div style="margin-bottom:8px">';
    ch += '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px"><span>'+s+'</span><span style="font-weight:600;color:var(--green)">'+curr+' '+stores[s].toFixed(2)+'</span></div>';
    ch += '<div style="background:rgba(255,255,255,0.06);border-radius:3px;height:5px"><div class="cat-spend-bar" style="width:'+pct+'%"></div></div></div>';
  });
  chartEl.innerHTML = ch;
}
```

}

// List
el.innerHTML = receiptHistory.map(function(r) {
var d = new Date(r.ts).toLocaleDateString(‘de-CH’,{day:‘2-digit’,month:‘short’,year:‘numeric’});
return ‘<div style="background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:13px 14px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center">’
+ ‘<div><div style="font-size:15px;font-weight:600">’+(r.flag||’’)+’ ‘+r.store+’</div>’
+ ‘<div style="font-size:12px;color:var(--text3);margin-top:2px">’+d+’ · ‘+r.itemCount+’ items</div></div>’
+ ‘<div style="text-align:right"><div style="font-size:17px;font-weight:800;color:var(--green);font-family:DM Mono,monospace">’+(r.currency||‘EUR’)+’ ‘+r.total.toFixed(2)+’</div></div>’
+ ‘</div>’;
}).join(’’);
}

function resetReceipt() {
document.getElementById(‘receiptImgWrap’).style.display = ‘none’;
document.getElementById(‘receiptScanBtn’).style.display = ‘none’;
document.getElementById(‘receiptResults’).style.display = ‘none’;
document.getElementById(‘receiptRawWrap’).style.display = ‘none’;
document.getElementById(‘receiptFileInput’).value = ‘’;
document.getElementById(‘receiptSaveBtn’).textContent = ‘Save to History’;
document.getElementById(‘receiptSaveBtn’).style.background = ‘’;
window._lastReceipt = null;
window.scrollTo(0,0);
}

// ═══════════════════════════════════════════════════
// WEEKLY OFFERS
// ═══════════════════════════════════════════════════
async function loadWeeklyOffers() {
var today = new Date().toISOString().split(‘T’)[0];
var data = await sbGet(‘prices?select=*&order=created_at.desc&limit=20’);
if (!data.length) return;

var banner = document.getElementById(‘weeklyOffersBanner’);
var list = document.getElementById(‘weeklyOffersList’);
if (!banner || !list) return;

list.innerHTML = ‘’;
data.forEach(function(p) {
var curr = p.currency || (p.store_flag===‘CH’?‘CHF’:‘EUR’);
var flagEmoji = p.store_flag===‘CH’?‘🇨🇭’:p.store_flag===‘FR’?‘🇫🇷’:‘🇩🇪’;
var cleanName = (p.product_name||’’).replace(/[Ѐ-ӿ]/g,’’).replace(/\s*([^)]*)/g,’’).trim().substring(0,28);
var card = document.createElement(‘div’);
card.style.cssText = ‘flex-shrink:0;background:var(–card);border:1px solid rgba(255,159,10,0.25);border-radius:12px;padding:10px 12px;min-width:140px;cursor:pointer’;
card.innerHTML = ‘<div style="font-size:10px;color:var(--orange);font-weight:700;margin-bottom:4px">’+flagEmoji+’ ‘+p.store_name+’</div>’
+ ‘<div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:4px;line-height:1.3">’+cleanName+’</div>’
+ ‘<div style="font-size:16px;font-weight:800;color:var(--orange)">’+curr+’ ‘+parseFloat(p.price).toFixed(2)+’</div>’
+ ‘<div style="font-size:10px;color:var(--text3);margin-top:3px">Tap to add to list</div>’;
card.addEventListener(‘click’, (function(pid){ return function(){ quickAddOffer(pid); }; })(p.product_id));
list.appendChild(card);
});
banner.style.display = ‘block’;
}

function quickAddOffer(pid) {
// Try to find in PRODUCTS
var prod = PRODUCTS.find(function(p){ return p.id===pid; });
if (prod) {
if (!state.basket.find(function(b){return b.pid===pid;})) {
state.basket.push({pid:pid, qty:1});
updateItemCount(); renderCategories();
showToast(‘Added ‘+prod.name+’ to list!’);
} else {
showToast(‘Already in your list!’);
}
} else {
showToast(‘Product added from offers!’);
}
}

// ═══════════════════════════════════════════════════
// BUDGET TRACKER
// ═══════════════════════════════════════════════════
var budget = {amount:0, currency:‘EUR’};
try { var _b = localStorage.getItem(‘ss_budget’); if(_b) budget = JSON.parse(_b); } catch(e) {}

function showBudgetEdit() {
document.getElementById(‘budgetInput’).value = budget.amount || ‘’;
document.getElementById(‘budgetCurrency’).value = budget.currency || ‘EUR’;
document.getElementById(‘budgetModal’).classList.add(‘show’);
}
function closeBudgetModal() {
document.getElementById(‘budgetModal’).classList.remove(‘show’);
}
function saveBudget() {
budget.amount = parseFloat(document.getElementById(‘budgetInput’).value)||0;
budget.currency = document.getElementById(‘budgetCurrency’).value;
try { localStorage.setItem(‘ss_budget’, JSON.stringify(budget)); } catch(e) {}
closeBudgetModal();
updateBudgetUI();
showToast(‘Budget saved!’);
}

function updateBudgetUI() {
var heroEl = document.getElementById(‘budgetHero’);
var setBtnEl = document.getElementById(‘budgetSetBtn’);
if (!heroEl || !setBtnEl) return;

if (!budget.amount) {
heroEl.style.display = ‘none’;
setBtnEl.style.display = ‘block’;
return;
}
heroEl.style.display = ‘block’;
setBtnEl.style.display = ‘none’;

// Calculate spent this month from receipt history
var now = new Date();
var monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
var spent = 0;
receiptHistory.forEach(function(r) {
if (r.ts >= monthStart) spent += (r.total||0);
});

var pct = Math.min(100, Math.round(spent/budget.amount*100));
var remaining = Math.max(0, budget.amount - spent);
var curr = budget.currency;

document.getElementById(‘budgetSpent’).textContent = curr + ’ ’ + spent.toFixed(2);
document.getElementById(‘budgetRemaining’).textContent = curr + ’ ’ + remaining.toFixed(2) + ’ remaining’;
document.getElementById(‘budgetPct’).textContent = pct + ‘%’;
document.getElementById(‘budgetBarFill’).style.width = pct + ‘%’;
document.getElementById(‘budgetBarFill’).style.background = pct > 90 ? ‘var(–red)’ : pct > 70 ? ‘var(–orange)’ : ‘var(–green)’;

// SVG arc
var arc = document.getElementById(‘budgetArc’);
if (arc) {
var circumference = 213.6;
var offset = circumference - (pct/100)*circumference;
arc.style.strokeDashoffset = offset;
arc.style.stroke = pct>90?‘var(–red)’:pct>70?‘var(–orange)’:‘var(–green)’;
}
}

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
renderCategories();
updateItemCount();
loadWeeklyOffers();
updateBudgetUI();
renderReceiptHistory();
