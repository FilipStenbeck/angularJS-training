var app = angular.module("broadcast", []);

//Declare a event handler
app.handleMessage = function ($scope, msg) {
    $scope.reciever.total++;
    $scope.reciever.message = msg;
    if ($scope.reciever.shaker === 'animated tada') {
        $scope.reciever.shaker = 'animated shake';
    } else {
        $scope.reciever.shaker = 'animated tada';
    }
};


//
//TIP use $scope.$broadcast and $scope.$on
//

app.controller("senderCtrl", function ($scope) {
    
  //TODO Make two functions to handle both button clicks each button should sent a specifik event
    
});
    

app.controller("recieverCtrl", function ($scope) {     
    //The Reciever Model
    $scope.reciever = {
        message : '',
        total : 0,
        shaker : 'off'
    };

    //TODO listen for the messages and use the handleMessage function to handle messages
    
});

