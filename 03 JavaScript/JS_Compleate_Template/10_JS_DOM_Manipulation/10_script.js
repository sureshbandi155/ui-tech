// h2Element Changes
//  to get the element
var h2Element = document.querySelector('h2');

// to get the content
var msg = h2Element.textContent;
console.log(msg);

// to set the content
var element = h2Element.textContent = 'Good Morning';
console.log(element);
document.querySelector('h2').textContent =element;


// to apply the styles
h2Element.style.backgroundColor = 'orangered';
h2Element.style.color = 'white';
h2Element.style.boxShadow = '0 0 15px black';


// Image Element Changes

// get the image element
var imageElement = document.querySelector('#image');

// to get an attribute
var imageAddress = imageElement.getAttribute('src');
console.log(imageAddress);

// to set an attribute
imageElement.setAttribute('src','../img/forest.jpg');

// to apply styles
imageElement.style.borderRadius = '50%';
imageElement.style.boxShadow = '0 0 15px black';

// H1Element Changes

// to get the element
var h1Element = document.querySelector('#greet');

h1Element.textContent = reverseStr('Good Morning');

// to apply styles
h1Element.style.backgroundColor = 'forestgreen';
h1Element.style.textAlign = 'center';
h1Element.style.color = 'white';
h1Element.style.padding = '10px';
h1Element.style.boxShadow = '0 0 15px black';


// reverse the String
function reverseStr(str) {
    var tempStr = '';
    for(var i = str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
var suresh = document.querySelector('#suresh');
/*var sureh1 = suresh.value;
console.log(sureh1);*/
console.log(suresh.value);
var hello1 = suresh.value= 'hello';
console.log(hello1);

function hello() {
    console.log(hello1);
    var hello2 = hello1.value= 'suresh';
    console.log(hello2);
}

var ramesh = document.querySelector('#ramesh');
console.log(ramesh);
    ramesh.addEventListener('click',function () {
    ramesh.value='suresh';
});
