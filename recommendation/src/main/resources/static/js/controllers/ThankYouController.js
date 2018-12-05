'use strict';

recommendationApp.controller('ThankYouController', function ThankYouController($scope, $routeParams) {
  $scope.orderId = $routeParams.orderId;
});
