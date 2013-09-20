'use strict';

describe('Directive: colorChooser', function () {

  // load the directive's module
  beforeEach(module('routingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<color-chooser></color-chooser>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the colorChooser directive');
  }));
});
