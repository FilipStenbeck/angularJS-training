var app = angular.module("Hello", []);

app.directive("helloDirective", function () {
    return {
        restrict: "E",
        link: function postLink(scope, element, attributes) {
            var message, big;
            message = document.createTextNode(attributes.messsage);
            if (attributes.format === 'big') {
                big = document.createElement("h1");
                big.appendChild(message);
                element[0].appendChild(big);
            } else {
                element[0].appendChild(message);
            }
        }
    };
});
