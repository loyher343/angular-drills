angular.module('filterApp').controller('filterCtrl',function($scope, filterSrv){
    $scope.people = filterSrv.getPeople();
    // $scope.test = "'Tis better to be vile than vile esteemed"
})