//Get the h2 element
/*var h2Element = document.querySelector('#wish-msg');



//GM function
function sayGoodMorning(){
     h2Element.textContent = 'Good Morning';
     h2Element.style.backgroundColor = 'forestgreen';
     h2Element.style.color = 'white';
     h2Element.style.textAlign = 'center';
     h2Element.style.padding ='10px';
     h2Element.style.boxShadow ='0 0 15px forestgreen';

}
//GA function
function sayGoodAfternoon(){
    h2Element.textContent = 'Good Morning';
    h2Element.style.backgroundColor = 'blue';
    h2Element.style.color = 'white';
    h2Element.style.textAlign = 'center';
    h2Element.style.padding ='10px';
    h2Element.style.boxShadow ='0 0 15px forestgreen';

}

//GE function
function sayGoodEvening(){
    h2Element.textContent = 'Good Morning';
    h2Element.style.backgroundColor = 'orangered';
    h2Element.style.color = 'white';
    h2Element.style.textAlign = 'center';
    h2Element.style.padding ='10px';
    h2Element.style.boxShadow ='0 0 15px forestgreen';

}

//GN function
function sayGoodNignt(){
    h2Element.textContent = 'Good Morning';
    h2Element.style.backgroundColor = 'darkred';
    h2Element.style.color = 'white';
    h2Element.style.textAlign = 'center';
    h2Element.style.padding ='10px';
    h2Element.style.boxShadow ='0 0 15px forestgreen';

}*/


// Get the h2 Element
var h2Element = document.querySelector('#wish-msg');

// GM function
function sayGoodMorning() {
    displayWishMessage('Good Morning','forestgreen');
}

// GA Function
function sayGoodAfternoon() {
    displayWishMessage('Good Afternoon','blue');
}

// GE Function
function sayGoodEvening() {
    displayWishMessage('Good Evening','orangered');
}

// GN Function
function sayGoodNight() {
    displayWishMessage('Good Night','darkred');
}

// display Wish Message
function displayWishMessage(message,color) {
    h2Element.textContent = message;
    h2Element.style.backgroundColor = color;
    h2Element.style.color = 'white';
    h2Element.style.textAlign = 'center';
    h2Element.style.padding = '10px';
    h2Element.style.boxShadow = '0 0 15px ' + color;
}

// get the Image Element
var imageElement = document.querySelector('#myImage');
/*var facebooll = document.querySelector('#facebook');
facebooll.addEventListener('click',function () {
   imageElement.setAttribute('src','../img/facebook.jpg')
});*/
function facebook() {
    imageElement.setAttribute('src','../img/facebook.jpg');
}
function forest() {
    imageElement.setAttribute('src','../img/forest.jpg');
}
function youtube() {
    imageElement.setAttribute('src','../img/youtube.jpg');
}
function corporate() {
    imageElement.setAttribute('src','../img/corporate.jpg');
}
function water() {
    imageElement.setAttribute('src','../img/water.jpg');
}

// JavaScript Event Listeners

// GM button
var GmButton = document.querySelector('#gm');
GmButton.addEventListener('click',function() {
    displayWishMessage('Good Morning','forestgreen');
});

// GA button
var GAButton = document.querySelector('#ga');
GAButton.addEventListener('click',function() {
    displayWishMessage('Good Afternoon','blue');
});

// GE button
var GEButton = document.querySelector('#ge');
GEButton.addEventListener('click',function() {
    displayWishMessage('Good Evening','orangered');
});

// GN button
var GNButton = document.querySelector('#gn');
GNButton.addEventListener('click',function() {
    displayWishMessage('Good Night','blue');
});

// Event Listener for the text box
var inputElement = document.querySelector('#user');
inputElement.addEventListener('keyup',function() {
    var username = inputElement.value;
    document.querySelector('#user-text').textContent = username;
});

