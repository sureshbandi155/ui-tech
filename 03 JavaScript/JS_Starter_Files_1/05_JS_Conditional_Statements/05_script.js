// If Else condition Example


// For loop Example to display from 1 - 10 values
output = '';
for (var i = 1; i<=10;i++) {
    if (i<=9)
    output = output + i +',';
    else {
        output = output + i;
    }
}
console.log(output);

// While loop Example to display from 1 - 10 values
output='';
var i = 1;
while (i<=10) {
    if (i<=9){
        output = output + i + '-';
    }
    else {
        output = output+i;
    }
    i++;
}
console.log(output);


// Do while loop Example to display from 1 - 10 values
output = '';
i=1;
do {
   if(i<=9) {
       output = output+ i +'==';
   }
   else {
       output = output+i;
   }
   i++;
}while (i<=10);
console.log(output);


// Switch Statement Example
output = '';
var i = 1;
switch (i) {
    default:
        console.log('default');
        break;
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;

}
