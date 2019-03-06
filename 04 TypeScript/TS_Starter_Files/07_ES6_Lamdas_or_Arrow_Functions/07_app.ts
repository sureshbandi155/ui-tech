/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/

let greet1= function () {
  return "Good Morning";
};
let greet2 = ()=>"Good Morning";
console.log(greet1());
console.log(greet2());

let gm = function (name) {
  let output = "good afternoon " +name;
  return output;
};
let result=gm('sureh');
console.log(result);
let ge = (name)=>"good Evening " +name;
let result1=ge('Ramesh');
console.log(result1);
let a:number = 10;
let b:number = 20;
[a,b]=[b,a];
console.log(a);
console.log(b);
let outp = `a is : ${a}, b is : ${b}`;
console.log(outp);