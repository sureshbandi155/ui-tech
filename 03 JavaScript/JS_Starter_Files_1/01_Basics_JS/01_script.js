/*//Alert Box
alert('js');
// confirm Box
confirm('js');*/
//console log
console.log('js');
//Display date on the console
var date = new Date();
/*var output = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();*/
var output = date.toLocaleDateString();
console.log('today date is ' + output);
// Display date on the web page using DOM