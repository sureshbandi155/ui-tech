//get the elements
var firstNumberElement = document.querySelector('#firstNumber');
var secondNumberElement = document.querySelector('#secondNumber');
var operatorButton = document.querySelector('#operator');
var equalButton = document.querySelector('#equals-button');
var resultButton = document.querySelector('#result-button');
var pluseButton = document.querySelector('#plus-button');
var minusButton = document.querySelector('#minus-button');
var divideButton = document.querySelector('#divide-button');
var multiplyButton = document.querySelector('#multiply-button');
var clearButton = document.querySelector('#clear-button');

//add event listner for operator
pluseButton.addEventListener('click',function () {
   var plus = pluseButton.textContent;
   operatorButton.textContent = plus;
});
minusButton.addEventListener('click',function () {
   var minus = minusButton.textContent;
   operatorButton.textContent = minus;
});
function divide() {
    var opera = divideButton.textContent;
    operatorButton.textContent= opera;
}
multiplyButton.addEventListener('click',function () {
   var multiply = multiplyButton.textContent;
   operatorButton.textContent = multiply;
});

//Event listener for equal button
equalButton.addEventListener('click',function () {
   var firstNumm = firstNumberElement.value;
   var secondNumm = secondNumberElement.value;
   var operator = operatorButton.textContent.trim();
   var result=0;
   if(firstNumm !== '' && secondNumm !== ''){
       var firstNum = parseFloat(firstNumm);
       var secondNum = parseFloat(secondNumm);
    switch (operator){
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        default:
            result = 0;
            break;
    }
    resultButton.textContent = result;
   }
   else {
       resultButton.textContent="RESULT";
   }
});
clearButton.addEventListener('click',function () {
   firstNumberElement.value = '';
   secondNumberElement.value= '';
   operatorButton.textContent = '+';
   resultButton.textContent= 'RESULT';
});