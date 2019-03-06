//get elements
var h2Element = document.querySelector('h2');
console.log(h2Element.textContent);
h2Element.textContent = 'Good Morning';
console.log(h2Element.textContent);

var image = document.querySelector('#image');
console.log(image);
var imgAddress = image.getAttribute('src');
console.log(imgAddress);
image.setAttribute('src','../img/corporate.jpg');

function revese(str) {
    var temp ='';
    for(i=str.length-1;i>=0;i--){
        temp += str.charAt(i);
    }
    return temp;
}
str= "Good Morning";
console.log(revese(str));
document.querySelector('#display').textContent=revese(str);