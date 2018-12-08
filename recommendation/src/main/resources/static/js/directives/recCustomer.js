'use strict';

recommendationApp.directive('recCustomer', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/recCustomer.html',
    scope: {},
    controller: function RecCustomerController($scope, customer) {
      $scope.customer = customer;
    }
  };
});
