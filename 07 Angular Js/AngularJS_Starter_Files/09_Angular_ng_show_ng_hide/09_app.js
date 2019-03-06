//module
var app = angular.module('ngShowApp',[]);

app.controller('ngShowAppCtrl',function ($scope) {
   $scope.eating = null;
   $scope.coding = null;
   $scope.eating =null;
   $scope.enableButton = true;
    $scope.onButton= function () {
    $scope.enableButton = true;
   };
   $scope.OFFButton = function () {
     $scope.enableButton = false;
   };
});