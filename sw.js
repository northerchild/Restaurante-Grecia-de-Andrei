const CACHE_NAME = "Grecia-v3"
const cache_urls = ["/offline/view.html","/offline/style.css","/assets/imgs/map.jpg"]

self.addEventListener("install",function(e){
	console.log("SW instalado")

	caches.open(CACHE_NAME).then(function(cache){
		console.log("Cache Open")
		return cache.addAll(cache_urls)
	})
})

self.addEventListener("activate", function(e){
	e.waitUntil(
			caches.key().then(function(cache_names){
				return Promise.all(
					cache_names.map(function(cache_names){
						if (CACHE_NAME !== cache_names) {
							return cache.delete(cache_names)//Esta promesa devuelve el cache
						}
					})
					)
			})
		)
})

self.addEventListener("fetch",function(e){
	e.respondWith(
		caches.match(e.request).then(function(response){
			if (response) {
				console.log("Te estoy ahorrando una peticion :v")
				return response;
			}
				return fetch(e.request)
		}).catch(function(err){
			if (e.request.mode == "navigate") 
			{
				return caches.match("/offline/view.html")
			}
		})
		)
})