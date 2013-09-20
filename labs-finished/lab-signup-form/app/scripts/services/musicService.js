angular.module('formLab').service('musicService', function musicService($http) {
    var version = '1.0';
      
      return {
        getVersion : function () {
            return version;
        },
        getTopArtist : function (callback) {
            
            $http({method: 'GET', url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=cb54c2f3a327d9bd9a1ab3f6bd3d30e5&format=json'}).
              success(function(data, status, headers, config) {
                callback(data.artists.artist);  
              }).
              error(function(data, status, headers, config) {
                console.log(status);
              });
            }
        }
  });
