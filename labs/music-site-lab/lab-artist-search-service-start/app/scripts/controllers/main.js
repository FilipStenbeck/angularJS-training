angular.module('formLab').controller('MainCtrl', function ($scope, $http) {
    
    
    //TODO Move this code to the 'musicService' Service
    $http({method: 'GET', url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=cb54c2f3a327d9bd9a1ab3f6bd3d30e5&format=json'}).
      success(function(data, status, headers, config) {
          $scope.artists = data.artists.artist;  
      }).
      error(function(data, status, headers, config) {
       
      });
});
