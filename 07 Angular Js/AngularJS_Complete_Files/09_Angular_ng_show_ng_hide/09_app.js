// Create a Module
var app = angular.module('HobbiesApp',[]);

// Create a Controller
app.controller('HobbiesAppCtrl',function($scope) {
    $scope.eating = null;
    $scope.coding = null;
    $scope.sleeping = null;
    $scope.enableButton = true;
    $scope.onButton =function() {
        $scope.enableButton = false;
    };
    $scope.OFFButton =function() {
        $scope.enableButton = true;
    };
});