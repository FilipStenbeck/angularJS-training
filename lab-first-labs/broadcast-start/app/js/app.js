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

//The sender controller which also must include recieverCtrl as child scope
app.controller("senderCtrl", function ($scope, $rootScope) {

    //Handle sendOne submit


    //Handle sendTwo submit
    
});
    

app.controller("recieverCtrl", function ($scope) {
    
    //The Reciever Model
    $scope.reciever = {
        message : '',
        total : 0,
        shaker : 'off'
    };

    //Handle events here
    
});

