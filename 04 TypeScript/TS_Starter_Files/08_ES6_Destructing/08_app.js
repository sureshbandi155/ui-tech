/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
var array = ['suesh', 50, 'software'];
var namee = array[0];
var age = array[1];
var desi = array[2];
console.log("Name : " + namee + " age : " + age + " desi :" + desi);
//es6 destructing feature
var sures = ['Ramesh', 50, 'engineer'];
var name1 = sures[0], age1 = sures[1], designation = sures[2];
var sureshh = "Name is : " + name1 + " ages is: " + age1 + " designation is " + designation;
console.log(sureshh);
