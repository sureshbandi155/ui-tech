// JavaScript Examples

// Example 1:Triangle String
var theStr = 'NAVEEN SAGGAM';
function triangleString(str) {
    var tempStr = '';
    for(var i=1; i<=str.length;i++){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}
console.log(triangleString(theStr));

// Example 2 : Reverse Triangle
theStr = 'NAVEEN SAGGAM';
function reverseString(str) {
    var tempStr = '';
    for(var i=str.length; i>= 0; i--){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}
console.log(reverseString(theStr));

// Example 3: Triangle String From Last
theStr = 'NAVEEN SAGGAM';
function triangleStrLast(str) {
    var tempStr = '';
    for(var i= str.length; i>= 0; i--){
        tempStr += addSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}
function addSpace(number) {
    var str = '';
    for(var i=0; i<number; i++){
        str += ' ';
    }
    return str;
}
console.log(triangleStrLast(theStr));

// Example 4 : Reverse String Last
theStr = 'NAVEEN SAGGAM';
function reverseStrLast(str) {
    var tempStr = '';
    for(var i=0; i<str.length; i++){
        tempStr += addSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}
console.log(reverseStrLast(theStr));