//creation of a simple function with no args and execute a function
function greet() {
    console.log('Good Morning');
}
greet();

//creation of a simple function with args
function greetArgs(name) {
    console.log('Hello ' + name + ' Good Morning');
}
greetArgs('John');

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Years of Old!!');
}
greetLessArgs('John');

//executing a function with more number of params
function greetMoreArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Years of Old!!');
}
greetMoreArgs('John',40,'Manager');

//function overloading is not possible here


// functions with return values
function greetReturn(name) {
    var greeting = "Good Morning " + name;
    return greeting;
}
var msg  = greetReturn('John');
console.log(msg);

//function with empty return /no return
function greetEmptyReturn(name) {
    var greeting = "Good Morning " + name;
    return;
}
msg = greetEmptyReturn('Williams');
console.log(msg);

// function Expressions with name and execution
var greetFn = function(name) {
    console.log(name + ' Iam from Function expression');
};
greetFn('John');

// anonymous function expression
var greetMe = function() {
    var output = "Good morning suresh";
    console.log(output);
};
greetMe();
var suresh = function (name) {
    var output = 'this is suresh : ' + name;
    console.log(output);
}
suresh('suresh');

// Functions as arguments with args args
function greet1(name) {
    console.log(name + ' Iam from Greet1');
}
function greet2(name) {
    console.log(name + ' Iam from Greet2');
}
function greetCaller(fName,name) {
    fName(name);
}
greetCaller(greet1,'Williams');
greetCaller(greet2,'suresh');

// Functions in Objects and Execution
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(student.fullName());

// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */

var employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    },
    isFromState : function(state) {
        return state.toUpperCase() === this.address.state.toUpperCase();
    }
};

console.log('Is from TS ? ' + employee.isFromState('tELanGanA'));

// Default Function Arguments (arguments)
function defaultArgs() {
    console.log(arguments);
}
defaultArgs('John',40,'Manager',50);


