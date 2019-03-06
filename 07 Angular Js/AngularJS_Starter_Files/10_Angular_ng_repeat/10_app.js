var app = angular.module('greet',[]);

app.controller('greetCtrl',function ($scope) {
    $scope.name = null;
    $scope.times =null;
    $scope.timesArray =[];
    $scope.currentTime = null;
    $scope.message = '';
    $scope.getTimes =function () {
        if ($scope.times !== null){
            $scope.timesArray =[];
            for (var i = 0; i<$scope.times; i++){
                $scope.timesArray[i] = (i+1);
            }
        }
        else {
            $scope.timesArray=[];
        }
    };
    $scope.wishMe = function () {
      if($scope.currentTime !== null){
          if($scope.currentTime <12){
              $scope.message = 'Good Morning';
          }
          else if ($scope.currentTime >12  && $scope.currentTime <=17){
              $scope.message = 'Good Afternoon';
          }
          else if ($scope.currentTime >17 && $scope.currentTime <=24){
              $scope.message = 'Good Evening';
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