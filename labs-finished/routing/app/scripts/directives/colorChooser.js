'use strict';

angular.module('routingApp')
  .directive('colorChooser', function () {
    var colors =  [ 'Red', 'Blue' ];
    return {
     templateUrl: 'views/colorChooserTemplate.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.options = colors
      }
    };
  });
