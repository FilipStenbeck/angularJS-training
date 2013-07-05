angular.module('formLab')
  .service('musicService', function musicService() {
    var version = '1.0';
      return {
        getVersion : function () {
            return version;
        }
   }
  });
