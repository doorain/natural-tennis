angular.module('myApp').controller('adminCtrl', function($scope, mainService){

$scope.send = function(item){
  mainService.newProduct(item);
}

})
