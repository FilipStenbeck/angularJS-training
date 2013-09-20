var app = angular.module("ArtistSearch", []);

app.service("searchService", function searchService($http) {
    var baseUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=cb54c2f3a327d9bd9a1ab3f6bd3d30e5&format=json&artist=';
    var doSearch = function(searchUrl, callback) {
            searchUrl = baseUrl + searchUrl;
            $http({method: 'GET', url: searchUrl}).success(function(data, status, headers, config) {
                callback(data.results.artistmatches.artist);
            }).error(function(data, status, headers, config) {
                console.log('error ' + status);
        });
    };
    
    return {
        search : doSearch
    }    
});

app.controller("artistSearchCtrl", function ($scope, searchService) {
    $scope.search = function () { 
        searchService.search($scope.query, function (data) {
            $scope.artists = data;
        });
    }
});
