// create object
var fridge = {};
fridge.fruits = 20 ;
fridge.vegitables = 30;

//acess the objects
console.log(fridge);
console.log('fruits : '+ fridge.fruits);

var mobile ={
    color :'balck',
    brand : 'redminote' ,
    ram : '3 GB',
    price : 1000,
    rom : '16 GB'
};
var mobilecolor = 'color';
mobile.cam = '16 px';
console.log(mobile);
// acess using . or [] operator
console.log(mobile.mobilecolor);
console.log(mobile[mobilecolor]);
console.log('brand: ' + mobile.color);
console.log('ram: ' +mobile.rom);
console.log('brand:' +mobile['color']);
console.log('capacity' +mobile.capacity);
console.log('rom: ' +mobile.rom);
console.log(mobile['rom']);
//nested object
var student = {
    name :'suresh',
    rollno :'14G01A0408',
    branch : 'electronics',
    address:{
        city :'Tirupati',
        state :'Andhra pradesh',
        town : 'ppm',
        country :'India'

    }
};
console.log('name:' + student.address.country);