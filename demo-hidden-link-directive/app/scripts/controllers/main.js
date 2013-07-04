angular.module('formLab').controller('MainCtrl', function ($scope) {
    
	 //Setup the url
    $scope.text = 'Back to registration!';
    $scope.href = '#/';

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

     //Register event handler
    $scope.showBackLink = function() {
    	$('a').trigger('showLink'); 
    }
});
