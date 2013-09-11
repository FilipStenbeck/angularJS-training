var app = angular.module("FirstDirective", []);


app.controller("mainCtrl", function ($scope) {
    $scope.items = [];
    
    $scope.add = function() {
        var obj = {
            id : $scope.items.length,
            name : $scope.item,
            time : new Date()
        };
        $scope.items.push(obj);
        $scope.item = '';
    };
    
    $scope.clear = function() {
        $scope.items = [];
    };   
});

app.directive('itemList', function () {
    return {
        restrict: 'E',
         templateUrl: 'item-list-template.html',
          link: function postLink(scope, element, attrs) {
            element[0].appendChild(document.createElement("span")).textContent = attrs.tablefooter;
          }
    }
});




