app.controller("DashboardController", function($scope, $cookies, $location, CorrelationService) {

  const cookie = $cookies.getObject('loggedIn')
  $scope.firstName = cookie.firstName

  CorrelationService.moods.get({id: cookie.id}, function (moods) {
    $scope.moods = moods
  })

})
