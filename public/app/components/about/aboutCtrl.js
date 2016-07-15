angular.module("portfolio").controller("aboutCtrl", function($scope, $http){
     //
    //  function getComicCharacters(){
    //    $http({
    //      method: "GET",
    //      url: "http://gateway.marvel.com/v1/public/characters?apikey=6912c6053086463338e2515cf9ce84b8",
    //    }).then(function(results){
    //      console.log(results);
    //       var abc = 123;
    //    })
    //  }
     //
    //  getComicCharacters();
})

$(document).ready(function() {
  $('.logo').click(function () {
    $('.col-md-5').animate({right:$('.col-md-7').offset().left});
    $('.col-md-7').animate({left:$('.col-md-5').offset().left});


  });
});
