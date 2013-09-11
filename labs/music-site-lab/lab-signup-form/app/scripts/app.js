'use strict';

angular.module('formLab', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/awesome', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    .when('/', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
