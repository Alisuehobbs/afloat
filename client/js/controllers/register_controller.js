app.controller("RegisterController", function($scope, $cookies, $location, UserService) {

    $scope.submitSignUp = function(newUser) {
        UserService.signup.save(newUser, function(userData) {
          const user = userData[0]
          if (!user.length) {
            $cookies.putObject('loggedIn', user)
            $scope.newUser = {}
            $scope.signUp.$setPristine()
            $location.url(`/dashboard/${user.id}`)
          } else {
            $scope.error = user
          }
        })
    }

    $scope.submitLogIn = function (returningUser) {
        UserService.login.save(returningUser, function (user) {
          if(!user.message){
            $cookies.putObject('loggedIn', user)
            $scope.newUser = {}
            $scope.logIn.$setPristine()
            $location.url(`/dashboard/${user.id}`)
          } else {
            $scope.error = user.message
          }
        })
    }

})
