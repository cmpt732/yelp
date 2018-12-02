'use strict';

recommendationApp.controller('CustomerController',
    function CustomerController($scope, customer, $location) {

  $scope.customerName = customer.name;
//  $scope.customerAddress = customer.address;


//  $scope.findRestaurants = function(customerName, customerAddress) {
  $scope.findRestaurants = function(customerName) {
    customer.name = customerName;
//    customer.address = customerAddress;

    $location.url('/');
  };
});
