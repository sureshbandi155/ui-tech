var inputEle = document.querySelector('#number');
var display = document.querySelector('#text-number');
inputEle.addEventListener('keyup',function () {
   var str = inputEle.value;
   display.textContent = numToStr(str);
});
    var array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    function numToStr(str) {
        var temp = '';
        for (var i=0; i<= str.length-1;i++) {
            var index = parseInt(str.charAt(i));
            temp += array[index]+ " ";
        }
        return temp;
    }
    console.log(numToStr(str));

