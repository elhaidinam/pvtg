// Simple service worker to satisfy PWA criteria
const CACHE_NAME = 'pv-en-poche-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/cnpvtg.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
