var t1=0;
var t2=1;
var nextTerm;
var num = prompt("Enter the limit to generate fibonacci no",0);
document.write(t1 + "<br>");
document.write(t2+ "<br>");
for(var i =3; i<=num; i++){
    nextTerm=t1+t2;
    t1=t2;
    t2=nextTerm;
    document.write(nextTerm+ "<br>")
    /*console.log(nextTerm);*/
}