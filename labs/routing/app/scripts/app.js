'use strict';

angular.module('routingApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/red', {
        templateUrl: 'views/red.html',
        controller: 'MainCtrl'
      })
       .when('/blue', {
        templateUrl: 'views/blue.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
