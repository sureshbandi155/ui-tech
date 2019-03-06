/*
var form = document.querySelector('#male');
var form1 = document.querySelector('#female');
var form2 = document.querySelector('#others');

form.addEventListener('click',function () {
    var element = form.value;
    console.log(element);
});
form1.addEventListener('click',function () {
    var element1 = form1.value;
    console.log(element1);
});
form2.addEventListener('click',function () {
    var element2 = form2.value;
    console.log(element2);
});


var number= document.querySelector('#number1');
var number1= document.querySelector('#number2');
var number2= document.querySelector('#number3');
number.addEventListener('click',function () {
   var msg = number.value;
   console.log(msg);
});
number1.addEventListener('click',function () {
    var msg1 = number1.value;
    console.log(msg1);
});
number2.addEventListener('click',function () {
    var msg2 = number2.value;
    console.log(msg2);
});

var suresh = document.querySelector('#suresh');
console.log(suresh);
var msg = suresh.value;
console.log('your value is: ' +msg);
suresh.addEventListener('click',function () {
   msg = 'hello';
   console.log(msg);
});*/


/*practise*/
var male = document.querySelector('#male');
var female = document.querySelector('#female');
var others = document.querySelector('#others');
console.log(others);
/*male.addEventListener('click',function () {
    console.log(male.value);
});*/
function maleFn() {
 var ma = male.value;
 console.log(ma);
}
female.addEventListener('click',function () {
    var females = female.value ;
    console.log(females);
});
others.addEventListener('click',function () {
    var otherss = others.value ;
    console.log(otherss);
});
var name1 = document.querySelector('#number1');
var name2 = document.querySelector('#number2');
var name3 = document.querySelector('#number3');
/*name1.value='suresh';*/
console.log(name1.value);
var nm2 = name2.value;
console.log(nm2);
var nm3 = name3.value;
console.log(nm3);
var suresh = document.querySelector('#suresh');
console.log(suresh.value);
suresh.addEventListener('click',function () {
   suresh.value= 'hello js';
   console.log(suresh.value);
});
suresh.addEventListener('keyup',function () {
   console.log(suresh.value);
});
/*
$('#female').click(function () {
    var females = $(this).val();
    console.log(females);
});*/
/*
var male = document.querySelector('#male');
console.log(male);
function maleFn() {
    console.log(male.value);
}
*/
