angular.module('formLab').controller('SignupCtrl', function ($scope) {

    //Initialize the Model
    $scope.user = {
        subscribe : true
    };
    
    $scope.register=  function() {
        console.dir($scope.user);
        $scope.user.registred = true;
    }

});
