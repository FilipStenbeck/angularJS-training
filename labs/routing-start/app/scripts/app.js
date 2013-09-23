'use strict';

//TODO make this app rout to blue and red views.


//TIP you need to find the anchors in the toolbar

//TIP all views use the same controller the MainCtrl


angular.module('routingApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
  });
