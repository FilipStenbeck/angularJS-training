'use strict';

//TODO Use $location.url()to route to the correct color based on what is chosen in the select when the button is pressed

//TIP Look both here and in this directives template for implementation details 

angular.module('routingApp')
  .directive('colorChooser', function ($location) {
    var colors =  [ 'Red', 'Blue' ];
    return {
     templateUrl: 'views/colorChooserTemplate.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          scope.options = colors
          
          scope.changeColor = function() {
            //TIP this seems to be some kind of event handler...
          };
      }
    };
  });
