var app = angular.module('serviceModule');

app.controller('ctrlInput', function($scope, service) {
  $scope.store = function (name,dish){
    console.log(name,dish)
    service.save(name,dish)
  };

});
