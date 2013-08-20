function helloController($scope) {
  
    $scope.helloModel = {
        message : 'Hello World!!'
    }
    
    $scope.counter = 0;
    $scope.$watch("helloModel.message", function(newValue, oldValue) {
         $scope.counter++;  
    });
 
}
