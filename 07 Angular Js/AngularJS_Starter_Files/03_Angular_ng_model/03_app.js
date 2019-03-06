//create a module
var hello = angular.module('autoForm',[]);

hello.controller('autoFormApp',function ($scope) {
   $scope.username = null;
    $scope.email = null;
    $scope.password = null;
    $scope.checkbox = null;

});