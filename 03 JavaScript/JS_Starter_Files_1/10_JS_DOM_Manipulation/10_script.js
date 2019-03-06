var h2Elem = document.querySelector('h2');
console.log(h2Elem);
var content = h2Elem.textContent;
console.log(content);
str = content = 'suresh reddy';
console.log(str);
function reverseStr(str) {
    var reverse = str.split("").reverse().join("");
    document.querySelector('#display').textContent = reverse;
}
reverseStr(str);
var img = document.querySelector('#image');
console.log(img);
console.log(img.getAttribute('src'));
img.setAttribute('src','../img/corporate.jpg');
img.style.textAlign = 'center';
img.style.borderRadius = '50px';
img.style.margin = 'auto';

var user = document.querySelector('#user');
console.log(user);
var pass = document.querySelector('#pass');
console.log(pass);
var email = document.querySelector('#email');
console.log(email);
user.addEventListener('click',function () {
   var tContent = user.value='ramesh';
    console.log(tContent);
    document.querySelector('#user').value = tContent;
});
function show() {
    var password =  pass.value='hello am from pachikapallam';
    console.log(password);
    document.querySelector('#pass').value = password;
}
email.addEventListener('click',function () {
   console.log(email.value= 'thesureshbandi@gmail.com');
   document.querySelector('#email').value = email.value;
});