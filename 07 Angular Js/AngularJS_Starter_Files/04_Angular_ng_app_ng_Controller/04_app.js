var app = angular.module('likesApp',[]);

app.controller('likesAppCtrl',function ($scope) {
   $scope.likes = 0;
   $scope.dislikes = 0;
   $scope.total = 0;
   $scope.likesFun = function () {
     $scope.likes++;
     $scope.total++;
     console.log($scope.likes);
   };
   $scope.dislikesfun = function () {
     $scope.dislikes++;
     $scope.total--;
   };
});