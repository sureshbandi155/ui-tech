/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var piValue = Math.PI;
console.log('piValue : ' + piValue);

// Math sqrt
var sqrt = Math.sqrt(144);
console.log('sqrt of 144 is : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(14,56,8987,6546,49,765,46,4,84,351);
console.log('Min value : ' + min);

// find the Max of 4 numbers
var max = Math.max(14,56,8987,6546,49,765,46,4,84,351);
console.log('Max value : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : ' + pow);

// generate the random numbers from 0 to 100000
var numbr = Math.round(Math.random() * 100000);
console.log(numbr);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var today = new Date();
console.log(today);

// Get proper date
var date = new  Date();
var myDate = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
console.log(myDate);

// Display a Digital Clock on the web page
function digitalClock() {
    var today = new Date().toLocaleDateString();
    /*var currentTime = today.toLocaleTimeString();*/
    document.querySelector('#time').textContent = today;
}
setInterval(digitalClock,1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */

var minValue = Number.MIN_VALUE;
console.log(minValue);

var maxvalue = Number.MAX_VALUE;
console.log(maxvalue);

var num1 = 10.025223232;
console.log(num1.toFixed(2));

var strNum1 = '124.125';
console.log('value : ' + strNum1 + ' type ' + typeof strNum1);

// convert String to Number
var num2 = parseFloat(strNum1);
console.log(num2);
console.log('value : ' + num2 + ' type ' + typeof num2);

// convert number to string
var str1 = num2.toString();
console.log('value : ' + str1 + ' type ' + typeof str1);


/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

var str = "Good Morning";

console.log('Uppercase : ' + str.toUpperCase());

console.log('Lowercase : ' + str.toLowerCase());

console.log('Length : ' + str.length);

console.log('char At 0 : ' + str.charAt(0));

console.log('Substr : : ' + str.substr(0,2));

console.log('Substr : ' + str.substr(3));

// Count the number of '0's
function countZeros(str) {
    var count = 0;
    for(var i=0; i<str.length; i++){
        var ch = str.charAt(i);
        if(ch === 'o'){
            count++;
        }
    }
    return count;
}
str = "Good Morning";
console.log('Count is : ' + countZeros(str));

// reverse the String
function reverseStr(str) {
    var tempStr = '';
    for(var i = str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}

str = "Good Morning";
console.log('Reverse is : ' + reverseStr(str));

// palindrome function
function ispalindrome(str) {
    return str === reverseStr(str);
}
str = "ABCBA";
console.log('Is palindrome : ' + ispalindrome(str));

// get String Number
var array = ['ZERO', 'ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
function getStringNumber(str) {
    var tempStr = '';
    for(var i =0; i<str.length; i++){
        var index = parseInt(str.charAt(i));
        tempStr += array[index] + ' ';
    }
    return tempStr;
}
str = '54656';
console.log(str + " -> " + getStringNumber(str));



