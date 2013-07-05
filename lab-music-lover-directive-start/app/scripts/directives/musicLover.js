angular.module('formLab').directive('musicLover', function () {
        
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text("I will soon be  a modular music lover multi-select");
      }
    };
  });
