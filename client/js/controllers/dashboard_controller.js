app.controller("DashboardController", function($scope, $cookies, $location, UserService) {

  const cookie = $cookies.getObject('loggedIn')
  $scope.firstName = cookie.firstName

})
