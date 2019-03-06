// Closures Concept of JavaScript
// Closures Concept of JavaScript
var a = 10;
function greetOuter(){
    var b = 20;
    var greetInner = function(){
        var c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return greetInner;
}
function greetEngine(fName){
    fName();
}
var greet = greetOuter();
greetEngine(greet);
console.log(greet);

var name= 'suresh';
function ece() {
    var rollno = true;
    function svpp() {
        var a=10;
        console.log(name);
        console.log(rollno);
        console.log(a);
    }
    svpp();
}
eclie();
