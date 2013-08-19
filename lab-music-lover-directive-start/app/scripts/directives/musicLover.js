angular.module('formLab').directive('musicLover', function () {
        
    return {
      template: '<select multiple ng-model="user.music" type="text"  ng-disabled="disabled"></select>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          
        element.text("I will soon be  a modular music lover multi-select");
      }
    };
  });
