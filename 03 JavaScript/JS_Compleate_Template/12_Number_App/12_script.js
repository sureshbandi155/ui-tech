// Get the Input Elements
var numberElement = document.querySelector('#number');
var displayNumberElement = document.querySelector('#text-number');

// Add Event Listener for Number Element
numberElement.addEventListener('keyup',function() {
    var strNumber = numberElement.value;
    displayNumberElement.textContent = getStringNumber(strNumber);
});

var array = ['ZERO', 'ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
function getStringNumber(str) {
    var tempStr = '';
    for(var i =0; i<str.length; i++){
        var index = parseInt(str.charAt(i));
        tempStr += array[index] + ' ';
    }
    return tempStr;
}