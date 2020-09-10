const CACHE_NAME = 'test0.3';
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
  // CODELAB: Precache static resources here.
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
  // CODELAB: Remove previous cached data from disk.
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

  evt.respondWith(
    caches.match(evt.request).then( response => {
      return response || fetch(evt.request);
    })
  );
});




