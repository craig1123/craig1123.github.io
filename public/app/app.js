angular.module('portfolio', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
    // routing configuration code
    $stateProvider
    .state('home', {
      url: '/home',
      controller: 'homeCtrl',
      templateUrl: 'app/components/home/homeTmp.html',
    })
    .state('about',{
      url: '/about',
      controller: 'aboutCtrl',
      templateUrl: 'app/components/about/aboutTmp.html',
    })
    .state('myWork', {
      url: '/myWork',
      controller: 'workCtrl',
      templateUrl: 'app/components/work/workTmp.html',
    })
    .state('contact', {
      url: '/contact',
      controller: 'contactCtrl',
      templateUrl: 'app/components/contact/contact.html',
    });
    $urlRouterProvider.otherwise('/home');
});




$(document).ready(function() {

  $('i').on('click', (function(){
    $('.menu').slideToggle();
  }));


});
