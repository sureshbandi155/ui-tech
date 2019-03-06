//create a module
var app = angular.module('calculatorApp',[]);

//create a controller
app.controller('calculatorAppCtrl',function ($scope) {
   $scope.firstNumber = null;
   $scope.secondNumber = null;
   $scope.operator = '+';
   $scope.result ='RESULT';
   $scope.changeOperator =function (symbol) {
       $scope.operator =symbol;
   };
   $scope.calculate = function () {
       var tempResult = 0;
       if ($scope.firstNumber !== null && $scope.secondNumber !== null){
           switch ($scope.operator){
               case '+':
                   tempResult = $scope.firstNumber + $scope.secondNumber;
                   break;
               case '-':
                   tempResult = $scope.firstNumber - $scope.secondNumber;
                   break;
               case '/':
                   tempResult = $scope.firstNumber / $scope.secondNumber;
                   break;
               case '*':
                   tempResult = $scope.firstNumber * $scope.secondNumber;
                   break;
               default:
                   tempResult = 'Result';
                   break;
           }
           $scope.result = tempResult;
       }
       else{
           $scope.result = 'RESULT';
       }
   };
   $scope.clear =function () {
       $scope.firstNumber = null;
       $scope.secondNumber = null;
       $scope.operator = '+';
       $scope.result = 'RESULT';
   }
});