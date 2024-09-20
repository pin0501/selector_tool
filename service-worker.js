self.addEventListener('install', function(event) {
    console.log('Service Worker 安裝完成');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            return response || fetch(event.request);
        })
    );
});
