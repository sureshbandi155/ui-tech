// Create a Module
var app = angular.module('GroceryApp',[]);

// Create a Controller
app.controller('GroceryAppCtrl',function($scope) {
    $scope.groceryItem = null;
    $scope.groceryList = [];
    $scope.editMode = false;
    $scope.addGroceryItem = function() {
        // for Non Empty Item
        if($scope.groceryItem !== null){

            // if the item not Exists
            if($scope.groceryList.indexOf($scope.groceryItem.toUpperCase()) === -1){
                $scope.groceryList.push($scope.groceryItem.toUpperCase());
                $scope.groceryItem = null;
            }
            // if the item already Exists
            else{
                alert('Dude! The ' + $scope.groceryItem + ' is already Exists');
                $scope.groceryItem = null;
            }
        }
        // for Empty Item
        else{
            alert('Dude! Add at least one Item');
        }
    };
    $scope.ONEditMode = function() {
      $scope.editMode  = true;
    };
    $scope.OFFEditMode = function() {
        $scope.editMode  = false;
    };
    $scope.deleteItem = function(index) {
        $scope.groceryList.splice(index,1);
    };
    $scope.replaceGroceryItem = function(index,item) {
        $scope.groceryList.splice(index,1,item);
    };
});