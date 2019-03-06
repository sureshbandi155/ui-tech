var app = angular.module('time',[]);

app.controller('timeCtrl',function ($scope,$interval) {
  $scope.indianClock =function () {
    var today = new Date();
    var options ={timeZone : 'Asia/Kolkata'};
    $scope.time =today.toLocaleTimeString('en-US',options);
    $scope.date =today.toLocaleDateString('en-US',options);
    };
  $interval($scope.indianClock,1000);


$scope.americaClock =function () {
    var today = new Date();
    var options ={timeZone : 'America/New_York'};
    $scope.americatime =today.toLocaleTimeString('en-US',options);
    $scope.americadate =today.toLocaleDateString('en-US',options);
};
$interval($scope.americaClock,1000);

    $scope.chinaClock =function () {
        var today = new Date();
        var options ={timeZone : 'America/New_York'};
        $scope.chinatime =today.toLocaleTimeString('en-US',options);
        $scope.chinaadate =today.toLocaleDateString('en-US',options);
    };
    $interval($scope.chinaClock,1000);
});
