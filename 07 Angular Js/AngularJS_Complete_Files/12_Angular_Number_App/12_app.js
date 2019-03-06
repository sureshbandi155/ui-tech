// Create a Module
var app = angular.module('NumberApp',[]);

// Create a Controller
app.controller('NumberAppCtrl',function($scope) {
    $scope.theNumber = null;
    $scope.displayStr = null;
    $scope.tempArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    $scope.getStringNumber = function() {
        console.log($scope.theNumber);
        var tempStr = '';
        if($scope.theNumber !== undefined){
            for(var i=0; i< $scope.theNumber.toString().length; i++){
                var digit = $scope.theNumber.toString().charAt(i);
                tempStr += $scope.tempArray[digit] + ' ';
            }
            $scope.displayStr = tempStr;
        }
        else {
            $scope.displayStr = '';
        }

    };
});




/*
app.directive('numbersOnly', function() {
    var directive = {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }

    };
    return directive;
});*/
