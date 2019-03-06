// Block scoping for FOR loop
for (var i= 0;i<=10;i++){
    console.log(1);
}


//Block scoping for if Block
var dept='ece';
if(dept ==='ece'){
    var college = "svpcet";
}
console.log(college);
console.log(dept);

// Function Scoping
var a=10;
function greet() {
    var b = 20;
    console.log(b);
    console.log(a);
}
greet();
// IIFE example
(function (name) {
    var output = "Good Morning " +name;
    console.log(output);
})('suresh');
(function (name) {
    var mess = "Hi are u "+ name+ "to JavaScript";
    console.log(mess);
})("Ramesh");

// Read and Write Operations for variables
var d=true;
console.log(d);

var employee = function (name,age,desg) {
  var obj={};
  obj.name = name;
  obj.age = age;
  obj.desg = desg;
  return obj;
};
var employe1 =employee('suresh',10,'se');
console.log(employe1);



