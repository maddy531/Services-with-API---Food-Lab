var app = angular.module('serviceModule');

app.controller('apiCtrl', function($scope, apiService) {
  apiService.then(function(response){
    $scope.lyrics = response.data;
  });

});
