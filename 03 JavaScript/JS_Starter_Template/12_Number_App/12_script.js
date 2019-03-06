var number = document.querySelector('#number');
var text = document.querySelector('#text-number');

//add event listener
number.addEventListener('keyup',function () {
   var displayNumber = number.value;
   text.textContent =getStringNumber(displayNumber);
});
var array = ['ZERO', 'ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
function getStringNumber(str) {
  var tempStr = '';
 for (var i = 0; i<str.length;i++){
     var index = parseInt(str.charAt(i));
     tempStr +=array[index]+' ';
 }
 return tempStr;
}