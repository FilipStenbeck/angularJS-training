'use strict';

angular.module('routingApp')
  .directive('message', function () {
    return {
      templateUrl: 'views/messageTemplate.html',
      restrict: 'E'
    };
  });
