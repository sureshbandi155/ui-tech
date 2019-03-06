/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/
/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */
var sectionEle = document.querySelector('#container');
var stringEle = {
    employee: 'suresh',
    age: 29,
    designation: 'software'
};
var addEle = '<div style="background-color: orangered">' +
    '<h2> Emp Name:' + stringEle.employee + '</h2>' +
    '<h2> Emp age:' + stringEle.age + '</h2>' +
    '<h2> Emp designation:' + stringEle.designation + '</h2>' +
    '</div>';
sectionEle.innerHTML = addEle;
var template = "<div style=\"background-color: yellow\">\n                        <h2>Emp Name: " + stringEle.employee + "</h2>\n                        <h2>Emp Age: " + stringEle.age + "</h2>\n                         <h2>Emp Desg : " + stringEle.designation + "</h2>\n                          </div>";
sectionEle.innerHTML = template;
