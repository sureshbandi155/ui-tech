/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
var myArray = [10, 2020, 40, 50, 6, 0, 5, 0, 5, 500, 0, 5, 0, 50];
var out = Math.min.apply(Math, myArray);
console.log(out);
var array1 = [10, 20, 30, 40, 50];
console.log(array1);
var array2 = array1.slice();
console.log(array2);
