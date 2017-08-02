// Add module and controller here.
var app = angular.module('myMod');

app.controller('inputCtrl', function($scope, loginService, $location) {

  console.log('input controller');

  $scope.checkLogin = function(userInfo) {
    loginService.checkLogin(userInfo);
    $location.path('/profile');
  };

})
