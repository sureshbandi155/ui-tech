// Assignment operator =
var file = 'JS Operators';
console.log('file : ' + file);

// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
console.log('Sum is : ' + sum);

var sub = a - b;
console.log('sub is : ' + sub);

// Short hand math += , -= , *= , /=
var x = 10;
var y = 20;
var add = 0;
add = add + (x + y); // 0 + 10 + 20 = 30
add += (x + y); // 30 + 10 + 20 = 60
console.log(add); // 60

// Conditional operators < , > , <= , >= , !==
var age = 25;
if(age > 18){
    console.log('You are Major');
}
else{
    console.log('You are minor');
}

// Unary Operator ++ , -- (pre , post)
a = 10;
a = a + 1;
a += 1;
a++;
console.log(a); // 13

// Logical operators && , ||
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the parents Agreed');
}

// String Concatenation Operator +
var str = 10 + 20 + "10" + 20 + 10;
console.log(str);

var wish1 = "Good";
var wish2 = "Morning";
console.log(wish1 + " " + wish2);

// Ternary operator (? :)
age = 20;
(age < 18) ? console.log('You are Minor') : console.log('You are Major');


// Type of operator
var test = 'ABC';
console.log('value : ' + test + ' Type : ' + typeof  test);


// == operator
var c = 10;
 var d= "10";
if(c == d){
    console.log(' Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = "10";
if(a === b){
    console.log(' Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}