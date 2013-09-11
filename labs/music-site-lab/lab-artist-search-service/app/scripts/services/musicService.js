angular.module('formLab').service('musicService', function musicService($http) {
    var version = '1.0';
      
     return {
        getVersion : function () {
            return version;
        },
        getTopArtist : function (callback) {
            
          
        }
    }
  });
