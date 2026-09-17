/* English content. Same structure as data.js: edit both when you change something. */
window.GUIDE_EN = {
  lang: "en", locale: "en-GB",
  wmo: { 0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Overcast", 45: "Fog", 48: "Fog", 51: "Drizzle", 53: "Drizzle", 55: "Drizzle", 61: "Light rain", 63: "Rain", 65: "Heavy rain", 80: "Showers", 81: "Showers", 82: "Heavy showers", 95: "Thunderstorm", 96: "Thunderstorm", 99: "Thunderstorm" },
  ui: {
    nav_today: "Today", nav_days: "Itinerary", nav_map: "Map", nav_guide: "Guide", nav_bag: "Packing",
    map_note: "Tap a pin for details and the navigation button. The line follows real roads (OSRM routing); offline it falls back to a simplified track.",
    map_full: "Whole route on Google Maps", map_dist: "Distances and times", map_dist_note: "Google Maps estimates in normal traffic. In Greece you always arrive a bit later: add 15 %.",
    g_links: "Useful links", g_sites: "Site hours and tickets, October 2026", g_budget: "Estimated budget, 1 person", g_food: "At the table", g_phr: "Ten words that open doors",
    b_todo: "Before you leave", b_todo_sub: "Bookings and checks, each with the right link.", b_pack: "Packing list", b_pack_sub: "Weather: 22–26 °C by day, 13–16 at night, sea 22 °C. Ticks are saved on your phone.", b_reset: "Clear ticks",
    footer: "Driving times and distances: Google Maps estimates. Prices collected in September 2026. Weather: Open-Meteo. Road route: OSRM on OpenStreetMap data, Esri map tiles. Photos: Wikipedia / Wikimedia Commons, licence on the linked page. The tavernas mentioned have been around for years; a glance at recent reviews before sitting down never hurts.",
    loading: "Loading…", see: "What to see", hist: "In two lines.", eat: "Where to eat.", nav: "Navigate (Google)", apple: "Apple Maps", sheet: "Place on Maps", nav_day: "Navigate the day", night: "Night in", weather_in: "Weather in", sleep: "Where to sleep", booking: "Search on Booking", hotels_maps: "Hotels on Maps", alt: "If it rains, if time is left.",
    wiki_it: "Wikipedia (it)", wiki_en: "Wikipedia (en)", photo: "Photo", sunset: "sunset", wind: "wind", min: "min",
    wx_off: "Weather unavailable offline. Mid-October: 22–25 °C by day, 13–16 at night, an occasional shower.",
    wx_far: (last, date, place) => `Forecast available until ${last}; the one for ${date} appears about two weeks ahead. Mid-October average in ${place}: 22–25 °C by day, 13–16 at night.`,
    q_sos: "Emergency 112", q_fuel: "Fuel prices", q_tickets: "Tickets",
    countdown: d => `${d} days to go`, countdown_sub: "Flight Frankfurt → Athens on Wednesday 7 October at 9:35, back Friday 16 at 11:45. Holidays start Monday 12 in Itea.",
    todo_title: "Things to close before leaving", todo_more: "The full list with ticks is in the Packing section.", open: "open", wx_itea: "Weather in Itea, next days", flights: "Flights",
    done_title: "Trip over", done_sub: "The guide stays here for the memories and for next time.", fly_title: "Flight at 11:45", fly_sub: "Leave the hotel at 8:45. Safe trip home.", fly_status: "AIA flight status",
    next: "Next stop", full_prog: "Full programme", now_in: "Right now in", the_day: "The day", nav_all: "Navigate the whole day", max: "High", rain: "rain", sunrise: "Sunrise", wx_off_short: "Weather unavailable offline.",
    dist_h: ["Leg", "km", "time"], site_h: ["Site", "Full", "Notes"], total: "Indicative total", total_v: "€800–1,000", d0_suffix: " – Sunday 11"
  },
  text: {
    sitesIntro: `Ministry of Culture sites: <b>8:00–18:30 until 15 October</b>, <b>8:00–18:00 from the 16th</b>, last entry 20 minutes before closing. Summer rates until 31 October. Official online tickets at <a target="_blank" rel="noopener" href="https://tickets.hh.gr/en">tickets.hh.gr</a> (Hellenic Heritage, no fees): booking is only required for the Acropolis, everywhere else you buy at the gate.`,
    sitesNote: "Prices collected in September 2026. Those given as a range differed between sources: final check on odysseus.culture.gr or at the ticket office.",
    budgetNote: `Unleaded 95 at €2.15/l in mid-September 2026 and rising: check <a target="_blank" rel="noopener" href="https://www.fuelprices.gr/">fuelprices.gr</a>.`,
    foodRules: ["Lunch 13:30–16:00, dinner from 21:00. At 19:30 the good tavernas are empty.", "Order for the table: 3–4 mezedes for two. Fish is priced by weight, ask the price per kilo.", "Tipping: round up or 5–10 %. Bread on the table costs €1–2.", "Tap water is fine in Athens; in the provinces stick to bottled."],
    blocks1: `
    <div class="card"><h3>Numbers and contacts</h3><dl class="kv">
      <dt>Emergencies</dt><dd><a href="tel:112">112</a> European emergency number · Tourist police <a href="tel:1571">1571</a> (English spoken)</dd>
      <dt>Breakdown</dt><dd>first the rental company's number on the contract; then ELPA <a href="tel:10400">10400</a> or Express Service <a href="tel:1154">1154</a></dd>
      <dt>Duty pharmacies</dt><dd>green sign in every pharmacy with the rota; <a target="_blank" rel="noopener" href="https://www.fsa.gr/">fsa.gr</a> for Athens</dd>
      <dt>Italian Embassy</dt><dd>Athens, <a href="tel:+302103617260">+30 210 361 7260</a></dd>
      <dt>Time zone</dt><dd>Greece = Germany + 1 hour (daylight saving until 25 October)</dd>
      <dt>Plugs and phone</dt><dd>Type C/F, 230 V. EU roaming included in a German plan; good coverage everywhere except stretches of Arcadia.</dd></dl></div>
    <div class="card"><h3>Driving in Greece</h3><ul>
      <li>Limits: 50 in town, 90 on national roads, 130 on motorways. Real speed cameras on Corinth–Athens and on Attiki Odos.</li>
      <li>On national roads people drive on the hard shoulder to let others overtake: do the same, with judgement, and expect the car ahead to do it.</li>
      <li>Barrier tolls, paid per section in cash or by card. Yellow lanes are transponder-only: avoid them.</li>
      <li>Petrol stations are attended. Inland some close in the evening: fill up in Olympia on Tuesday morning, in Nafplio on Thursday, in Markopoulo before returning the car.</li>
      <li>Parking: in Nafplio the harbour car park (free), in Olympia at the hotel, in Athens leave the car at the hotel and walk or take the metro.</li>
      <li>German or Italian licence: no international permit needed.</li>
      <li>Goats and dogs on the road in Arcadia are normal; the hairpins above Langadia don't have guardrails everywhere.</li></ul></div>
    <div class="card"><h3>Getting around Athens: metro, taxi, Uber</h3><dl class="kv">
      <dt>Metro</dt><dd>Three lines, clean and punctual. City ticket <b>€1.20</b>, valid 90 minutes on metro, bus and tram: pay by tapping a contactless card or your phone at the gate (Tap2Ride), daily cap €4.10. From the hotel: Akropoli and Syngrou-Fix (line 2) are a 5–10 minute walk from Koukaki; Monastiraki and Syntagma for the centre.</dd>
      <dt>Airport metro</dt><dd>Line 3 from Syntagma, <b>€9</b> (return €16, valid 30 days), 40 minutes, every 30 minutes from 6:30 to 23:30. The city ticket is not valid on the airport section.</dd>
      <dt>Taxi</dt><dd>Yellow, metered: €1.80 flag fall, €0.90/km by day, minimum €4. A ride in the centre costs €5–8. Airport ↔ centre flat fare <b>€40 by day, €55 from 0 to 5 am</b>, all included.</dd>
      <dt>Uber and apps</dt><dd>Uber in Athens only calls yellow taxis (Uber Taxi): same meter price, but with the route and estimated fare shown beforehand and in-app payment, handy in the evening. FreeNow and Bolt do the same; download one of the three before leaving and register a card.</dd>
      <dt>On foot</dt><dd>Koukaki, Acropolis, Plaka, Monastiraki and Psyrri are within a 2 km radius: the centre is walked, the car stays in the garage.</dd></dl>
      <div class="btns"><a class="btn sm" target="_blank" rel="noopener" href="https://www.oasa.gr/en/">OASA, Athens transport</a><a class="btn sm" target="_blank" rel="noopener" href="https://www.stasy.gr/en/">Metro (STASY)</a><a class="btn sm" target="_blank" rel="noopener" href="https://www.uber.com/gr/en/ride/">Uber Athens</a><a class="btn sm" target="_blank" rel="noopener" href="https://www.free-now.com/gr/">FreeNow</a></div></div>`,
    blocks2: `
    <div class="card"><h3>History in two minutes, to find your way among the stones</h3><dl class="kv small">
      <dt>1600–1100 BC</dt><dd><b>Mycenaeans</b>: Mycenae, Tiryns, the Trojan War. Gold, cyclopean walls, Linear B.</dd>
      <dt>1100–800</dt><dd><b>Dark Ages</b>: everything collapses, writing is lost.</dd>
      <dt>800–480</dt><dd><b>Archaic period</b>: the city-states are born, Olympia (776) and Delphi, the first stone temples.</dd>
      <dt>480–323</dt><dd><b>Classical period</b>: Pericles, the Parthenon, Socrates, Epidaurus. Ends with Alexander.</dd>
      <dt>323–146</dt><dd><b>Hellenism</b>: the successor kingdoms, then the Romans arrive.</dd>
      <dt>146 BC–330 AD</dt><dd><b>Rome</b>: Nero at Corinth, Hadrian in Athens, the Odeon of Herodes Atticus.</dd>
      <dt>330–1453</dt><dd><b>Byzantium</b>: Hosios Loukas, the churches of Athens, the castles.</dd>
      <dt>1204–1715</dt><dd><b>Franks and Venetians</b>: Nafplio, Palamidi, Bourtzi, Nafpaktos.</dd>
      <dt>1453–1821</dt><dd><b>Ottomans</b>: four centuries, the mosques of Nafplio.</dd>
      <dt>1821–1834</dt><dd><b>Independence</b>: Kolokotronis, Kapodistrias, Nafplio as capital, then Athens.</dd></dl></div>
    <div class="card"><h3>Friday 16: the 11:45 flight</h3><ul class="small">
      <li>At the airport by 9:45: online check-in the evening before, single terminal, Schengen controls, 45 minutes is enough.</li>
      <li>Centre to airport by car: 35–45 minutes via Attiki Odos; at 9 there's outbound traffic, so leave the hotel at 8:45 (8:30 for a margin). Return the car by 9:30.</li>
      <li>No-driving alternative: metro line 3 (change at Syntagma), €9, 50 minutes from Koukaki; but the car would have to go back on Thursday evening.</li>
      <li>Hotel with garage and breakfast from 7:30: ask when booking.</li></ul></div>`
  },
  ui_food: { n_title: "My notes", n_sub: "Stored only on this phone (browser local storage): no account, no cloud. \"Copy all\" takes them wherever you want.", n_general: "General notes", n_copy: "Copy all", n_copied: "copied", n_fields: [["rental","Car rental: reference, company, plate"],["hotels","Hotel confirmations"],["flight","Flight booking code"],["other","Other (insurance, contacts…)"]], nav_bag: "Mine", f_menu: "The menu, in pictures", f_menu_sub: "To recognise what you see in the trays and the shop window. Photos from Wikipedia.", g_phr: "Phrasebook", nav_food: "Food", f_title: "Where the locals eat", f_intro: "No fancy restaurants: tavernas, mageirio (the lunchtime places with trays behind the counter), souvlaki and pastry shops. Price band: € under 12 a head, €€ 15–25. Ticks mark where you've been.", f_all: "All", f_sweet: "Sweets", f_eat: "Eating", f_map: "Food on the map", f_price: "price", f_visited: "visited" },
  food_places: [
    { area: "Itea · Delphi · Galaxidi", items: [
      { cat: "eat", name: "O Bebelis", city: "Galaxidi", what: "Home cooking in a courtyard: gemista, rabbit stifado, the moussaka. Where the town eats.", price: "€", lat: 38.3803, lng: 22.3838 },
      { cat: "eat", name: "Albatross", city: "Galaxidi", what: "Historic taverna on the harbour, small fried fish and mezedes, honest bill.", price: "€€", lat: 38.3795, lng: 22.3830 },
      { cat: "eat", name: "Karathanasi", city: "Arachova", what: "Mountain grill: kontosouvli, kokoretsi, grilled formaela. Loud and full of Greeks.", price: "€", lat: 38.4788, lng: 22.5860 },
      { cat: "sweet", name: "Arachova pastry shops", city: "Arachova", what: "Karydopita (honey walnut cake) and ravani. Any zacharoplasteio on the main street, they all make them in-house.", price: "€", lat: 38.4790, lng: 22.5870 },
      { cat: "eat", name: "Itea seafront", city: "Itea", what: "The fish tavernas on the water do a good quick lunch: grilled sardines, salad, half a carafe. Pick the one with the most Greeks at the tables.", price: "€", lat: 38.4322, lng: 22.4260 } ] },
    { area: "Nafpaktos · Olympia", items: [
      { cat: "eat", name: "Cafés on the Venetian harbour", city: "Nafpaktos", what: "Freddo espresso and koulouri under the towers. For lunch, the tavernas behind the harbour towards the castle.", price: "€", lat: 38.3919, lng: 21.8296 },
      { cat: "eat", name: "Bacchus", city: "Ancient Pissa, Olympia", what: "Family taverna with a terrace over the valley: oven lamb, garden vegetables, house wine. The best-loved place around.", price: "€€", lat: 37.6497, lng: 21.6353 },
      { cat: "eat", name: "Aegean", city: "Olympia", what: "In the village, traditional, big portions and fair prices. Gemista and pastitsio.", price: "€", lat: 37.6440, lng: 21.6250 } ] },
    { area: "Arcadia", items: [
      { cat: "eat", name: "Klimataria", city: "Vytina", what: "Historic taverna under the vine, since the 1950s: kokoras me hilopites (rooster with fresh pasta), stew with chestnuts. A 10-minute detour, worth it.", price: "€", lat: 37.6595, lng: 22.1130 },
      { cat: "sweet", name: "Vytina square", city: "Vytina", what: "Fir honey, green-walnut spoon sweets, karydopita. Take a jar of honey home.", price: "€", lat: 37.6592, lng: 22.1125 },
      { cat: "eat", name: "Langadia square", city: "Langadia", what: "Greek coffee at the kafeneio overlooking the gorge. If it's lunchtime, the taverna on the square does fasolada and meatballs.", price: "€", lat: 37.6839, lng: 22.0339 } ] },
    { area: "Nafplio · Argolid", items: [
      { cat: "eat", name: "Ta Fanaria", city: "Nafplio", what: "On a stepped lane, home cooking since 1980: gemista, lemon lamb, imam aubergines. Prices ten years behind.", price: "€", lat: 37.5666, lng: 22.7967 },
      { cat: "eat", name: "Kakanarakis 1986", city: "Nafplio", what: "Argolid dishes: pork with prunes, kid goat, cheese pie. Full of local families.", price: "€€", lat: 37.5665, lng: 22.7975 },
      { cat: "eat", name: "O Noulis", city: "Nafplio", what: "Small, real mezedopoleio: saganaki, meatballs, sharing plates with ouzo. Dinner from 12 euro.", price: "€", lat: 37.5663, lng: 22.7982 },
      { cat: "eat", name: "Vasilis", city: "Nafplio", what: "Historic taverna on Staikopoulou street, no frills: moussaka, oven chicken, giant beans.", price: "€", lat: 37.5664, lng: 22.7965 },
      { cat: "sweet", name: "Antica Gelateria di Roma", city: "Nafplio", what: "Ice cream by two Italians, the best in Greece. Try the mastic kaimaki for the Greek flavour.", price: "€", lat: 37.5665, lng: 22.7960 },
      { cat: "sweet", name: "Kentrikon, Syntagma square", city: "Nafplio", what: "The square's historic café: portokalopita with Argolid oranges and Greek coffee, watching the square.", price: "€", lat: 37.5666, lng: 22.7985 },
      { cat: "eat", name: "Mouria", city: "Palaia Epidavros", what: "On the seafront for three generations: grilled catch of the day, octopus salad, hand-cut chips.", price: "€€", lat: 37.6373, lng: 23.1566 } ] },
    { area: "Athens, eating", items: [
      { cat: "eat", name: "Diporto", city: "Varvakios, centre", what: "Unmarked basement since 1887, down a staircase at Sokratous 9: beans, sardines, pork with celery, wine from the barrel, bill by eye. The most authentic place in Athens. Lunch only.", price: "€", lat: 37.9805, lng: 23.7263 },
      { cat: "eat", name: "Oinomageireio Epirus", city: "Varvakios market", what: "Inside the meat market, since 1898: patsas (tripe soup), soups, stews. The butchers eat here.", price: "€", lat: 37.9809, lng: 23.7268 },
      { cat: "eat", name: "Ta Karamanlidika tou Fani", city: "Sokratous 1", what: "Deli-taverna: pastourma, soutzouki, cheeses, mezedes. Excellent and still popular.", price: "€€", lat: 37.9808, lng: 23.7262 },
      { cat: "eat", name: "Kostas", city: "Agia Irini square", what: "Pork souvlaki in pita with tomato sauce, since 1950. Runs out around 14:00, two and a half euro.", price: "€", lat: 37.9770, lng: 23.7275 },
      { cat: "eat", name: "Feyrouz", city: "Karori 23, Psyrri", what: "Anatolian street food from a Greek family from Antioch: lahmacun, peinirli, all made to order. Queue of Athenians.", price: "€", lat: 37.9787, lng: 23.7268 },
      { cat: "eat", name: "Atlantikos", city: "Psyrri", what: "Fried and grilled fish at market prices in an alley: anchovies, squid, marinated gavros.", price: "€", lat: 37.9797, lng: 23.7237 },
      { cat: "eat", name: "Klimataria", city: "Theatrou square", what: "1927 taverna with live rebetiko at weekends: home cooking, bulk wine, the real atmosphere.", price: "€€", lat: 37.9822, lng: 23.7255 },
      { cat: "eat", name: "To Kati Allo", city: "Koukaki", what: "Behind the Acropolis Museum, a mageirio with the day's trays: moussaka, beans, chicken with potatoes. Lunch from 9 euro.", price: "€", lat: 37.9680, lng: 23.7290 },
      { cat: "eat", name: "O Thanasis", city: "Monastiraki", what: "Kebab and souvlaki since 1964, the Monastiraki square classic. Loud, fast, good.", price: "€", lat: 37.9760, lng: 23.7258 } ] },
    { area: "Athens, sweets", items: [
      { cat: "sweet", name: "Bougatsadiko Thessaloniki", city: "Iroon square, Psyrri", what: "Bougatsa the northern way, warm custard and hand-stretched filo, open 24 hours.", price: "€", lat: 37.9794, lng: 23.7252 },
      { cat: "sweet", name: "Krinos", city: "Aiolou 87", what: "Loukoumades since 1923, with honey and cinnamon, served hot in a room that hasn't changed.", price: "€", lat: 37.9805, lng: 23.7275 },
      { cat: "sweet", name: "Lukumades", city: "Aiolou 21", what: "The modern version: filled loukoumades, with ice cream, with chocolate. For comparison.", price: "€", lat: 37.9770, lng: 23.7280 },
      { cat: "sweet", name: "Kora", city: "Kolonaki", what: "The bakery Athens queues for: croissants, cardamom buns, bread. Early morning.", price: "€", lat: 37.9797, lng: 23.7407 },
      { cat: "sweet", name: "Overoll", city: "Koukaki", what: "Croissanterie two steps from the hotel: croissants and pastries, Friday breakfast.", price: "€", lat: 37.9640, lng: 23.7285 },
      { cat: "sweet", name: "Asimakopouloi", city: "Exarchia", what: "Pastry shop since 1915, the old guard: galaktoboureko, ekmek kataifi, tsoureki.", price: "€", lat: 37.9863, lng: 23.7360 },
      { cat: "sweet", name: "Stani", city: "Omonia", what: "Dairy since 1931: sheep's yogurt with honey and walnuts, rizogalo. Breakfast or snack.", price: "€", lat: 37.9838, lng: 23.7282 },
      { cat: "sweet", name: "Kokkion", city: "Psyrri", what: "Artisan ice cream, Greek flavours: mastic, fig, yogurt. If it's still warm.", price: "€", lat: 37.9787, lng: 23.7245 },
      { cat: "sweet", name: "Ariston", city: "Voulis 10, Syntagma", what: "Since 1910, the most famous kourou tiropita in Athens: the savoury that serves as breakfast.", price: "€", lat: 37.9752, lng: 23.7328 } ] },
  ],
  menu: [
    { group: "Sweets", items: [
      { name: "Bougatsa", wiki: "Bougatsa", desc: "Thin filo with warm semolina custard, icing sugar and cinnamon. Breakfast, eaten standing." },
      { name: "Galaktoboureko", wiki: "Galaktoboureko", desc: "Custard baked in filo and soaked in syrup. The benchmark of any pastry shop." },
      { name: "Loukoumades", wiki: "Loukoumades", desc: "Hot doughnuts with honey, cinnamon and walnuts." },
      { name: "Kataifi", wiki: "Kadaif", desc: "Shredded-pastry nest with walnuts and syrup; the ekmek version has custard and cream on top." },
      { name: "Karydopita", wiki: "Karydopita", desc: "Syrupy walnut cake, the mountain speciality." },
      { name: "Revani", wiki: "Revani", desc: "Soaked semolina cake, often lemon or orange (portokalopita is its cousin made with filo)." },
      { name: "Baklava", wiki: "Baklava", desc: "Layers of filo and nuts with syrup: here more buttery and less sweet than in Turkey." },
      { name: "Spoon sweets", wiki: "Spoon sweets", desc: "Whole fruit in syrup served with iced water: bitter orange, quince, green walnut." },
      { name: "Rizogalo", wiki: "Rice pudding", desc: "Rice pudding with cinnamon, the comfort food of the dairies." },
      { name: "Tsoureki", wiki: "Tsoureki", desc: "Braided brioche with mahleb and mastic, great toasted at breakfast." } ] },
    { group: "Breakfast and street food", items: [
      { name: "Koulouri", wiki: "Koulouri", desc: "Sesame bread ring sold from carts from 7 am. The Athens breakfast." },
      { name: "Tiropita", wiki: "Tiropita", desc: "Cheese pie; the kourou kind has a savoury shortcrust." },
      { name: "Spanakopita", wiki: "Spanakopita", desc: "Filo pie with spinach and feta." },
      { name: "Souvlaki", wiki: "Souvlaki", desc: "Pork or chicken skewer, on its own or in pita with tomato, onion, tzatziki and chips." },
      { name: "Gyros", wiki: "Gyros", desc: "Meat from the rotisserie in pita. Ask for 'ap'ola' to have it with everything." },
      { name: "Freddo espresso", wiki: "Freddo espresso", desc: "Double espresso shaken over ice: the national coffee from May to October." } ] },
    { group: "Mezedes, for sharing", items: [
      { name: "Saganaki", wiki: "Saganaki", desc: "Pan-fried cheese, with lemon." },
      { name: "Tzatziki", wiki: "Tzatziki", desc: "Yogurt, cucumber, garlic and oil. Goes with everything." },
      { name: "Taramosalata", wiki: "Taramasalata", desc: "Fish-roe dip: the real one is beige, not pink." },
      { name: "Dolmades", wiki: "Dolma", desc: "Vine leaves stuffed with rice and herbs, cold with lemon." },
      { name: "Gigantes", wiki: "Gigantes plaki", desc: "Giant beans baked with tomato and dill." },
      { name: "Kolokythokeftedes", wiki: "Kolokithokeftedes", desc: "Courgette fritters with feta and mint." },
      { name: "Horiatiki", wiki: "Greek salad", desc: "The real Greek salad: tomato, cucumber, onion, olives, oregano and a whole slab of feta. No lettuce." },
      { name: "Kokoretsi", wiki: "Kokoretsi", desc: "Lamb offal wrapped in intestine and spit-roasted. For the brave, in Arachova." } ] },
    { group: "Mains", items: [
      { name: "Gemista", wiki: "Gemista", desc: "Tomatoes and peppers stuffed with rice and herbs, baked with potatoes." },
      { name: "Moussaka", wiki: "Moussaka", desc: "Aubergine, meat sauce and béchamel. In a mageirio it's made in the morning and served warm." },
      { name: "Pastitsio", wiki: "Pastitsio", desc: "Long hollow pasta with cinnamon-scented meat sauce and béchamel." },
      { name: "Kokoras me hilopites", wiki: "Hilopites", desc: "Rooster stewed with square fresh pasta: the dish of Arcadia." },
      { name: "Stifado", wiki: "Stifado", desc: "Beef or rabbit stew with baby onions and wine, a hint of cinnamon." },
      { name: "Kleftiko", wiki: "Kleftiko", desc: "Lamb slow-cooked in parchment with potatoes and cheese." },
      { name: "Youvetsi", wiki: "Giouvetsi", desc: "Meat baked with orzo (kritharaki) and tomato in a clay dish." },
      { name: "Fasolada", wiki: "Fasolada", desc: "Bean soup with celery and carrots: the national weekday dish." },
      { name: "Patsas", wiki: "Tripe soup", desc: "Tripe soup with garlic and vinegar, the one from the Athens market at 6 am." },
      { name: "Grilled fish", wiki: "Gilt-head bream", desc: "Tsipoura (bream) and lavraki (bass) are priced by weight: ask the price per kilo, a portion fish is 350–400 g." } ] },
    { group: "Drinks", items: [
      { name: "Greek coffee", wiki: "Greek coffee", desc: "Boiled in a briki, grounds at the bottom: sketos (no sugar), metrios (medium), glykos (sweet)." },
      { name: "Ouzo", wiki: "Ouzo", desc: "Aniseed; turns white with ice and water. With mezedes, never alone." },
      { name: "Tsipouro", wiki: "Tsipouro", desc: "Pomace brandy, with or without anise; often offered at the end of the meal." },
      { name: "House wine", wiki: "Retsina", desc: "In a taverna you order by the carafe (misó kiló = half a litre). Resinated retsina is a taste to try once." },
      { name: "Beer", wiki: "Fix Hellas", desc: "Fix, Mythos, Alfa, Mamos: light and cold, half a litre for 4 euro." } ] }
  ],
  phrasebook: [
    { group: "Greetings and courtesy", items: [["Καλημέρα", "kaliméra", "good morning (until mid-afternoon)"], ["Καλησπέρα", "kalispéra", "good evening"], ["Καληνύχτα", "kaliníchta", "good night"], ["Γεια σας / Γεια σου", "ya sas / ya su", "hello (formal) / hi"], ["Ευχαριστώ (πολύ)", "efcharistó (polí)", "thank you (very much)"], ["Παρακαλώ", "parakaló", "you're welcome / please"], ["Ναι / Όχι", "ne / óchi", "yes / no ('ne' is yes!)"], ["Συγγνώμη", "signómi", "excuse me / sorry"], ["Δεν καταλαβαίνω", "den katalavéno", "I don't understand"], ["Μιλάτε αγγλικά;", "miláte angliká?", "do you speak English?"], ["Είμαι Ιταλός", "íme Italós", "I'm Italian"]] },
    { group: "At the restaurant", items: [["Ένα τραπέζι για έναν", "éna trapézi ya énan", "a table for one"], ["Τον κατάλογο, παρακαλώ", "ton katálogo, parakaló", "the menu, please"], ["Τι προτείνετε;", "ti protínete?", "what do you recommend?"], ["Τι έχετε σήμερα;", "ti échete símera?", "what do you have today? (in a mageirio)"], ["Θα ήθελα…", "tha íthela…", "I'd like…"], ["Μισό κιλό κρασί", "misó kiló krasí", "half a litre of house wine"], ["Ένα νερό, παρακαλώ", "éna neró, parakaló", "a water, please"], ["Χωρίς…", "chorís…", "without…"], ["Πόσο κάνει το κιλό;", "póso káni to kiló?", "how much per kilo? (fish)"], ["Ήταν πολύ νόστιμο", "ítan polí nóstimo", "it was delicious"], ["Τον λογαριασμό, παρακαλώ", "ton logariasmó, parakaló", "the bill, please"], ["Με κάρτα;", "me kárta?", "by card?"], ["Στην υγειά μας!", "stin iyá mas! (yámas)", "cheers!"], ["Καλή όρεξη", "kalí órexi", "enjoy your meal"]] },
    { group: "At the café and pastry shop", items: [["Έναν ελληνικό, μέτριο", "énan ellinikó, métrio", "a Greek coffee, medium sweet"], ["Ένα φρέντο εσπρέσο, σκέτο", "éna fréddo esprésso, skéto", "a freddo espresso, no sugar"], ["Ένα κουλούρι", "éna kulúri", "a koulouri"], ["Μία μπουγάτσα με κρέμα", "mía bugátsa me kréma", "a cream bougatsa"], ["Ένα κομμάτι γαλακτομπούρεκο", "éna kommáti galaktobúreko", "a slice of galaktoboureko"], ["Για εδώ / Για έξω", "ya edó / ya éxo", "for here / to take away"]] },
    { group: "On the road", items: [["Πού είναι…;", "pu íne…?", "where is…?"], ["Γεμίστε το, παρακαλώ", "yemíste to, parakaló", "fill it up, please"], ["Αμόλυβδη 95", "amólivdi eneninda pénde", "unleaded 95"], ["Πού μπορώ να παρκάρω;", "pu boró na parkáro?", "where can I park?"], ["Διόδια", "diódia", "toll"], ["Έξοδος", "éxodos", "exit"], ["Κέντρο", "kéndro", "centre"], ["Πόσο μακριά είναι;", "póso makriá íne?", "how far is it?"], ["Δεξιά / Αριστερά / Ευθεία", "dexiá / aristerá / efthía", "right / left / straight on"], ["Ανοιχτό / Κλειστό", "anichtó / klistó", "open / closed"], ["Τι ώρα κλείνει;", "ti óra klíni?", "what time does it close?"], ["Ένα εισιτήριο, παρακαλώ", "éna isitírio, parakaló", "one ticket, please"]] },
    { group: "At the hotel", items: [["Έχω κράτηση", "écho krátisi", "I have a reservation"], ["Έχετε πάρκινγκ;", "échete párking?", "do you have parking?"], ["Ο κωδικός του Wi-Fi;", "o kodikós tu wi-fi?", "the Wi-Fi password?"], ["Τι ώρα είναι το πρωινό;", "ti óra íne to proinó?", "what time is breakfast?"], ["Μπορώ να πληρώσω τώρα;", "boró na pliróso tóra?", "can I pay now?"], ["Ένα ταξί για τις 4, παρακαλώ", "éna taxí ya tis tésseris, parakaló", "a taxi for 4 o'clock, please"]] },
    { group: "Numbers and emergencies", items: [["1 2 3 4 5", "éna, dío, tría, téssera, pénde", ""], ["6 7 8 9 10", "éxi, eftá, ochtó, enniá, déka", ""], ["20 / 50 / 100", "íkosi / penínda / ekató", ""], ["Βοήθεια!", "voíthia!", "help!"], ["Χρειάζομαι γιατρό", "chriázome yatró", "I need a doctor"], ["Φαρμακείο", "farmakío", "pharmacy"], ["Πού είναι η τουαλέτα;", "pu íne i tualéta?", "where is the toilet?"]] }
  ],
  essentials: [
    ["Country", "Greece: European Union, Schengen area, euro. No passport control arriving from Frankfurt, no currency exchange, no converter needed: prices are in euro as at home."],
    ["Documents", "An ID card is enough. A valid German or Italian driving licence, no international permit. European health insurance card for doctors and hospitals."],
    ["Phone", "EU roaming: calls, texts and data from your German plan work in Greece at no extra cost (just check any data cap). No eSIM needed. Good 4G/5G coverage except mountain stretches in Arcadia."],
    ["Sockets", "<span class=\"plugs\"><svg viewBox=\"0 0 64 64\" aria-label=\"Type F\"><rect x=\"4\" y=\"4\" width=\"56\" height=\"56\" rx=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"32\" cy=\"32\" r=\"19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"23\" cy=\"32\" r=\"3.2\" fill=\"currentColor\"/><circle cx=\"41\" cy=\"32\" r=\"3.2\" fill=\"currentColor\"/><rect x=\"29\" y=\"11\" width=\"6\" height=\"5\" rx=\"1\" fill=\"currentColor\"/><rect x=\"29\" y=\"48\" width=\"6\" height=\"5\" rx=\"1\" fill=\"currentColor\"/></svg><svg viewBox=\"0 0 64 64\" aria-label=\"Type C\"><rect x=\"4\" y=\"4\" width=\"56\" height=\"56\" rx=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"32\" cy=\"32\" r=\"19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"23\" cy=\"32\" r=\"3.2\" fill=\"currentColor\"/><circle cx=\"41\" cy=\"32\" r=\"3.2\" fill=\"currentColor\"/></svg></span> <b>Type F (Schuko)</b> and <b>type C</b>, 230 V, 50 Hz: the same sockets as Germany and Italy. No adapter; the small three-pin Italian plug (type L) fits Greek sockets, the German Schuko is at home. USB sockets in hotels aren't guaranteed: bring your own charger."],
    ["Money", "Cards accepted almost everywhere, but cash for tolls, village tavernas, kiosks and the Bourtzi boat. Use Greek bank ATMs (Alpha, Piraeus, NBG, Eurobank), not the yellow Euronet ones that charge €3–4 per withdrawal. If a card terminal asks 'pay in EUR or your currency', always choose EUR."],
    ["Tipping", "Not compulsory: round up or leave 5–10 % in a taverna, a few coins at a café, round up for taxis."],
    ["Hours", "Shops 9–14 and 17:30–21 (Tue, Thu, Fri), mornings only Mon, Wed, Sat; many closed on Sunday. Supermarkets open through until 21. Periptera (kiosks) sell water, cigarettes and top-ups almost round the clock."],
    ["Time", "UTC+3 until 25 October: one hour ahead of Germany and Italy. Sunrise around 7:30, sunset around 18:45. Your phone updates itself on landing."],
    ["Water", "Tap water is fine in Athens; in the provinces prefer bottled. The half-litre bottle has a capped price of €0.50 at kiosks."],
    ["Toilets", "In many tavernas and homes toilet paper goes in the bin, not the bowl: the pipes are narrow. There's always a sign."],
    ["Sun and sea", "UV index still 5–6 at midday: sunscreen and hat. Sea at 22–23 °C, jellyfish rare in October."],
    ["Pharmacies", "Green cross, well stocked, pharmacists advise and speak English. Duty rota: the list is on the door."],
    ["Safety", "Greece is very safe. In Athens mind your wallet on the metro (line 3 to the airport) and around Monastiraki. Car: leave nothing visible."],
    ["Driving", "Drive on the right, seat belts compulsory, alcohol limit 0.5 (0.2 for new drivers). Greeks flash their lights to say 'you go'."],
    ["Gestures", "The Greek 'yes' is a slight nod down; the 'no' is the chin up with a small click: it looks like a yes. And an open palm towards someone (moutza) is an insult: no high-fives in the street."],
    ["Holidays and strikes", "No national holiday on your dates (28 October is after). Transport strikes are frequent and announced a few days ahead: Ekathimerini in the useful links."],
    ["Smoking", "Banned indoors, in practice tolerated outdoors and in many tavernas. Terraces are for smokers."]
  ],
  signs: [["ΕΙΣΟΔΟΣ", "ísodos", "entrance"], ["ΕΞΟΔΟΣ", "éxodos", "exit"], ["ΑΝΟΙΚΤΟ / ΚΛΕΙΣΤΟ", "anichtó / klistó", "open / closed"], ["ΚΕΝΤΡΟ", "kéndro", "centre"], ["ΠΑΡΑΛΙΑ", "paralía", "beach"], ["ΛΙΜΑΝΙ", "limáni", "harbour"], ["ΑΕΡΟΔΡΟΜΙΟ", "aerodrómio", "airport"], ["ΔΙΟΔΙΑ", "diódia", "toll"], ["ΒΕΝΖΙΝΑΔΙΚΟ", "venzinádiko", "petrol station"], ["ΑΜΟΛΥΒΔΗ", "amólivdi", "unleaded"], ["ΠΑΡΚΙΝΓΚ", "párking", "parking"], ["ΑΠΑΓΟΡΕΥΕΤΑΙ", "apagorévete", "forbidden"], ["ΠΡΟΣΟΧΗ", "prosochí", "caution"], ["ΦΑΡΜΑΚΕΙΟ", "farmakío", "pharmacy"], ["ΝΟΣΟΚΟΜΕΙΟ", "nosokomío", "hospital"], ["ΑΣΤΥΝΟΜΙΑ", "astinomía", "police"], ["ΤΟΥΑΛΕΤΕΣ", "tualétes", "toilets"], ["ΑΝΔΡΩΝ / ΓΥΝΑΙΚΩΝ", "andrón / yinekón", "men / women"], ["ΑΡΧΑΙΟΛΟΓΙΚΟΣ ΧΩΡΟΣ", "archeologikós chóros", "archaeological site"], ["ΜΟΥΣΕΙΟ", "musío", "museum"], ["ΤΑΒΕΡΝΑ / ΨΗΣΤΑΡΙΑ", "tavérna / psistariá", "taverna / grill house"], ["ΖΑΧΑΡΟΠΛΑΣΤΕΙΟ", "zacharoplastío", "pastry shop"], ["ΦΟΥΡΝΟΣ", "fúrnos", "bakery"], ["ΠΕΡΙΠΤΕΡΟ", "períptero", "kiosk"]],
  alphabet: "Α α a · Β β v · Γ γ gh/y · Δ δ dh · Ε ε e · Ζ ζ z · Η η i · Θ θ th · Ι ι i · Κ κ k · Λ λ l · Μ μ m · Ν ν n · Ξ ξ x · Ο ο o · Π π p · Ρ ρ r · Σ σ/ς s · Τ τ t · Υ υ i · Φ φ f · Χ χ ch · Ψ ψ ps · Ω ω o. Combinations: ΟΥ = u, ΑΙ = e, ΕΙ/ΟΙ = i, ΜΠ = b, ΝΤ = d, ΓΚ = g, ΤΣ = ts.",
  ui_ess: { expand_all: "Expand all", collapse_all: "Collapse all", nav_short: "Navigate", on_foot: "A day on foot, car in the garage", e_title: "The country in brief", e_signs: "Signs you'll see", e_alpha: "The alphabet, to read the signs", e_fuel: "Fuel calculator", e_km: "km", e_cons: "l/100 km", e_price: "€/l", e_res: "estimated cost" },
  trip: { start: "2026-10-07", end: "2026-10-16", ferieStart: "2026-10-12", title: "Greece 2026 — Classic Peloponnese", short: "Greece 2026", basePlace: "itea", endPlace: "atene", returnDate: "2026-10-16", defaultDay: "d1", heroBefore: "Nafplio", heroAfter: "Acropolis of Athens", heroReturn: "Ancient Agora of Athens", returnLinks: [["AIA flight status", "https://www.aia.gr/traveler/flight-info/"], ["Lufthansa", "https://www.lufthansa.com/"]], fullRouteUrl: "https://www.google.com/maps/dir/?api=1&origin=Itea,Greece&destination=Athens+International+Airport&waypoints=Nafpaktos,Greece%7CArchaeological+Site+of+Olympia%7CNafplio,Greece%7CCorinth+Canal&travelmode=driving", routeWaypoints: [[38.4336, 22.4247], [38.3919, 21.8296], [37.6384, 21.6300], [37.6839, 22.0339], [37.5676, 22.8016], [37.7308, 22.7564], [37.5960, 23.0793], [37.6376, 23.1573], [37.5676, 22.8016], [37.9349, 22.9843], [37.9715, 23.7257], [37.9364, 23.9445]] },
  flights: [
    { d: "2026-10-07", t: "09:35 → 13:25", from: "FRA", to: "ATH", n: "Lufthansa, 2 h 50 · at Delphi by 16:30" },
    { d: "2026-10-16", t: "11:45 → 13:50", from: "ATH", to: "FRA", n: "Lufthansa, 3 h 05 · at the airport by 09:45" }
  ],
  places: {
    itea: { name: "Itea", lat: 38.4336, lng: 22.4247 }, delfi: { name: "Delphi", lat: 38.4824, lng: 22.5010 }, olimpia: { name: "Olympia", lat: 37.6384, lng: 21.6300 },
    nafplio: { name: "Nafplio", lat: 37.5676, lng: 22.8016 }, atene: { name: "Athens", lat: 37.9715, lng: 23.7257 }, sounion: { name: "Sounion", lat: 37.6502, lng: 24.0246 }, airport: { name: "Athens Airport", lat: 37.9364, lng: 23.9445 }
  },
  dayPlace: { "2026-10-07": "itea", "2026-10-08": "delfi", "2026-10-09": "itea", "2026-10-10": "itea", "2026-10-11": "itea", "2026-10-12": "olimpia", "2026-10-13": "nafplio", "2026-10-14": "atene", "2026-10-15": "atene", "2026-10-16": "atene" },
  colors: { d0: "#8A8F93", d1: "#1F8F6B", d2: "#7A5CC2", d3: "#D1602B", d4: "#1F4E79", d5: "#D9A441" },

  days: [
  { id: "d0", date: "2026-10-07", chip: ["7–11 Oct", "arrival · work"], title: "Arrival via Delphi, then work in Itea", place: "itea", night: "Itea", hero: "Delphi",
    intro: "You land at 13:25: there's time to see Delphi in the late-afternoon light before dropping down to Itea. Then four days of training and race, with the evenings free.",
    legs: [["Athens Airport", "Delphi", 190, "2 h 20"], ["Delphi", "Itea", 15, "20 min"]],
    routeNote: "In the car by about 14:15. A1 north to the Livadia/Delphi exit, then the national road via Arachova. At Delphi by 16:30, site open until 18:30. Tolls ~€8. If after the flight you don't feel like ruins, Hosios Loukas is 10 minutes off the road and closes at 17.",
    origin: "Athens International Airport", dest: "Itea,Greece", way: ["Archaeological Site of Delphi"],
    stops: [
      { name: "Delphi", time: "16:30", dur: "Wed 7, until closing", lat: 38.4824, lng: 22.5010, wiki: "Delphi", wit: "Delfi", nav: "Archaeological Site of Delphi",
        desc: "The best moment for the site: the coaches have left, the light is low over the olive valley and two hours are enough to see everything unhurried. Leave the museum for a morning on a working day (opens at 8).",
        hist: "For the Greeks this was the navel of the world: here the Pythia, seated on her tripod amid the vapours, gave answers that decided wars and colonies. The Pythian Games were second only to Olympia's.",
        info: [["Hours", "8:00–18:30 until 15/10, last entry 18:10"], ["Ticket", "€20, valid for site and museum (also on different days: ask at the desk)"], ["Parking", "along the road between site and museum"]],
        see: [["Sanctuary of Apollo", "the Sacred Way, the city treasuries and the temple of the oracle"], ["Theatre", "above the temple, the view that justifies the trip"], ["Stadium", "at the top, a 10-minute climb, empty at sunset"], ["Tholos of Athena Pronaia", "below the road, free, the most photographed circle of columns: afterwards, on the way to Itea"], ["Museum", "the bronze Charioteer, the Sphinx of Naxos, the Omphalos: one morning at 8 between the 8th and the 10th"]],
        tip: "The Castalian Spring has been closed for years because of rockfalls. At 18:30 you're in Itea by 19: dinner on the seafront.",
        links: [["Official site", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2507"], ["Tickets online", "https://tickets.hh.gr/en"], ["Wikivoyage", "https://en.wikivoyage.org/wiki/Delphi"]] },
      { name: "Galaxidi", time: "evening", dur: "a dinner on a training day", lat: 38.3793, lng: 22.3819, wiki: "Galaxidi", wit: "Galaxidi", nav: "Galaxidi",
        desc: "Twenty minutes along the coast. The captains' town: neoclassical houses on two little harbours, the right place for a quiet dinner away from work.",
        hist: "In the 19th century Greece's third-largest sailing fleet set out from here. When steam arrived the town stopped, which is why it has stayed intact.",
        see: [["Agora harbour", "fish tavernas on the quay, sunset over Parnassus"], ["Maritime Museum", "small, tells the story of the 19th-century fleet"], ["Pefkakia pine wood", "opposite the town, for a walk after dinner"]],
        eat: "O Bebelis for home cooking in a courtyard, Ta Delfinia or Albatross on the harbour for fish.",
        links: [["Wikivoyage", "https://en.wikivoyage.org/wiki/Galaxidi"]] },
      { name: "Arachova", time: "evening", dur: "another dinner", lat: 38.4787, lng: 22.5866, wiki: "Arachova", wit: "Arachova", nav: "Arachova",
        desc: "The mountain village above Delphi, 25 minutes away. In winter it's the Greeks' Cortina; in October it's quiet, with the view down the olive valley to Itea.",
        see: [["Clock tower", "on the rock above the village"], ["Karathanasi", "mountain grill and grilled formaela, loud and full of Greeks"], ["Karydopita", "the honey walnut cake, at any pastry shop on the main street"]] },
      { name: "Hosios Loukas monastery", time: "8:30", dur: "1 hour, if you have a morning", lat: 38.3958, lng: 22.7466, wiki: "Hosios Loukas", wit: "Monastero di Osios Loukas", nav: "Hosios Loukas Monastery",
        desc: "Thirty-five minutes away, UNESCO-listed: the best-preserved 11th-century Byzantine mosaics in Greece, in an amphitheatre of mountains facing Helicon.",
        info: [["Hours", "check, usually 9–17"], ["Ticket", "about €6"]],
        links: [["UNESCO", "https://whc.unesco.org/en/list/537/"]] }
    ] },
  { id: "d1", date: "2026-10-12", chip: ["Mon 12", "→ Olympia"], title: "Itea → Nafpaktos → Olympia", place: "olimpia", night: "Olympia", hero: "Olympia, Greece",
    intro: "Off we go. The gulf coast road, the Rio bridge and an afternoon in the sanctuary where the Games were born.",
    legs: [["Itea", "Nafpaktos", 80, "1 h 10"], ["Nafpaktos", "Olympia", 130, "1 h 50"]],
    routeNote: "Leave at 9. Coast road to Nafpaktos, Rio bridge (€15.90), then the A5/Olympia Odos motorway towards Pyrgos. In Olympia for lunch.",
    origin: "Itea,Greece", dest: "Archaeological Site of Olympia", way: ["Nafpaktos old port"],
    stops: [
      { name: "Nafpaktos", time: "10:15", dur: "45 min", lat: 38.3919, lng: 21.8296, wiki: "Nafpaktos", wit: "Naupatto", nav: "Nafpaktos old port",
        desc: "The smallest and prettiest Venetian harbour in Greece, closed by two towers. Coffee under the walls and a walk round in ten minutes.",
        hist: "In 1571 the battle of Lepanto, the last great galley battle, was fought off these waters. On the quay stands a statue of Cervantes, who lost the use of his left hand here.",
        see: [["The round harbour", "any table with a view of the towers"], ["Castle", "five rings of walls up to the top; by car almost all the way, view of the bridge"]],
        tip: "Park along Gribovo beach, three minutes' walk from the harbour.",
        links: [["Wikivoyage", "https://en.wikivoyage.org/wiki/Nafpaktos"]] },
      { name: "Rio–Antirrio Bridge", time: "11:10", dur: "3 min", lat: 38.3214, lng: 21.7728, wiki: "Rio–Antirrio Bridge", wit: "Ponte Rio-Antirio", nav: "Rio-Antirrio Bridge",
        desc: "2,880 metres of cable-stayed bridge between mainland Greece and the Peloponnese, opened the day before the 2004 Olympics. Toll before the bridge, cash or card.",
        hist: "Built on 65-metre seabeds in an earthquake zone, with the pylons resting on the bottom rather than anchored: if the earth shakes, the bridge slides.",
        info: [["Toll", "€15.90 per car, one way"]],
        tip: "For the photo, stop before the toll on the Antirrio side: there's a lay-by with a view of the pylons.",
        links: [["Gefyra SA, tolls", "https://www.gefyra.gr/en/prices/Times-Diodion/"]] },
      { name: "Ancient Olympia", time: "14:00", dur: "3 hours, site and museum", lat: 37.6384, lng: 21.6300, wiki: "Olympia, Greece", wit: "Olimpia (sito archeologico)", nav: "Archaeological Site of Olympia",
        desc: "The sanctuary of Zeus in a wood of pines and plane trees, flat and shady: pleasant even in the early afternoon. Site first, then the museum around 16:30.",
        hist: "For 1,170 years, every four years, wars stopped and Greeks came here to run, wrestle and sacrifice to Zeus. Phidias' gold-and-ivory Zeus, 12 metres tall, was one of the Seven Wonders. Theodosius closed it all down in 393 AD.",
        info: [["Hours", "8:00–18:30"], ["Ticket", "€20, valid for site and museum"], ["Parking", "free in front of the museum"]],
        see: [["Stadium", "you enter through the vaulted krypte; the marble starting line is still there"], ["Temple of Zeus", "column drums toppled like dominoes by the 6th-century earthquake"], ["Workshop of Phidias", "where the chryselephantine Zeus was carved"], ["Palaestra and Philippeion", "in the west part, the quietest"], ["Archaeological Museum", "the Hermes of Praxiteles, the pediments of the temple of Zeus, the Nike of Paionios"], ["Museum of the Ancient Games", "in the village, free: how the contests really worked"]],
        tip: "The temple of Hera, where the Olympic flame is lit, is the oldest building on the site: look for it north of the Pelopion.",
        eat: "Dinner at Bacchus in Ancient Pissa, 3 km above the village, terrace over the Alpheios valley; in the village Aegean or Garden Taverna.",
        links: [["Official site", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2358"], ["Museum", "http://odysseus.culture.gr/h/1/eh151.jsp?obj_id=7124"], ["Tickets online", "https://tickets.hh.gr/en"], ["Wikivoyage", "https://en.wikivoyage.org/wiki/Olympia"]] }
    ],
    sleep: { city: "Olympia Greece", ci: "2026-10-12", co: "2026-10-13", txt: "The modern village is one street of shops: you sleep here to be close to the site. Hotel Europa on the hill with pool and view, Hotel Pelops or Kronio in the centre, simple and honest; Bacchus in Ancient Pissa also has rooms in the countryside." },
    alt: "Rain plan: Olympia museum first (three hours fit easily), then the site with an umbrella between showers. Spare time: Katakolo and the Kotsanas museum of ancient Greek technology, 30 minutes towards the sea." },

  { id: "d2", date: "2026-10-13", chip: ["Tue 13", "→ Nafplio"], title: "Olympia → Nafplio, across Arcadia", place: "nafplio", night: "Nafplio", hero: "Nafplio",
    intro: "Three hours of bends and stone villages through the heart of the Peloponnese, then the most elegant town in Greece: a swim, the fortress at sunset, dinner in the old town.",
    legs: [["Olympia", "Langadia", 75, "1 h 20"], ["Langadia", "Nafplio", 125, "1 h 40"]],
    routeNote: "Fill up in Olympia. Inland road via Tripotamia and Langadia, then Vytina and Tripoli, A7 motorway and the Argos/Nafplio exit. No tolls until Tripoli, ~€3 after. Leave at 9, arrive by 14:30.",
    origin: "Archaeological Site of Olympia", dest: "Nafplio,Greece", way: ["Langadia,Greece"],
    stops: [
      { name: "Langadia", time: "11:00", dur: "20 min", lat: 37.6839, lng: 22.0339, wiki: "Langadia", wit: "Langadia", nav: "Langadia Arcadia",
        desc: "A stonemasons' village clinging to a vertical slope above the Lousios gorge: the houses seem stacked on top of each other. Greek coffee in the square and photos from the road.",
        hist: "The builders who put up half of Arcadia came from here. In 1821 Langadia gave the Greek revolution its political leaders, the Deligiannis family.",
        tip: "If it's lunchtime, Klimataria in Vytina (a 10-minute detour) for rooster with hilopites under the vine. Otherwise push on to Nafplio.",
        links: [["Wikivoyage Arcadia", "https://en.wikivoyage.org/wiki/Arcadia"]] },
      { name: "Nafplio", time: "14:30", dur: "lunch and a swim", lat: 37.5676, lng: 22.8016, wiki: "Nafplio", wit: "Nauplia", nav: "Nafplio old town",
        desc: "First capital of modern Greece, Venetian in its palaces and fortresses, with the sea on three sides. Car in the harbour car park, bag at the hotel, a late lunch in the old town and at 16 a swim at Arvanitia.",
        hist: "Venetian twice, Turkish twice, capital from 1829 to 1834. Kapodistrias, Greece's first governor, was assassinated in front of the church of St Spyridon: the bullet mark is still in the wall.",
        info: [["Parking", "the big harbour car park, free"], ["Swim", "Arvanitia, a 10-minute walk under the Acronauplia walls"]],
        see: [["Syntagma square", "the town's living room, with the Venetian mosque and the archaeological museum"], ["Bourtzi", "the fort on the islet; boat from the quay, 10 minutes, about €5"], ["Arvanitia walk", "the path under the walls to the little beach"], ["Staikopoulou and Vasileos Konstantinou", "the streets of little shops, komboloi and sandals"]],
        tip: "Antica Gelateria di Roma in Farmakopoulon street is run by two Italians and makes the best ice cream in Greece: after the swim.",
        eat: "Late lunch at O Noulis (mezedes, 12 euro) or a souvlaki on Staikopoulou street.",
        links: [["Nafplio official", "https://www.nafplio.gr/en/"], ["Wikivoyage", "https://en.wikivoyage.org/wiki/Nafplio"]] },
      { name: "Palamidi at sunset", time: "17:30", dur: "1 hour", lat: 37.5628, lng: 22.8067, wiki: "Palamidi", wit: "Palamidi", nav: "Palamidi Fortress",
        desc: "By car up to the top car park (last entry 18:10), or the 999 steps from town if you have the legs. From the Agios Andreas bastion you see the whole Argolic gulf; the sun drops behind the Arcadian mountains at 18:45.",
        hist: "Built by the Venetians in just three years, 1711–1714, and lost a year later. Kolokotronis, hero of the War of Independence, was imprisoned in the cell of the Miltiades bastion.",
        info: [["Hours", "8:00–18:30"], ["Ticket", "€8"]],
        eat: "Dinner at Ta Fanaria (home cooking on a stepped lane) or Kakanarakis 1986 for Argolid dishes. Aperitif with a view below Palamidi, Arvanitia side.",
        links: [["Official site", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2394"]] }
    ],
    sleep: { city: "Nafplio", ci: "2026-10-13", co: "2026-10-14", txt: "One night in the old town, walking distance from everything. Amfitriti Palazzo and Pension Marianna (the breakfast terrace is famous) under Acronauplia; 3Sixty and Ippoliti more elegant; Aetoma on a quiet little square. Book now: on autumn weekends the town is full." },
    alt: "Rain plan: motorway via Pyrgos–Tripoli (2 h 30) and an afternoon between the archaeological museum and the Peloponnesian Folklore Foundation museum, one of the best ethnographic museums in Europe. Palamidi works in the rain too: the view is the same." },
  { id: "d3", date: "2026-10-14", chip: ["Wed 14", "Argolid → Athens"], title: "Mycenae, Epidaurus, lunch by the sea, then Athens", place: "atene", night: "Athens", hero: "Mycenae",
    intro: "Two UNESCO sites half an hour apart, fish on the water at Palaia Epidavros, the Corinth Canal, and by 17:30 you're in Athens for the sunset from Philopappos.",
    legs: [["Nafplio", "Mycenae", 25, "30 min"], ["Mycenae", "Epidaurus", 50, "50 min"], ["Epidaurus", "Palaia Epidavros", 15, "15 min"], ["Palaia Epidavros", "Corinth Canal", 65, "1 h"], ["Corinth Canal", "Athens, Koukaki", 85, "1 h 15"]],
    routeNote: "Coffee on Syntagma square at 8, while Nafplio is still empty. Leave at 8:30, Mycenae at opening. After lunch the coast road to Isthmia, stop at the canal, then A8 and Attiki Odos (tolls ~€8). Hotel in Koukaki by 17:30: car in the garage, you don't touch it again until Friday.",
    origin: "Nafplio,Greece", dest: "Acropolis Museum", way: ["Archaeological Site of Mycenae", "Ancient Theatre of Epidaurus", "Palaia Epidavros", "Corinth Canal"],
    stops: [
      { name: "Mycenae", time: "9:00", dur: "2 hours", lat: 37.7308, lng: 22.7564, wiki: "Mycenae", wit: "Micene", nav: "Archaeological Site of Mycenae",
        desc: "Agamemnon's citadel. Cyclopean walls, the Lion Gate and the domed tombs Schliemann dug in 1876 convinced he was finding Homer's heroes.",
        hist: "From 1600 to 1100 BC Mycenae dominated the Aegean. Then everything collapsed within a generation, along with Troy and the Hittites, and Greece entered four centuries of darkness.",
        info: [["Hours", "8:00–18:30"], ["Ticket", "€12–20, includes site, Treasury of Atreus and museum"], ["Ground", "smooth stone uphill, shoes with grip"]],
        see: [["Lion Gate", "the oldest monumental sculpture in Europe"], ["Grave Circle A", "where the gold mask was found"], ["Underground cistern", "stairs into the dark in the north-east corner: phone torch"], ["Treasury of Atreus", "the 13-metre tholos, 400 m before the site: stop the car"], ["Museum", "below the citadel, small and clear"]],
        tip: "At 9 you're almost alone, at 11 the coaches from Athens arrive.",
        links: [["Official site", "http://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2573"], ["Tickets online", "https://tickets.hh.gr/en"], ["UNESCO", "https://whc.unesco.org/en/list/941/"]] },
      { name: "Epidaurus", time: "12:00", dur: "1 h 30", lat: 37.5960, lng: 23.0793, wiki: "Ancient Theatre of Epidaurus", wit: "Teatro di Epidauro", nav: "Ancient Theatre of Epidaurus",
        desc: "The best-preserved theatre of antiquity, 14,000 seats and acoustics that are no legend. Around it, the sanctuary of Asclepius, the great hospital of the ancient world.",
        hist: "The sick slept in the abaton waiting for the god to appear in a dream with the cure. The theatre, 4th century BC, is still in use: the summer festival stages Aeschylus here every year.",
        info: [["Hours", "8:00–18:30"], ["Ticket", "€12–20, theatre, sanctuary and museum"]],
        see: [["Theatre", "climb to the top, then have someone speak from the centre of the orchestra"], ["Sanctuary", "the tholos, the abaton, the stadium"], ["Museum", "statues and surgical instruments, skippable if you're hungry"]],
        tip: "The car park has the most photographed Aleppo pines in Greece.",
        links: [["Official site", "http://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2374"], ["UNESCO", "https://whc.unesco.org/en/list/491/"]] },
      { name: "Palaia Epidavros", time: "14:00", dur: "lunch, and a swim if the sea is calm", lat: 37.6376, lng: 23.1573, wiki: "Palaia Epidavros", wit: "Epidauro", nav: "Palaia Epidavros",
        desc: "The little harbour of ancient Epidaurus: fish tavernas on the water, a beach and a small ancient theatre among the orange groves. The place where the trip slows down, before the city.",
        see: [["Lunch by the sea", "grilled fish and salad with your feet almost in the water"], ["Small theatre", "300 m from the harbour, often free and empty"], ["Sunken city", "at Kalymnios, 1 km north, Roman remains 2 metres down: mask and snorkel"]],
        eat: "Mouria on the seafront, three generations old; otherwise Gialasi." },
      { name: "Corinth Canal", time: "16:15", dur: "20 min", lat: 37.9349, lng: 22.9843, wiki: "Corinth Canal", wit: "Canale di Corinto", nav: "Corinth Canal",
        desc: "6.3 km of straight cut through the rock, 80-metre walls, opened in 1893. You stop on the old road bridge at Isthmia to look down.",
        hist: "Nero started it in 67 AD with a golden hoe and 6,000 prisoners; the Hungarians finished it 1,800 years later. Modern ships are too wide: today it takes yachts and bungee jumpers.",
        tip: "Coffee on the Peloponnese side, then the motorway: from here Koukaki is an hour and a quarter outside rush hour." },
      { name: "Athens, first impression", time: "17:30", dur: "the evening", lat: 37.9680, lng: 23.7210, wiki: "Philopappos Monument", wit: "Collina di Filopappo", nav: "Filopappou Hill",
        desc: "Car in the garage, shower, and on foot up Philopappos hill, 15 minutes from the hotel: sunset over the Acropolis at 18:45, no ticket and no crowd. Then dinner in Koukaki.",
        hist: "From this hill Morosini shelled the Parthenon in 1687. Today it's where Athenians come in the evening with a beer.",
        eat: "To Kati Allo for the trays of the day if you want an early, simple dinner; Mani Mani for reinvented Peloponnesian cooking; Fabrika tou Efrosinou for a modern taverna." }
    ],
    sleep: { city: "Athens", ci: "2026-10-14", co: "2026-10-16", txt: "Two nights in Koukaki or Makrygianni, below the Acropolis Museum: filter for 'parking', in Athens it's essential. Herodion and Acropolis Hill are the classic choices, Coco-Mat Athens BC has the rooftop facing the Parthenon. Ask whether the car can stay in the garage until Friday morning." },
    alt: "Rain plan: Mycenae and Epidaurus work under an umbrella; skip the swim and reach Athens earlier, with the Acropolis Museum at 17 (open until 20) instead of Philopappos. Spare time: Tiryns, 5 minutes from Nafplio on the Mycenae road, cyclopean walls and nobody around." },
  { id: "d4", date: "2026-10-15", chip: ["Thu 15", "Athens"], title: "Athens, lived in", place: "atene", night: "Athens", hero: "Acropolis of Athens",
    intro: "Only two stones, the Agora in the morning and the Acropolis in the afternoon, and in between the real city: market, cafés, lunch in a cellar, a break. Zero kilometres by car.",
    legs: [],
    routeNote: "Everything on foot from Koukaki, at most a taxi. The only booking of the day is the Acropolis at 16:00 on tickets.hh.gr. Fill up tonight or tomorrow morning at Koropi, on the airport road.",
    origin: "Acropolis Museum", dest: "Acropolis of Athens", way: [],
    stops: [
      { name: "Ancient Agora and Anafiotika", time: "8:00", dur: "1 h 30", lat: 37.9748, lng: 23.7222, wiki: "Ancient Agora of Athens", wit: "Agorà di Atene", nav: "Ancient Agora of Athens",
        desc: "At opening you're almost alone. The temple of Hephaestus, the Stoa of Attalos with the museum, then up through Anafiotika, the Cycladic village hidden under the rock, and down into Plaka.",
        hist: "Here Socrates questioned passers-by and here he was tried. The kleroterion in the museum is the machine used to draw lots for jurors: democracy ran on a lottery.",
        info: [["Hours", "8:00–18:30"], ["Ticket", "€10"]],
        see: [["Temple of Hephaestus", "intact because it was a church for 1,300 years"], ["Stoa of Attalos", "the Agora museum, the kleroterion"], ["Anafiotika", "the whitewashed houses of the masons from Anafi, cats and bougainvillea"]],
        tip: "A koulouri from the cart by the entrance is the right breakfast.",
        links: [["Official site", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2485"], ["Tickets online", "https://tickets.hh.gr/en"]] },
      { name: "Athens without tickets", time: "10:00", dur: "3 hours", lat: 37.9809, lng: 23.7268, wiki: "Varvakios Agora", wit: "Atene", nav: "Varvakios Central Market Athens",
        desc: "The changing of the guard at Syntagma at 10 sharp, then Ermou down to the Varvakios market: fish, meat, spices, and coffee at Krinos or on Agia Irini square. Psyrri for the streets of murals and workshops, Monastiraki for the flea market.",
        see: [["Varvakios", "the covered central market, since 1886: enter on the meat side and walk through"], ["Evripidou", "the street of spices and pastourma"], ["Agia Irini", "the square of cafés; Kostas for souvlaki if you're hungry early"], ["Monastiraki", "the square, the Tzistarakis mosque, the flea market"]],
        tip: "Bougatsadiko on Iroon square for a mid-morning bougatsa; Krinos on Aiolou street for loukoumades tonight, not now." },
      { name: "Diporto", time: "13:00", dur: "lunch", lat: 37.9805, lng: 23.7263, wiki: "Varvakios Agora", wit: "Atene", nav: "Diporto Athens Sokratous 9",
        desc: "An unmarked cellar since 1887, down a staircase at Sokratous 9. No menu: they bring beans, sardines, pork with celery, salad, wine from the barrel; the bill is worked out by eye. The most authentic place in Athens, and the lunch you'll remember.",
        tip: "Cash only, tables are shared. If it's full or closed, the Oinomageireio Epirus inside the market is the alternative, since 1898." },
      { name: "Break", time: "14:30", dur: "1 h 30", lat: 37.9660, lng: 23.7280, wiki: "Koukaki", wit: "Koukaki", nav: "Koukaki Athens",
        desc: "Hotel, shower, an hour of nothing. At three in the afternoon Athens is still warm and the Acropolis at 16 wants fresh legs.",
        tip: "If you don't feel like stopping: Takis bakery or Overoll in Koukaki for a coffee, or the terrace of Little Tree Books & Coffee." },
      { name: "Acropolis", time: "16:00", dur: "2 hours", lat: 37.9715, lng: 23.7257, wiki: "Acropolis of Athens", wit: "Acropoli di Atene", nav: "Acropolis of Athens",
        desc: "Walk up along Dionysiou Areopagitou. At 16 the light is side-on and the morning crowd has gone. At 18 exit on the theatre of Dionysus side and climb the Areopagus for the 18:45 sunset.",
        hist: "Pericles rebuilt it in forty years after the Persians razed it in 480 BC. The Parthenon has been temple, church, mosque and powder magazine: it blew up in 1687 under Venetian bombs. Lord Elgin took the marbles in 1801; the dispute goes on.",
        info: [["Hours", "8:00–18:30, last entry 18:00"], ["Ticket", "€30, 16:00 slot: book on tickets.hh.gr"], ["Entrance", "main one from the west; exit via the theatre of Dionysus, 200 m from the museum"]],
        see: [["Propylaea and Athena Nike", "the monumental entrance"], ["Parthenon", "recently free of scaffolding on the north side"], ["Erechtheion", "the porch of the Caryatids (copies: the real ones are in the museum)"], ["South slope", "theatre of Dionysus and Odeon of Herodes Atticus, on the way down"], ["Areopagus", "the rock in front of the entrance, free, for the sunset over the Agora"]],
        links: [["Official tickets", "https://tickets.hh.gr/en/venues/acropolis-of-athens-tickets"], ["Official site", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2384"]] },
      { name: "Acropolis Museum", time: "18:30", dur: "1 h 30", lat: 37.9685, lng: 23.7285, wiki: "Acropolis Museum", wit: "Museo dell'Acropoli", nav: "Acropolis Museum",
        desc: "Open until 20:00 on Thursdays (check). The real Caryatids on the first floor and the Parthenon gallery on the top, with the frieze laid out as on the temple and a view of the floodlit original. The rest you walk through.",
        info: [["Ticket", "€20"], ["Restaurant", "second-floor terrace, view of the Parthenon, good if you don't want to move"]],
        links: [["Official site", "https://www.theacropolismuseum.gr/en"]] },
      { name: "Evening in Psyrri", time: "20:30", dur: "as long as you like", lat: 37.9787, lng: 23.7250, wiki: "Psyri", wit: "Psyrri", nav: "Psyrri Athens",
        desc: "Metro or a 20-minute walk. Dinner in a taverna, loukoumades at Krinos or Lukumades, and a last stroll through Monastiraki with the floodlit Acropolis above the roofs.",
        eat: "Atlantikos for fried fish at market prices, Feyrouz for Anatolian street food, Klimataria on Theatrou square if you want live rebetiko. Sweet: Krinos (Aiolou 87) until 21:00, then Lukumades (Aiolou 21)." }
    ],
    sleep: { city: "Athens", ci: "2026-10-14", co: "2026-10-16", txt: "Same room as yesterday. Online check-in for tomorrow's flight, bag packed, alarm at 7:30." },
    alt: "Rain plan: instead of the Agora, the National Archaeological Museum 8–10 (10-minute taxi, €12): the Mycenae mask closes yesterday's circle. The Acropolis in the rain is wet marble: if it's pouring at 16, go in at 17 (last entry 18) or give it up and stay in the museum from 16. Spare time: the Lycabettus funicular after dinner, open late." },
  { id: "d5", date: "2026-10-16", chip: ["Fri 16", "flight 11:45"], title: "Breakfast and airport", place: "atene", night: "—", hero: "Athens International Airport",
    intro: "No programme: a coffee, a koulouri, and at 8:45 you leave. At the airport by 9:45, flight at 11:45.",
    legs: [["Athens, Koukaki", "Airport", 35, "40 min"]],
    routeNote: "Leave the hotel at 8:45: Syngrou or Vouliagmenis to Attiki Odos, toll €2.80, airport exit. Fill up at Koropi on the way. Return following 'Car rental return' by 9:30, Lufthansa desk at 9:45. If 9 o'clock traffic worries you, leave at 8:30.",
    origin: "Acropolis Museum", dest: "Athens International Airport", way: [],
    stops: [
      { name: "Breakfast in Koukaki", time: "7:45", dur: "30 min", lat: 37.9640, lng: 23.7285, wiki: "Koukaki", wit: "Koukaki", nav: "Overoll croissanterie Athens",
        desc: "Overoll for a croissant or Takis for a tiropita, a freddo espresso, and the bag in the car.",
        tip: "Photograph the room before leaving: the fastest way to notice the forgotten charger." },
      { name: "Airport", time: "9:30", dur: "car return and flight", lat: 37.9364, lng: 23.9445, wiki: "Athens International Airport", wit: "Aeroporto di Atene-Eleftherios Venizelos", nav: "Athens International Airport car rental return",
        desc: "Return, 5 minutes' walk from the terminal, Schengen controls. With time to spare, the small archaeological museum on the departures level is free and worth ten minutes.",
        tip: "Photograph the car and the odometer at return and keep the fuel receipt.",
        links: [["Athens Airport", "https://www.aia.gr/traveler/"], ["Flight status", "https://www.aia.gr/traveler/flight-info/"]] }
    ],
    alt: "Without the car: metro line 3 from Syngrou-Fix (line 2) changing at Syntagma, 50 minutes, €9; but then the car must go back to the airport on Thursday evening and you return by metro. Taxi or Uber: €40 flat fare from the centre, 35–45 minutes." }
  ],

  sites: [
    ["Delphi, site + museum", "€20", "single ticket"], ["Olympia, site + museum", "€20", "single ticket"], ["Mycenae, site + Treasury of Atreus + museum", "€12–20", "sources differ, check"],
    ["Epidaurus, theatre + sanctuary + museum", "€12–20", "sources differ, check"], ["Palamidi", "€8", "road to the top"], ["Acropolis", "€30", "timed entry, book"],
    ["Acropolis Museum", "€20", "separate ticket"], ["Ancient Agora", "€10", "combined ticket abolished"], ["National Archaeological Museum", "€12", ""]
  ],
  budget: [["Fuel, ~700 km × 7 l/100 × €2.15", "≈ €105"], ["Tolls (bridge €15.90 + motorways)", "≈ €35"], ["Site and museum tickets", "≈ €150"], ["Hotels, 4 nights (Olympia, Nafplio, Athens ×2)", "€360–520"], ["Meals and coffee", "≈ €40/day"]],

  hub: [
    ["tickets.hh.gr", "Official Ministry tickets for the Acropolis and archaeological sites, no fees", "https://tickets.hh.gr/en"],
    ["Odysseus, Ministry of Culture", "Official hours and pages for every site and museum", "http://odysseus.culture.gr/"],
    ["Visit Greece, Peloponnese", "The national tourism portal", "https://www.visitgreece.gr/mainland/peloponnese/"],
    ["Wikivoyage Peloponnese", "Free guide, practical and kept up to date by travellers", "https://en.wikivoyage.org/wiki/Peloponnese"],
    ["This is Athens", "The city's official site: events, neighbourhoods, this week's exhibitions", "https://www.thisisathens.org/"],
    ["Nafplio, municipal site", "Events and tourist information", "https://www.nafplio.gr/en/"],
    ["Acropolis Museum", "Hours, exhibitions, restaurant", "https://www.theacropolismuseum.gr/en"],
    ["Fuel prices, Ministry", "Price per station, updated daily", "https://www.fuelprices.gr/"],
    ["Tolls in Greece", "Rates per section and calculator", "https://www.tolls.eu/greece"],
    ["Rio bridge, Gefyra", "Tolls and traffic status", "https://www.gefyra.gr/en/"],
    ["EMY weather", "The Greek national meteorological service", "https://www.emy.gr/en"],
    ["Athens Airport", "Flight status, parking, car return", "https://www.aia.gr/traveler/"],
    ["Lufthansa, my flight", "Check-in and flight status", "https://www.lufthansa.com/"],
    ["Ekathimerini", "The Greek daily in English, to know about strikes", "https://www.ekathimerini.com/"],
    ["Italian Embassy in Athens", "Contacts and assistance", "https://ambatene.esteri.it/"],
    ["Google offline maps", "How to download the Peloponnese and Attica before leaving", "https://support.google.com/maps/answer/6291838"]
  ],

  phrases: [["Kaliméra", "good morning (until mid-afternoon)"], ["Kalispéra", "good evening"], ["Efcharistó", "thank you"], ["Parakaló", "you're welcome / please"], ["Ne / Óchi", "yes / no ('ne' is yes)"], ["Ton logariasmó, parakaló", "the bill, please"], ["Yámas", "cheers"], ["Signómi", "excuse me"], ["Pou íne…?", "where is…?"], ["Éna ellinikó kafé, métrio", "one Greek coffee, medium sweet"]],

  food: [["Gemistá", "tomatoes and peppers stuffed with rice, baked"], ["Kókoras me hilopítes", "rooster stew with fresh pasta, the dish of Arcadia"], ["Saganáki", "fried cheese, with lemon"], ["Horiátiki", "the real Greek salad, with a slab of feta on top"], ["Tsipoúra / lavráki", "grilled sea bream and sea bass, priced by weight"], ["Kolokythokeftédes", "courgette fritters"], ["Souvláki / gyros", "the quick lunch, in pita"], ["Loukoumádes", "honey-and-cinnamon doughnuts, to finish"], ["Ellinikós kafés", "Greek coffee: sketos, metrios or glykos by sugar"], ["Tsípouro", "the local grappa, often offered at the end of the meal"]],

  todo: [
    ["Acropolis ticket for Thursday 15, 16:00 slot", "tickets.hh.gr", "https://tickets.hh.gr/en/venues/acropolis-of-athens-tickets"],
    ["Hotel Nafplio, 13 October (one night)", "before all the others", "https://www.booking.com/searchresults.html?ss=Nafplio&checkin=2026-10-13&checkout=2026-10-14&group_adults=1&no_rooms=1"],
    ["Hotel Olympia, 12 October", "", "https://www.booking.com/searchresults.html?ss=Olympia+Greece&checkin=2026-10-12&checkout=2026-10-13&group_adults=1&no_rooms=1"],
    ["Hotel Athens with parking, 14–16 October (two nights)", "Koukaki / Makrygianni", "https://www.booking.com/searchresults.html?ss=Koukaki+Athens&checkin=2026-10-14&checkout=2026-10-16&group_adults=1&no_rooms=1"],
    ["Check car return on 16/10 at 9:30 at the airport and unlimited km", "rental contract", ""],
    ["Offline maps: Peloponnese and Attica", "Google Maps → profile → Offline maps", "https://support.google.com/maps/answer/6291838"],
    ["Online check-in for the flight on the 16th", "evening of the 15th", "https://www.lufthansa.com/"]
  ],

  packing: {
    "Documents and money": [["ID card or passport"], ["Driving licence and credit card in the driver's name", "the car deposit goes on the same card"], ["Rental voucher and assistance number"], ["European health insurance card"], ["€100–150 in cash, small notes", "tolls and village tavernas"]],
    "Tech": [["Power bank and cables"], ["Phone holder for the car", "rental cars rarely have CarPlay"], ["USB cable for the car stereo"], ["Headphones"], ["Charger for the work equipment"]],
    "Clothes": [["Walking shoes with grip", "Mycenae, Palamidi and the Acropolis are polished marble and gravel"], ["Sandals or light shoes for the evening"], ["Swimsuit and light towel", "Arvanitia, Palaia Epidavros"], ["Light jacket or fleece", "Delphi and the evenings"], ["Compact rain jacket"], ["Hat and sunglasses"], ["One decent shirt", "Nafplio and Athens"]],
    "Misc": [["Sunscreen 30+", "October still burns"], ["Water bottle", "fountains at the sites"], ["Small daypack for the sites"], ["Personal medicines, plasters, anti-inflammatory"], ["Earplugs", "old-town hotel in Nafplio"], ["Snorkel mask", "sunken city of Epidaurus"], ["Bag for laundry"]]
  }
};
