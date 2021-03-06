var app = angular.module("ArtistSearch", []);

app.controller("artistSearchCtrl", function ($scope, $http) {
    console.log("setup done");
    var baseUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=cb54c2f3a327d9bd9a1ab3f6bd3d30e5&format=json&artist=';
    
    var searchUrl = '';
    $scope.search = function () {
        console.log('searching for ' + $scope.query);
        searchUrl = baseUrl + $scope.query;
        
        //fallback if no internet in lab-room
        //searchUrl = 'result.json';
        
        
        $http({method: 'GET', url: searchUrl}).success(function(data, status, headers, config) {
            console.log(data);
            $scope.artists = data.results.artistmatches.artist;
        })
        .error(function(data, status, headers, config) {
            console.log('error ' + status);
        });
    }
});


