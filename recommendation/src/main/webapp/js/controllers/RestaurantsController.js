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

                // configChar();
                filterAndSortRestaurants();  // Populate the $scope.restaurants, which stores the restaurants to be shown on page, could be filtered later when user selects the category
            },
            function error (response ){
                console.log('Error getting recommendation by user!');
            });
     };

  $scope.getRecByUser( customer.name);

  $scope.$watch('filter', filterAndSortRestaurants, true);

  var charts = [];
  $scope.bindCanvas = function(theRestaurant, i) {

      sortRestaurant();
      var restaurant = $scope.restaurants[i];
      var ctx = document.getElementById("barChart_"+i);
      var myChart =new Chart(ctx,{
          type: 'bar',
          data: {
              labels: [restaurant.feature1, restaurant.feature2, restaurant.feature3, restaurant.feature4],
              datasets: [{
                  label: "Score",
                  backgroundColor: ["red", "green","blue","violet","yellow"],
                  data: [restaurant.score1,restaurant.score2,restaurant.score3,restaurant.score4]
              }]
          },
          options: {
              scales: {
                  xAxes: [{
                      barPercentage: 0.5

                  }],
                  yAxes: [ {
                      display: true,
                      ticks: {
                          suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                          // OR //
                          beginAtZero: true   // minimum value will be 0.
                      }
                  }]
              }
          }
      });
      charts.push(myChart);
  }

  function buildChartDom() {


      charts.forEach( function (theChart) { theChart.destroy() })
      angular.element(".chart-container").empty();


      var containers = document.querySelectorAll(".chart-container");
      for (var i=0; i< $scope.restaurants.length; i++) {
          var restaurant = $scope.restaurants[i];
          var canvas = angular.element('<canvas id="barChart_' + i + '" width="100" height="100"></canvas>');

          angular.element(containers[i]).append(canvas);
      }
  }

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

      if (filter.stars && filter.stars !== item.stars) {
        return;
      }

      if (filter.categories.length && filter.categories.indexOf(item.categories) === -1) {
        return;
      }

      var features = [{feature: item.feature1, score: item.score1}, {feature: item.feature2, score: item.score2},
      {feature: item.feature3, score: item.score3}, {feature: item.feature4, score: item.score4}];

      item.features = features;
      $scope.restaurants.push(item);

    });

    sortRestaurant();

  };

  function sortRestaurant() {
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
  }


  $scope.sortBy = function(key) {
    if (filter.sortBy === key) {
      filter.sortAsc = !filter.sortAsc;
    } else {
      filter.sortBy = key;
      filter.sortAsc = true;
    }
      buildChartDom();
  };


  $scope.sortIconFor = function(key) {
    if (filter.sortBy !== key) {
      return '';
    }

    return filter.sortAsc ? '\u25B2' : '\u25BC';
  };


  $scope.CUISINE_OPTIONS = {
    'American': 'American',
    Mexican: 'Mexican',
    Italian: 'Italian',
    Japanese: 'Japanese',
    Chinese: 'Chinese',
    'Asian Fusion': 'Asian Fusion',
    Thai: 'Thai',
    Mediterranean: 'Mediterranean',
    Vietnamese: 'Vietnamese',
    Greek: 'Greek',
    Indian: 'Indian',
    Korean: 'Korean',
    French: 'French',
    Hawaiian: 'Hawaiian',
    Others: 'Others'
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




