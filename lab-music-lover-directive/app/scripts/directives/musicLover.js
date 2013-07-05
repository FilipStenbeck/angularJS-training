'use strict';

angular.module('formLab').directive('musicLover', function () {
    
    var music = ['Pop', 'Rock', 'Heavy Metal', 'Techno', 'Classical', 'Jazz'];
    
    return {
      template: '<select multiple ng-model="user.music" type="text"  ng-disabled="disabled"></select>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var select = $(element).children();    
          _.each(music, function(item) {
             select.append($("<option/>", {
                text: item
            }));
        });
      }
    };
  });
