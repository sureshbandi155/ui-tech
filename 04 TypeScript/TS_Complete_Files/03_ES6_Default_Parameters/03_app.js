/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
function printValues(start, end) {
    if (end === void 0) { end = 10; }
    var strNumber = '';
    for (var i = start; i <= end; i++) {
        strNumber += i + " ";
    }
    return strNumber;
}
var output = printValues(0);
console.log(output);
