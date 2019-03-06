/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
var greet1 = function () {
    return "Good Morning";
};
var greet2 = function () { return "Good Morning"; };
console.log(greet1());
console.log(greet2());
var gm = function (name) {
    var output = "good afternoon " + name;
    return output;
};
var result = gm('sureh');
console.log(result);
var ge = function (name) { return "good Evening " + name; };
var result1 = ge('Ramesh');
console.log(result1);
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log(a);
console.log(b);
var outp = "a is : " + a + ", b is : " + b;
console.log(outp);
var _a;
