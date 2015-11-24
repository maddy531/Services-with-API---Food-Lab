var app = angular.module('serviceModule');

app.factory('apiService', function($http){

  return $http({   //it's returning the function call $http
    method: 'GET',
    url: 'https://twlaas.herokuapp.com/'
  });

});
