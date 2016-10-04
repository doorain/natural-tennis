angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    controller: '',
    templateUrl: ''
  })
  .state('', {
    url: '/',
    controller: '',
    templateUrl: ''
  })
  .state('', {
    url: '/',
    controller: '',
    templateUrl: ''
  })
  .state('', {
    url: '/',
    controller: '',
    templateUrl: ''
  })
  .state('', {
    url: '/',
    controller: '',
    templateUrl: ''
  })
})
