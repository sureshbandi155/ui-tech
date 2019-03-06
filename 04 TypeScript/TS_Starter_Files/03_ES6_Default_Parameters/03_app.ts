/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6
function Values(star:number,ends:number):string{
    let Startsnum ='';
    for (let i=star;i<=ends;star++){
        Startsnum += i +'';
    }
    return;
}
let output:string =Values(0,10) ;
console.log(output);

function names(fisname:string,lsname:string):string{
    console.log(fisname,lsname);
    return;
}
