'use strict';

recommendationApp.controller('MenuController',
    function MenuController($scope, $routeParams, Restaurant, cart) {

//    var sJson = "{xxxxxx }";
//    var myRes = JSON.parse(sJson);
//    $scope.restaurant = myRes;

  $scope.restaurant = Restaurant.get({id: $routeParams.restaurantId});
  $scope.cart = cart;

});
