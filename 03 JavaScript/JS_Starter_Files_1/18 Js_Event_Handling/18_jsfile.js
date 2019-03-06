var h2Ele = document.querySelector('#wish-msg');
/*function sayGoodMorning() {
    h2Ele.textContent = 'Good Morning';
    h2Ele.style.backgroundColor = 'forestgreen';
    h2Ele.style.textAlign = 'center';
    h2Ele.style.boxShadow = '0 0 15px forestgreen';
    h2Ele.style.padding = '10px';
}*/
/*var gm = document.querySelector('#gm');
gm.addEventListener('click',function () {
    displayWishMsg('Good Morning','forestgreen')
});*/
function sayGoodMorning() {
    displayWishMsg('Good Morning','forestgreen');
}
function sayGoodAfternoon() {
    displayWishMsg('Good Afternoon','blue');
}
function sayGoodEvening() {
    displayWishMsg('Good Evening','orangered');
}
function sayGoodNignt() {
    displayWishMsg('Good Night','darkred');
}
var image = document.querySelector('#myImage');
function forest() {
    image.setAttribute('src','../img/forest.jpg');
}
function facebook() {
    image.setAttribute('src','../img/facebook.jpg');
}
function youtube() {
    image.setAttribute('src','../img/youtube.jpg');
}
function corporate() {
    image.setAttribute('src','../img/corporate.jpg');
}
function water() {
    image.setAttribute('src','../img/water.jpg');
}

function displayWishMsg(message,color) {
    h2Ele.textContent = message;
    h2Ele.style.backgroundColor = color;
    h2Ele.style.textAlign = 'center';
    h2Ele.style.boxShadow = '0 0 15px' +color;
    h2Ele.style.padding = '10px';
    h2Ele.style.color = 'white';
}
var user = document.querySelector('#user');
user.addEventListener('keyup',function () {
   var output = user.value;
   document.querySelector('#user-text').textContent = output;
   function reverse(output) {
       var out= output.split("").reverse().join("");
       document.querySelector('#user-revese').textContent = out;
   }
   reverse(output);
});