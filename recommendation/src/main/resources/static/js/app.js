'use strict';

var recommendationApp = angular.module('recommendationApp', ['ngResource']);

recommendationApp.config(function($routeProvider) {

  $routeProvider.
      when('/', {
        controller: 'RestaurantsController',
        templateUrl: 'views/restaurants.html'
      }).
      when('/menu/:restaurantId', {
        controller: 'MenuController',
        templateUrl: 'views/menu.html'
      }).

//      when('/thank-you', {
//        controller: 'ThankYouController',
//        templateUrl: 'views/thank-you.html'
//      }).
      when('/customer', {
        controller: 'CustomerController',
        templateUrl: 'views/customer.html'
      });
});

