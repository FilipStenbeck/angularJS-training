//The 'app' module uses the Mediator module 
var app = angular.module("mediatorDemo", ['mediator']);

app.controller("senderOneCtrl", function ($scope, mediator) {
    //Install Mediator to local scope
    mediator.installTo($scope);
    
    //Handle button click
    $scope.send = function () {
        $scope.publish("oneSending");
    };
});

app.controller("senderTwoCtrl", function ($scope, mediator) {
    //Install Mediator to local scope
    mediator.installTo($scope);
    
    //Handle button click
    $scope.send = function () {
        $scope.publish("twoSending");
    };
});

app.controller("recieverCtrl", function ($scope, mediator) {
    //Install Mediator to local scope
    mediator.installTo($scope);
    
    //Create Reciever Model
    $scope.reciever = {
        message : '',
        total : 0,
        shaker : 'off'
    };
    
    //Declare events handler
    var handleMessage = function (msg) {
        $scope.reciever.total++;
        $scope.reciever.message = msg;
        if ($scope.reciever.shaker === 'animated tada') {
            $scope.reciever.shaker = 'animated shake';
        } else {
            $scope.reciever.shaker = 'animated tada';
        }
    };
    
    //Subscribe to Events
    $scope.subscribe("oneSending",  function () {
        handleMessage('Recieved message from sender One');
    });
    $scope.subscribe("twoSending", function () {
        handleMessage('Recieved message from sender Two');
    });
});

