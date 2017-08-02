// Add module and controller here.
var app = angular.module('myMod');

app.controller('outputCtrl', function($scope, loginService) {

  console.log('output controller');

  $scope.sendInfo = loginService.getProfile();
})
