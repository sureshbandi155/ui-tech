// Assignment operator =
var file = 'jsoperator';
console.log('file :'+ file);


// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
console.log('sum is:' + sum);

var sub = a-b;
console.log('sub is:' + sub);


// Short hand math += , -= , *= , /=
var add=0;
add = add + (a+b);
add +=a + b;
console.log('the addition is:' + add);


// Conditional operators < , > , <= , >= , !=
var age =30;
if (age > 18){
    console.log('your are major');
}
else{
    console.log('your are minor');
}


// Unary Operator ++ , -- (pre , post)
var a=20;
a = a + 1;
var inc;
a++;

console.log('a is :' +a);


// Logical operators AND , OR
var inRelation = true ;
var parrentsagred = false;
if (inRelation && parrentsagred){
    console.log('Get marry soon');
}
else {
    console.log('wait untill the parents aggred');
}

var str1 = 'Good';
var str2 = ' morning';
var str = str1 + str2;
console.log('suresh', str);




// String Concatenation Operator
var str = 10 + 20 + 10 + "10" + 10 +100;
console.log('string concatination is :' + str);

// Ternary operator (? :)
 var c= 25;
 ( c > 18) ? console.log('major') : console.log('minior');

// Type of operator
var suresh = "hello";
console.log('value' + suresh  , 'Type :' + typeof suresh);


// == operator
a = 10;
b = "10";
if(a == b){
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
