// Create a Module
var app = angular.module('FirstApp',[]);

// Create a Controller
app.controller('FirstAppCtrl',function($scope) {
    $scope.time = null;
    $scope.msg = null;
    $scope.wishMe = function() {
      if($scope.time !== null){
          if($scope.time <= 12){
              $scope.msg = 'Good Morning';
          }
          else if($scope.time > 12 && $scope.time <= 17){
              $scope.msg = 'Good Afternoon';
          }
          else if($scope.time > 17 && $scope.time <= 24){
              $scope.msg = 'Good Evening';
          }
          else{
              $scope.msg = 'Enter Proper Time';
          }
      }
      else{
          $scope.msg = '';
      }
    };
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

// Create a Controller
app.controller('TriangleOneCtrl',function($scope) {
    $scope.triangleOneInput = null;
    $scope.triangleOneText = null;
    $scope.triangleOne = function() {
        var tempStr = '';
        for(var i=0; i<$scope.triangleOneInput.length; i++){
            tempStr += $scope.triangleOneInput.substr(0,i) + '\n';
        }
        $scope.triangleOneText = tempStr;
    };
});


// Create a Controller
app.controller('TriangleTwoCtrl',function($scope) {
    $scope.triangleTwoInput = null;
    $scope.triangleTwoText = null;
    $scope.triangleTwo = function() {
        var tempStr = '';
        for(var i = $scope.triangleTwoInput.length; i>=0 ; i--){
            tempStr += $scope.triangleTwoInput.substr(0,i) + '\n';
        }
        $scope.triangleTwoText = tempStr;
    };
});


