angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeCtrl',
    templateUrl: './views/home.html'
  })
  .state('about', {
    url: '/about',
    controller: 'aboutCtrl',
    templateUrl: '/views/about.html'
  })
  .state('shop', {
    url: '/shop',
    controller: 'shopCtrl',
    templateUrl: '/views/shop.html'
  })
  .state('product', {
    url: '/product/:id',
    controller: 'shopCtrl',
    templateUrl: '/views/product.html'
  })
  .state('why2', {
    url: '/why2',
    controller: 'why2Ctrl',
    templateUrl: '/views/why2.html'
  })
  .state('admin', {
    url: '/admin',
    controller: 'adminCtrl',
    templateUrl: '/views/admin.html'
  })
});
