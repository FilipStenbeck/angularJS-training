angular.module('formLab').controller('MainCtrl', function ($scope) {
    
	 //Setup the url for the hidden-link tag
    $scope.text = 'Back to registration!';
    $scope.href = '#/';

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

     //Register event handler
    $scope.handleHiddenLinks = function(show) {
        if (show) {
            $('a').trigger('showLink'); 
        } else {
            $('a').trigger('hideLink'); 
        }
    }
});
