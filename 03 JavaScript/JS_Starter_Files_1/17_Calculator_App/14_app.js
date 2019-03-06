// Get the HTML Elements
var firstNumberElement = document.querySelector('#firstNumber');
var secondNumberElement = document.querySelector('#secondNumber');
var operatorElement = document.querySelector('#operator');
var equalsButtonElement = document.querySelector('#equals-button');
var resultButtonElement = document.querySelector('#result-button');
var plusButtonElement = document.querySelector('#plus-button');
var minusButtonElement = document.querySelector('#minus-button');
var divButtonElement = document.querySelector('#divide-button');
var multiplyButtonElement = document.querySelector('#multiply-button');
var clearButtonElement = document.querySelector('#clear-button');
var symbol = '';
plusButtonElement.addEventListener('click',function () {
     symbol = plusButtonElement.textContent;
    operatorElement.textContent = symbol;
});
minusButtonElement.addEventListener('click',function () {
    symbol = minusButtonElement.textContent;
    operatorElement.textContent = symbol;
});
divButtonElement.addEventListener('click',function () {
    symbol = divButtonElement.textContent;
    operatorElement.textContent = symbol;
});
multiplyButtonElement.addEventListener('click',function () {
    symbol = multiplyButtonElement .textContent;
    operatorElement.textContent = symbol;
});
equalsButtonElement.addEventListener('click',function () {
        var first = firstNumberElement.value;
        var second = secondNumberElement.value;
        var operator = operatorElement.textContent;
        var result= 0;
    if(first !== '' && second !== '') {
        var f = parseFloat(first);
        var s = parseFloat(second);
        switch (operator) {
            case '+':
                result = f + s;
                break;
            case '-':
                result = f - s;
                break;
            case '/':
                result = f / s;
                break;
            case '*':
                result = f * s;
                break;
            default:
                result = 0;
                break;
        }
        resultButtonElement.textContent = result;
    }
    else
        resultButtonElement.textContent= 'RESULT';
});
clearButtonElement.addEventListener('click',function () {
   firstNumberElement.value = '';
   secondNumberElement.value='';
   operatorElement.textContent = '+';
   resultButtonElement.textContent = 'RESULT';
});