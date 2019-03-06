// Hello World App
let greeting:string = 'Good Morning TS';
console.log(greeting);

// Functions in Typescript
function greet(name:string,age:number):string{
    let greetMsg:string = 'Hello ' + name + ' You are ' + age + ' years Old !';
    return greetMsg;
}

let output:string = greet('John',25);
console.log(output);

