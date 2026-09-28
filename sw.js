var C="hisab-v4",F=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./icon-180.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F);}));self.skipWaiting();});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim());});
self.addEventListener("fetch",function(e){e.respondWith(fetch(e.request).then(function(r){var k=r.clone();caches.open(C).then(function(c){c.put(e.request,k);});return r;}).catch(function(){return caches.match(e.request);}));});
