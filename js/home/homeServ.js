angular.module('portfolio').service('homeServ', function ($http) {

  this.getQuotes = function () {
    return $http({
      method: "JSONP",
      url: "http://quotesondesign.com/api/3.0/api-3.0.json?callback=JSON_CALLBACK"
    })
  }
})
