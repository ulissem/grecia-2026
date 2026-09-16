const VERSION = 'grecia-2026-v1';
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  // Dati live (meteo, Wikipedia): rete prima, cache come riserva
  if (url.hostname.includes('open-meteo.com') || url.hostname.includes('wikipedia.org')) {
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request)));
    return;
  }
  // Pagina e risorse proprie: cache subito, aggiorna in background
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(cached => {
      const net = fetch(e.request).then(r => { caches.open(VERSION).then(c => c.put(e.request, r.clone())); return r; }).catch(() => cached);
      return cached || net;
    }));
    return;
  }
  // Font, immagini esterne: cache prima
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(r => {
    if (r.ok) caches.open(VERSION).then(c => c.put(e.request, r.clone()));
    return r;
  }).catch(() => cached)));
});
