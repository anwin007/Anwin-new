var app = angular.module("personalWebsite", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/academic',{
        templateUrl:'views/academic.html'
    })
    .when('/personal',{
        templateUrl:'views/personal.html'
    })
    .otherwise({
        redirectTo:'/academic'
    })
})