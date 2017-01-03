var app = angular.module("afloat", ['ngAnimate', 'ngRoute', 'ngResource', 'ngCookies', 'zingchart-angularjs'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/landing.html',
            controller: 'RegisterController'
        })
        .when('/signup', {
            templateUrl: '../views/signup.html',
            controller: 'RegisterController'
        })
        .when('/login', {
            templateUrl: '../views/login.html',
            controller: 'RegisterController'
        })
        .when('/dashboard/:id', {
            templateUrl: '../views/dashboard.html',
            controller: 'DashboardController'
        })
})
