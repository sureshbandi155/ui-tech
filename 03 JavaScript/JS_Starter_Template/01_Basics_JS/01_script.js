//Alert Box
//alert('welcome to java Script');
// confirm Box
//confirm('wlecome to javaScript');

//console log
//console.log('welcome to javaScript');

//Display date on the console
//var date = new Date().toLocaleDateString();
//console.log(date);

// Display date on the web page using DOM
//document.querySelector('#display').textContent = date;

var names = document.getElementsByTagName('input');
var hello = names.value;
names.value = "suresh";
console.log(names);
function message() {
    console.log(hello);
    console.log(names);
    document.getElementsByTagName('input').value = names;
}
message();

/*var male = document.querySelector('#male');
var female = document.querySelector('#female');
function click() {
    var maleval = male.value;
    console.log(maleval);
    var femaleval = female.value;
    console.log(femaleval);
}
click();*/
var app = angular.module('click',[]);

app.controller('clickCtrl',function ($scope) {
    $scope.male = 'null';
    $scope.female = 'null';
    function click() {

    }
});