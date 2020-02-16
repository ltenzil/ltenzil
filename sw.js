self.addEventListener('fetch', function(event) {
  if (navigator.onLine == true){
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          return response;
        })
    )  
  }
});