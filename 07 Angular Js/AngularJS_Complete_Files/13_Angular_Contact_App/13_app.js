// Create a Module
var app = angular.module('ContactApp',[]);

// Create a Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    $scope.contactList = [];
    $scope.selectedContact = null;
    // read the JSON Data
    $http.get('https://gist.githubusercontent.com/thenaveensaggam/3c6896638af3ddb93ecf978b3e002b32/raw/7c34b13fec4997e0847d3481145d58dbc8190615/16112018.json').then(function(reponse) {
        $scope.contactList = reponse.data.contacts;
    });
    $scope.getAContact = function(index) {
        $scope.selectedContact = $scope.contactList[index];
    };
});