'use strict';

recommendationApp.controller('MenuController',
    function MenuController($scope, $routeParams, Restaurant, cart) {


  $scope.restaurant = Restaurant.get({id: $routeParams.restaurantId});


});
