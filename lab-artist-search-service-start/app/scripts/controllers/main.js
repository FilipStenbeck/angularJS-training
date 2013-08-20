angular.module('formLab').controller('MainCtrl', function ($scope, musicService) {
    
    musicService.getArtists(function(data) {
      $scope.artists = data;  
    });
        
});



//Fallback if no network in lab
//$http({method: 'GET', url: 'artist.json'}).
