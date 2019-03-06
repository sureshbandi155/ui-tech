// Create a Module
var app = angular.module('GoodMorningApp',[]);

// Create a Controller
app.controller('GoodMorningAppCtrl',function($scope) {
    $scope.name = null;
    $scope.times = null;
    $scope.timesArray = [];
    $scope.currentTime = null;
    $scope.greetMsg = null;
    $scope.getTimes = function() {
        if($scope.times !== null){
            $scope.timesArray = [];
            for(var i=0; i<$scope.times;i++){
                $scope.timesArray[i] = (i + 1);
            }
        }
        else{
            $scope.timesArray = [];
        }
    };
    $scope.wishMsg = function() {
        if($scope.currentTime !== null){
            if($scope.currentTime <= 12){
                $scope.greetMsg = 'Good Morning';
            }
            else if($scope.currentTime > 12 && $scope.currentTime <= 17){
                $scope.greetMsg = 'Good Afternoon';
            }
            else if($scope.currentTime > 17 && $scope.currentTime <= 24){
                $scope.greetMsg = 'Good Evening';
            }
            else{
                $scope.greetMsg = 'Enter Proper Time';
            }
        }
        else{
            $scope.greetMsg = '';
        }
    };
});