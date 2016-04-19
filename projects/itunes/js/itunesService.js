var app = angular.module('itunes');

app.service('itunesService', function($http, $q){


    //Gets the itunes API
    this.getInfo = function (artist) {
      var deferred = $q.defer();
      $http({
        method: "JSONP",
        url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
      }).then(function (response) {
        var parsedResponse = response.data.results
        // Makes an array and pushes the data given into that array
        var arr = [];
        for (var i = 0; i < parsedResponse.length; i++) {
          var formattedArtist = new Artist(parsedResponse[i]);
          arr.push(formattedArtist)
        }
        deferred.resolve(parsedResponse);
      })
      return deferred.promise;
    }

    var Artist = function (artistInfo) {
      this.AlbumArt = artistInfo.artworkUrl60
      this.Artist = artistInfo.ArtistName
      this.collection = artistInfo.collectionName
	    this.CollectionPrice = artistInfo.collectionPrice
	    this.Play = artistInfo.previewUrl
 	    this.Type = artistInfo.kind
 	    this.Explicit = artistInfo.trackExplicitness

    }

});
