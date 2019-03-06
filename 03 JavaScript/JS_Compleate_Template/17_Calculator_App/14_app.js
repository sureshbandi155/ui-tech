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

// Event Listener for plus Button
plusButtonElement.addEventListener('click',function() {
    symbol = plusButtonElement.textContent;
    operatorElement.textContent = symbol;
});


// Event Listener for Minus Button
minusButtonElement.addEventListener('click',function() {
    symbol = minusButtonElement.textContent;
    operatorElement.textContent = symbol;
});

// Event Listener for DIV Button
divButtonElement.addEventListener('click',function() {
    symbol = divButtonElement.textContent;
    operatorElement.textContent = symbol;
});

// Event Listener for Multiplication Button
multiplyButtonElement.addEventListener('click',function() {
    symbol = multiplyButtonElement.textContent;
    operatorElement.textContent = symbol;
});

// Event Listener for Equals button
equalsButtonElement.addEventListener('click',function() {
    var firstNumber = firstNumberElement.value;
    var secondNumber = secondNumberElement.value;
    var operator = operatorElement.textContent.trim();
    var result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        var num1 = parseFloat(firstNumber);
        var num2 = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 0;
                break;
        }
        resultButtonElement.textContent = result;
    }
    else{
        resultButtonElement.textContent = 'RESULT';
    }
});

// Clear Button Logic
clearButtonElement.addEventListener('click',function() {
    firstNumberElement.value = '';
    secondNumberElement.value = '';
    operatorElement.textContent = '+';
    resultButtonElement.textContent = 'RESULT';
});