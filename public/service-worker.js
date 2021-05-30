const ServiceWorkerGlobalScope = this;
const cacheNameBasis = 'pwa-client-cache';
const version = '2020.07.28';
const cacheName = `${cacheNameBasis}-v${version}`;
const urlsToCache = [
    './logo.png',
    './index.html',
    './manifest.json'
];

ServiceWorkerGlobalScope.addEventListener('install', (event) => {
    console.log('SW - install');
    event.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => cache.addAll(urlsToCache))
            .then(() => ServiceWorkerGlobalScope.skipWaiting())
            .catch((err) => console.log(err))
    );
});

ServiceWorkerGlobalScope.addEventListener('activate', (event) => {
    console.log('SW - activate');
    event.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key.startsWith(cacheNameBasis) && key !== cacheName) {
                        return caches.delete(key);
                    }
                }));
            })
            .then(() => ServiceWorkerGlobalScope.clients.claim())
            .catch((err) => console.log(err))
    );
});

ServiceWorkerGlobalScope.addEventListener('fetch', (event) => {
    console.log('SW- fetch');
    event.respondWith(
        caches
            .open(cacheName)
            .then((cache) => cache.match(event.request, { ignoreSearch : true, }))
            .then((response) => response || fetch(event.request))
            .catch((err) => console.log(err))
    );
});