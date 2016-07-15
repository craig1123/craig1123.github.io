angular.module('portfolio').controller('homeCtrl', function ($scope, homeServ) {

  $scope.getQuotes = function () {
    homeServ.getQuotes().then(function (results) {
      $scope.quote = results.data.quote;
      $scope.author = results.data.author;
      $(function(){
        $(".homeTop").typed({
          strings: [$scope.quote],
          typeSpeed: -5, // typing speed
        });
        $(".homeAuthor").typed({
          strings: [$scope.author],
          typeSpeed: 30, // typing speed
          startDelay: 3000  // time before typing starts
          });
        });
    });
  };
  $scope.getQuotes();


});
