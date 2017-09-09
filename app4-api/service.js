angular.module('apiApp').service('apiSrv',function($http,$q){
    var pokeUrl = 'http://pokeapi.co/api/v2/pokemon/7/'
    
      
    var deferred = $q.defer();
    $http.get(pokeUrl).then(function(data){
        deferred.resolve(data);
    })
    
    // call to get pokemon
    this.getPokemon = function (){
        return deferred.promise;
    }
    
})