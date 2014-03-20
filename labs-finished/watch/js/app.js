function helloController($scope) {
  
    $scope.helloModel = {
        message : 'Hello World!!',
        state : 'normal',
        counter : 0
    };

    //$scope.state = "normal";
    //$scope.helloModel.counter = 0;
    
    $scope.$watch("helloModel.message", function(newValue, oldValue) {
        if ($scope.helloModel.counter++ > 8) {
            $scope.helloModel.state = "warning";  
        }
    });
 
}
