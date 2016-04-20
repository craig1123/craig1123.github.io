angular.module('portfolio').controller('homeCtrl', function ($scope, homeServ) {

  $scope.getQuotes = function () {
    homeServ.getQuotes().then(function (results) {
      $scope.quote = results.data.quote
      $scope.author = results.data.author
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
    })
  }
  $scope.getQuotes();


})


$(document).ready(function() {

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var randomColor = '#';
    for (var i = 0; i < 6; i++ ) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor
  }
      $('.logo').on('click', function () {
        var random1 = getRandomColor();
        var random2 = getRandomColor();
        var colorIn = "linear-gradient(to bottom, " + random1 + ", " + random2 + ")";
        $('.header').css("background", colorIn);
      })
});
