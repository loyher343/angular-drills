angular.module("apiApp").controller('apiCtrl', function($scope, apiSrv){
    // $scope.test = "'Tis better to be vile than vile esteemed"
  var promise = apiSrv.getPokemon();
   promise.then(function(data){
       $scope.poke = data.data;
       console.log($scope.poke)
   })
})