var a = 'sue';
var b = 'hellio';
var c= a/b;
document.write(c);
console.log(c);

var obj = {x:10};
function value() {
    delete obj.x;

    return obj.x;
}
value();