app.service("CorrelationService", function($resource) {
    return {
      moods: $resource('moods/:id', {id: '@id'}, {
        'get':  {
          method:'GET',
          isArray: true
        }
      })
  }
})
