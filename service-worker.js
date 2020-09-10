const CACHE_NAME = 'shopping-list-v0.1';
const FILES_TO_CACHE = [
  './',
  './manifest.webmanifest',
  './favicon.d42470cd.ico',
  './shopping-list-128x128.53711125.png',
  './shopping-list-144x144.8c812167.png',
  './shopping-list-152x152.9ce296dc.png',
  './shopping-list-192x192.a8be18ee.png',
  './shopping-list-256x256.24932ea0.png',
  './shopping-list-512x512.29e19655.png',
  './src.fc45d0fd.css',
  './src.fc45d0fd.js'
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // Precache resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  // get from cache first. If doesn't exist then get from network
  evt.respondWith(
    caches.match(evt.request).then( response => {
      return response || fetch(evt.request);
    }, console.log).catch(console.log)
  );
});




