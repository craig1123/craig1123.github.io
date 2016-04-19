var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){

  //getParseData function and a postData function, but should be placed on $scope.

  $scope.getParseData = function () {
    parseService.getData().then(function(results) {
      $scope.messages = results
    })
  }

  setInterval(function(){
  $scope.getParseData();
}, 1000)

  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to
  //your controllers $scope as messages ($scope.messages)

  $scope.postData = function () {
    parseService.postData($scope.message)
  }
  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.

  $scope.formatDate = function(dateString){
  return new Date(dateString).toLocaleString();
  }

});
