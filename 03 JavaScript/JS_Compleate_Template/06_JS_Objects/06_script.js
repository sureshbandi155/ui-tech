// create an object
var fridge = {};
fridge.fruits = 20;
fridge.vegitables =40;

//  Access the objects
console.log(fridge);
console.log('fruits :' + fridge.fruits);

//object literal
var mobile = {
    color: 'black',
    company: 'lenova',
    Ram: '3GB',
    isInsured: 'false',
    cost: 1500
};
console.log(mobile);

//acess using dot , [] notations
console.log('company :' + mobile.company); //lenova
console.log('company :' + mobile['company']); //lenova

 //acess not Existing property
console.log('capacity :' + mobile.capacity); //undefined

// Creat nested object
var student ={
    name : 'suresh',
    age : 20,
    course :'Engineering',
    address :{
        city :'Hyderabad',
        state :'telengana',
        country :'India',
        return:student
    }
};


// acess the object
console.log(student); //student obj
console.log(student.address); // address obj
console.log(student.address.city); //hyderabad

//add a property to student object
student.address.street = 'Ammerpet';
console.log(student.address.street);


//delete an object
delete student.address.city; //address object is deleted
console.log(student);
console.log(student);
