var app = angular.module("broadcast", []);

//Declare a eventhandler
app.handleMessage = function ($scope, msg) {
    $scope.reciever.total++;
    $scope.reciever.message = msg;
    if ($scope.reciever.shaker === 'animated tada') {
        $scope.reciever.shaker = 'animated shake';
    } else {
        $scope.reciever.shaker = 'animated tada';
    }
};

//The sender controller must contain the reciever in a child scope
app.controller("senderCtrl", function ($scope,$rootScope) {
   
   //Handle the submits by broadcasting events
    $scope.sendOne = function () {
       $rootScope.$broadcast('SEND_ONE');
    };

    $scope.sendTwo = function () {
        $rootScope.$broadcast('SEND_ONE');
    };
});
    

app.controller("recieverCtrl", function ($scope) {
    //The Reviever model handles states for number of clicks, last message and last animation
    $scope.reciever = {
        message : '',
        total : 0,
        shaker : 'off'
    };
    
    $scope.$on('SEND_ONE', function(event){
        app.handleMessage($scope,"Message recieved from one");
    });

    $scope.$on('SEND_TWO', function(event){
        app.handleMessage($scope,"Message recieved from Two");
    });
});

