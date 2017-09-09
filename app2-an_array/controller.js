angular.module('arrayApp').controller("arrayController", function($scope, service){
    // $scope.test = 'tis better to be vile than vile esteem';
    $scope.peeps = service.getPeeps();
})