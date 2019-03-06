var h2Element = document.querySelector('#wish_msg');

function saygm() {
    displayMessage("Good Morning",'blue');
}
function sayga() {
    displayMessage("Good Afternoon",'orangered');
}
function sayge() {
    displayMessage("Good Evening",'forestgreen');
}
function saygn() {
    displayMessage("Good Night",'black');
}
function displayMessage(message,color){
    h2Element.textContent = message;
    h2Element.style.backgroundColor = color;
    h2Element.style.textAlign = 'center';
    h2Element.style.color = 'white';
    h2Element.style.padding = '12px';
    h2Element.style.boxShadow = '0 0 15px black';
}

//images
var image = document.querySelector('#myImage');
console.log(image);

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

var msg = document.querySelector('#text');
msg.addEventListener('keyup',function () {
   var value = msg.value;
   document.querySelector('#hello').textContent = value;
});