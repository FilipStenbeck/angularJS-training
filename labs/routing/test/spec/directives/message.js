'use strict';

describe('Directive: message', function () {
  beforeEach(module('routingApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<message></message>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the message directive');
  }));
});
