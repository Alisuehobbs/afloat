var app = angular.module("afloat", ['ngAnimate', 'ngRoute', 'ngResource', 'ngCookies'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/landing.html',
            controller: 'LandingController'
        })
        .when('/register', {
            templateUrl: '../views/register.html',
            controller: 'RegisterController'
        })
        .when('/dashboard', {
            templateUrl: '../views/dashboard.html',
            controller: 'DashboardController'
        })
})
