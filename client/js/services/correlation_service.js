app.factory("CorrelationService", function($http) {
  let service = {}

  service.getMoods = function(id) {
    return $http.get(`/moods/${id}`)
  }

  return service
})
