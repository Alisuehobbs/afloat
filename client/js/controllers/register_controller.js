app.controller("RegisterController", function($scope, $cookies, $location, UserService) {

    $scope.submitSignUp = function(newUser) {
        UserService.signup.save(newUser, function(user) {
            $cookies.putObject('loggedIn', user[0])
            $scope.newUser = {}
            $scope.signUp.$setPristine()
            $location.url('#/dashboard')
        })
    }

})
