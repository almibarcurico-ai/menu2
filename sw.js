const CACHE_NAME = 'almibar-v1.0';
const urlsToCache = [
  '/menu2/',
  '/menu2/index.html',
  '/menu2/menu-cocina.html',
  '/menu2/menu-barra.html',
  '/menu2/club-amigos.html',
  '/menu2/reservas.html',
  '/menu2/resenas.html',
  '/menu2/ver-resenas.html',
  '/menu2/carrito.html',
  '/menu2/icons/icon-192.png',
  '/menu2/icons/icon-512.png',
  '/menu2/icons/apple-touch-icon.png',
  '/menu2/manifest.json'
];

// Install Service Worker
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Service Worker
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Strategy: Network First, falling back to Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response
        const responseClone = response.clone();
        
        // Cache the fetched response
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // If not in cache and network failed, show offline page
            if (event.request.mode === 'navigate') {
              return caches.match('/menu2/index.html');
            }
          });
      })
  );
});

// Background Sync (for sending orders when back online)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-orders') {
    console.log('[Service Worker] Syncing orders...');
    event.waitUntil(syncOrders());
  }
});

async function syncOrders() {
  // This would sync any pending orders when connection is restored
  console.log('[Service Worker] Orders synced');
}

// Push Notifications (for promotions, new menu items, etc.)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nueva promoción en Almíbar!',
    icon: '/menu2/icons/icon-192.png',
    badge: '/menu2/icons/icon-192.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver Menú',
        icon: '/menu2/icons/icon-192.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/menu2/icons/icon-192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Almíbar Bar & Restaurant', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/menu2/')
    );
  }
});
