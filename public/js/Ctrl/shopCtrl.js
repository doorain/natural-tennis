angular.module('myApp').controller('shopCtrl', function($scope, mainService, $stateParams){

  mainService.getProducts().then(function(response){
    $scope.products = response;
    console.log(response);
  })
  console.log($stateParams);

  if($stateParams.id){
    $scope.params = $stateParams.id;
  }
})
