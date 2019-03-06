/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var piValue =Math.PI;
console.log('piValue :' + piValue);

// Math sqrt
var math = Math.sqrt(144);
console.log('math : ' +math);
// find the min of 4 numbers
var min =Math.min(10,20,30,50,66,78);
console.log(min);
// find the Max of 4 numbers
var maximum = Math.max(10,20,30,50,66,78);
console.log(maximum);
// find the 'x' to the power of 'y' value, ex: 2^4
var powerva = Math.pow(2,4);
console.log(powerva);

// generate the random numbers from 0 to 100
var random = Math.round(Math.random()* 10000);
console.log(random);



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
var date = new Date();
var mydate = date.getDate() +"-"+ date.getMonth() +"-"+ date.getFullYear();
console.log(mydate);


// Display a Digital Clock on the web page
var date = new Date();
var current = date.toLocaleDateString();
console.log(current);
document.querySelector('#display').textContent = current;

/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */

var minvalue = Number.MAX_VALUE;
console.log(minvalue);
var maxvalue = Number.MAX_VALUE;
console.log(maxvalue);
var num = 10.90232323232;
var round = num.toFixed(2);
console.log(round);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
//con
var string = '10.23232';
console.log('value ' + string +'type is: ' +typeof string);
//s to number
var num =parseFloat(string);
console.log(num);
var aa = num.toString();
console.log(aa+ 'tye' +typeof aa);

var str = 'Good Morning';
console.log('uppercase' +str.toUpperCase());
console.log('uppercase' +str.toLowerCase());
console.log('length ;'+str.length);
console.log(' char at 0 :' +str.charAt(0));
console.log(str.substr(0,6));
console.log(str.substr(5));


function countZeros(str) {
    var count = 0;
    for(var i = 0; i<str.length; i++){
        var ch = str.charAt(i);
        if (ch === 'o'){
            count++;
        }
    }
    return count;
}
str = "Good Morning";
console.log('count is' +countZeros(str));

function rever(str) {
    var temp='';
    for(var i=str.length-1;i>=0;i--){
        temp +=str.charAt(i);
    }
    return temp;
}
str = "good Morning";
console.log('reverse is' +rever(str));

function ispalindrome(str) {
    return str ===rever(str);
}
str="abcba";
console.log('reverse is' +ispalindrome(str));


var array = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
function stringToNumber() {
    var tempStr ='';
    for(var i =0; i<str.length; i++){
        var index = parseInt(str.charAt(i));
        tempStr +=array[index]+' ';
    }
    return tempStr;
}
str='12354';
console.log(str+ '- >' +stringToNumber(str));

//suresh reddy
function count(str) {
    var count = 0;
    for (var i=0; i<str.length; i++){
        var ch = str.charAt(i);
        if(ch === 's'){
            count++;
        }
    }
    return count;
}
str= 'suresh reddy';
console.log('The count is: ' +count(str));

function reverse(str) {
    var tempStr = '';
    for (var i = str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
str= 'suresh reddy';
console.log('reverse is : ' +reverse(str));

//palindrome or not
function palindrome(str) {
    return str === reverse(str);
}
str='ababa';
console.log('Your giving string is palindrome: ' + palindrome(str));

var array1 = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
function getNumber() {
    var number = '';
    for (var i=0; i<str.length; i++){
        var index= parseInt(str.charAt(i));
        number +=array[index]+' ';
    }
    return number;
}
str='12365';
console.log(str + '->' +getNumber(str));