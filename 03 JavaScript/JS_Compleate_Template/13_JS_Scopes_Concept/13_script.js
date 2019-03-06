// Block scoping for if block
var dept = 'Engineering';
if(dept === 'Engineering'){
    var job = 'Software';
}
console.log(dept); // Engineering
console.log(job); // Software

//Block scoping for FOR Loop
for(var i=0; i<=10; i++){
    // statements
}
console.log(i); // 11

// Function Scoping
function greet() {
    var greeting = 'Good Morning';
}
greet();
//console.log(greeting); // RE: 'greeting' is not defined

// IIFE example
(function(name) {
    var greetMsg = "Good Morning " + name;
    console.log(greetMsg);
})('John');


(function (name) {
    var greet='Good Evening '  +name;
    console.log(greet);
})('suresh');

// Read and Write Operations for variables
var name = 'John'; // Write Operation
console.log(name); // READ Operation

// Scope Example 1
var a = 10; // global scope variable
function greetOuter() {
    var b = 20; // child scope variable
    function greetInner() {
        var c = 30; // grand-child scope variable
        console.log(a);
        console.log(b);
        console.log(c);
    }
    greetInner();
}
greetOuter();

// Creation of an Employee Object
var createEmployee = function(name,age,desg,salary) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.desg = desg;
    obj.salary = salary;
    return obj;
};

var employee1 = createEmployee('John',40,'Manager');
console.log(employee1);

var employee2 = createEmployee('Rajan',30,'Team Lead');
console.log(employee2);
