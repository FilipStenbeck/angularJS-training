var app = angular.module("Hello", []);

app.directive("helloDirective", function () {
    return {
        restrict: "E",
        link: function postLink(scope, element, attributes) {
            var big;
         
            if (attributes.format === 'big') {
                big = document.createElement("h1");
                big.textContent =  attributes.messsage;
                element[0].appendChild(big);
            } else {
                element[0].textContent =  attributes.messsage;
            }
			
			 element[0].onclick = function (event) {
                 if (attributes.format === 'big') {
                    big.textContent = 'I was clicked'
                 } else {
                      element[0].textContent = 'I was also clicked'
                 }
            }
        }
    };
});
