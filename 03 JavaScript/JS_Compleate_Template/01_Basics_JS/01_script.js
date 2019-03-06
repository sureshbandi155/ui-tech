//Alert Box
//alert('Welcome to JS');

// confirm Box
//confirm('Welcome to JavaScript');

// console log
console.log('Good Morning JS');

// Display date on the console
var date = new Date().toLocaleDateString();
console.log(date);

// Display date on the web page using DOM
document.querySelector('#display').textContent = date;


var names = document.querySelector('#name1');
 names.value ='suresh';
console.log(names.value);

names.addEventListener('click',function () {
   names.value='ramesh';
   console.log(names.value);
});
document.querySelector('#name1').value= names.value;
