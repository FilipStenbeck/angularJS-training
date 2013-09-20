function helloController($scope) {
  
    $scope.helloModel = {
        message : 'Hello World!!'
    }
    $scope.state = "normal";
    $scope.counter = 0;
    $scope.$watch("helloModel.message", function(newValue, oldValue) {
        if ($scope.counter++ > 8) {
            $scope.state = "warning";  
        };
    });
 
}
