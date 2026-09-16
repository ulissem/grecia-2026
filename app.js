/* Grecia 2026 — logica dell'app. I contenuti stanno in data.js. */
(function () {
  const LANG = (function () {
    let l = null;
    try { l = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (l === 'it' || l === 'en') { try { localStorage.setItem('lang', l); } catch (e) {} return l; }
    try { l = localStorage.getItem('lang'); } catch (e) {}
    if (l === 'it' || l === 'en') return l;
    return (navigator.language || 'it').slice(0, 2) === 'en' ? 'en' : 'it';
  })();
  const G = (LANG === 'en' && window.GUIDE_EN) ? window.GUIDE_EN : window.GUIDE;
  const U = Object.assign({}, G.ui, G.ui_food || {}, G.ui_ess || {});
  document.documentElement.lang = G.lang;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const todayISO = () => { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };
  const itDate = iso => new Date(iso + 'T12:00:00').toLocaleDateString(G.locale, { weekday: 'short', day: 'numeric', month: 'short' });
  const itLong = iso => new Date(iso + 'T12:00:00').toLocaleDateString(G.locale, { weekday: 'long', day: 'numeric', month: 'long' });
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const WMO_I = { 0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️', 45: '🌫️', 48: '🌫️', 51: '🌦️', 53: '🌦️', 55: '🌧️', 61: '🌧️', 63: '🌧️', 65: '🌧️', 80: '🌦️', 81: '🌧️', 82: '⛈️', 95: '⛈️', 96: '⛈️', 99: '⛈️' };
  const WMO = {}; Object.keys(WMO_I).forEach(k => { WMO[k] = [WMO_I[k], (G.wmo && G.wmo[k]) || '—']; });
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
        if (w.img) { img.src = w.img; if (cap) cap.innerHTML = `${U.photo}: <a target="_blank" rel="noopener" href="${w.url || '#'}">Wikipedia</a>`; }
        else el.style.display = 'none';
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
      return `<div class="c${cls}"><div class="s">${itDate(t)}</div><div class="i">${ico}</div><div class="t">${Math.round(j.daily.temperature_2m_max[i])}°</div><div class="s">${U.min} ${Math.round(j.daily.temperature_2m_min[i])}° · 🌧 ${j.daily.precipitation_probability_max[i] ?? 0}%</div><div class="s">${lab}</div><div class="s">${U.wind} ${Math.round(j.daily.wind_speed_10m_max[i])} km/h</div><div class="s">${U.sunset} ${j.daily.sunset[i].slice(11)}</div></div>`;
    }).join('')}</div>`;
  }
  async function renderWx(box, pid, date) {
    try {
      const j = await forecast(pid);
      const last = j.daily.time[j.daily.time.length - 1];
      const note = date && last < date ? `<p class="muted" style="margin-top:8px">${U.wx_far(itDate(last), itDate(date), G.places[pid].name)}</p>` : '';
      box.innerHTML = wxCards(j, date) + note;
    } catch (e) { box.innerHTML = `<p class="muted">${U.wx_off}</p>`; }
  }

  /* ---------- Rendering tappe ---------- */
  function stopHTML(s, color) {
    const info = s.info ? `<dl class="info">${s.info.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>` : '';
    const see = s.see ? `<details><summary>${U.see}</summary><ul class="see">${s.see.map(([a, b]) => `<li><b>${a}</b> — ${b}</li>`).join('')}</ul></details>` : '';
    const links = [
      [U.wiki_it, `https://it.wikipedia.org/wiki/${encodeURIComponent(s.wit || s.wiki)}`],
      [U.wiki_en, `https://en.wikipedia.org/wiki/${encodeURIComponent(s.wiki)}`],
      ...(s.links || [])
    ].map(([t, u]) => `<a target="_blank" rel="noopener" href="${u}">${t}</a>`).join('');
    return `<article class="stop">
      <div class="time">${s.time}</div><div class="dot" style="background:${color}"></div>
      <div class="box">
        <div class="ph" data-wiki="${esc(s.wiki)}"><img alt="" loading="lazy"><div class="cap"></div></div>
        <div class="body">
          <div class="head"><h3>${s.name}</h3><span class="dur">${s.dur}</span></div>
          <p class="desc">${s.desc}</p>
          ${s.hist ? `<div class="hist"><b>${U.hist}</b> ${s.hist}</div>` : ''}
          ${info}${see}
          ${s.tip ? `<p class="tip">${s.tip}</p>` : ''}
          ${s.eat ? `<div class="eat"><b>${U.eat}</b> ${s.eat}</div>` : ''}
          <div class="btns"><a class="btn fill sm" target="_blank" rel="noopener" href="${gnav(s.lat, s.lng)}">${U.nav}</a><a class="btn sm" target="_blank" rel="noopener" href="${anav(s.lat, s.lng, s.nav)}">${U.apple}</a><a class="btn sm" target="_blank" rel="noopener" href="${gm(s.nav)}">${U.sheet}</a></div>
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
        <div class="txt"><div class="k">${itLong(D.date)}${D.id === 'd0' ? U.d0_suffix : ''}</div><h2>${D.title}</h2><p>${D.intro}</p></div></div>
      <div class="route">
        <div class="legs">${legs}</div>
        <div class="sum">${km} km in tutto · ${D.routeNote}</div>
        <div class="btns"><a class="btn fill" target="_blank" rel="noopener" href="${gdir(D.origin, D.dest, D.way)}">${U.nav_day}</a><a class="btn" target="_blank" rel="noopener" href="${adir(D.origin, D.dest)}">${U.apple}</a><span class="tag">${U.night} ${D.night}</span></div>
      </div>
      <div class="card"><h3>${U.weather_in} ${G.places[D.place].name}</h3><div class="wxbox" data-place="${D.place}" data-date="${D.date}"><p class="muted">${U.loading}</p></div></div>
      <div class="tl">${D.stops.map(s => stopHTML(s, color)).join('')}</div>
      ${D.sleep ? `<div class="sleep"><h3>${U.sleep} · ${D.sleep.city}</h3><p>${D.sleep.txt}</p><div class="btns"><a class="btn olive" target="_blank" rel="noopener" href="${bk(D.sleep.city, D.sleep.ci, D.sleep.co)}">${U.booking} (${D.sleep.ci.slice(5).replace('-', '/')} → ${D.sleep.co.slice(5).replace('-', '/')})</a><a class="btn olive" target="_blank" rel="noopener" href="${gm('hotels ' + D.sleep.city)}">${U.hotels_maps}</a></div></div>` : ''}
      ${D.alt ? `<div class="alt"><b>${U.alt}</b> ${D.alt}</div>` : ''}`;
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
    const pid = G.dayPlace[t] || (t < G.trip.start ? G.trip.basePlace : G.trip.endPlace);
    const p = G.places[pid];
    quick.innerHTML = `
      <a href="tel:112"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/></svg>${U.q_sos}</a>
      <a target="_blank" rel="noopener" href="https://www.fuelprices.gr/"><svg viewBox="0 0 24 24"><path d="M4 20V6a2 2 0 012-2h6a2 2 0 012 2v14M4 20h10M14 10h2a2 2 0 012 2v4a1.5 1.5 0 003 0V9l-3-3"/></svg>${U.q_fuel}</a>
      <a target="_blank" rel="noopener" href="https://tickets.hh.gr/en"><svg viewBox="0 0 24 24"><path d="M4 8a2 2 0 002 2 2 2 0 010 4 2 2 0 00-2 2v2h16v-2a2 2 0 00-2-2 2 2 0 010-4 2 2 0 002-2V6H4z"/></svg>${U.q_tickets}</a>`;
    if (t < G.trip.start) {
      const days = Math.round((new Date(G.trip.start) - new Date(t)) / 86400000);
      hero.innerHTML = `<div class="hero" data-wiki="${esc(G.trip.heroBefore)}"><img alt=""><div class="shade"></div><div class="cap"></div><div class="txt"><div class="k">${itLong(t)}</div><h2>${U.countdown(days)}</h2><p>${U.countdown_sub}</p></div></div>`;
      body.innerHTML = `
        <div class="card"><h3>${U.todo_title}</h3><ul>${G.todo.slice(0, 5).map(x => `<li>${x[0]}${x[2] ? ` — <a target="_blank" rel="noopener" href="${x[2]}">${U.open}</a>` : ''}</li>`).join('')}</ul><p class="muted" style="margin-top:8px">${U.todo_more}</p></div>
        <div class="card"><h3>${U.wx_itea}</h3><div class="wxbox" data-place="${G.trip.basePlace}"><p class="muted">${U.loading}</p></div></div>
        <div class="card"><h3>${U.flights}</h3><dl class="kv">${G.flights.map(f => `<dt>${itDate(f.d)}</dt><dd><b>${f.from} → ${f.to}</b> ${f.t} · ${f.n}</dd>`).join('')}</dl></div>`;
    } else if (t > G.trip.end) {
      hero.innerHTML = `<div class="hero" data-wiki="${esc(G.trip.heroAfter)}"><img alt=""><div class="shade"></div><div class="cap"></div><div class="txt"><div class="k">${itLong(t)}</div><h2>${U.done_title}</h2><p>${U.done_sub}</p></div></div>`;
      body.innerHTML = '';
    } else if (t === G.trip.returnDate) {
      hero.innerHTML = `<div class="hero" data-wiki="${esc(G.trip.heroReturn)}"><img alt=""><div class="shade"></div><div class="cap"></div><div class="txt"><div class="k">${itLong(t)}</div><h2>${U.fly_title}</h2><p>${U.fly_sub}</p></div></div>`;
      body.innerHTML = `<div class="card"><div class="btns">${(G.trip.returnLinks || []).map(([t, u]) => `<a class="btn" target="_blank" rel="noopener" href="${u}">${t}</a>`).join('')}</div></div>`;
    } else if (day) {
      const nowMin = new Date().getHours() * 60 + new Date().getMinutes();
      const toMin = s => { const m = /^(\d{1,2}):(\d{2})/.exec(s.time); return m ? (+m[1]) * 60 + (+m[2]) : 9999; };
      const timed = day.stops.filter(s => toMin(s) < 9999);
      const next = timed.find(s => toMin(s) > nowMin - 60) || timed[timed.length - 1];
      hero.innerHTML = `<div class="hero" data-wiki="${esc(day.hero)}"><img alt=""><div class="shade"></div><div class="cap"></div><div class="txt"><div class="k">${itLong(t)} · ${U.night.toLowerCase()} ${day.night}</div><h2>${day.title}</h2><p>${day.intro}</p></div></div>`;
      body.innerHTML = `
        <div class="today-grid">
          <div class="card"><h3>${U.next}</h3><div class="stat"><span class="v">${next.time}</span><span class="k">${next.name}</span></div><p class="muted" style="margin-top:6px">${next.dur}</p>
            <div class="btns"><a class="btn fill" target="_blank" rel="noopener" href="${gnav(next.lat, next.lng)}">${U.nav}</a><a class="btn" target="_blank" rel="noopener" href="${anav(next.lat, next.lng, next.nav)}">${U.apple}</a><button class="btn" data-goday="${day.id}">${U.full_prog}</button></div></div>
          <div class="card"><h3>${U.now_in} ${p.name}</h3><div id="todayWxNow" class="muted">${U.loading}</div></div>
        </div>
        <div class="card"><h3>${U.the_day}</h3><dl class="kv">${day.stops.map(s => `<dt>${s.time}</dt><dd><b>${s.name}</b> <span class="muted">${s.dur}</span></dd>`).join('')}</dl>
          <div class="btns"><a class="btn" target="_blank" rel="noopener" href="${gdir(day.origin, day.dest, day.way)}">${U.nav_all}</a></div></div>
        <div class="card"><h3>${U.weather_in} ${p.name}</h3><div class="wxbox" data-place="${pid}" data-date="${t}"><p class="muted">${U.loading}</p></div></div>`;
      forecast(pid).then(j => {
        const [ico, lab] = wmo(j.current.weather_code);
        $('#todayWxNow').innerHTML = `<div class="stat"><span class="v">${Math.round(j.current.temperature_2m)}°</span><span class="k">${ico} ${lab}</span></div><p class="muted" style="margin-top:6px">${U.max} ${Math.round(j.daily.temperature_2m_max[0])}°, ${U.rain} ${j.daily.precipitation_probability_max[0] ?? 0}%, ${U.wind} ${Math.round(j.current.wind_speed_10m)} km/h<br>${U.sunrise} ${j.daily.sunrise[0].slice(11)} · ${U.sunset} ${j.daily.sunset[0].slice(11)}</p>`;
      }).catch(() => { $('#todayWxNow').textContent = U.wx_off_short; });
    }
    fillPhotos(hero);
    $$('.wxbox', body).forEach(b => renderWx(b, b.dataset.place, b.dataset.date));
    $$('[data-goday]', body).forEach(b => b.addEventListener('click', () => { showView('days'); showDay(b.dataset.goday, true); }));
  }

  /* ---------- Pillola meteo in alto ---------- */
  (async () => {
    const t = todayISO(); const pid = G.dayPlace[t] || (t < G.trip.start ? G.trip.basePlace : G.trip.endPlace);
    try { const j = await forecast(pid); $('#nowIco').textContent = wmo(j.current.weather_code)[0]; $('#nowT').textContent = Math.round(j.current.temperature_2m) + '°'; $('#nowP').textContent = G.places[pid].name; }
    catch (e) { $('#nowpill').style.display = 'none'; }
  })();

  /* ---------- Mappa ---------- */
  let map, mapBuilt = false;
  function buildMap() {
    if (mapBuilt || typeof L === 'undefined') return; mapBuilt = true;
    map = L.map('map', { scrollWheelZoom: false });
    const esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18, attribution: 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, OpenStreetMap contributors' });
    const topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18, attribution: 'Tiles &copy; Esri' });
    const otm = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { subdomains: 'abc', maxZoom: 17, attribution: '&copy; OpenStreetMap, SRTM | &copy; <a href="https://opentopomap.org">OpenTopoMap</a>' });
    let tileErrors = 0, switched = false;
    esri.on('tileerror', () => { if (!switched && ++tileErrors > 3) { switched = true; map.removeLayer(esri); otm.addTo(map); } });
    esri.addTo(map);
    L.control.layers({ 'Strade (Esri)': esri, 'Rilievo (Esri)': topo, 'OpenTopoMap': otm }, null, { position: 'topright' }).addTo(map);
    const all = [];
    G.days.forEach(D => {
      const color = G.colors[D.id];
      D.stops.forEach((s, i) => {
        const icon = L.divIcon({ className: '', html: `<div class="pin" style="background:${color}"><span>${D.id === 'd0' ? '·' : D.id.slice(1)}</span></div>`, iconSize: [26, 26], iconAnchor: [4, 26], popupAnchor: [9, -26] });
        const m = L.marker([s.lat, s.lng], { icon }).addTo(map);
        m.bindPopup(`<b>${s.name}</b><br><span style="color:#666">${D.chip[0]} · ${s.time}</span><br>${s.desc.split('. ')[0]}.<br><a class="btn fill sm" target="_blank" rel="noopener" href="${gnav(s.lat, s.lng)}">${U.nav}</a> <a class="btn sm" target="_blank" rel="noopener" href="${anav(s.lat, s.lng, s.nav)}">${U.apple}</a>`);
        all.push([s.lat, s.lng]);
      });
    });
    // percorso: waypoint principali in ordine
    const wp = G.trip.routeWaypoints || G.days.filter(D => D.onRoute !== false).flatMap(D => D.stops.filter(s => s.onRoute !== false).map(s => [s.lat, s.lng]));
    const fallback = L.polyline(wp, { color: '#1F8F6B', weight: 4, opacity: .8, dashArray: '6 6' }).addTo(map);
    map.fitBounds(L.latLngBounds(all).pad(0.08));
    const cached = store.get('osrm-route-' + wp.length + '-' + wp.map(p => p.join(',')).join(';').length, null);
    const draw = coords => { map.removeLayer(fallback); L.polyline(coords.map(c => [c[1], c[0]]), { color: '#1F8F6B', weight: 4, opacity: .85 }).addTo(map); };
    if (cached) draw(cached);
    else fetch(`https://router.project-osrm.org/route/v1/driving/${wp.map(p => p[1] + ',' + p[0]).join(';')}?overview=full&geometries=geojson`)
      .then(r => r.json()).then(j => { if (j.routes && j.routes[0]) { const c = j.routes[0].geometry.coordinates; store.set('osrm-route-' + wp.length + '-' + wp.map(p => p.join(',')).join(';').length, c); draw(c); } }).catch(() => {});
    const foodLayer = L.layerGroup();
    G.food_places.forEach(grp => grp.items.forEach(it => {
      const ic = L.divIcon({ className: '', html: `<div style="width:22px;height:22px;border-radius:50%;background:${it.cat === 'sweet' ? '#B4553F' : '#6F7F36'};border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;font-size:12px">${it.cat === 'sweet' ? '🍯' : '🍽️'}</div>`, iconSize: [22, 22], iconAnchor: [11, 11], popupAnchor: [0, -12] });
      L.marker([it.lat, it.lng], { icon: ic }).bindPopup(`<b>${it.name}</b><br><span style="color:#666">${it.city} · ${it.price}</span><br>${it.what}<br><a class="btn fill sm" target="_blank" rel="noopener" href="${gm(it.name + ' ' + it.city)}">Google Maps</a>`).addTo(foodLayer);
    }));
    L.control.layers(null, { [U.f_map]: foodLayer }, { position: 'topright', collapsed: false }).addTo(map);
    $('#legend').innerHTML = G.days.map(D => `<span><i style="background:${G.colors[D.id]}"></i>${D.chip[0]} · ${D.chip[1]}</span>`).join('');
    $('#distTable').innerHTML = `<tr><th>${U.dist_h[0]}</th><th>${U.dist_h[1]}</th><th>${U.dist_h[2]}</th></tr>` + G.days.flatMap(D => D.legs.map(l => `<tr><td>${l[0]} → ${l[1]}</td><td class="n">${l[2]}</td><td class="n">${l[3]}</td></tr>`)).join('');
  }

  /* ---------- Guida ---------- */
  $('#hub').innerHTML = G.hub.map(([t, d, u]) => `<a target="_blank" rel="noopener" href="${u}"><b>${t}</b><span>${d}</span></a>`).join('');
  $('#siteTable').innerHTML = `<tr><th>${U.site_h[0]}</th><th>${U.site_h[1]}</th><th>${U.site_h[2]}</th></tr>` + G.sites.map(s => `<tr><td>${s[0]}</td><td class="n">${s[1]}</td><td class="muted">${s[2]}</td></tr>`).join('');
  $('#budgetTable').innerHTML = G.budget.map(b => `<tr><td>${b[0]}</td><td class="n">${b[1]}</td></tr>`).join('') + `<tfoot><tr><td>${U.total}</td><td class="n">${U.total_v}</td></tr></tfoot>`;
  $('#sitesIntro').innerHTML = G.text.sitesIntro; $('#sitesNote').innerHTML = G.text.sitesNote; $('#budgetNote').innerHTML = G.text.budgetNote;
  $('#foodRules').innerHTML = G.text.foodRules.map(x => `<li>${x}</li>`).join('');
  $('#guideBlocks').innerHTML = G.text.blocks1; $('#guideBlocks2').innerHTML = G.text.blocks2;
  $$('[data-ui]').forEach(el => { const v = U[el.dataset.ui]; if (typeof v === 'string') el.textContent = v; });
  const lb = $('#langBtn'); lb.textContent = G.lang === 'en' ? 'IT' : 'EN'; lb.addEventListener('click', () => {
    const nl = G.lang === 'en' ? 'it' : 'en';
    try { localStorage.setItem('lang', nl); } catch (e) {}
    location.href = location.pathname + '?lang=' + nl + '&v=' + Date.now();
  });
  const SPK = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13"/></svg>';
  $('#phr').innerHTML = `<div class="pb" id="pb">${G.phrasebook.map(g => `<h4>${g.group}</h4>${g.items.map(p => `<div class="pr"><div class="gr">${p[0]}</div><div class="sub"><span class="tr">${p[1]}</span>${p[2] ? `<span class="me">${p[2]}</span>` : ''}</div><button class="say" type="button" aria-label="${esc(p[1])}" data-say="${esc(p[0])}">${SPK}</button></div>`).join('')}`).join('')}</div>`;
  (function () {
    const pb = $('#pb');
    if (!('speechSynthesis' in window)) { pb.classList.add('nospeech'); return; }
    let voice = null;
    const pick = () => { const vs = speechSynthesis.getVoices(); voice = vs.find(v => /^el/i.test(v.lang)) || null; if (!vs.length) return; if (!voice) pb.classList.add('nospeech'); };
    pick(); speechSynthesis.onvoiceschanged = pick;
    pb.addEventListener('click', e => {
      const b = e.target.closest('.say'); if (!b) return;
      const u = new SpeechSynthesisUtterance(b.dataset.say.replace(/\s*\/\s*/g, ', ')); u.lang = 'el-GR'; if (voice) u.voice = voice; u.rate = 0.85;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    });
  })();

  /* ---------- Checklist ---------- */
  function checklist(items, key, progEl, withLinks) {
    const saved = store.get(key, {});
    return {
      html: items.map((it, i) => `<li><label><input type="checkbox" data-k="${key}" data-i="${i}" ${saved[i] ? 'checked' : ''}><span>${it[0]}${withLinks && it[2] ? ` — <a target="_blank" rel="noopener" href="${it[2]}">${U.open}</a>` : ''}${it[1] ? `<span class="sub">${it[1]}</span>` : ''}</span></label></li>`).join(''),
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


  /* ---------- Cibo ---------- */
  const FOOD_ICON = { sweet: '🍯', eat: '🍽️' };
  let foodFilter = store.get('food-filter', 'all');
  function renderFood() {
    const visited = store.get('food-visited', {});
    $('#foodFilter').innerHTML = [['all', U.f_all], ['eat', U.f_eat], ['sweet', U.f_sweet]].map(([k, l]) => `<button class="chip mini" data-f="${k}" aria-selected="${foodFilter === k}"><b>${l}</b></button>`).join('');
    $$('#foodFilter .chip').forEach(b => b.addEventListener('click', () => { foodFilter = b.dataset.f; store.set('food-filter', foodFilter); renderFood(); }));
    $('#foodBody').innerHTML = G.food_places.map(grp => {
      const items = grp.items.filter(it => foodFilter === 'all' || it.cat === foodFilter);
      if (!items.length) return '';
      return `<div class="fgrp"><h3>${grp.area}</h3>${items.map(it => { const id = it.name + '|' + it.city; return `
        <div class="fp${visited[id] ? ' done' : ''}">
          <div class="ic ${it.cat}">${FOOD_ICON[it.cat]}</div>
          <div class="t"><div class="n">${it.name}<small>${it.city}</small><span class="pr">${it.price}</span></div><div class="w">${it.what}</div>
            <div class="b"><a class="btn fill sm" target="_blank" rel="noopener" href="${gm(it.name + ' ' + it.city)}">Google Maps</a><a class="btn sm" target="_blank" rel="noopener" href="${anav(it.lat, it.lng, it.name)}">${U.apple}</a></div></div>
          <input type="checkbox" title="${U.f_visited}" data-fid="${esc(id)}" ${visited[id] ? 'checked' : ''}>
        </div>`; }).join('')}</div>`;
    }).join('');
    $$('#foodBody input').forEach(b => b.addEventListener('change', () => { const v = store.get('food-visited', {}); v[b.dataset.fid] = b.checked; store.set('food-visited', v); b.closest('.fp').classList.toggle('done', b.checked); }));
  }
  renderFood();
  $('#menuBody').innerHTML = G.menu.map(g => `<div class="mgrp"><h4>${g.group}</h4><div class="mgrid">${g.items.map(it => `<div class="mi"><div class="ph" data-wiki="${esc(it.wiki)}"><img alt="${esc(it.name)}" loading="lazy"><div class="cap"></div></div><div class="tx"><b>${it.name}</b><span>${it.desc}</span></div></div>`).join('')}</div></div>`).join('');
  fillPhotos($('#menuBody'));


  /* ---------- Essenziali ---------- */
  $('#fullRoute').href = G.trip.fullRouteUrl || gdir(G.days[0].origin, G.days[G.days.length - 1].dest);
  $$('[data-brand]').forEach(el => el.textContent = G.trip.short);
  document.title = G.trip.title;
  $('#essentials').innerHTML = G.essentials.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
  $('#alphabet').textContent = G.alphabet;
  $('#signs').innerHTML = `<div class="signs">${G.signs.map(([g, t, m]) => `<div><b>${g}</b><i>${t}</i> <span>${m}</span></div>`).join('')}</div>`;
  (function () {
    const F = store.get('fuel', {});
    const ids = ['fKm', 'fCons', 'fPrice'];
    ids.forEach(id => { if (F[id]) $('#' + id).value = F[id]; });
    const calc = () => { const km = +$('#fKm').value || 0, c = +$('#fCons').value || 0, p = +$('#fPrice').value || 0; $('#fRes').textContent = '€ ' + Math.round(km * c / 100 * p); };
    ids.forEach(id => $('#' + id).addEventListener('input', () => { F[id] = $('#' + id).value; store.set('fuel', F); calc(); }));
    calc();
  })();

  /* ---------- Note ---------- */
  (function () {
    const N = store.get('notes', {});
    $('#noteInfo').innerHTML = U.n_fields.map(([k, l]) => `<div><label for="nf-${k}">${l}</label><input id="nf-${k}" data-nk="${k}" value="${esc(N[k] || '')}" autocomplete="off"></div>`).join('');
    const days = [['general', U.n_general], ...G.days.map(d => [d.id, d.chip[0] + ' · ' + d.chip[1]])];
    $('#noteDays').innerHTML = days.map(([k, l]) => `<div class="nd"><label for="nd-${k}">${l}</label><textarea id="nd-${k}" data-nk="${k}">${esc(N[k] || '')}</textarea></div>`).join('');
    $$('[data-nk]').forEach(el => el.addEventListener('input', () => { N[el.dataset.nk] = el.value; store.set('notes', N); }));
    $('#copyNotes').addEventListener('click', async () => {
      const txt = [...U.n_fields.map(([k, l]) => N[k] ? `${l}: ${N[k]}` : ''), '', ...days.map(([k, l]) => N[k] ? `## ${l}\n${N[k]}` : '')].filter(Boolean).join('\n');
      try { await navigator.clipboard.writeText(txt); $('#copyMsg').textContent = U.n_copied; setTimeout(() => $('#copyMsg').textContent = '', 1500); } catch (e) { prompt('', txt); }
    });
  })();

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
  showDay(autoDay || store.get('day', G.trip.defaultDay || G.days[0].id), false);
  showView(t >= G.trip.start && t <= G.trip.end ? 'today' : store.get('view', 'today'));

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').then(r => r.update()).catch(() => {}));
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (!reloaded) { reloaded = true; location.reload(); } });
  }
})();
