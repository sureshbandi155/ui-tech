var str1 = 'suresh reddy';
console.log('string length is : ' + str1.length);
console.log('charAt is : ' + str1.charAt(11));
console.log('subString is : ' + str1.substr(4,5));
console.log('subString is : ' + str1.substr(5));
console.log('subString is : ' + str1.substr(5,5));




function reverseStr(str) {
    var output='';
    for (var i = str.length-1; i>=0; i--) {
        output += str.charAt(i);
    }
    return output;
}
str = 'suresh';
console.log('reverse string is: ' +reverseStr(str));

function countStr(str) {
    var count = 0;
    for (var i = 0; i<str.length-1;i++) {
        var ch = str.charAt(i);
        if (ch === 's'){
            count++;
        }
    }
    return count;
}
str = 'suresh reddy';
console.log('count of s are: ' +countStr(str));


//to check palindrome
function palindromeStr(str) {
    return str === reverseStr(str);
}
str = 'ababajllkkj';
console.log('Your giving string is palindrome: ' + palindromeStr(str));

var array1 = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
function strToNum(str) {
    var tempStr = '';
    for (var i=0; i<str.length-1; i++) {
        var array = parseInt(str.charAt(i));
        tempStr += array1[array]+ ' ';
    }
    return tempStr;
}
str= '1233456798';
console.log(str+ '=>' +strToNum(str));

function triangelStr(stringg) {
    var  tempStr = '';
    for (var i=1; i<=stringg.length;i++) {
        tempStr += stringg.substr(0,i) + "\n";
    }
    return tempStr;
}
var stringg='suresh';
console.log(triangelStr(stringg));

function trianglee(str) {
    var temp = '';
    for (var i= str.length; i>=1; i--){
        temp += str.substr(0,i) + '\n';
    }
    return temp;
 }
 str = 'suresh reddy';
console.log(trianglee(str));