var app = angular.module("Hello", []);

app.directive("helloDirective", function () {
    return {
        restrict: "E",
        // Use element[0] access the DOM-node and attributes to get custom element-properties
        link: function postLink(scope, element, attributes) {
            
            //large text,
            if (attributes.format === 'big') {
       
            //small text    
            } else {
                
            }
        }
    };
});
