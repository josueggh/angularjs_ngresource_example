'use strict';

var app = angular.module(
  'app',
  [
    'ngRoute',
    'movieService'
  ]
);

app.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]
 );

app.config(['$routeProvider',
  
  function($routeProvider){
    
    $routeProvider.when('/main',
      {
        templateUrl : './partials/main.html',
        controller  : 'mainCtrl',
      }
    );

    $routeProvider.otherwise(
      {
        redirectTo : '/main'
      }
    );
  }

]);