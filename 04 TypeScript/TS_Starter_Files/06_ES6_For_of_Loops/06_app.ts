/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

let techn:Array<string>=['HTML','CSS','JAVASCRIPT','BOOTSTRAP','ANGUALRJS'];
// Usage of for...in loop from ES5
console.log(techn.length);
let outputt:string = '';
for (let i=0;i<techn.length;i++){
    outputt +=techn[i] + ' ';
}
console.log(outputt);
//for in loop
outputt ='';
for (let index in techn){
    outputt +=techn[index]+' ';
}
console.log(outputt);
// Usage of for...of loop from ES6
outputt='';
for (let value of techn){
    outputt += value+' ';
}
console.log(outputt);
//for Each
outputt ='';
techn.forEach(function (elements) {
    outputt +=elements+ ' ';
});
console.log(outputt);