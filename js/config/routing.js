// Add module here.
var app = angular.module('myMod');

// Routing goes here.
app.config(function($routeProvider) {

  $routeProvider
    .when('/login', {
      controller: 'inputCtrl',
      templateUrl: 'partials/login.html',
    })

    .when('/profile', {
      controller: 'outputCtrl',
      templateUrl: 'partials/profile.html',
    })

    .otherwise( {redirectTo: '/login'});
});
