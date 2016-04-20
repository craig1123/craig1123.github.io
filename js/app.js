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
    .state('forFun', {
      url: '/forFun',
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


});
