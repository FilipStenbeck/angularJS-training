'use strict';


angular.module('routingApp')
  .directive('colorChooser', function ($location) {
    var colors =  [ 'Red', 'Blue' ];
    return {
     templateUrl: 'views/colorChooserTemplate.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          scope.options = colors
          scope.changeColor = function() {
              if (scope.color === 'Red') {
                  $location.url('/red');
              } else if (scope.color === 'Blue') {
                  $location.url('/blue');
            }
          };
      }
    };
  });
