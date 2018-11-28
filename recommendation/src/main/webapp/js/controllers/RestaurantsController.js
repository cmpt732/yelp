'use strict';

recommendationApp.controller('RestaurantsController',
    function RestaurantsController($scope, RecService, customer, $location, Restaurant) {

  if (!customer.name) {
    $location.url('/customer');
  }

  var filter = $scope.filter = {
    categories: [],
    price: null,
    stars: null
  };


  //var allRestaurants = Restaurant.query(filterAndSortRestaurants);



    $scope.getRecByUser = function ( userId ) {
          RecService.getRecByUser(userId)
            .then(function success(response){
                var allRec = response.data._embedded.recommendations;
                $scope.allRec = allRec;   // $scope.allRec stores all restaurants recommendations for the input user
                // $scope.restaurants = allRec;

                configChar();
                filterAndSortRestaurants();  // Populate the $scope.restaurants, which stores the restaurants to be shown on page, could be filtered later when user selects the category
            },
            function error (response ){
                console.log('Error getting recommendation by user!');
            });
     };

  $scope.getRecByUser( customer.name);

  $scope.$watch('filter', filterAndSortRestaurants, true);


  function configChar() {

      $scope.width = 200;
      $scope.height = 100;
      $scope.yAxis = 'Score';
      $scope.xAxis = 'Features';
      $scope.max = 5;

  }

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

      if (filter.stars && filter.stars !== item.stars) {
        return;
      }

      if (filter.categories.length && filter.categories.indexOf(item.categories) === -1) {
        return;
      }

      var features = [{feature: item.feature1, score: item.score1}, {feature: item.feature2, score: item.score2},
      {feature: item.feature3, score: item.score3}, {feature: item.feature4, score: item.score4}, {feature: item.feature5, score: item.score5}];

      item.features = features;
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




