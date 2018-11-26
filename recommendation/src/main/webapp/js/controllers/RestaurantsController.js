'use strict';

recommendationApp.controller('RestaurantsController',
    function RestaurantsController($scope, RecService, customer, $location, Restaurant) {

  if (!customer.address) {
    $location.url('/customer');
  }

  var filter = $scope.filter = {
    cuisine: [],
    price: null,
    rating: null
  };


  //var allRestaurants = Restaurant.query(filterAndSortRestaurants);

//  var recommendationRes = Restaurant.get({userId: customer.name});
//  var allRestaurants = recommendationRes._embedded.recommendations;


    $scope.getRecByUser = function ( userId ) {
          RecService.getRecByUser(userId)
            .then(function success(response){
                var allRec = response.data._embedded.recommendations;
                $scope.restaurants = allRec;

            },
            function error (response ){
                console.log('Error getting recommendation by user!');
            });
     };

  $scope.getRecByUser( customer.name)

  $scope.$watch('filter', filterAndSortRestaurants, true);

  function filterAndSortRestaurants() {
    $scope.restaurants = [];

    if ( !$scope.allRec ) {
        return;
    }

    // filter
    angular.forEach($scope.allRec, function(item, key) {
      if (filter.price && filter.price !== item.price) {
        return;
      }

      if (filter.rating && filter.rating !== item.rating) {
        return;
      }

      if (filter.cuisine.length && filter.cuisine.indexOf(item.cuisine) === -1) {
        return;
      }

      $scope.restaurants.push(item);
    });


    // sort
    $scope.restaurants.sort(function(a, b) {
      if (a[filter.sortBy] > b[filter.sortBy]) {
        return filter.sortAsc ? 1 : -1;
      }

      if (a[filter.sortBy] < b[filter.sortBy]) {
        return filter.sortAsc ? -1 : 1;
      }

      return 0;
    });
  };


  $scope.sortBy = function(key) {
    if (filter.sortBy === key) {
      filter.sortAsc = !filter.sortAsc;
    } else {
      filter.sortBy = key;
      filter.sortAsc = true;
    }
  };


  $scope.sortIconFor = function(key) {
    if (filter.sortBy !== key) {
      return '';
    }

    return filter.sortAsc ? '\u25B2' : '\u25BC';
  };


  $scope.CUISINE_OPTIONS = {
    african: 'African',
    american: 'American',
    barbecue: 'Barbecue',
    cafe: 'Cafe',
    chinese: 'Chinese',
    'czech/slovak': 'Czech / Slovak',
    german: 'German',
    indian: 'Indian',
    japanese: 'Japanese',
    mexican: 'Mexican',
    pizza: 'Pizza',
    thai: 'Thai',
    vegetarian: 'Vegetarian'
  };



});

recommendationApp.service('RecService',['$http', function ($http) {



    this.getRecByUser = function getRecByUser(userId){
        return $http({
          method: 'GET',
          url: 'recommendations/search/byUserId?userId=' + userId
        });
    }

}]);




