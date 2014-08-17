'use strict';

var movieService = angular.module('movieService', ['ngResource']);

movieService.factory('Movie', function ipFactory($resource){
  
  var rsc = $resource('/json/movies/:id.json' , { } , {
    get   : { method : 'get' , isArray : true},
    read  : { method : 'get' }
  });

  return rsc;
});