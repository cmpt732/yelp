'use strict';

recommendationApp.factory('Restaurant', function($resource) {


//  return $resource('/data/restaurants.json');

//  return $resource('/api/restaurant/:id', {id: '@id'});

//  http://localhost:8080/recommendations/search/byUserId?userId=Ha3iJu77CxlrFm-vQRs_8g
   return $resource('/recommendations/search/byUserId');

});
