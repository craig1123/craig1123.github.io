var app = angular.module('chatroom');

app.service('parseService', function($http, $q){

  //postData method here. This method will add data to the parse backend.
  this.postData = function (message) {
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/chat',
      param: {sort: 'ascending'},
      data: {text: message}
    })
  };

  //getData method here. This method will retrieve data from the parse backend.
  this.getData = function () {
    return $http({
      'method': 'GET',
      'url': "https://api.parse.com/1/classes/chat?order=-createdAt"
    }).then(function(res) {
      return res.data.results
    })
  };

});
