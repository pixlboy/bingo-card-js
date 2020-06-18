const staticCacheName = `site-static-${new Date().getTime()}`;   //static cache name
const assets = [
    '/images/favicon.png',
    '/styles/style.css',
    '/scripts/app.js',
    '/scripts/register-sw.js',
    '/index.html',
]; 

// install event - will occur only once unless the file contents do not change
self.addEventListener('install', evt => {
    console.log('service worker installed');
    // Accessing cache is async task, 
    // so need to use waitUntil method here 
    // to make sure everything gets cached before sw stops 
    evt.waitUntil(
        // caches.open method returns a promise 
        caches.open(staticCacheName).then((cache) => {
            console.log('Caching static assets');
            //add all assets at once
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
    // Remove the caches not in use (will not remove dynamic cache)
    evt.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            );
        })
    )
});

self.addEventListener('beforeinstallprompt', function(event) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
  });