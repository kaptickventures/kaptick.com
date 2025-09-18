const CACHE_NAME = 'kaptick-media-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icons/pwa-192x192.png',
  '/icons/pwa-512x512.png',
  '/icons/pwa-512x512-maskable.png',
  '/lovable-uploads/c1103db7-0674-4ea8-baef-90db149e421e.png',
  '/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png',
  '/lovable-uploads/a2c0bb3a-a47b-40bf-ba26-d79f2f9e741b.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache.map(url => new Request(url, {cache: 'reload'})));
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => {
          // Return offline fallback if needed
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        });
      })
      .catch((error) => {
        console.log('Fetch failed:', error);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
