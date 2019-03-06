var glb= 'thils is global';
function fun() {
    var suresh = 'this is local';
}
fun();
console.log(glb);
//console.log(suresh);

var global= 'thils is global';
function fun() {
     suresh1 = 'this is local';
}
fun();
console.log(global);
console.log(suresh1);

var geek = 'geeks for geeks1';
function geeks() {
    var geek = 'geeks for geeks2';
    console.log(window.geek);
}
geeks();


function fun1() {
    function fun2() {
        /*var */i=1000;
    }
    fun2();
    console.log(i);
}
fun1();


document.write("Hello World!");
document.write("Have a nice day!");

document.writeln("Hello World!");
document.writeln("Have a nice day!"+ "<br>");

var i = 6;

switch (i)
{
    default:
        document.write("i is greater than 2.");
    case 0:
        document.write("i is zero.");
        break;
    case 1:
        document.write("i is one.");
        break;
    case 2:
        document.write("i is two.");
        break;

}
//for  in loop
var languages = { first : "C", second : "Java",
    third : "Python", fourth : "PHP",
    fifth : "JavaScript" };

// iterate through every property of the
// object languages and print all of them
// using for..in loops
for (itr in languages)
{
    document.write(languages[itr] + "<br >");
}

function welcomeMsg(name) {
    document.write("Hello " + name + " welcome to GeeksforGeeks");
}

// creating a variable
var nameVal = "Admin";

// calling the function
welcomeMsg(nameVal);


name='suresh';
document.write(name+"<br>");
console.log(name);
var name;
//callback
function call(a,b,callback) {
    var sum = a+b;
    document.write(sum);
       /*document.write("The value of"+ a + "and " + b + is +sum);*/
    callback();
}
function dispa() {
    document.write("This must be printed after Addition");
}
call(5,6,dispa);


document.write('("3" - "1") = ' + ("3" - "1") + "<br>");
document.write('("3" - 1) = ' + ("3" - 1) + "<br>");
document.write('("3" * "2") = ' + ("3" * "2") + "<br>");
document.write('("3" % "2") = ' + ("3" % "2") + "<br>");
document.write('("3" + null) = ' + ("3" + null) + "<br>");
/*"use strict"
x=10;
x={
    p1:10,p2:20
};
var x=0101;
var y=\010;
var eval=10;
var arguments=123;*/

