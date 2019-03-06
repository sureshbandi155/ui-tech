//create a module
var app = angular.module('basics',[]);

//create a controller
app.controller('basicsCtrl',function ($scope) {
    $scope.number = null;
    $scope.message =null;
    $scope.wishMe =function () {
        if($scope.number !== null){
             if($scope.number <= 12){
                $scope.message='Good Morning'
            }
            else if($scope.number > 12 && $scope.number <= 17){
                 $scope.message='Good Afternoon';
             }
             else if($scope.number >17 && $scope.number <= 24){
                $scope.message='Good Evening';
             }
             else {
                 $scope.message='Enter proper time';
             }
        }
    }
});

// Create a Controller
app.controller('ReverseStringCtrl',function($scope) {
    $scope.cardOneInput = null;
    $scope.cardOneText = null;
    $scope.reverseString = function() {
        var tempStr = '';
        for(var i=$scope.cardOneInput.length-1; i>=0; i--){
            tempStr += $scope.cardOneInput.charAt(i);
        }
        $scope.cardOneText = tempStr;
    };
});
