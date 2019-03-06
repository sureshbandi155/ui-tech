// creation of arrays
var array = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array);
console.log(array[1]); // 20

// Access not existed property from an array
console.log(array[100]); // undefined

// Accessing length of an Array
console.log('Length : ' + array.length);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.reverse();
console.log('After : ' + array);

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.shift();
console.log('After : ' + array);

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.unshift(100);
console.log('After : ' + array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.pop();
console.log('After : ' + array);

// Add value the end of the array: push()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.push(100,200,300);
console.log('After : ' + array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):

// splice(index);
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.splice(0);
console.log('After : ' + array);

// splice(index,no_of_elem);
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.splice(1,2);
console.log('After : ' + array);

// splice(index,1,replace_elem);
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.splice(1,1,80);
console.log('After : ' + array);
array.splice(4,4,500);
console.log('After : ' + array);

// Create a copy of an array. Typically assigned to a new variable:slice();
var arr1 = [10,20,30,40,50];
var arr2 = arr1.slice();
arr1.splice(1);
console.log('Array2 : ' + arr2);

// indexOf()
arr1 = [10,20,30,40,50];
var value = 100;
if(arr1.indexOf(value) === -1){
    console.log('The ' + value + ' is Not Exists');
}
else{
    console.log('The ' + value + ' is exists @ index : ' + arr1.indexOf(value));
}

// Join()
array = [10,20,30,40,50];
var str = array.join(" - ");
console.log(str);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
