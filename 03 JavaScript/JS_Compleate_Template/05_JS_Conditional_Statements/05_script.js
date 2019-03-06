 // If Else condition Example
var courseCompleted = true ;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You will get the Job Soon');
}
else if(courseCompleted && !practiceCompleted){
    console.log('start practicing!!');
}
else{
    console.log('Welcome to Ameerpet');
}

// For loop Example to display from 1 - 10 values
var output = '';
for(var i = 1; i<= 10; i++){
    if(i <= 9){
        output = output + i + " , ";
    }
    else{
        output = output + i ;
    }
}
console.log(output);

// While loop Example to display from 1 - 10 values
output = '';
i = 1;
while(i <= 10){
    if(i <= 9){
        output = output + i + " - ";
    }
    else{
        output = output + i ;
    }
    i++;
}
console.log(output);

// Do while loop Example to display from 1 - 10 values
output = '';
i = 1;
do{
    if(i <= 9){
        output = output + i + " * ";
    }
    else{
        output = output + i ;
    }
    i++;
}
while(i <= 10);
console.log(output);

// Switch Statement Example
var date = new Date().getDay();
var actualDay = '';
switch(date) {
    case 0:
        actualDay = 'sunday';
        break;
    case 1:
        actualDay = 'monday';
        break;
    case 2:
        actualDay = 'tuesday';
        break;
    case 3:
        actualDay = 'wednesday';
        break;
    case 4:
        actualDay = 'thuesday';
        break;
    case 5:
        actualDay = 'friday';
        break;
    case 6:
        actualDay = 'saturday';
        break;
    default :
        actualDay = 'who knows ?';
        break;
}
console.log(actualDay);

