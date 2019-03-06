//creation of a simple function with no args and execute a function
function greet() {
    var output = 'Good Morning';
    console.log(output);
}
greet();
//creation of a simple function with args
function greetArgs(name) {
    var output = 'Good Morning '+ name;
    console.log(output);
}
greetArgs('suresh');

// executing a function with less number of params
function  lessArgs(name,age) {
    var output = 'Good Morning ' + name + ' age is: ' + age;
    console.log(output);
}
lessArgs('Ramesh');


//executing a function with more number of params
function graMoreArgs(name,age) {
    var output = 'hello '+ name+ ' age is:'+age;
    console.log(output);
}
graMoreArgs('suresh',25,'manager');


//function overloading is not possible here


// functions with return values
function greet(name) {
    var output = 'Good Morning ' + name;
    return output;
}
var msg = greet('hari');
console.log(msg);



//function with empty return /no return
function Returnarg(name) {
    var output = 'Good Morning ' +name;
    return ;
}
msg = Returnarg('hari');
console.log(msg);



// function Expressions with name and execution
var suresh = function greet() {
    var output = 'Good Morning';
    console.log(output);
};
suresh();

// Anonymous Function Expression and execution
//Anonymous function Expression
var greetMe = function (name) {
    var output = 'Good Morning naveen sir hello '+ name;
    console.log(output);
}
greetMe('naresh it');


// Functions as arguments without args
function greetMe1() {
    var output = 'Good Evening 1';
    console.log(output);
}
function greetMe2() {
    var output = 'Good Evening 2';
    console.log(output);
}
function greeter(fnName) {
    fnName();
}
greeter(greetMe2);
greeter(greetMe1);


// Functions as arguments with args args
function greetMe1(name) {
    var output = 'Good Evening ' +name;
    console.log(output);
}
function greetMe2(name) {
    var output = 'Good Evening ' +name;
    console.log(output);
}
function greetera(fnName,name) {
    fnName(name);
}
greetera(greetMe2,'naveen');




// Functions in Objects and Execution
var employee ={
    firstName :"suresh",
    lastName : "Reddy",
    fullName : function () {
        var output = this.firstName +" "+ this.lastName;
        console.log(output);
    }
};
employee.fullName();

// this keyword for accessing objects props in function


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */


// Default Function Arguments (arguments)

