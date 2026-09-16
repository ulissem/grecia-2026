const VERSION = 'grecia-2026-v12';
const CORE = ['./','./index.html','./style.css','./app.js','./data.js','./data-en.js','./manifest.json','./icon-192.png','./icon-512.png','./icon-180.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css','https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE).catch(()=>{})).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== VERSION).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  const live = u.hostname.includes('open-meteo.com') || u.hostname.includes('wikipedia.org') || u.hostname.includes('project-osrm.org');
  if (live) { e.respondWith(fetch(e.request).then(r => { caches.open(VERSION).then(c => c.put(e.request, r.clone())); return r; }).catch(() => caches.match(e.request))); return; }
  if (u.origin === location.origin) {
    // File dell'app: rete prima (aggiornamenti subito visibili), cache se offline
    e.respondWith(fetch(e.request).then(r => { caches.open(VERSION).then(cc => cc.put(e.request, r.clone())); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true })));
    return;
  }
  e.respondWith(caches.match(e.request).then(c => c || fetch(e.request).then(r => { if (r.ok || r.type === 'opaque') caches.open(VERSION).then(cc => cc.put(e.request, r.clone())); return r; }).catch(() => c)));
});
