/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
var techn = ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'ANGUALRJS'];
// Usage of for...in loop from ES5
console.log(techn.length);
var outputt = '';
for (var i = 0; i < techn.length; i++) {
    outputt += techn[i] + ' ';
}
console.log(outputt);
//for in loop
outputt = '';
for (var index in techn) {
    outputt += techn[index] + ' ';
}
console.log(outputt);
// Usage of for...of loop from ES6
outputt = '';
for (var _i = 0, techn_1 = techn; _i < techn_1.length; _i++) {
    var value = techn_1[_i];
    outputt += value + ' ';
}
console.log(outputt);
//for Each
outputt = '';
techn.forEach(function (elements) {
    outputt += elements + ' ';
});
console.log(outputt);
