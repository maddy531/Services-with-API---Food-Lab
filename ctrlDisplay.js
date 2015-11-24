var app = angular.module('serviceModule');

app.controller('ctrlDisplay', function($scope, service) {
  var nameAndFood = service.get()
  $scope.name =  nameAndFood.name;
  $scope.food = nameAndFood.dish;

});
