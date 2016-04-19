angular.module('portfolio', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
    // routing configuration code
    $stateProvider
    .state('home', {
      url: '/home',
      controller: 'homeCtrl',
      templateUrl: 'js/home/homeTmp.html',
    })
    .state('about',{
      url: '/about',
      controller: 'aboutCtrl',
      templateUrl: 'js/about/aboutTmp.html',
    })
    .state('myWork', {
      url: '/myWork',
      controller: 'workCtrl',
      templateUrl: 'js/work/workTmp.html',
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'js/forFun/forFun.html',
    })
    .state('contact', {
      url: '/contact',
      controller: 'contactCtrl',
      templateUrl: 'js/contact/contact.html',
    })
    $urlRouterProvider.otherwise('/home');
});




$(document).ready(function() {

  $('i').on('click', (function(){
    $('.menu').slideToggle();
  }));

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
      $('.header').css("background", colorIn)
    })


});
