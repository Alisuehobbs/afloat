app.service("UserService", function($resource) {
    return {
      signup: $resource('signup/:id', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: true
        }
      })
  }
})
