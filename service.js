var app = angular.module('serviceModule');

app.factory('service', function(){
  var storedName = 'Name';
  var storedDish = "Dish";


  return {
    save: function(name,dish){ //this is an object - key value pair
      storedName = name;
      storedDish = dish;
    },
      get: function(){
        return {
                name:storedName,
                dish:storedDish
              };
          }
    };
});
