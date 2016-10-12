angular.module('myApp')
  .service('mainService', function($http){

    this.getProducts = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/products'
      }).then(function(data) {

        return data.data;
      })
    }
    this.newProduct = function(item) {
      $http({
        method: 'POST',
        url: 'http://localhost:8080/api/product',
        data: item
      })
    }


})
