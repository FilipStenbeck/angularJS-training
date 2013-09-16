angular.module('formLab').controller('MainCtrl', function ($scope, musicService) {
    
    musicService.getTopArtist(function(data) {
        $scope.artists = data;   
    });
   
});
