//static cache name
const cacheName = `site-cache1`;

// activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
    // Remove the caches not in use (will not remove dynamic cache)
    evt.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys
                .filter(key => key !== cacheName)
                .map(key => caches.delete(key))
            );
        })
    )
});


// fetch event - occurs for every request made to server (html, css ajax, js, doc, fonts etc)
self.addEventListener('fetch', evt => {
        // intercept all requests 
        // return object(s) if found in cache (static or dynamic)
        // if not found, forward the request to server
        evt.respondWith(
            caches.match(evt.request).then((cacheRes) => {
                // if asset is found in cache, return
                // if asset is not found in cache, forward the request to server
                // cache the returned asset in dynamic cache
                return cacheRes || fetch(evt.request).then(fetchRes => {
                    return caches.open(cacheName).then(cache => {
                        // cache.put updates an entry if not existing
                        cache.put(evt.request.url, fetchRes.clone());
                        return fetchRes;
                    })
                });
            }).catch(() => {
                // in case user is offline and makes a request 
                // for a resource that is not in cache
                // serve them the fallback page (graceful degradation)
                if(evt.request.url.indexOf('.html') > -1){
                    return caches.match('/src/index.html');
                }
            })
        );
});