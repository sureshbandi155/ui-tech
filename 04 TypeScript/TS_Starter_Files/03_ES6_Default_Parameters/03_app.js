/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
function Values(star, ends) {
    var Startsnum = '';
    for (var i = star; i <= ends; star++) {
        Startsnum += i + '';
    }
    return;
}
var output = Values(0, 10);
console.log(output);
function names(fisname, lsname) {
    console.log(fisname, lsname);
    return;
}
