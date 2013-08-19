angular.module('formLab').controller('SignupCtrl', function ($scope) {
    
    //Declare a function for handling registration
    var handleUserRegistration = function () {
        
        $scope.music = ['Pop','Rock','Jazz'];
        //Show confirmation
        $scope.showMessage = true;
        $scope.disabled = true;
        
        console.log($scope.user.name);
        console.log($scope.user.gender);
        console.log($scope.user.music);
        console.log($scope.user.subscribe);
    };
    
    //Initialize the Model
    $scope.user = {};
    $scope.user.subscribe = true;
    $scope.user.music = ["Rock"];
    
    $scope.disabled = false;
   
    //Register Events    
    $scope.formSubmited = function () {
        handleUserRegistration();
    };
    
});
