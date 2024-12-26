const CACHE_NAME = 'mi-cache-v1'; // Nombre del cache
const CACHE_ASSETS = [
  './',
  './index.html',
  './estilos.css', 
  './script.js', // 
  './img/QUINCHOICONO.png', 
  './img/QUINCHOICONO192.ico',
];


self.addEventListener('install', (event)=> {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Archivos cachéados durante la instalación');
      return cache.addAll(CACHE_ASSETS); // Agrega todos los archivos definidos
    })
  );
});


self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]; // Solo mantener el último cache

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Elimina los caches antiguos
          }
        })
      );
    })
  );
});

// Interceptar las solicitudes y servir desde el cache si es posible
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Si encontramos la respuesta en el cache, devuélvela
        return cachedResponse;
      }

      // Si no la encontramos en el cache, hacemos la solicitud de red
      return fetch(event.request).then((networkResponse) => {
        // Aquí puedes hacer algo con la respuesta de la red, si es necesario
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone()); // Cacheamos la respuesta para futuras solicitudes
          return networkResponse;
        });
      });
    })
  );
});
