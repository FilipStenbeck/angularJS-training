'use strict';

angular.module('routingApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     
    $scope.options = [ 'Red', 'Blue' ];
    $scope.changeColor = function() {
        if ($scope.color === 'Red') {
        	 $location.url('/red');
        } else if ($scope.color === 'Blue'){
        	$location.url('/blue');
        }
    };
  });
