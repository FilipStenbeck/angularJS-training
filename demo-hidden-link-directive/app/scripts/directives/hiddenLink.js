'use strict';

angular.module('formLab').directive('hiddenLink', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	 //Crteate a Anchor tag and append it to this element
          var a = $('<a>', 
      		{
      			class : "link",
      			style: "display:none",
		    	text: scope.text,
                title: scope.text,
		    	href: scope.href,
		    	click: function (event) { 
		    		this.href = scope.href;
		    		return true;
		    	}
			});
      		a.appendTo($(element));
          
          //register event handlers
      		a.on('showLink', function () {
      			a.fadeIn('slow');
			});
            a.on('hideLink', function () {
      			a.fadeOut('slow');
			});
      	}
    };
 });
