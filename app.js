/* Grecia 2026 — logica dell'app. I contenuti stanno in data.js. */
(function () {
  const G = window.GUIDE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const todayISO = () => { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };
  const itDate = iso => new Date(iso + 'T12:00:00').toLocaleDateString('it-IT', { weekday: 'short', day: 'numeric', month: 'short' });
  const itLong = iso => new Date(iso + 'T12:00:00').toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' });
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const WMO = { 0: ['☀️', 'Sereno'], 1: ['🌤️', 'Poco nuvoloso'], 2: ['⛅', 'Variabile'], 3: ['☁️', 'Coperto'], 45: ['🌫️', 'Nebbia'], 48: ['🌫️', 'Nebbia'], 51: ['🌦️', 'Pioviggine'], 53: ['🌦️', 'Pioviggine'], 55: ['🌧️', 'Pioviggine'], 61: ['🌧️', 'Pioggia debole'], 63: ['🌧️', 'Pioggia'], 65: ['🌧️', 'Pioggia forte'], 80: ['🌦️', 'Rovesci'], 81: ['🌧️', 'Rovesci'], 82: ['⛈️', 'Rovesci forti'], 95: ['⛈️', 'Temporale'], 96: ['⛈️', 'Temporale'], 99: ['⛈️', 'Temporale'] };
  const wmo = c => WMO[c] || ['🌡️', '—'];

  const gm = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const gnav = (lat, lng) => `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
  const anav = (lat, lng, n) => `https://maps.apple.com/?daddr=${lat},${lng}&q=${encodeURIComponent(n)}&dirflg=d`;
  const gdir = (o, d, w) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(o)}&destination=${encodeURIComponent(d)}${w && w.length ? '&waypoints=' + encodeURIComponent(w.join('|')) : ''}&travelmode=driving`;
  const adir = (o, d) => `https://maps.apple.com/?saddr=${encodeURIComponent(o)}&daddr=${encodeURIComponent(d)}&dirflg=d`;
  const bk = (city, ci, co) => `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}&checkin=${ci}&checkout=${co}&group_adults=1&no_rooms=1`;

  /* ---------- Wikipedia (foto + link) ---------- */
  const wikiCache = store.get('wiki-cache', {});
  async function wiki(title) {
    if (wikiCache[title]) return wikiCache[title];
    const r = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title));
    if (!r.ok) throw new Error('wiki');
    const j = await r.json();
    const out = { img: (j.originalimage && j.originalimage.source) || (j.thumbnail && j.thumbnail.source) || null, url: j.content_urls ? j.content_urls.mobile.page : null };
    wikiCache[title] = out; store.set('wiki-cache', wikiCache);
    return out;
  }
  async function fillPhotos(root) {
    for (const el of $$('[data-wiki]', root)) {
      try {
        const w = await wiki(el.dataset.wiki);
        const img = $('img', el), cap = $('.cap', el);
        if (w.img) { img.src = w.img; if (cap) cap.innerHTML = `Foto: <a target="_blank" rel="noopener" href="${w.url || '#'}">Wikipedia</a>`; }
        else el.classList.add('nophoto');
      } catch (e) { const ph = el.classList.contains('ph') ? el : $('.ph', el); if (ph) ph.style.display = 'none'; }
    }
  }

  /* ---------- Meteo ---------- */
  const wxCache = {};
  async function forecast(pid) {
    if (wxCache[pid]) return wxCache[pid];
    const p = G.places[pid];
    const u = `https://api.open-meteo.com/v1/forecast?latitude=${p.lat}&longitude=${p.lng}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,sunrise,sunset&current=temperature_2m,weather_code,wind_speed_10m,is_day&timezone=Europe%2FAthens&forecast_days=16`;
    const r = await fetch(u); if (!r.ok) throw new Error('wx');
    const j = await r.json(); wxCache[pid] = j; return j;
  }
  function wxCards(j, highlight) {
    const t0 = todayISO();
    return `<div class="wx">${j.daily.time.map((t, i) => {
      const [ico, lab] = wmo(j.daily.weather_code[i]);
      const cls = (t === t0 ? ' today' : '') + (t === highlight ? ' trip' : '');
      return `<div class="c${cls}"><div class="s">${itDate(t)}</div><div class="i">${ico}</div><div class="t">${Math.round(j.daily.temperature_2m_max[i])}°</div><div class="s">min ${Math.round(j.daily.temperature_2m_min[i])}° · 🌧 ${j.daily.precipitation_probability_max[i] ?? 0}%</div><div class="s">${lab}</div><div class="s">vento ${Math.round(j.daily.wind_speed_10m_max[i])} km/h</div><div class="s">tramonto ${j.daily.sunset[i].slice(11)}</div></div>`;
    }).join('')}</div>`;
  }
  async function renderWx(box, pid, date) {
    try {
      const j = await forecast(pid);
      const last = j.daily.time[j.daily.time.length - 1];
      const note = date && last < date ? `<p class="muted" style="margin-top:8px">Previsioni disponibili fino al ${itDate(last)}; quelle per il ${itDate(date)} compaiono circa due settimane prima. Media di metà ottobre a ${G.places[pid].name}: 22–25 °C di giorno, 13–16 di notte.</p>` : '';
      box.innerHTML = wxCards(j, date) + note;
    } catch (e) { box.innerHTML = '<p class="muted">Meteo non disponibile senza connessione. Metà ottobre: 22–25 °C di giorno, 13–16 di notte, qualche rovescio possibile.</p>'; }
  }

  /* ---------- Rendering tappe ---------- */
  function stopHTML(s, color) {
    const info = s.info ? `<dl class="info">${s.info.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>` : '';
    const see = s.see ? `<details><summary>Cosa vedere</summary><ul class="see">${s.see.map(([a, b]) => `<li><b>${a}</b> — ${b}</li>`).join('')}</ul></details>` : '';
    const links = [
      ['Wikipedia (it)', `https://it.wikipedia.org/wiki/${encodeURIComponent(s.wit || s.wiki)}`],
      ['Wikipedia (en)', `https://en.wikipedia.org/wiki/${encodeURIComponent(s.wiki)}`],
      ...(s.links || [])
    ].map(([t, u]) => `<a target="_blank" rel="noopener" href="${u}">${t}</a>`).join('');
    return `<article class="stop">
      <div class="time">${s.time}</div><div class="dot" style="background:${color}"></div>
      <div class="box">
        <div class="ph" data-wiki="${esc(s.wiki)}"><img alt="" loading="lazy"><div class="cap"></div></div>
        <div class="body">
          <div class="head"><h3>${s.name}</h3><span class="dur">${s.dur}</span></div>
          <p class="desc">${s.desc}</p>
          ${s.hist ? `<div class="hist"><b>In due righe.</b> ${s.hist}</div>` : ''}
          ${info}${see}
          ${s.tip ? `<p class="tip">${s.tip}</p>` : ''}
          ${s.eat ? `<div class="eat"><b>Dove mangiare.</b> ${s.eat}</div>` : ''}
          <div class="btns"><a class="btn fill sm" target="_blank" rel="noopener" href="${gnav(s.lat, s.lng)}">Naviga (Google)</a><a class="btn sm" target="_blank" rel="noopener" href="${anav(s.lat, s.lng, s.nav)}">Apple Maps</a><a class="btn sm" target="_blank" rel="noopener" href="${gm(s.nav)}">Scheda su Maps</a></div>
          <div class="links">${links}</div>
        </div>
      </div></article>`;
  }
  function dayHTML(D) {
    const color = G.colors[D.id];
    const km = D.legs.reduce((a, l) => a + l[2], 0);
    const legs = D.legs.map((l, i) => `${i === 0 ? l[0] : ''}<span class="a">→</span>${l[1]} <span class="m">(${l[2]} km · ${l[3]})</span>`).join('');
    return `
      <div class="hero" data-wiki="${esc(D.hero)}"><img alt=""><div class="shade"></div><div class="cap"></div>
        <div class="txt"><div class="k">${itLong(D.date)}${D.id === 'd0' ? ' – domenica 11' : ''}</div><h2>${D.title}</h2><p>${D.intro}</p></div></div>
      <div class="route">
        <div class="legs">${legs}</div>
        <div class="sum">${km} km in tutto · ${D.routeNote}</div>
        <div class="btns"><a class="btn fill" target="_blank" rel="noopener" href="${gdir(D.origin, D.dest, D.way)}">Naviga la giornata</a><a class="btn" target="_blank" rel="noopener" href="${adir(D.origin, D.dest)}">Apple Maps</a><span class="tag">Notte a ${D.night}</span></div>
      </div>
      <div class="card"><h3>Meteo a ${G.places[D.place].name}</h3><div class="wxbox" data-place="${D.place}" data-date="${D.date}"><p class="muted">Caricamento…</p></div></div>
      <div class="tl">${D.stops.map(s => stopHTML(s, color)).join('')}</div>
      ${D.sleep ? `<div class="sleep"><h3>Dove dormire · ${D.sleep.city}</h3><p>${D.sleep.txt}</p><div class="btns"><a class="btn olive" target="_blank" rel="noopener" href="${bk(D.sleep.city, D.sleep.ci, D.sleep.co)}">Cerca su Booking (${D.sleep.ci.slice(5).replace('-', '/')} → ${D.sleep.co.slice(5).replace('-', '/')})</a><a class="btn olive" target="_blank" rel="noopener" href="${gm('hotels ' + D.sleep.city)}">Hotel su Maps</a></div></div>` : ''}
      ${D.alt ? `<div class="alt"><b>Se piove, se avanza tempo.</b> ${D.alt}</div>` : ''}`;
  }

  /* ---------- Itinerario ---------- */
  const chips = $('#chips'), dayBody = $('#dayBody');
  G.days.forEach(D => {
    const b = document.createElement('button');
    b.className = 'chip'; b.role = 'tab'; b.dataset.d = D.id;
    b.innerHTML = `<b>${D.chip[0]}</b><span>${D.chip[1]}</span>`;
    b.addEventListener('click', () => showDay(D.id, true));
    chips.appendChild(b);
  });
  function showDay(id, scroll) {
    const D = G.days.find(d => d.id === id) || G.days[0];
    $$('.chip').forEach(c => c.setAttribute('aria-selected', c.dataset.d === D.id));
    dayBody.innerHTML = dayHTML(D);
    fillPhotos(dayBody);
    $$('.wxbox', dayBody).forEach(b => renderWx(b, b.dataset.place, b.dataset.date));
    store.set('day', D.id);
    if (scroll) window.scrollTo({ top: 0 });
  }

  /* ---------- Oggi ---------- */
  function renderToday() {
    const t = todayISO();
    const hero = $('#todayHero'), body = $('#todayBody'), quick = $('#quick');
    const day = G.days.find(d => d.date === t) || (t > '2026-10-07' && t < '2026-10-12' ? G.days[0] : null);
    const pid = G.dayPlace[t] || (t < G.trip.start ? 'itea' : 'atene');
    const p = G.places[pid];
    quick.innerHTML = `
      <a href="tel:112"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/></svg>Emergenze 112</a>
      <a target="_blank" rel="noopener" href="https://www.fuelprices.gr/"><svg viewBox="0 0 24 24"><path d="M4 20V6a2 2 0 012-2h6a2 2 0 012 2v14M4 20h10M14 10h2a2 2 0 012 2v4a1.5 1.5 0 003 0V9l-3-3"/></svg>Benzina</a>
      <a target="_blank" rel="noopener" href="https://tickets.hh.gr/en"><svg viewBox="0 0 24 24"><path d="M4 8a2 2 0 002 2 2 2 0 010 4 2 2 0 00-2 2v2h16v-2a2 2 0 00-2-2 2 2 0 010-4 2 2 0 002-2V6H4z"/></svg>Biglietti</a>`;
    if (t < G.trip.start) {
      const days = Math.round((new Date(G.trip.start) - new Date(t)) / 86400000);
      hero.innerHTML = `<div class="hero" data-wiki="Nafplio"><img alt=""><div class="shade"></div><div class="cap"></div><div class="txt"><div class="k">${itLong(t)}</div><h2>Mancano ${days} giorni</h2><p>Volo Francoforte → Atene mercoledì 7 ottobre alle 13:50. Le ferie iniziano lunedì 12 a Itea.</p></div></div>`;
      body.innerHTML = `
        <div class="card"><h3>Cose da chiudere prima di partire</h3><ul>${G.todo.slice(0, 5).map(x => `<li>${x[0]}${x[2] ? ` — <a target="_blank" rel="noopener" href="${x[2]}">apri</a>` : ''}</li>`).join('')}</ul><p class="muted" style="margin-top:8px">La lista completa con le spunte è nella sezione Valigia.</p></div>
        <div class="card"><h3>Meteo a Itea, prossimi giorni</h3><div class="wxbox" data-place="itea"><p class="muted">Caricamento…</p></div></div>
        <div class="card"><h3>I voli</h3><dl class="kv">${G.flights.map(f => `<dt>${itDate(f.d)}</dt><dd><b>${f.from} → ${f.to}</b> ${f.t} · ${f.n}</dd>`).join('')}</dl></div>`;
    } else if (t > G.trip.end) {
      hero.innerHTML = `<div class="hero" data-wiki="Cape Sounion"><img alt=""><div class="shade"></div><div class="cap"></div><div class="txt"><div class="k">${itLong(t)}</div><h2>Viaggio concluso</h2><p>La guida resta qui per i ricordi e per la prossima volta.</p></div></div>`;
      body.innerHTML = '';
    } else if (t === '2026-10-17') {
      hero.innerHTML = `<div class="hero" data-wiki="Athens International Airport"><img alt=""><div class="shade"></div><div class="cap"></div><div class="txt"><div class="k">${itLong(t)}</div><h2>Volo alle 6:25</h2><p>Check-in alle 4:30. Buon rientro.</p></div></div>`;
      body.innerHTML = `<div class="card"><div class="btns"><a class="btn fill" target="_blank" rel="noopener" href="https://www.aia.gr/traveler/flight-info/">Stato voli AIA</a><a class="btn" target="_blank" rel="noopener" href="https://www.lufthansa.com/">Lufthansa</a></div></div>`;
    } else if (day) {
      const nowMin = new Date().getHours() * 60 + new Date().getMinutes();
      const toMin = s => { const m = /^(\d{1,2}):(\d{2})/.exec(s.time); return m ? (+m[1]) * 60 + (+m[2]) : 9999; };
      const timed = day.stops.filter(s => toMin(s) < 9999);
      const next = timed.find(s => toMin(s) > nowMin - 60) || timed[timed.length - 1];
      hero.innerHTML = `<div class="hero" data-wiki="${esc(day.hero)}"><img alt=""><div class="shade"></div><div class="cap"></div><div class="txt"><div class="k">${itLong(t)} · notte a ${day.night}</div><h2>${day.title}</h2><p>${day.intro}</p></div></div>`;
      body.innerHTML = `
        <div class="today-grid">
          <div class="card"><h3>Prossima tappa</h3><div class="stat"><span class="v">${next.time}</span><span class="k">${next.name}</span></div><p class="muted" style="margin-top:6px">${next.dur}</p>
            <div class="btns"><a class="btn fill" target="_blank" rel="noopener" href="${gnav(next.lat, next.lng)}">Naviga</a><a class="btn" target="_blank" rel="noopener" href="${anav(next.lat, next.lng, next.nav)}">Apple Maps</a><button class="btn" data-goday="${day.id}">Programma completo</button></div></div>
          <div class="card"><h3>Adesso a ${p.name}</h3><div id="todayWxNow" class="muted">Caricamento…</div></div>
        </div>
        <div class="card"><h3>La giornata</h3><dl class="kv">${day.stops.map(s => `<dt>${s.time}</dt><dd><b>${s.name}</b> <span class="muted">${s.dur}</span></dd>`).join('')}</dl>
          <div class="btns"><a class="btn" target="_blank" rel="noopener" href="${gdir(day.origin, day.dest, day.way)}">Naviga l'intera giornata</a></div></div>
        <div class="card"><h3>Meteo a ${p.name}</h3><div class="wxbox" data-place="${pid}" data-date="${t}"><p class="muted">Caricamento…</p></div></div>`;
      forecast(pid).then(j => {
        const [ico, lab] = wmo(j.current.weather_code);
        $('#todayWxNow').innerHTML = `<div class="stat"><span class="v">${Math.round(j.current.temperature_2m)}°</span><span class="k">${ico} ${lab}</span></div><p class="muted" style="margin-top:6px">Max ${Math.round(j.daily.temperature_2m_max[0])}°, pioggia ${j.daily.precipitation_probability_max[0] ?? 0}%, vento ${Math.round(j.current.wind_speed_10m)} km/h<br>Alba ${j.daily.sunrise[0].slice(11)} · tramonto ${j.daily.sunset[0].slice(11)}</p>`;
      }).catch(() => { $('#todayWxNow').textContent = 'Meteo non disponibile senza rete.'; });
    }
    fillPhotos(hero);
    $$('.wxbox', body).forEach(b => renderWx(b, b.dataset.place, b.dataset.date));
    $$('[data-goday]', body).forEach(b => b.addEventListener('click', () => { showView('days'); showDay(b.dataset.goday, true); }));
  }

  /* ---------- Pillola meteo in alto ---------- */
  (async () => {
    const t = todayISO(); const pid = G.dayPlace[t] || (t < G.trip.start ? 'itea' : 'atene');
    try { const j = await forecast(pid); $('#nowIco').textContent = wmo(j.current.weather_code)[0]; $('#nowT').textContent = Math.round(j.current.temperature_2m) + '°'; $('#nowP').textContent = G.places[pid].name; }
    catch (e) { $('#nowpill').style.display = 'none'; }
  })();

  /* ---------- Mappa ---------- */
  let map, mapBuilt = false;
  function buildMap() {
    if (mapBuilt || typeof L === 'undefined') return; mapBuilt = true;
    map = L.map('map', { scrollWheelZoom: false });
    const carto = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { subdomains: 'abcd', maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>' });
    const esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18, attribution: 'Tiles &copy; Esri' });
    let tileErrors = 0, switched = false;
    carto.on('tileerror', () => { if (!switched && ++tileErrors > 3) { switched = true; map.removeLayer(carto); esri.addTo(map); } });
    carto.addTo(map);
    L.control.layers({ 'Carto': carto, 'Esri': esri }, null, { position: 'topright' }).addTo(map);
    const all = [];
    G.days.forEach(D => {
      const color = G.colors[D.id];
      D.stops.forEach((s, i) => {
        const icon = L.divIcon({ className: '', html: `<div class="pin" style="background:${color}"><span>${D.id === 'd0' ? '·' : D.id.slice(1)}</span></div>`, iconSize: [26, 26], iconAnchor: [4, 26], popupAnchor: [9, -26] });
        const m = L.marker([s.lat, s.lng], { icon }).addTo(map);
        m.bindPopup(`<b>${s.name}</b><br><span style="color:#666">${D.chip[0]} · ${s.time}</span><br>${s.desc.split('. ')[0]}.<br><a class="btn fill sm" target="_blank" rel="noopener" href="${gnav(s.lat, s.lng)}">Naviga</a> <a class="btn sm" target="_blank" rel="noopener" href="${anav(s.lat, s.lng, s.nav)}">Apple Maps</a>`);
        all.push([s.lat, s.lng]);
      });
    });
    // percorso: waypoint principali in ordine
    const wp = [[38.4336, 22.4247], [38.3919, 21.8296], [37.6384, 21.6300], [37.6839, 22.0339], [37.5676, 22.8016], [37.7308, 22.7564], [37.5960, 23.0793], [37.6376, 23.1573], [37.5676, 22.8016], [37.9349, 22.9843], [37.9715, 23.7257], [37.6502, 24.0246], [37.9364, 23.9445]];
    const fallback = L.polyline(wp, { color: '#1F8F6B', weight: 4, opacity: .8, dashArray: '6 6' }).addTo(map);
    map.fitBounds(L.latLngBounds(all).pad(0.08));
    const cached = store.get('osrm-route', null);
    const draw = coords => { map.removeLayer(fallback); L.polyline(coords.map(c => [c[1], c[0]]), { color: '#1F8F6B', weight: 4, opacity: .85 }).addTo(map); };
    if (cached) draw(cached);
    else fetch(`https://router.project-osrm.org/route/v1/driving/${wp.map(p => p[1] + ',' + p[0]).join(';')}?overview=full&geometries=geojson`)
      .then(r => r.json()).then(j => { if (j.routes && j.routes[0]) { const c = j.routes[0].geometry.coordinates; store.set('osrm-route', c); draw(c); } }).catch(() => {});
    $('#legend').innerHTML = G.days.map(D => `<span><i style="background:${G.colors[D.id]}"></i>${D.chip[0]} · ${D.chip[1]}</span>`).join('');
    $('#distTable').innerHTML = '<tr><th>Tratta</th><th>km</th><th>tempo</th></tr>' + G.days.flatMap(D => D.legs.map(l => `<tr><td>${l[0]} → ${l[1]}</td><td class="n">${l[2]}</td><td class="n">${l[3]}</td></tr>`)).join('');
  }

  /* ---------- Guida ---------- */
  $('#hub').innerHTML = G.hub.map(([t, d, u]) => `<a target="_blank" rel="noopener" href="${u}"><b>${t}</b><span>${d}</span></a>`).join('');
  $('#siteTable').innerHTML = '<tr><th>Sito</th><th>Intero</th><th>Note</th></tr>' + G.sites.map(s => `<tr><td>${s[0]}</td><td class="n">${s[1]}</td><td class="muted">${s[2]}</td></tr>`).join('');
  $('#budgetTable').innerHTML = G.budget.map(b => `<tr><td>${b[0]}</td><td class="n">${b[1]}</td></tr>`).join('') + '<tfoot><tr><td>Totale indicativo</td><td class="n">€950–1.200</td></tr></tfoot>';
  $('#foodTable').innerHTML = G.food.map(f => `<tr><td><b>${f[0]}</b></td><td class="muted">${f[1]}</td></tr>`).join('');
  $('#phr').innerHTML = G.phrases.map(p => `<div><b>${p[0]}</b><i>${p[1]}</i></div>`).join('');

  /* ---------- Checklist ---------- */
  function checklist(items, key, progEl, withLinks) {
    const saved = store.get(key, {});
    return {
      html: items.map((it, i) => `<li><label><input type="checkbox" data-k="${key}" data-i="${i}" ${saved[i] ? 'checked' : ''}><span>${it[0]}${withLinks && it[2] ? ` — <a target="_blank" rel="noopener" href="${it[2]}">apri</a>` : ''}${it[1] ? `<span class="sub">${it[1]}</span>` : ''}</span></label></li>`).join(''),
      prog: () => { const n = Object.values(store.get(key, {})).filter(Boolean).length; progEl.style.width = (100 * n / items.length) + '%'; }
    };
  }
  const todo = checklist(G.todo, 'chk-todo', $('#progTodo'), true);
  $('#todoList').innerHTML = todo.html;
  const packItems = []; let packHTML = '';
  Object.entries(G.packing).forEach(([grp, items]) => {
    const start = packItems.length; items.forEach(it => packItems.push(it));
    packHTML += `<h4 style="margin:12px 0 4px">${grp}</h4><ul class="check">${items.map((it, i) => { const idx = start + i; return `<li><label><input type="checkbox" data-k="chk-pack" data-i="${idx}"><span>${it[0]}${it[1] ? `<span class="sub">${it[1]}</span>` : ''}</span></label></li>`; }).join('')}</ul>`;
  });
  $('#packList').innerHTML = packHTML;
  const packSaved = store.get('chk-pack', {});
  $$('#packList input').forEach(b => { b.checked = !!packSaved[b.dataset.i]; });
  const packProg = () => { const n = Object.values(store.get('chk-pack', {})).filter(Boolean).length; $('#progPack').style.width = (100 * n / packItems.length) + '%'; };
  $$('.check input').forEach(b => b.addEventListener('change', () => { const s = store.get(b.dataset.k, {}); s[b.dataset.i] = b.checked; store.set(b.dataset.k, s); todo.prog(); packProg(); }));
  todo.prog(); packProg();
  $('#resetChk').addEventListener('click', () => { $$('.check input').forEach(b => b.checked = false); store.set('chk-todo', {}); store.set('chk-pack', {}); todo.prog(); packProg(); });

  /* ---------- Viste ---------- */
  function showView(v) {
    $$('[data-v]').forEach(b => b.setAttribute('aria-selected', b.dataset.v === v));
    $$('.view').forEach(s => s.classList.toggle('on', s.id === 'v-' + v));
    store.set('view', v);
    if (v === 'map') { buildMap(); setTimeout(() => map && map.invalidateSize(), 50); }
    window.scrollTo({ top: 0 });
  }
  $$('[data-v]').forEach(b => b.addEventListener('click', () => showView(b.dataset.v)));

  renderToday();
  const t = todayISO();
  const autoDay = (G.days.find(d => d.date === t) || {}).id;
  showDay(autoDay || store.get('day', 'd1'), false);
  showView(t >= G.trip.start && t <= G.trip.end ? 'today' : store.get('view', 'today'));

  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
})();
