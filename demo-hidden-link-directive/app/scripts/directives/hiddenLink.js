'use strict';

angular.module('formLab').directive('hiddenLink', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	var a = $('<a>', 
      		{
      			class : "link",
      			style: "display:none",
		    	text: scope.text,
		    	href: scope.href,
		    	click: function (event) { 
		    		this.href = scope.href;
		    		return true;
		    	}
			});
      		a.appendTo($(element));
      		a.on('showLink', function () {
      			a.fadeIn('slow');
			});
      	}
    };
 });
