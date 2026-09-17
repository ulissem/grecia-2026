/* Tutti i contenuti della guida. Modifica qui, non in app.js. */
window.GUIDE = {
  lang: "it", locale: "it-IT",
  wmo: { 0: "Sereno", 1: "Poco nuvoloso", 2: "Variabile", 3: "Coperto", 45: "Nebbia", 48: "Nebbia", 51: "Pioviggine", 53: "Pioviggine", 55: "Pioviggine", 61: "Pioggia debole", 63: "Pioggia", 65: "Pioggia forte", 80: "Rovesci", 81: "Rovesci", 82: "Rovesci forti", 95: "Temporale", 96: "Temporale", 99: "Temporale" },
  ui: {
    nav_today: "Oggi", nav_days: "Itinerario", nav_map: "Mappa", nav_guide: "Guida", nav_bag: "Valigia",
    map_note: "Tocca un segnaposto per il dettaglio e il pulsante di navigazione. La linea segue le strade reali (calcolo OSRM); senza rete mostra il tracciato semplificato.",
    map_full: "Intero percorso su Google Maps", map_dist: "Distanze e tempi", map_dist_note: "Stime Google Maps con traffico normale. In Grecia si arriva sempre un po' dopo: conta il 15 % in più.",
    g_links: "Link utili", g_sites: "Orari e biglietti dei siti, ottobre 2026", g_budget: "Budget stimato, 1 persona", g_food: "A tavola", g_phr: "Dieci parole che aprono porte",
    b_todo: "Prima di partire", b_todo_sub: "Prenotazioni e verifiche, con il link giusto accanto.", b_pack: "Valigia", b_pack_sub: "Clima: 22–26 °C di giorno, 13–16 la notte, mare a 22 °C. Le spunte restano salvate sul telefono.", b_reset: "Azzera spunte",
    footer: "Tempi di guida e chilometri: stime Google Maps. Prezzi raccolti a settembre 2026. Meteo: Open-Meteo. Percorso stradale: OSRM su dati OpenStreetMap, mappa Esri. Foto: Wikipedia / Wikimedia Commons, licenza sulla pagina linkata. Le taverne citate esistono da anni: un'occhiata alle recensioni recenti prima di sedersi non guasta.",
    loading: "Caricamento…", see: "Cosa vedere", hist: "In due righe.", eat: "Dove mangiare.", nav: "Naviga (Google)", apple: "Apple Maps", sheet: "Scheda su Maps", nav_day: "Naviga la giornata", night: "Notte a", weather_in: "Meteo a", sleep: "Dove dormire", booking: "Cerca su Booking", hotels_maps: "Hotel su Maps", alt: "Se piove, se avanza tempo.",
    wiki_it: "Wikipedia (it)", wiki_en: "Wikipedia (en)", photo: "Foto", sunset: "tramonto", wind: "vento", min: "min",
    wx_off: "Meteo non disponibile senza connessione. Metà ottobre: 22–25 °C di giorno, 13–16 di notte, qualche rovescio possibile.",
    wx_far: (last, date, place) => `Previsioni disponibili fino al ${last}; quelle per il ${date} compaiono circa due settimane prima. Media di metà ottobre a ${place}: 22–25 °C di giorno, 13–16 di notte.`,
    q_sos: "Emergenze 112", q_fuel: "Benzina", q_tickets: "Biglietti",
    countdown: d => `Mancano ${d} giorni`, countdown_sub: "Volo Francoforte → Atene mercoledì 7 ottobre alle 9:35, rientro venerdì 16 alle 11:45. Le ferie iniziano lunedì 12 a Itea.",
    todo_title: "Cose da chiudere prima di partire", todo_more: "La lista completa con le spunte è nella sezione Valigia.", open: "apri", wx_itea: "Meteo a Itea, prossimi giorni", flights: "I voli",
    done_title: "Viaggio concluso", done_sub: "La guida resta qui per i ricordi e per la prossima volta.", fly_title: "Volo alle 11:45", fly_sub: "Partenza dall'hotel alle 8:45. Buon rientro.", fly_status: "Stato voli AIA",
    next: "Prossima tappa", full_prog: "Programma completo", now_in: "Adesso a", the_day: "La giornata", nav_all: "Naviga l'intera giornata", max: "Max", rain: "pioggia", sunrise: "Alba", wx_off_short: "Meteo non disponibile senza rete.",
    dist_h: ["Tratta", "km", "tempo"], site_h: ["Sito", "Intero", "Note"], total: "Totale indicativo", total_v: "€330–400 oltre agli hotel", d0_suffix: " – domenica 11"
  },
  text: {
    sitesIntro: `Siti del Ministero della Cultura: <b>8:00–18:30 fino al 15 ottobre</b>, <b>8:00–18:00 dal 16</b>, ultimo ingresso 20 minuti prima. Tariffa estiva fino al 31 ottobre. Biglietti ufficiali online su <a target="_blank" rel="noopener" href="https://tickets.hh.gr/en">tickets.hh.gr</a> (Hellenic Heritage, senza commissioni): obbligatorio prenotare solo per l'Acropoli, per gli altri si compra in loco.`,
    sitesNote: "Prezzi raccolti a settembre 2026. Quelli con forbice li ho trovati discordanti tra le fonti: controllo definitivo su odysseus.culture.gr o alla biglietteria.",
    budgetNote: `Benzina 95 a €2,15/l a metà settembre 2026, in salita: controlla su <a target="_blank" rel="noopener" href="https://www.fuelprices.gr/">fuelprices.gr</a>.`,
    foodRules: ["Pranzo 13:30–16:00, cena dalle 21:00. Alle 19:30 le taverne buone sono vuote.", "Si ordina a centro tavola: 3–4 mezedes per due. Il pesce si paga a peso, chiedi il prezzo al chilo.", "Mancia: si arrotonda o 5–10 %. Il pane in tavola costa 1–2 €.", "Acqua di rubinetto ok ad Atene, in provincia in bottiglia."],
    blocks1: `
    <div class="card"><h3>Numeri e contatti</h3><dl class="kv">
      <dt>Emergenze</dt><dd><a href="tel:112">112</a> numero unico europeo · Polizia turistica <a href="tel:1571">1571</a> (parlano inglese)</dd>
      <dt>Soccorso stradale</dt><dd>prima il numero del noleggio sul contratto; poi ELPA <a href="tel:10400">10400</a> o Express Service <a href="tel:1154">1154</a></dd>
      <dt>Farmacie di turno</dt><dd>cartello verde in ogni farmacia con l'elenco; <a target="_blank" rel="noopener" href="https://www.fsa.gr/">fsa.gr</a> per Atene</dd>
      <dt>Ambasciata d'Italia</dt><dd>Atene, <a href="tel:+302103617260">+30 210 361 7260</a></dd>
      <dt>Fuso orario</dt><dd>Grecia = Germania + 1 ora (ora legale fino al 25 ottobre)</dd>
      <dt>Prese e telefono</dt><dd>Tipo C/F, 230 V. Roaming UE incluso nel piano tedesco; copertura buona ovunque tranne tratti dell'Arcadia.</dd></dl></div>
    <div class="card"><h3>Guidare in Grecia</h3><ul>
      <li>Limiti: 50 in città, 90 statali, 130 autostrada. Autovelox veri sulla Corinto–Atene e sull'Attiki Odos.</li>
      <li>Sulle statali si usa la corsia di emergenza per farsi sorpassare: fallo anche tu, con giudizio, e aspettati che chi ti precede lo faccia.</li>
      <li>Pedaggi a barriera, si paga a tratta in contanti o carta. Corsie gialle = solo telepass, evitale.</li>
      <li>Distributori serviti, con benzinaio. Nell'entroterra alcuni chiudono la sera: pieno a Olimpia il martedì mattina, a Nafplio il giovedì, a Markopoulo prima della riconsegna.</li>
      <li>Parcheggio: a Nafplio nel parcheggio del porto (gratis), a Olimpia in hotel, ad Atene lasci l'auto in hotel e ti muovi a piedi o in metro.</li>
      <li>Patente tedesca o italiana: nessun permesso internazionale.</li>
      <li>Capre e cani sulla strada in Arcadia sono normali; i tornanti sopra Langadia non hanno guardrail ovunque.</li></ul></div>
    <div class="card"><h3>Muoversi ad Atene: metro, taxi, Uber</h3><dl class="kv">
      <dt>Metro</dt><dd>Tre linee, pulite e puntuali. Biglietto urbano <b>€1,20</b> valido 90 minuti su metro, bus e tram: si paga appoggiando la carta contactless o il telefono al tornello (Tap2Ride), tetto giornaliero €4,10. Dall'hotel: Akropoli e Syngrou-Fix (linea 2) sono a 5–10 minuti a piedi da Koukaki; Monastiraki e Syntagma per il centro.</dd>
      <dt>Metro aeroporto</dt><dd>Linea 3 da Syntagma, <b>€9</b> (andata e ritorno €16 valido 30 giorni), 40 minuti, ogni 30 minuti dalle 6:30 alle 23:30. Il biglietto urbano non vale per il tratto aeroporto.</dd>
      <dt>Taxi</dt><dd>Gialli, con tassametro: €1,80 alla partenza, €0,90/km di giorno, minimo €4. Una corsa in centro costa 5–8 €. Aeroporto ↔ centro tariffa fissa <b>€40 di giorno, €55 dalle 0 alle 5</b>, tutto compreso.</dd>
      <dt>Uber e app</dt><dd>Uber ad Atene chiama solo taxi gialli (Uber Taxi): stesso prezzo del tassametro, ma con percorso e prezzo stimato prima e pagamento in app, utile la sera. FreeNow e Bolt fanno lo stesso; scarica una delle tre prima di partire e registra la carta.</dd>
      <dt>A piedi</dt><dd>Koukaki, Acropoli, Plaka, Monastiraki e Psyrri sono in un raggio di 2 km: il centro si gira a piedi, l'auto resta in garage.</dd></dl>
      <div class="btns"><a class="btn sm" target="_blank" rel="noopener" href="https://www.oasa.gr/en/">OASA, trasporti Atene</a><a class="btn sm" target="_blank" rel="noopener" href="https://www.stasy.gr/en/">Metro (STASY)</a><a class="btn sm" target="_blank" rel="noopener" href="https://www.uber.com/gr/en/ride/">Uber Atene</a><a class="btn sm" target="_blank" rel="noopener" href="https://www.free-now.com/gr/">FreeNow</a></div></div>`,
    blocks2: `
    <div class="card"><h3>Storia in due minuti, per orientarsi tra le pietre</h3><dl class="kv small">
      <dt>1600–1100 a.C.</dt><dd><b>Micenei</b>: Micene, Tirinto, la guerra di Troia. Oro, mura ciclopiche, Lineare B.</dd>
      <dt>1100–800</dt><dd><b>Secoli bui</b>: crolla tutto, si perde la scrittura.</dd>
      <dt>800–480</dt><dd><b>Età arcaica</b>: nascono le città, Olimpia (776) e Delfi, i primi templi in pietra.</dd>
      <dt>480–323</dt><dd><b>Età classica</b>: Pericle, il Partenone, Socrate, Epidauro. Finisce con Alessandro.</dd>
      <dt>323–146</dt><dd><b>Ellenismo</b>: i regni dei successori, poi arrivano i romani.</dd>
      <dt>146 a.C.–330 d.C.</dt><dd><b>Roma</b>: Nerone a Corinto, Adriano ad Atene, l'Odeon di Erode Attico.</dd>
      <dt>330–1453</dt><dd><b>Bisanzio</b>: Osios Loukas, le chiese di Atene, i castelli.</dd>
      <dt>1204–1715</dt><dd><b>Franchi e Veneziani</b>: Nafplio, Palamidi, Bourtzi, Nafpaktos.</dd>
      <dt>1453–1821</dt><dd><b>Ottomani</b>: quattro secoli, le moschee di Nafplio.</dd>
      <dt>1821–1834</dt><dd><b>Indipendenza</b>: Kolokotronis, Kapodistrias, Nafplio capitale, poi Atene.</dd></dl></div>
    <div class="card"><h3>Venerdì 16: volo delle 11:45</h3><ul class="small">
      <li>In aeroporto alle 9:45: check-in online la sera prima, terminal unico, controlli Schengen, 45 minuti bastano.</li>
      <li>Dal centro all'aeroporto in auto: 35–45 minuti via Attiki Odos; alle 9 c'è traffico in uscita dalla città, quindi partenza dall'hotel alle 8:45 (8:30 se vuoi margine). Riconsegna auto entro le 9:30.</li>
      <li>Alternativa senza guidare: metro linea 3 (cambio a Syntagma), €9, 50 minuti da Koukaki; ma l'auto andrebbe riconsegnata giovedì sera.</li>
      <li>Auto al parcheggio Syngrou-Fix (300 m dall'appartamento): alle 8:30 la ritiri, paghi al banco della metro con il biglietto QR.</li></ul></div>`
  },
  ui_food: { n_title: "Le mie note", n_sub: "Restano solo su questo telefono (memoria locale del browser): niente account, niente cloud. Con \"Copia tutto\" le porti dove vuoi.", n_general: "Note generali", n_copy: "Copia tutto", n_copied: "copiato", n_fields: [["rental","Noleggio auto: riferimento, compagnia, targa"],["hotels","Conferme hotel"],["flight","Codice prenotazione volo"],["other","Altro (assicurazione, contatti…)"]], nav_bag: "Mio", f_menu: "Il menu, in figure", f_menu_sub: "Per riconoscere quello che vedi nelle teglie e in vetrina. Foto da Wikipedia.", g_phr: "Frasario", nav_food: "Cibo", f_title: "Dove mangiano loro", f_intro: "Niente ristoranti eleganti: taverne, mageirio (i posti da pranzo con le teglie dietro al banco), souvlaki e pasticcerie. Fascia di prezzo: € sotto i 12 a testa, €€ 15–25. Le spunte segnano dove sei stato.", f_all: "Tutto", f_sweet: "Dolci", f_eat: "Da mangiare", f_map: "Cibo sulla mappa", f_price: "prezzo", f_visited: "visitato" },
  food_places: [
    { area: "Itea · Delfi · Galaxidi", items: [
      { cat: "eat", name: "O Bebelis", city: "Galaxidi", what: "Cucina casalinga in un cortile: gemista, coniglio stifado, la moussaka. Il posto dove va il paese.", price: "€", lat: 38.3803, lng: 22.3838 },
      { cat: "eat", name: "Albatross", city: "Galaxidi", what: "Taverna storica sul porto, pesce piccolo fritto e mezedes, conto onesto.", price: "€€", lat: 38.3795, lng: 22.3830 },
      { cat: "eat", name: "Karathanasi", city: "Arachova", what: "Grigliata di montagna: kontosouvli, kokoretsi, formaela alla griglia. Rumoroso e pieno di greci.", price: "€", lat: 38.4788, lng: 22.5860 },
      { cat: "sweet", name: "Pasticcerie di Arachova", city: "Arachova", what: "Karydopita (torta di noci al miele) e ravani. Qualunque zacharoplasteio sulla via principale, li fanno tutti in casa.", price: "€", lat: 38.4790, lng: 22.5870 },
      { cat: "eat", name: "Lungomare di Itea", city: "Itea", what: "Le psarotaverne sul mare fanno un buon pranzo veloce: sardine alla griglia, insalata, mezza caraffa. Scegli quella con più greci ai tavoli.", price: "€", lat: 38.4322, lng: 22.4260 } ] },
    { area: "Nafpaktos · Olimpia", items: [
      { cat: "eat", name: "Caffè del porto veneziano", city: "Nafpaktos", what: "Caffè freddo (freddo espresso) e koulouri sotto le torri. Per pranzo, le taverne dietro il porto verso il castello.", price: "€", lat: 38.3919, lng: 21.8296 },
      { cat: "eat", name: "Bacchus", city: "Ancient Pissa, Olimpia", what: "Taverna di famiglia con terrazza sulla valle: agnello al forno, verdure dell'orto, vino della casa. La più amata della zona.", price: "€€", lat: 37.6497, lng: 21.6353 },
      { cat: "eat", name: "Aegean", city: "Olimpia", what: "In paese, tradizionale, porzioni grandi e prezzi giusti. Gemista e pastitsio.", price: "€", lat: 37.6440, lng: 21.6250 } ] },
    { area: "Arcadia", items: [
      { cat: "eat", name: "Klimataria", city: "Vytina", what: "Taverna storica sotto la pergola, dagli anni '50: kokoras me hilopites (gallo con pasta fresca), spezzatino con castagne. 10 minuti di deviazione, vale.", price: "€", lat: 37.6595, lng: 22.1130 },
      { cat: "sweet", name: "Piazza di Vytina", city: "Vytina", what: "Miele di abete, dolci al cucchiaio di noce acerba, karydopita. Prendi un vasetto di miele per casa.", price: "€", lat: 37.6592, lng: 22.1125 },
      { cat: "eat", name: "Piazza di Langadia", city: "Langadia", what: "Caffè greco al kafeneio con vista sulla gola. Se è ora di pranzo, la taverna sulla piazza fa la fasolada e le polpette.", price: "€", lat: 37.6839, lng: 22.0339 } ] },
    { area: "Nafplio · Argolide", items: [
      { cat: "eat", name: "Ta Fanaria", city: "Nafplio", what: "In una via a scale, cucina di casa dal 1980: gemista, agnello al limone, melanzane imam. Prezzi rimasti indietro di dieci anni.", price: "€", lat: 37.5666, lng: 22.7967 },
      { cat: "eat", name: "Kakanarakis 1986", city: "Nafplio", what: "Piatti dell'Argolide: maiale con prugne, capretto, sfoglia con formaggio. Pieno di famiglie del posto.", price: "€€", lat: 37.5665, lng: 22.7975 },
      { cat: "eat", name: "O Noulis", city: "Nafplio", what: "Mezedopoleio piccolo e vero: saganaki, polpette, piatti da condividere con l'ouzo. Cena da 12 euro.", price: "€", lat: 37.5663, lng: 22.7982 },
      { cat: "eat", name: "Vasilis", city: "Nafplio", what: "Taverna storica in via Staikopoulou, senza fronzoli: moussaka, pollo al forno, fagioli giganti.", price: "€", lat: 37.5664, lng: 22.7965 },
      { cat: "sweet", name: "Antica Gelateria di Roma", city: "Nafplio", what: "Gelato di due italiani, il migliore della Grecia. Prova il kaimaki al mastice per il gusto greco.", price: "€", lat: 37.5665, lng: 22.7960 },
      { cat: "sweet", name: "Kentrikon, piazza Syntagma", city: "Nafplio", what: "Caffè storico della piazza: portokalopita con le arance dell'Argolide e caffè greco, guardando la piazza.", price: "€", lat: 37.5666, lng: 22.7985 },
      { cat: "eat", name: "Mouria", city: "Palaia Epidavros", what: "Sul lungomare da tre generazioni: pesce del giorno alla griglia, insalata di polpo, patate fritte a mano.", price: "€€", lat: 37.6373, lng: 23.1566 } ] },
    { area: "Atene, da mangiare", items: [
      { cat: "eat", name: "Diporto", city: "Varvakios, centro", what: "Scantinato senza insegna dal 1887, si scende una scala in via Sokratous 9: fagioli, sardine, maiale con sedano, vino dalla botte, conto a occhio. Il posto più autentico di Atene. Solo pranzo.", price: "€", lat: 37.9805, lng: 23.7263 },
      { cat: "eat", name: "Oinomageireio Epirus", city: "Mercato Varvakios", what: "Dentro il mercato della carne, dal 1898: patsas (trippa), zuppe, stufati. Ci mangiano i macellai.", price: "€", lat: 37.9809, lng: 23.7268 },
      { cat: "eat", name: "Ta Karamanlidika tou Fani", city: "Sokratous 1", what: "Salumeria-taverna: pastourma, soutzouki, formaggi, mezedes. Buonissimo e ancora popolare.", price: "€€", lat: 37.9808, lng: 23.7262 },
      { cat: "eat", name: "Kostas", city: "Piazza Agia Irini", what: "Souvlaki di maiale in pita con salsa di pomodoro, dal 1950. Finisce verso le 14, due euro e mezzo.", price: "€", lat: 37.9770, lng: 23.7275 },
      { cat: "eat", name: "Feyrouz", city: "Karori 23, Psyrri", what: "Street food anatolico di una famiglia greca di Antiochia: lahmacun, peinirli, tutto fatto al momento. Fila di ateniesi.", price: "€", lat: 37.9787, lng: 23.7268 },
      { cat: "eat", name: "Atlantikos", city: "Psyrri", what: "Pesce fritto e alla griglia a prezzi da mercato in un vicolo: acciughe, calamari, gavros marinato.", price: "€", lat: 37.9797, lng: 23.7237 },
      { cat: "eat", name: "Klimataria", city: "Piazza Theatrou", what: "Taverna del 1927 con rebetiko dal vivo il weekend: cucina di casa, vino sfuso, atmosfera vera.", price: "€€", lat: 37.9822, lng: 23.7255 },
      { cat: "eat", name: "To Kati Allo", city: "Koukaki", what: "Dietro il Museo dell'Acropoli, mageirio con le teglie del giorno: moussaka, fagioli, pollo con patate. Pranzo da 9 euro.", price: "€", lat: 37.9680, lng: 23.7290 },
      { cat: "eat", name: "O Thanasis", city: "Monastiraki", what: "Kebab e souvlaki dal 1964, il classico di piazza Monastiraki. Rumoroso, veloce, buono.", price: "€", lat: 37.9760, lng: 23.7258 } ] },
    { area: "Atene, dolci", items: [
      { cat: "sweet", name: "Bougatsadiko Thessaloniki", city: "Piazza Iroon, Psyrri", what: "Bougatsa alla maniera del nord, crema calda e sfoglia tirata a mano, aperto 24 ore.", price: "€", lat: 37.9794, lng: 23.7252 },
      { cat: "sweet", name: "Krinos", city: "Aiolou 87", what: "Loukoumades dal 1923, con miele e cannella, serviti caldi in una sala che non è cambiata.", price: "€", lat: 37.9805, lng: 23.7275 },
      { cat: "sweet", name: "Lukumades", city: "Aiolou 21", what: "La versione moderna: loukoumades ripieni, con gelato, con cioccolato. Per il confronto.", price: "€", lat: 37.9770, lng: 23.7280 },
      { cat: "sweet", name: "Kora", city: "Kolonaki", what: "Il forno per cui Atene fa la fila: croissant, panini al cardamomo, pane. Mattina presto.", price: "€", lat: 37.9797, lng: 23.7407 },
      { cat: "sweet", name: "Overoll", city: "Koukaki", what: "Croissanteria a due passi dall'hotel: cornetti e sfoglie, colazione del venerdì.", price: "€", lat: 37.9640, lng: 23.7285 },
      { cat: "sweet", name: "Asimakopouloi", city: "Exarchia", what: "Pasticceria dal 1915, la vecchia guardia: galaktoboureko, ekmek kataifi, tsoureki.", price: "€", lat: 37.9863, lng: 23.7360 },
      { cat: "sweet", name: "Stani", city: "Omonia", what: "Latteria dal 1931: yogurt di pecora con miele e noci, rizogalo. Colazione o merenda.", price: "€", lat: 37.9838, lng: 23.7282 },
      { cat: "sweet", name: "Kokkion", city: "Psyrri", what: "Gelato artigianale, gusti greci: mastice, fico, yogurt. Se fa ancora caldo.", price: "€", lat: 37.9787, lng: 23.7245 },
      { cat: "sweet", name: "Ariston", city: "Voulis 10, Syntagma", what: "Dal 1910, la tiropita kourou più famosa di Atene: il salato che fa da colazione.", price: "€", lat: 37.9752, lng: 23.7328 } ] },
  ],
  menu: [
    { group: "Dolci", items: [
      { name: "Bougatsa", wiki: "Bougatsa", desc: "Sfoglia sottile con crema di semolino calda, zucchero a velo e cannella. Si mangia a colazione, in piedi." },
      { name: "Galaktoboureko", wiki: "Galaktoboureko", desc: "Crema cotta nella sfoglia e bagnata di sciroppo. Il metro di ogni pasticceria." },
      { name: "Loukoumades", wiki: "Loukoumades", desc: "Frittelle calde con miele, cannella e noci." },
      { name: "Kataifi", wiki: "Kadaif", desc: "Nido di pasta sfilata con noci e sciroppo; nella versione ekmek con crema e panna sopra." },
      { name: "Karydopita", wiki: "Karydopita", desc: "Torta di noci allo sciroppo, la specialità delle montagne." },
      { name: "Revani", wiki: "Revani", desc: "Torta di semolino inzuppata, spesso al limone o all'arancia (portokalopita è la cugina con la sfoglia)." },
      { name: "Baklava", wiki: "Baklava", desc: "Strati di sfoglia e noci con sciroppo: qui più burroso e meno dolce che in Turchia." },
      { name: "Dolci al cucchiaio", wiki: "Spoon sweets", desc: "Frutta intera in sciroppo servita con acqua ghiacciata: arancia amara, cotogna, noce acerba." },
      { name: "Rizogalo", wiki: "Rice pudding", desc: "Riso al latte con cannella, il conforto delle latterie." },
      { name: "Tsoureki", wiki: "Tsoureki", desc: "Pan brioche intrecciato al mahlepi e mastice, ottimo tostato a colazione." } ] },
    { group: "Colazione e street food", items: [
      { name: "Koulouri", wiki: "Koulouri", desc: "Anello di pane al sesamo venduto dai carretti dalle 7 del mattino. La colazione di Atene." },
      { name: "Tiropita", wiki: "Tiropita", desc: "Sfoglia al formaggio; la kourou ha la pasta frolla salata." },
      { name: "Spanakopita", wiki: "Spanakopita", desc: "Sfoglia con spinaci e feta." },
      { name: "Souvlaki", wiki: "Souvlaki", desc: "Spiedino di maiale o pollo, da solo o nella pita con pomodoro, cipolla, tzatziki e patatine." },
      { name: "Gyros", wiki: "Gyros", desc: "Carne dal girarrosto nella pita. Chiedi 'ap'ola' per averlo con tutto." },
      { name: "Freddo espresso", wiki: "Freddo espresso", desc: "Espresso doppio shakerato con ghiaccio: il caffè nazionale da maggio a ottobre." } ] },
    { group: "Mezedes, da condividere", items: [
      { name: "Saganaki", wiki: "Saganaki", desc: "Formaggio fritto in padella, con limone." },
      { name: "Tzatziki", wiki: "Tzatziki", desc: "Yogurt, cetriolo, aglio e olio. Va con tutto." },
      { name: "Taramosalata", wiki: "Taramasalata", desc: "Crema di uova di pesce: quella vera è beige, non rosa." },
      { name: "Dolmades", wiki: "Dolma", desc: "Foglie di vite ripiene di riso ed erbe, fredde con limone." },
      { name: "Gigantes", wiki: "Gigantes plaki", desc: "Fagioli giganti al forno con pomodoro e aneto." },
      { name: "Kolokythokeftedes", wiki: "Kolokithokeftedes", desc: "Polpette di zucchine, feta e menta." },
      { name: "Horiatiki", wiki: "Greek salad", desc: "L'insalata greca vera: pomodoro, cetriolo, cipolla, olive, origano e la feta intera sopra. Niente lattuga." },
      { name: "Kokoretsi", wiki: "Kokoretsi", desc: "Interiora d'agnello avvolte nel budello e arrostite allo spiedo. Per chi osa, ad Arachova." } ] },
    { group: "Piatti", items: [
      { name: "Gemista", wiki: "Gemista", desc: "Pomodori e peperoni ripieni di riso ed erbe, al forno con patate." },
      { name: "Moussaka", wiki: "Moussaka", desc: "Melanzane, ragù e besciamella. Nei mageirio la fanno la mattina e la servono tiepida." },
      { name: "Pastitsio", wiki: "Pastitsio", desc: "Pasta lunga bucata con ragù alla cannella e besciamella." },
      { name: "Kokoras me hilopites", wiki: "Hilopites", desc: "Gallo in umido con pasta fresca quadrata: il piatto dell'Arcadia." },
      { name: "Stifado", wiki: "Stifado", desc: "Spezzatino di manzo o coniglio con cipolline e vino, profumo di cannella." },
      { name: "Kleftiko", wiki: "Kleftiko", desc: "Agnello cotto lentamente al cartoccio con patate e formaggio." },
      { name: "Youvetsi", wiki: "Giouvetsi", desc: "Carne al forno con orzo (kritharaki) e pomodoro in teglia di coccio." },
      { name: "Fasolada", wiki: "Fasolada", desc: "Zuppa di fagioli con sedano e carote: il piatto nazionale dei giorni feriali." },
      { name: "Patsas", wiki: "Tripe soup", desc: "Zuppa di trippa con aglio e aceto, quella del mercato di Atene alle 6 del mattino." },
      { name: "Pesce alla griglia", wiki: "Gilt-head bream", desc: "Tsipoura (orata) e lavraki (branzino) si pagano a peso: chiedi il prezzo al chilo, un pesce da porzione è 350–400 g." } ] },
    { group: "Da bere", items: [
      { name: "Caffè greco", wiki: "Greek coffee", desc: "Bollito nel briki, con la polvere sul fondo: sketos (amaro), metrios (medio), glykos (dolce)." },
      { name: "Ouzo", wiki: "Ouzo", desc: "All'anice, con ghiaccio e acqua diventa bianco. Con i mezedes, mai da solo." },
      { name: "Tsipouro", wiki: "Tsipouro", desc: "La grappa di vinaccia, con o senza anice; offerta spesso a fine pasto." },
      { name: "Vino sfuso", wiki: "Retsina", desc: "In taverna si ordina a caraffa (misò kiló = mezzo litro). La retsina resinata è un gusto da provare una volta." },
      { name: "Birra", wiki: "Fix Hellas", desc: "Fix, Mythos, Alfa, Mamos: leggere e fredde, mezzo litro a 4 euro." } ] }
  ],
  phrasebook: [
    { group: "Saluti e cortesia", items: [["Καλημέρα", "kaliméra", "buongiorno (fino a metà pomeriggio)"], ["Καλησπέρα", "kalispéra", "buonasera"], ["Καληνύχτα", "kaliníchta", "buonanotte"], ["Γεια σας / Γεια σου", "ya sas / ya su", "salve (formale) / ciao"], ["Ευχαριστώ (πολύ)", "efcharistó (polí)", "grazie (mille)"], ["Παρακαλώ", "parakaló", "prego / per favore"], ["Ναι / Όχι", "ne / óchi", "sì / no ('ne' è sì!)"], ["Συγγνώμη", "signómi", "scusi"], ["Δεν καταλαβαίνω", "den katalavéno", "non capisco"], ["Μιλάτε αγγλικά;", "miláte angliká?", "parla inglese?"], ["Είμαι Ιταλός", "íme Italós", "sono italiano"]] },
    { group: "Al ristorante", items: [["Ένα τραπέζι για έναν", "éna trapézi ya énan", "un tavolo per uno"], ["Τον κατάλογο, παρακαλώ", "ton katálogo, parakaló", "il menu, per favore"], ["Τι προτείνετε;", "ti protínete?", "cosa consiglia?"], ["Τι έχετε σήμερα;", "ti échete símera?", "cosa avete oggi? (nei mageirio)"], ["Θα ήθελα…", "tha íthela…", "vorrei…"], ["Μισό κιλό κρασί", "misó kiló krasí", "mezzo litro di vino (sfuso)"], ["Ένα νερό, παρακαλώ", "éna neró, parakaló", "un'acqua, per favore"], ["Χωρίς…", "chorís…", "senza…"], ["Πόσο κάνει το κιλό;", "póso káni to kiló?", "quanto costa al chilo? (pesce)"], ["Ήταν πολύ νόστιμο", "ítan polí nóstimo", "era buonissimo"], ["Τον λογαριασμό, παρακαλώ", "ton logariasmó, parakaló", "il conto, per favore"], ["Με κάρτα;", "me kárta?", "con la carta?"], ["Στην υγειά μας!", "stin iyá mas! (yámas)", "alla nostra salute!"], ["Καλή όρεξη", "kalí órexi", "buon appetito"]] },
    { group: "Al caffè e in pasticceria", items: [["Έναν ελληνικό, μέτριο", "énan ellinikó, métrio", "un caffè greco, medio zucchero"], ["Ένα φρέντο εσπρέσο, σκέτο", "éna fréddo esprésso, skéto", "un freddo espresso, amaro"], ["Ένα κουλούρι", "éna kulúri", "un koulouri"], ["Μία μπουγάτσα με κρέμα", "mía bugátsa me kréma", "una bougatsa alla crema"], ["Ένα κομμάτι γαλακτομπούρεκο", "éna kommáti galaktobúreko", "una fetta di galaktoboureko"], ["Για εδώ / Για έξω", "ya edó / ya éxo", "per qui / da portare via"]] },
    { group: "In viaggio e in auto", items: [["Πού είναι…;", "pu íne…?", "dov'è…?"], ["Γεμίστε το, παρακαλώ", "yemíste to, parakaló", "il pieno, per favore"], ["Αμόλυβδη 95", "amólivdi eneninda pénde", "benzina senza piombo 95"], ["Πού μπορώ να παρκάρω;", "pu boró na parkáro?", "dove posso parcheggiare?"], ["Διόδια", "diódia", "pedaggio"], ["Έξοδος", "éxodos", "uscita"], ["Κέντρο", "kéndro", "centro"], ["Πόσο μακριά είναι;", "póso makriá íne?", "quanto è lontano?"], ["Δεξιά / Αριστερά / Ευθεία", "dexiá / aristerá / efthía", "destra / sinistra / dritto"], ["Ανοιχτό / Κλειστό", "anichtó / klistó", "aperto / chiuso"], ["Τι ώρα κλείνει;", "ti óra klíni?", "a che ora chiude?"], ["Ένα εισιτήριο, παρακαλώ", "éna isitírio, parakaló", "un biglietto, per favore"]] },
    { group: "In hotel", items: [["Έχω κράτηση", "écho krátisi", "ho una prenotazione"], ["Έχετε πάρκινγκ;", "échete párking?", "avete un parcheggio?"], ["Ο κωδικός του Wi-Fi;", "o kodikós tu wi-fi?", "la password del Wi-Fi?"], ["Τι ώρα είναι το πρωινό;", "ti óra íne to proinó?", "a che ora è la colazione?"], ["Μπορώ να πληρώσω τώρα;", "boró na pliróso tóra?", "posso pagare adesso?"], ["Ένα ταξί για τις 4, παρακαλώ", "éna taxí ya tis tésseris, parakaló", "un taxi per le 4, per favore"]] },
    { group: "Numeri e urgenze", items: [["1 2 3 4 5", "éna, dío, tría, téssera, pénde", ""], ["6 7 8 9 10", "éxi, eftá, ochtó, enniá, déka", ""], ["20 / 50 / 100", "íkosi / penínda / ekató", ""], ["Βοήθεια!", "voíthia!", "aiuto!"], ["Χρειάζομαι γιατρό", "chriázome yatró", "ho bisogno di un medico"], ["Φαρμακείο", "farmakío", "farmacia"], ["Πού είναι η τουαλέτα;", "pu íne i tualéta?", "dov'è il bagno?"]] }
  ],
  essentials: [
    ["Paese", "Grecia: Unione Europea, area Schengen, euro. Niente controllo passaporti in arrivo da Francoforte, niente cambio valuta, niente convertitore: i prezzi sono in euro come a casa."],
    ["Documenti", "Basta la carta d'identità. Patente tedesca o italiana valida, nessun permesso internazionale. Tessera sanitaria europea per medico e ospedale."],
    ["Telefono", "Roaming UE: chiamate, SMS e dati del tuo piano tedesco valgono in Grecia senza costi extra (verifica solo eventuali tetti ai giga). Nessuna eSIM necessaria. Copertura 4G/5G buona, salvo tratti di montagna in Arcadia."],
    ["Prese", "<span class=\"plugs\"><svg viewBox=\"0 0 64 64\" aria-label=\"Tipo F\"><rect x=\"4\" y=\"4\" width=\"56\" height=\"56\" rx=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"32\" cy=\"32\" r=\"19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"23\" cy=\"32\" r=\"3.2\" fill=\"currentColor\"/><circle cx=\"41\" cy=\"32\" r=\"3.2\" fill=\"currentColor\"/><rect x=\"29\" y=\"11\" width=\"6\" height=\"5\" rx=\"1\" fill=\"currentColor\"/><rect x=\"29\" y=\"48\" width=\"6\" height=\"5\" rx=\"1\" fill=\"currentColor\"/></svg><svg viewBox=\"0 0 64 64\" aria-label=\"Tipo C\"><rect x=\"4\" y=\"4\" width=\"56\" height=\"56\" rx=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"32\" cy=\"32\" r=\"19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"23\" cy=\"32\" r=\"3.2\" fill=\"currentColor\"/><circle cx=\"41\" cy=\"32\" r=\"3.2\" fill=\"currentColor\"/></svg></span> <b>Tipo F (Schuko)</b> e <b>tipo C</b>, 230 V, 50 Hz: le stesse prese di Germania e Italia. Nessun adattatore; la spina italiana a tre poli piccola (tipo L) entra nelle prese greche, quella tedesca Schuko è di casa. Le prese USB in hotel non sono garantite: porta il tuo alimentatore."],
    ["Soldi", "Carte accettate quasi ovunque, ma contanti per caselli, taverne di paese, chioschi e la barchetta per il Bourtzi. Bancomat delle banche greche (Alpha, Piraeus, NBG, Eurobank), non gli Euronet gialli che costano 3–4 € a prelievo. Se il POS chiede 'pagare in EUR o nella tua valuta' scegli sempre EUR."],
    ["Mance", "Non obbligatorie: si arrotonda o si lascia il 5–10 % in taverna, qualche moneta al bar, si arrotonda al tassista."],
    ["Orari", "Negozi 9–14 e 17:30–21 (mar, gio, ven), solo mattina lun, mer, sab; molti chiusi la domenica. Supermercati continuati fino alle 21. I periptera (chioschi) vendono acqua, sigarette e ricariche quasi 24 ore."],
    ["Ora", "UTC+3 fino al 25 ottobre: un'ora avanti rispetto a Germania e Italia. Alba verso le 7:30, tramonto verso le 18:45. Il telefono si aggiorna da solo all'atterraggio."],
    ["Acqua", "Rubinetto potabile ad Atene; in provincia meglio la bottiglia. La bottiglia da mezzo litro ha prezzo calmierato a 0,50 € nei chioschi."],
    ["Bagni", "In molte taverne e case la carta igienica va nel cestino, non nel water: le tubature sono strette. C'è sempre un cartello."],
    ["Sole e mare", "Indice UV ancora 5–6 a mezzogiorno: crema e cappello. Mare a 22–23 °C, meduse rare in ottobre."],
    ["Farmacie", "Croce verde, ben fornite, i farmacisti consigliano e parlano inglese. Di turno a rotazione: l'elenco è affisso sulla porta."],
    ["Sicurezza", "Grecia molto sicura. Ad Atene occhio al portafogli in metro (linea 3 per l'aeroporto) e a Monastiraki. Auto: non lasciare nulla in vista."],
    ["Guida", "Si guida a destra, cinture obbligatorie, limite alcol 0,5 (0,2 per neopatentati). I greci lampeggiano per dire 'passa tu'."],
    ["Gesti", "Il 'sì' greco è un leggero cenno del capo verso il basso, il 'no' è il mento in su con un piccolo schiocco: sembra un sì. E il palmo aperto verso qualcuno (moutza) è un insulto: non fare il 'cinque' per strada."],
    ["Feste e scioperi", "Nessuna festa nazionale nelle tue date (il 28 ottobre è dopo). Gli scioperi di trasporti sono frequenti e annunciati con pochi giorni di anticipo: Ekathimerini nei link utili."],
    ["Fumo", "Vietato nei locali chiusi, in pratica tollerato all'aperto e in molte taverne. Le terrazze sono per fumatori."]
  ],
  signs: [["ΕΙΣΟΔΟΣ", "ísodos", "entrata"], ["ΕΞΟΔΟΣ", "éxodos", "uscita"], ["ΑΝΟΙΚΤΟ / ΚΛΕΙΣΤΟ", "anichtó / klistó", "aperto / chiuso"], ["ΚΕΝΤΡΟ", "kéndro", "centro"], ["ΠΑΡΑΛΙΑ", "paralía", "spiaggia"], ["ΛΙΜΑΝΙ", "limáni", "porto"], ["ΑΕΡΟΔΡΟΜΙΟ", "aerodrómio", "aeroporto"], ["ΔΙΟΔΙΑ", "diódia", "pedaggio"], ["ΒΕΝΖΙΝΑΔΙΚΟ", "venzinádiko", "distributore"], ["ΑΜΟΛΥΒΔΗ", "amólivdi", "senza piombo"], ["ΠΑΡΚΙΝΓΚ", "párking", "parcheggio"], ["ΑΠΑΓΟΡΕΥΕΤΑΙ", "apagorévete", "vietato"], ["ΠΡΟΣΟΧΗ", "prosochí", "attenzione"], ["ΦΑΡΜΑΚΕΙΟ", "farmakío", "farmacia"], ["ΝΟΣΟΚΟΜΕΙΟ", "nosokomío", "ospedale"], ["ΑΣΤΥΝΟΜΙΑ", "astinomía", "polizia"], ["ΤΟΥΑΛΕΤΕΣ", "tualétes", "bagni"], ["ΑΝΔΡΩΝ / ΓΥΝΑΙΚΩΝ", "andrón / yinekón", "uomini / donne"], ["ΑΡΧΑΙΟΛΟΓΙΚΟΣ ΧΩΡΟΣ", "archeologikós chóros", "sito archeologico"], ["ΜΟΥΣΕΙΟ", "musío", "museo"], ["ΤΑΒΕΡΝΑ / ΨΗΣΤΑΡΙΑ", "tavérna / psistariá", "taverna / griglieria"], ["ΖΑΧΑΡΟΠΛΑΣΤΕΙΟ", "zacharoplastío", "pasticceria"], ["ΦΟΥΡΝΟΣ", "fúrnos", "forno, panetteria"], ["ΠΕΡΙΠΤΕΡΟ", "períptero", "chiosco"]],
  alphabet: "Α α a · Β β v · Γ γ gh/y · Δ δ dh · Ε ε e · Ζ ζ z · Η η i · Θ θ th · Ι ι i · Κ κ k · Λ λ l · Μ μ m · Ν ν n · Ξ ξ x · Ο ο o · Π π p · Ρ ρ r · Σ σ/ς s · Τ τ t · Υ υ i · Φ φ f · Χ χ ch · Ψ ψ ps · Ω ω o. Combinazioni: ΟΥ = u, ΑΙ = e, ΕΙ/ΟΙ = i, ΜΠ = b, ΝΤ = d, ΓΚ = g, ΤΣ = ts.",
  ui_ess: { parking: "Parcheggio", expand_all: "Apri tutto", collapse_all: "Chiudi tutto", nav_short: "Naviga", on_foot: "Giornata a piedi, auto in garage", e_title: "Il paese in breve", e_signs: "I cartelli che vedrai", e_alpha: "L'alfabeto, per leggere le insegne", e_fuel: "Calcolo carburante", e_km: "km", e_cons: "l/100 km", e_price: "€/l", e_res: "costo stimato" },
  trip: { start: "2026-10-07", end: "2026-10-16", ferieStart: "2026-10-12", title: "Grecia 2026 — Peloponneso classico", short: "Grecia 2026", basePlace: "itea", endPlace: "atene", returnDate: "2026-10-16", defaultDay: "d1", heroBefore: "Nafplio", heroAfter: "Acropolis of Athens", heroReturn: "Ancient Agora of Athens", returnLinks: [["Stato voli AIA", "https://www.aia.gr/traveler/flight-info/"], ["Lufthansa", "https://www.lufthansa.com/"]], fullRouteUrl: "https://www.google.com/maps/dir/?api=1&origin=Itea,Greece&destination=Athens+International+Airport&waypoints=Nafpaktos,Greece%7CArchaeological+Site+of+Olympia%7CNafplio,Greece%7CCorinth+Canal&travelmode=driving", routeWaypoints: [[38.4336, 22.4247], [38.3919, 21.8296], [37.6384, 21.6300], [37.6839, 22.0339], [37.5676, 22.8016], [37.7308, 22.7564], [37.5960, 23.0793], [37.6376, 23.1573], [37.5676, 22.8016], [37.9349, 22.9843], [37.9715, 23.7257], [37.9364, 23.9445]] },
  flights: [
    { d: "2026-10-07", t: "09:35 → 13:25", from: "FRA", to: "ATH", n: "Lufthansa, 2 h 50 · a Delfi per le 16:30" },
    { d: "2026-10-16", t: "11:45 → 13:50", from: "ATH", to: "FRA", n: "Lufthansa, 3 h 05 · in aeroporto alle 09:45" }
  ],
  places: {
    itea:    { name: "Itea",    lat: 38.4336, lng: 22.4247 },
    delfi:   { name: "Delfi",   lat: 38.4824, lng: 22.5010 },
    olimpia: { name: "Olimpia", lat: 37.6384, lng: 21.6300 },
    nafplio: { name: "Nafplio", lat: 37.5676, lng: 22.8016 },
    atene:   { name: "Atene",   lat: 37.9715, lng: 23.7257 },
    sounion: { name: "Sounion", lat: 37.6502, lng: 24.0246 },
    airport: { name: "Aeroporto di Atene", lat: 37.9364, lng: 23.9445 }
  },
  dayPlace: { "2026-10-07": "itea", "2026-10-08": "delfi", "2026-10-09": "itea", "2026-10-10": "itea", "2026-10-11": "itea",
              "2026-10-12": "olimpia", "2026-10-13": "nafplio", "2026-10-14": "atene", "2026-10-15": "atene", "2026-10-16": "atene" },
  colors: { d0: "#8A8F93", d1: "#1F8F6B", d2: "#7A5CC2", d3: "#D1602B", d4: "#1F4E79", d5: "#D9A441" },

  days: [
  { id: "d0", date: "2026-10-07", chip: ["7–11 ott", "arrivo · lavoro"], title: "Arrivo con Delfi, poi il lavoro a Itea", place: "itea", night: "Itea", hero: "Delphi",
    intro: "Atterri alle 13:25: c'è tempo per vedere Delfi nella luce del tardo pomeriggio prima di scendere a Itea. Poi quattro giorni di training e gara, con le sere libere.",
    legs: [["Aeroporto di Atene", "Delfi", 190, "2 h 20"], ["Delfi", "Itea", 15, "20 min"]],
    routeNote: "Auto verso le 14:15. A1 verso nord fino all'uscita per Livadia/Delfi, poi statale per Arachova. A Delfi alle 16:30, sito aperto fino alle 18:30. Pedaggi ~€8. Se dopo il volo non hai voglia di rovine, Osios Loukas è a 10 minuti dalla strada e chiude alle 17.",
    origin: "Athens International Airport", dest: "Itea,Greece", way: ["Archaeological Site of Delphi"],
    stops: [
      { name: "Delfi", time: "16:30", dur: "mer 7, fino alla chiusura", lat: 38.4824, lng: 22.5010, wiki: "Delphi", wit: "Delfi", nav: "Archaeological Site of Delphi",
        desc: "Il momento migliore per il sito: i pullman sono ripartiti, la luce è bassa sulla valle degli ulivi e in due ore vedi tutto senza fretta. Il museo lo lasci per una mattina dei giorni di lavoro (apre alle 8).",
        hist: "Per i greci era l'ombelico del mondo: qui la Pizia, seduta sul tripode tra i vapori, dava responsi che decidevano guerre e colonie. I giochi pitici erano secondi solo a quelli di Olimpia.",
        info: [["Orario", "8:00–18:30 fino al 15/10, ultimo ingresso 18:10"], ["Biglietto", "€20, vale per sito e museo (anche in giorni diversi: chiedi alla cassa)"], ["Parcheggio", "lungo la strada tra sito e museo"]],
        see: [["Santuario di Apollo", "la Via Sacra, i tesori delle città e il tempio dell'oracolo"], ["Teatro", "sopra il tempio, la vista che vale il viaggio"], ["Stadio", "in cima, 10 minuti di salita, al tramonto vuoto"], ["Tholos di Atena Pronaia", "sotto la strada, gratis, il cerchio di colonne più fotografato: dopo, sulla via per Itea"], ["Museo", "l'Auriga di bronzo, la Sfinge dei Nassi, l'Omphalos: un mattino alle 8 tra l'8 e il 10"]],
        tip: "La fonte Castalia è chiusa da anni per caduta massi. Alle 18:30 sei a Itea per le 19: cena sul lungomare.",
        links: [["Sito ufficiale", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2507"], ["Biglietti online", "https://tickets.hh.gr/en"], ["Wikivoyage", "https://en.wikivoyage.org/wiki/Delphi"]] },
      { name: "Galaxidi", time: "sera", dur: "una cena dei giorni di training", lat: 38.3793, lng: 22.3819, wiki: "Galaxidi", wit: "Galaxidi", nav: "Galaxidi",
        desc: "20 minuti lungo la costa. Il paese dei capitani: case neoclassiche su due porticcioli, il posto giusto per una cena tranquilla lontano dal lavoro.",
        hist: "Nell'Ottocento la terza flotta velica della Grecia partiva da qui. Quando arrivò il vapore la città si fermò, ed è per questo che è rimasta intatta.",
        see: [["Porto di Agora", "taverne di pesce sul molo, tramonto sul Parnaso"], ["Museo Nautico", "piccolo, racconta la flotta dell'Ottocento"], ["Pineta di Pefkakia", "di fronte al paese, per una passeggiata dopo cena"]],
        eat: "O Bebelis per cucina casalinga in un cortile, Ta Delfinia o Albatross sul porto per il pesce.",
        links: [["Wikivoyage", "https://en.wikivoyage.org/wiki/Galaxidi"]] },
      { name: "Arachova", time: "sera", dur: "un'altra cena", lat: 38.4787, lng: 22.5866, wiki: "Arachova", wit: "Arachova", nav: "Arachova",
        desc: "Il borgo di montagna sopra Delfi, a 25 minuti. D'inverno è la Cortina dei greci; a ottobre è tranquillo, con la vista sulla valle degli ulivi fino a Itea.",
        see: [["Torre dell'orologio", "sulla roccia sopra il paese"], ["Karathanasi", "grigliata di montagna e formaela alla griglia, rumoroso e pieno di greci"], ["Karydopita", "la torta di noci al miele, in qualunque pasticceria della via principale"]] },
      { name: "Monastero di Osios Loukas", time: "8:30", dur: "1 ora, se hai una mattina", lat: 38.3958, lng: 22.7466, wiki: "Hosios Loukas", wit: "Monastero di Osios Loukas", nav: "Hosios Loukas Monastery",
        desc: "A 35 minuti, patrimonio UNESCO: i mosaici bizantini dell'XI secolo meglio conservati della Grecia, in un anfiteatro di montagne davanti all'Elicona.",
        info: [["Orario", "verifica, di solito 9–17"], ["Biglietto", "€6 circa"]],
        links: [["UNESCO", "https://whc.unesco.org/en/list/537/"]] }
    ] },
  { id: "d1", date: "2026-10-12", chip: ["Lun 12", "→ Olimpia"], title: "Itea → Nafpaktos → Olimpia", place: "olimpia", night: "Olimpia", hero: "Olympia, Greece",
    intro: "Si parte. Costiera del golfo, il ponte di Rio e il pomeriggio nel santuario dove sono nati i Giochi.",
    legs: [["Itea", "Nafpaktos", 80, "1 h 10"], ["Nafpaktos", "Olimpia", 130, "1 h 50"]],
    routeNote: "Partenza alle 9. Statale costiera fino a Nafpaktos, ponte di Rio (€15,90), poi autostrada A5/Olympia Odos verso Pyrgos. A Olimpia per pranzo.",
    origin: "Itea,Greece", dest: "Hotel Pelops Olympia", way: ["Nafpaktos old port"],
    stops: [
      { name: "Nafpaktos", time: "10:15", dur: "45 min", lat: 38.3919, lng: 21.8296, wiki: "Nafpaktos", wit: "Naupatto", nav: "Nafpaktos old port",
        desc: "Il porticciolo veneziano più piccolo e più bello della Grecia, chiuso da due torri. Caffè sotto le mura e giro a piedi in dieci minuti.",
        hist: "Nel 1571 davanti a queste acque si combatté Lepanto, l'ultima grande battaglia tra galee. Sul molo c'è la statua di Cervantes, che qui perse l'uso della mano sinistra.",
        see: [["Il porto rotondo", "qualunque tavolino con vista sulle torri"], ["Castello", "cinque cinte di mura fino alla cima; in auto quasi fino su, vista sul ponte"]],
        tip: "Parcheggia lungo la spiaggia di Gribovo, tre minuti a piedi dal porto.",
        links: [["Wikivoyage", "https://en.wikivoyage.org/wiki/Nafpaktos"]] },
      { name: "Ponte di Rio–Antirrio", time: "11:10", dur: "3 min", lat: 38.3214, lng: 21.7728, wiki: "Rio–Antirrio Bridge", wit: "Ponte Rio-Antirio", nav: "Rio-Antirrio Bridge",
        desc: "2.880 metri di strallato tra la Grecia continentale e il Peloponneso, inaugurato la vigilia delle Olimpiadi 2004. Pedaggio prima del ponte, contanti o carta.",
        hist: "Costruito su fondali di 65 metri, in zona sismica, con i piloni appoggiati e non ancorati: se la terra trema, il ponte scivola.",
        info: [["Pedaggio", "€15,90 auto, solo andata"]],
        tip: "Per la foto fermati prima del casello sul lato di Antirrio, c'è un piazzale con vista sui piloni.",
        links: [["Gefyra SA, tariffe", "https://www.gefyra.gr/en/prices/Times-Diodion/"]] },
      { name: "Olimpia antica", time: "14:00", dur: "3 ore, sito e museo", lat: 37.6384, lng: 21.6300, wiki: "Olympia, Greece", wit: "Olimpia (sito archeologico)", nav: "Archaeological Site of Olympia",
        desc: "Il santuario di Zeus in un bosco di pini e platani, piatto e ombreggiato: piacevole anche nel primo pomeriggio. Prima il sito, poi il museo verso le 16:30.",
        hist: "Per 1.170 anni, ogni quattro anni, le guerre si fermavano e i greci venivano qui a correre, lottare e sacrificare a Zeus. Lo Zeus d'oro e avorio di Fidia, alto 12 metri, era una delle sette meraviglie. Teodosio chiuse tutto nel 393 d.C.",
        info: [["Orario", "8:00–18:30"], ["Biglietto", "€20, vale per sito e museo"], ["Parcheggio", "gratuito davanti al museo"]],
        see: [["Stadio", "entri dalla volta della crypte; la linea di partenza in marmo è ancora lì"], ["Tempio di Zeus", "i rocchi di colonna caduti come domino dal terremoto del VI secolo"], ["Officina di Fidia", "dove fu scolpito lo Zeus crisoelefantino"], ["Palestra e Philippeion", "nella parte ovest, la più tranquilla"], ["Museo Archeologico", "l'Hermes di Prassitele, i frontoni del tempio di Zeus, la Nike di Peonio"], ["Museo dei Giochi antichi", "in paese, gratuito: come funzionavano davvero le gare"]],
        tip: "Il tempio di Era, dove si accende la fiaccola olimpica, è la costruzione più antica del sito: cercalo a nord del Pelopion.",
        eat: "Cena da Bacchus ad Ancient Pissa, 3 km sopra il paese, terrazza sulla valle dell'Alfeo; in paese Aegean o Garden Taverna.",
        links: [["Sito ufficiale", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2358"], ["Museo", "http://odysseus.culture.gr/h/1/eh151.jsp?obj_id=7124"], ["Biglietti online", "https://tickets.hh.gr/en"], ["Wikivoyage", "https://en.wikivoyage.org/wiki/Olympia"]] }
    ],
    sleep: { booked: true, name: "Hotel Pelops", address: "Varela 2 (angolo Spiliopoulou), Archea Olympia 27065", lat: 37.6465, lng: 21.6251, city: "Olimpia", ci: "2026-10-12", co: "2026-10-13", txt: "Prenotato. Albergo di famiglia degli Spiliopoulos a due passi dalla via principale, camere semplici e pulite; la colazione con yogurt, miele e dolci di casa è la cosa per cui è famoso: fanne il pieno prima dell'Arcadia. Parcheggio davanti o nella via, chiedi all'arrivo." },
    alt: "Piano pioggia: museo di Olimpia per primo (3 ore ci stanno), poi il sito con l'ombrello tra un rovescio e l'altro. Se hai tempo in più: Katakolo e il museo della tecnologia greca antica di Kotsanas, 30 minuti verso il mare." },

  { id: "d2", date: "2026-10-13", chip: ["Mar 13", "→ Nafplio"], title: "Olimpia → Nafplio, attraverso l'Arcadia", place: "nafplio", night: "Nafplio", hero: "Nafplio",
    intro: "Tre ore di curve e villaggi di pietra nel cuore del Peloponneso, poi la città più elegante della Grecia: bagno, fortezza al tramonto, cena in centro.",
    legs: [["Olimpia", "Langadia", 75, "1 h 20"], ["Langadia", "Nafplio", 125, "1 h 40"]],
    routeNote: "Pieno di benzina a Olimpia. Statale interna via Tripotamia e Langadia, poi Vytina e Tripoli, autostrada A7 e uscita Argo/Nafplio. Nessun pedaggio fino a Tripoli, ~€3 dopo. Partenza alle 9, arrivo per le 14:30.",
    origin: "Hotel Pelops Olympia", dest: "Artemis Hotel Argous 25 Nafplio", way: ["Langadia,Greece"],
    stops: [
      { name: "Langadia", time: "11:00", dur: "20 min", lat: 37.6839, lng: 22.0339, wiki: "Langadia", wit: "Langadia", nav: "Langadia Arcadia",
        desc: "Villaggio di scalpellini aggrappato a un versante verticale sopra la gola del Lousios: le case sembrano una sopra l'altra. Caffè greco in piazza e foto dalla strada.",
        hist: "Da qui venivano i muratori che hanno costruito mezza Arcadia. Nel 1821 Langadia diede alla rivoluzione greca i suoi capi politici, i Deligiannis.",
        tip: "Se è ora di pranzo, Klimataria a Vytina (10 minuti di deviazione) per il gallo con hilopites sotto la pergola. Altrimenti avanti fino a Nafplio.",
        links: [["Wikivoyage Arcadia", "https://en.wikivoyage.org/wiki/Arcadia"]] },
      { name: "Nafplio", time: "14:30", dur: "pranzo e bagno", lat: 37.5676, lng: 22.8016, wiki: "Nafplio", wit: "Nauplia", nav: "Nafplio old town",
        desc: "Prima capitale della Grecia moderna, veneziana nei palazzi e nelle fortezze, con il mare da tre lati. Auto nel parcheggio del porto, valigia in hotel, pranzo tardi in centro e alle 16 il bagno ad Arvanitia.",
        hist: "Veneziana due volte, turca due volte, capitale dal 1829 al 1834. Davanti alla chiesa di San Spiridione fu assassinato Kapodistrias, il primo governatore della Grecia: il segno del proiettile è ancora nel muro.",
        info: [["Parcheggio", "il grande parcheggio del porto, gratuito"], ["Bagno", "Arvanitia, 10 minuti a piedi sotto le mura di Acronauplia"]],
        see: [["Piazza Syntagma", "il salotto della città, con la moschea veneziana e il museo archeologico"], ["Bourtzi", "il fortino sull'isolotto; barchetta dal molo, 10 minuti, €5 circa"], ["Passeggiata di Arvanitia", "il sentiero sotto le mura fino alla spiaggetta"], ["Staikopoulou e Vasileos Konstantinou", "le vie delle botteghe, komboloi e sandali"]],
        tip: "La Antica Gelateria di Roma in via Farmakopoulon è di due italiani e fa il gelato migliore della Grecia: dopo il bagno.",
        eat: "Pranzo tardi da O Noulis (mezedes, 12 euro) o un souvlaki in via Staikopoulou.",
        links: [["Nafplio ufficiale", "https://www.nafplio.gr/en/"], ["Wikivoyage", "https://en.wikivoyage.org/wiki/Nafplio"]] },
      { name: "Palamidi al tramonto", time: "17:30", dur: "1 ora", lat: 37.5628, lng: 22.8067, wiki: "Palamidi", wit: "Palamidi", nav: "Palamidi Fortress",
        desc: "In auto fino al parcheggio in cima (ultimo ingresso 18:10), oppure i 999 gradini dalla città se hai gambe. Dal bastione di Agios Andreas si vede tutto il golfo argolico; il sole scende dietro le montagne dell'Arcadia alle 18:45.",
        hist: "Costruita dai veneziani in soli tre anni, 1711–1714, e persa un anno dopo. Nella cella del bastione Miltiades fu imprigionato Kolokotronis, l'eroe dell'indipendenza.",
        info: [["Orario", "8:00–18:30"], ["Biglietto", "€8"]],
        eat: "Cena da Ta Fanaria (cucina di casa in una via a scale) o Kakanarakis 1986 per i piatti dell'Argolide. Aperitivo con vista sotto Palamidi, zona Arvanitia.",
        links: [["Sito ufficiale", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2394"]] }
    ],
    sleep: { booked: true, name: "Artemis", address: "Argous 25, Nafplio 21100", lat: 37.5687, lng: 22.8067, city: "Nafplio", ci: "2026-10-13", co: "2026-10-14", txt: "Prenotato. Piccolo hotel a gestione familiare sul viale che entra in città, 10 minuti a piedi da piazza Syntagma e 5 dal parcheggio del porto. Vista su Palamidi dalle camere sul retro. Auto: davanti all'hotel se c'è posto, altrimenti il grande parcheggio gratuito del porto." },
    alt: "Piano pioggia: autostrada via Pyrgos–Tripoli (2 h 30) e pomeriggio tra il museo archeologico e il Museo del Folclore Peloponnesiaco, uno dei migliori musei etnografici d'Europa. Palamidi anche sotto la pioggia: la vista è la stessa." },
  { id: "d3", date: "2026-10-14", chip: ["Mer 14", "Argolide → Atene"], title: "Micene, Epidauro, pranzo a mare, poi Atene", place: "atene", night: "Atene", hero: "Mycenae",
    intro: "Due siti UNESCO a mezz'ora l'uno dall'altro, pesce sull'acqua a Palaia Epidavros, il canale di Corinto, e alle 17:30 sei ad Atene per il tramonto da Filopappo.",
    legs: [["Nafplio", "Micene", 25, "30 min"], ["Micene", "Epidauro", 50, "50 min"], ["Epidauro", "Palaia Epidavros", 15, "15 min"], ["Palaia Epidavros", "Canale di Corinto", 65, "1 h"], ["Canale di Corinto", "Atene, Koukaki", 85, "1 h 15"]],
    routeNote: "Caffè in piazza Syntagma alle 8, quando Nafplio è ancora vuota. Partenza 8:30, Micene all'apertura. Dopo pranzo la costiera fino a Isthmia, sosta al canale, poi A8 e Attiki Odos (pedaggi ~€8). Parcheggio Syngrou-Fix per le 17:30 (entrata su Syngrou direzione centro), 300 m a piedi fino all'appartamento in Argenti 9: l'auto non la tocchi più fino a venerdì.",
    origin: "Artemis Hotel Argous 25 Nafplio", dest: "Syngrou-Fix Metro Underground Parking Athens", way: ["Archaeological Site of Mycenae", "Ancient Theatre of Epidaurus", "Palaia Epidavros", "Corinth Canal"],
    stops: [
      { name: "Micene", time: "9:00", dur: "2 ore", lat: 37.7308, lng: 22.7564, wiki: "Mycenae", wit: "Micene", nav: "Archaeological Site of Mycenae",
        desc: "La cittadella di Agamennone. Mura ciclopiche, la Porta dei Leoni e le tombe a cupola che Schliemann scavò nel 1876 convinto di trovare gli eroi di Omero.",
        hist: "Dal 1600 al 1100 a.C. Micene dominò l'Egeo. Poi crollò tutto in una generazione, insieme a Troia e agli Ittiti, e la Grecia entrò in quattro secoli di buio.",
        info: [["Orario", "8:00–18:30"], ["Biglietto", "€12–20, comprende sito, Tesoro di Atreo e museo"], ["Terreno", "pietra liscia in salita, scarpe che tengono"]],
        see: [["Porta dei Leoni", "la più antica scultura monumentale d'Europa"], ["Cerchio delle tombe A", "dove fu trovata la maschera d'oro"], ["Cisterna sotterranea", "scala nel buio nell'angolo nord-est: torcia del telefono"], ["Tesoro di Atreo", "la tholos alta 13 metri, 400 m prima del sito: fermati con l'auto"], ["Museo", "sotto la cittadella, piccolo e chiaro"]],
        tip: "Alle 9 sei quasi solo, alle 11 arrivano i pullman da Atene.",
        links: [["Sito ufficiale", "http://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2573"], ["Biglietti online", "https://tickets.hh.gr/en"], ["UNESCO", "https://whc.unesco.org/en/list/941/"]] },
      { name: "Epidauro", time: "12:00", dur: "1 h 30", lat: 37.5960, lng: 23.0793, wiki: "Ancient Theatre of Epidaurus", wit: "Teatro di Epidauro", nav: "Ancient Theatre of Epidaurus",
        desc: "Il teatro meglio conservato dell'antichità, 14.000 posti e un'acustica che non è leggenda. Intorno, il santuario di Asclepio, il grande ospedale del mondo antico.",
        hist: "I malati dormivano nell'abaton aspettando che il dio apparisse in sogno con la cura. Il teatro, IV secolo a.C., è ancora in uso: il festival estivo ci recita Eschilo ogni anno.",
        info: [["Orario", "8:00–18:30"], ["Biglietto", "€12–20, teatro, santuario e museo"]],
        see: [["Teatro", "sali in cima, poi fai parlare qualcuno dal centro dell'orchestra"], ["Santuario", "la tholos, l'abaton, lo stadio"], ["Museo", "statue e strumenti chirurgici, saltabile se hai fame"]],
        tip: "Nel parcheggio ci sono i pini d'Aleppo più fotografati della Grecia.",
        links: [["Sito ufficiale", "http://odysseus.culture.gr/h/3/eh355.jsp?obj_id=2374"], ["UNESCO", "https://whc.unesco.org/en/list/491/"]] },
      { name: "Palaia Epidavros", time: "14:00", dur: "pranzo, e un bagno se il mare è calmo", lat: 37.6376, lng: 23.1573, wiki: "Palaia Epidavros", wit: "Epidauro", nav: "Palaia Epidavros",
        desc: "Il porticciolo dell'antica Epidauro: taverne di pesce sull'acqua, una spiaggia e un piccolo teatro antico tra gli aranceti. Il posto dove il giro rallenta, prima della città.",
        see: [["Pranzo a mare", "pesce alla griglia e insalata, con i piedi quasi in acqua"], ["Piccolo teatro", "300 m dal porto, spesso gratuito e vuoto"], ["Città sommersa", "a Kalymnios, 1 km a nord, resti romani a 2 metri di profondità: maschera e snorkel"]],
        eat: "Mouria sul lungomare, da tre generazioni; in alternativa Gialasi." },
      { name: "Canale di Corinto", time: "16:15", dur: "20 min", lat: 37.9349, lng: 22.9843, wiki: "Corinth Canal", wit: "Canale di Corinto", nav: "Corinth Canal",
        desc: "6,3 km di taglio dritto nella roccia, pareti di 80 metri, aperto nel 1893. Ci si ferma sul ponte della vecchia statale a Isthmia per guardare giù.",
        hist: "Nerone lo iniziò nel 67 d.C. con una zappa d'oro e 6.000 prigionieri; lo finirono gli ungheresi 1.800 anni dopo. Le navi moderne sono troppo larghe: oggi ci passano yacht e bungee jumper.",
        tip: "Caffè lato Peloponneso, poi in autostrada: da qui Koukaki è un'ora e un quarto fuori dall'ora di punta." },
      { name: "Atene, primo impatto", time: "17:30", dur: "la sera", lat: 37.9680, lng: 23.7210, wiki: "Philopappos Monument", wit: "Collina di Filopappo", nav: "Filopappou Hill",
        desc: "Auto al parcheggio Syngrou-Fix, valigia in Argenti 9, doccia, e a piedi sulla collina di Filopappo, 10 minuti dall'appartamento: il tramonto sull'Acropoli è alle 18:45, senza biglietto e senza folla. Poi cena a Koukaki.",
        hist: "Dalla collina Morosini bombardò il Partenone nel 1687. Oggi è il posto dove gli ateniesi vengono la sera con una birra.",
        eat: "To Kati Allo per le teglie del giorno se vuoi cenare presto e semplice; Mani Mani per la cucina del Peloponneso rivisitata; Fabrika tou Efrosinou per una taverna moderna." }
    ],
    sleep: { booked: true, name: "Appartamento, Argenti 9", address: "Argenti 9, Koukaki, Atene 11743", lat: 37.9622, lng: 23.7275, parking: ["Syngrou-Fix", 37.9638, 23.7260], city: "Athens", ci: "2026-10-14", co: "2026-10-16", txt: "Prenotato: appartamento per due notti. Koukaki, lato Syngrou: metro Syngrou-Fix a 3 minuti, Museo dell'Acropoli a 10, Filopappo a 10, Overoll e Takis per la colazione a 400 m. Auto al parcheggio sotterraneo della metro Syngrou-Fix, 300 m dall'appartamento: entrata su Syngrou, aperto 24 ore, si paga al banco della stazione con il biglietto QR, circa 5–8 € a notte. Non cercare posto in strada." },
    alt: "Piano pioggia: Micene ed Epidauro si fanno anche sotto l'ombrello; salta il bagno e arriva ad Atene prima, con il Museo dell'Acropoli alle 17 (aperto fino alle 20) al posto di Filopappo. Se hai tempo in più: Tirinto, 5 minuti da Nafplio sulla strada di Micene, mura ciclopiche e nessuno." },
  { id: "d4", date: "2026-10-15", chip: ["Gio 15", "Atene"], title: "Atene, vissuta", place: "atene", night: "Atene", hero: "Acropolis of Athens",
    intro: "Due sole pietre, l'Agorà la mattina e l'Acropoli nel pomeriggio, e in mezzo la città vera: mercato, caffè, un pranzo in cantina, una pausa. Zero chilometri in auto.",
    legs: [],
    routeNote: "Tutto a piedi da Argenti 9, al massimo un taxi o la metro da Syngrou-Fix (3 minuti). L'unica prenotazione della giornata è l'Acropoli alle 16:00 su tickets.hh.gr. Pieno di benzina stasera o domattina a Koropi, sulla strada dell'aeroporto.",
    origin: "Acropolis Museum", dest: "Acropolis of Athens", way: [],
    stops: [
      { name: "Agorà antica e Anafiotika", time: "8:00", dur: "1 h 30", lat: 37.9748, lng: 23.7222, wiki: "Ancient Agora of Athens", wit: "Agorà di Atene", nav: "Ancient Agora of Athens",
        desc: "All'apertura sei quasi solo. Il tempio di Efesto, la Stoà di Attalo con il museo, poi risali per Anafiotika, il villaggio cicladico nascosto sotto la roccia, e scendi in Plaka.",
        hist: "Qui Socrate interrogava i passanti e qui fu processato. Il kleroterion nel museo è la macchina con cui si sorteggiavano i giudici: la democrazia funzionava a estrazione.",
        info: [["Orario", "8:00–18:30"], ["Biglietto", "€10"]],
        see: [["Tempio di Efesto", "intatto perché fu chiesa per 1.300 anni"], ["Stoà di Attalo", "il museo dell'Agorà, il kleroterion"], ["Anafiotika", "le casette bianche dei muratori di Anafi, gatti e buganvillee"]],
        tip: "Un koulouri dal carretto davanti all'ingresso è la colazione giusta.",
        links: [["Sito ufficiale", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2485"], ["Biglietti online", "https://tickets.hh.gr/en"]] },
      { name: "Atene senza biglietti", time: "10:00", dur: "3 ore", lat: 37.9809, lng: 23.7268, wiki: "Varvakios Agora", wit: "Atene", nav: "Varvakios Central Market Athens",
        desc: "Il cambio della guardia a Syntagma alle 10 in punto, poi Ermou fino al mercato Varvakios: pesce, carne, spezie e il caffè da Krinos o a piazza Agia Irini. Psyrri per le vie di murales e botteghe, Monastiraki per il mercatino.",
        see: [["Varvakios", "il mercato centrale, coperto, dal 1886: entra dal lato della carne e attraversalo"], ["Evripidou", "la via delle spezie e del pastourma"], ["Agia Irini", "la piazza dei caffè, Kostas per il souvlaki se hai fame prima"], ["Monastiraki", "la piazza, la moschea Tzistarakis, il mercatino delle pulci"]],
        tip: "Bougatsadiko a piazza Iroon per una bougatsa a metà mattina; Krinos in via Aiolou per i loukoumades stasera, non adesso." },
      { name: "Diporto", time: "13:00", dur: "pranzo", lat: 37.9805, lng: 23.7263, wiki: "Varvakios Agora", wit: "Atene", nav: "Diporto Athens Sokratous 9",
        desc: "Scantinato senza insegna dal 1887, si scende una scala in via Sokratous 9. Non c'è menu: portano fagioli, sardine, maiale con sedano, insalata, vino dalla botte; il conto lo fanno a occhio. È il posto più autentico di Atene, e il pranzo che ti ricorderai.",
        tip: "Solo contanti, si condivide il tavolo. Se è pieno o chiuso, l'Oinomageireio Epirus dentro il mercato è l'alternativa dal 1898." },
      { name: "Pausa", time: "14:30", dur: "1 h 30", lat: 37.9660, lng: 23.7280, wiki: "Koukaki", wit: "Koukaki", nav: "Koukaki Athens",
        desc: "Appartamento, doccia, un'ora di niente. Alle tre del pomeriggio ad Atene fa ancora caldo e l'Acropoli alle 16 vuole gambe fresche.",
        tip: "Se non ti va di fermarti: Takis bakery o Overoll a Koukaki per un caffè, o la terrazza di Little Tree Books & Coffee." },
      { name: "Acropoli", time: "16:00", dur: "2 ore", lat: 37.9715, lng: 23.7257, wiki: "Acropolis of Athens", wit: "Acropoli di Atene", nav: "Acropolis of Athens",
        desc: "Salita a piedi da Dionysiou Areopagitou. Alle 16 la luce è laterale e la folla del mattino se n'è andata. Alle 18 esci dal lato del teatro di Dioniso e sali sull'Areopago per il tramonto delle 18:45.",
        hist: "Pericle la ricostruì in quarant'anni dopo che i persiani l'avevano rasa al suolo nel 480 a.C. Il Partenone fu tempio, chiesa, moschea e polveriera: esplose nel 1687 sotto le bombe veneziane. Lord Elgin portò via i marmi nel 1801; la disputa continua.",
        info: [["Orario", "8:00–18:30, ultimo ingresso 18:00"], ["Biglietto", "€30, fascia oraria delle 16:00: prenota su tickets.hh.gr"], ["Ingresso", "principale da ovest; uscita dal teatro di Dioniso, a 200 m dal museo"]],
        see: [["Propilei e Atena Nike", "l'ingresso monumentale"], ["Partenone", "da poco senza impalcature sul lato nord"], ["Eretteo", "la loggia delle Cariatidi (copie: le vere sono al museo)"], ["Pendio sud", "teatro di Dioniso e Odeon di Erode Attico, in discesa"], ["Areopago", "la roccia davanti all'ingresso, gratis, per il tramonto sull'Agorà"]],
        links: [["Biglietti ufficiali", "https://tickets.hh.gr/en/venues/acropolis-of-athens-tickets"], ["Sito ufficiale", "http://odysseus.culture.gr/h/3/eh351.jsp?obj_id=2384"]] },
      { name: "Museo dell'Acropoli", time: "18:30", dur: "1 h 30", lat: 37.9685, lng: 23.7285, wiki: "Acropolis Museum", wit: "Museo dell'Acropoli", nav: "Acropolis Museum",
        desc: "Aperto fino alle 20 il giovedì (verifica). Le Cariatidi vere al primo piano e la sala del Partenone all'ultimo, con il fregio orientato come sul tempio e la vista sull'originale illuminato. Il resto lo attraversi.",
        info: [["Biglietto", "€20"], ["Ristorante", "terrazza del secondo piano, vista sul Partenone, buono se non vuoi muoverti"]],
        links: [["Sito ufficiale", "https://www.theacropolismuseum.gr/en"]] },
      { name: "Sera a Psyrri", time: "20:30", dur: "fino a quando vuoi", lat: 37.9787, lng: 23.7250, wiki: "Psyri", wit: "Psyrri", nav: "Psyrri Athens",
        desc: "Metro da Akropoli a Monastiraki, o 25 minuti a piedi. Cena in taverna, loukoumades da Krinos o Lukumades, e un ultimo giro a Monastiraki con l'Acropoli illuminata sopra i tetti.",
        eat: "Atlantikos per il pesce fritto a prezzi da mercato, Feyrouz per lo street food anatolico, Klimataria a piazza Theatrou se vuoi il rebetiko dal vivo. Dolce: Krinos (Aiolou 87) fino alle 21, poi Lukumades (Aiolou 21)." }
    ],
    sleep: { booked: true, name: "Appartamento, Argenti 9", address: "Argenti 9, Koukaki, Atene 11743", lat: 37.9622, lng: 23.7275, parking: ["Syngrou-Fix", 37.9638, 23.7260], city: "Athens", ci: "2026-10-14", co: "2026-10-16", txt: "Stesso appartamento. Check-in online per il volo di domani, valigia pronta, sveglia alle 7:30." },
    alt: "Piano pioggia: al posto dell'Agorà il Museo Archeologico Nazionale 8–10 (taxi 10 minuti, €12): la maschera di Micene chiude il cerchio di ieri. L'Acropoli con la pioggia è marmo bagnato: se alle 16 piove forte, entra alle 17 (ultimo ingresso 18) o rinuncia e resta al museo dalle 16. Se hai tempo in più: funicolare del Licabetto dopo cena, aperta fino a tardi." },
  { id: "d5", date: "2026-10-16", chip: ["Ven 16", "volo 11:45"], title: "Colazione e aeroporto", place: "atene", night: "—", hero: "Athens International Airport",
    intro: "Niente programma: un caffè, un koulouri, e alle 8:45 si parte. In aeroporto alle 9:45, volo alle 11:45.",
    legs: [["Atene, Koukaki", "Aeroporto", 35, "40 min"]],
    routeNote: "Alle 8:30 a piedi al parcheggio Syngrou-Fix (300 m), paghi al banco della stazione, e alle 8:45 sei su Syngrou in direzione mare: Vouliagmenis o Poseidonos fino all'Attiki Odos, pedaggio €2,80, uscita aeroporto. Pieno a Koropi lungo la strada. Riconsegna seguendo 'Car rental return' entro le 9:30, banco Lufthansa alle 9:45. Se il traffico delle 9 ti preoccupa, parti alle 8:30.",
    origin: "Syngrou-Fix Metro Underground Parking Athens", dest: "Athens International Airport", way: [],
    stops: [
      { name: "Colazione a Koukaki", time: "7:45", dur: "30 min", lat: 37.9640, lng: 23.7285, wiki: "Koukaki", wit: "Koukaki", nav: "Overoll croissanterie Athens",
        desc: "Overoll (Veikou) per un cornetto o Takis (Misaraliotou) per la tiropita, un freddo espresso, poi valigia e 300 metri a piedi fino al parcheggio Syngrou-Fix.",
        tip: "Fotografa la camera prima di uscire: è il modo più veloce per accorgersi del caricatore dimenticato." },
      { name: "Aeroporto", time: "9:30", dur: "riconsegna auto e volo", lat: 37.9364, lng: 23.9445, wiki: "Athens International Airport", wit: "Aeroporto di Atene-Eleftherios Venizelos", nav: "Athens International Airport car rental return",
        desc: "Riconsegna, 5 minuti a piedi dal terminal, controlli Schengen. Se avanza tempo, il piccolo museo archeologico dell'aeroporto al livello partenze è gratuito e vale dieci minuti.",
        tip: "Fotografa l'auto e il contachilometri alla riconsegna e conserva la ricevuta del pieno.",
        links: [["Aeroporto di Atene", "https://www.aia.gr/traveler/"], ["Stato voli", "https://www.aia.gr/traveler/flight-info/"]] }
    ],
    alt: "Senza auto: metro linea 3 da Syngrou-Fix (linea 2) con cambio a Syntagma, 50 minuti, €9; ma allora l'auto va riconsegnata giovedì sera in aeroporto e si torna in metro. Taxi o Uber: €40 tariffa fissa dal centro, 35–45 minuti." }
  ],

  sites: [
    ["Delfi, sito + museo", "€20", "biglietto unico"], ["Olimpia, sito + museo", "€20", "biglietto unico"], ["Micene, sito + Tesoro di Atreo + museo", "€12–20", "fonti discordanti, verifica"],
    ["Epidauro, teatro + santuario + museo", "€12–20", "fonti discordanti, verifica"], ["Palamidi", "€8", "strada fino in cima"], ["Acropoli", "€30", "fascia oraria, prenota"],
    ["Museo dell'Acropoli", "€20", "biglietto separato"], ["Agorà antica", "€10", "combinato abolito"], ["Museo Archeologico Nazionale", "€12", ""]
  ],
  budget: [["Benzina, ~700 km × 7 l/100 × €2,15", "≈ €105"], ["Pedaggi (ponte €15,90 + autostrade) e parcheggio Syngrou-Fix 2 notti", "≈ €50"], ["Ingressi a siti e musei", "≈ €150"], ["Hotel, 4 notti, già prenotati (Pelops, Artemis, Argenti 9 ×2)", "—"], ["Pasti e caffè", "≈ €40/giorno"]],

  hub: [
    ["tickets.hh.gr", "Biglietti ufficiali del Ministero per Acropoli e siti archeologici, senza commissioni", "https://tickets.hh.gr/en"],
    ["Odysseus, Ministero della Cultura", "Orari e schede ufficiali di ogni sito e museo", "http://odysseus.culture.gr/"],
    ["Visit Greece, Peloponneso", "Il portale turistico nazionale", "https://www.visitgreece.gr/mainland/peloponnese/"],
    ["Wikivoyage Peloponneso", "Guida libera, pratica e aggiornata dai viaggiatori", "https://en.wikivoyage.org/wiki/Peloponnese"],
    ["This is Athens", "Sito ufficiale della città: eventi, quartieri, mostre della settimana", "https://www.thisisathens.org/"],
    ["Nafplio, sito del comune", "Eventi e informazioni turistiche", "https://www.nafplio.gr/en/"],
    ["Museo dell'Acropoli", "Orari, mostre, ristorante", "https://www.theacropolismuseum.gr/en"],
    ["Prezzi carburante, Ministero", "Prezzo per distributore, aggiornato ogni giorno", "https://www.fuelprices.gr/"],
    ["Pedaggi in Grecia", "Tariffe per tratta e calcolatore", "https://www.tolls.eu/greece"],
    ["Ponte di Rio, Gefyra", "Tariffe e stato del traffico", "https://www.gefyra.gr/en/"],
    ["Meteo EMY", "Il servizio meteorologico nazionale greco", "https://www.emy.gr/en"],
    ["Aeroporto di Atene", "Stato voli, parcheggi, riconsegna auto", "https://www.aia.gr/traveler/"],
    ["Lufthansa, il mio volo", "Check-in e stato del volo", "https://www.lufthansa.com/"],
    ["Ekathimerini", "Il quotidiano greco in inglese, per sapere se ci sono scioperi", "https://www.ekathimerini.com/"],
    ["Ambasciata d'Italia ad Atene", "Contatti e assistenza", "https://ambatene.esteri.it/"],
    ["Mappe offline di Google", "Come scaricare Peloponneso e Attica prima di partire", "https://support.google.com/maps/answer/6291838"]
  ],

  phrases: [["Kaliméra", "buongiorno (fino a metà pomeriggio)"], ["Kalispéra", "buonasera"], ["Efcharistó", "grazie"], ["Parakaló", "prego / per favore"], ["Ne / Óchi", "sì / no ('ne' è sì)"], ["Ton logariasmó, parakaló", "il conto, per favore"], ["Yámas", "salute, brindisi"], ["Signómi", "scusi"], ["Pou íne…?", "dov'è…?"], ["Éna ellinikó kafé, métrio", "un caffè greco, medio zucchero"]],

  food: [["Gemistá", "pomodori e peperoni ripieni di riso, al forno"], ["Kókoras me hilopítes", "gallo in umido con pasta fresca, il piatto dell'Arcadia"], ["Saganáki", "formaggio fritto, con limone"], ["Horiátiki", "l'insalata greca vera, con feta intera sopra"], ["Tsipoúra / lavráki", "orata e branzino alla griglia, si pagano a peso"], ["Kolokythokeftédes", "polpette di zucchine"], ["Souvláki / gyros", "il pranzo veloce, in pita"], ["Loukoumádes", "frittelle con miele e cannella, per finire"], ["Ellinikós kafés", "caffè greco: sketos, metrios o glykos secondo lo zucchero"], ["Tsípouro", "la grappa locale, spesso offerta a fine pasto"]],

  todo: [
    ["Biglietto Acropoli per giovedì 15, fascia 16:00", "tickets.hh.gr", "https://tickets.hh.gr/en/venues/acropolis-of-athens-tickets"],
    ["Hotel prenotati: Pelops (Olimpia), Artemis (Nafplio), appartamento Argenti 9 (Atene). Salva le conferme nelle Note", "sezione Mio", ""],
    ["Verifica riconsegna auto 16/10 ore 9:30 in aeroporto e km illimitati", "contratto noleggio", ""],
    ["Mappe offline: Peloponneso e Attica", "Google Maps → profilo → Mappe offline", "https://support.google.com/maps/answer/6291838"],
    ["Check-in online volo del 16", "la sera del 15", "https://www.lufthansa.com/"]
  ],

  packing: {
    "Documenti e soldi": [["Carta d'identità o passaporto"], ["Patente e carta di credito intestata al conducente", "la cauzione dell'auto va sulla stessa carta"], ["Voucher noleggio e numero assistenza"], ["Tessera sanitaria europea"], ["€100–150 in contanti, banconote piccole", "caselli e taverne di paese"]],
    "Tecnologia": [["Power bank e cavi"], ["Supporto telefono per auto", "le auto a noleggio raramente hanno CarPlay"], ["Cavo USB per l'autoradio"], ["Cuffie"], ["Caricatore attrezzatura di lavoro"]],
    "Abbigliamento": [["Scarpe da camminata con suola che tiene", "Micene, Palamidi e Acropoli sono marmo e ghiaia lucidi"], ["Sandali o scarpe leggere per la sera"], ["Costume e telo leggero", "Arvanitia, Palaia Epidavros"], ["Giacca leggera o pile", "Delfi e le sere"], ["Antipioggia compatto"], ["Cappello e occhiali da sole"], ["Una camicia decente", "Nafplio e Atene"]],
    "Varie": [["Crema solare 30+", "a ottobre brucia ancora"], ["Borraccia", "fontanelle nei siti"], ["Zainetto piccolo per i siti"], ["Farmaci personali, cerotti, antinfiammatorio"], ["Tappi per le orecchie", "hotel in centro a Nafplio"], ["Maschera da snorkel", "città sommersa di Epidauro"], ["Sacchetto per i panni da lavare"]]
  }
};
