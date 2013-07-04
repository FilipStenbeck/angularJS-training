angular.module('formLab').controller('SignupCtrl', function ($scope) {
    
    //Setup the url
    $scope.text = 'Now click here to view some awesome stuff!!';
    $scope.href = '#/awesome';

    //Declare a function for handling registration
    var handleUserRegistration = function () {
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
         $('a').trigger('showLink'); 
        handleUserRegistration();
    };
    
});
