/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
let array:Array<any> = ['suesh',50,'software'];

let namee= array[0];
let age = array[1];
let desi = array[2];
console.log(`Name : ${namee} age : ${age} desi :${desi}`);
//es6 destructing feature
let sures :Array<any>=['Ramesh', 50,'engineer'];
let [name1,age1,designation]=sures;
let sureshh = `Name is : ${name1} ages is: ${age1} designation is ${designation}`;
console.log(sureshh);
