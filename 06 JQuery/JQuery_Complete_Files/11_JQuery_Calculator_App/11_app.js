// Get the HTML Elements
var firstNumberElement = $('#first_number');
var secondNumberElement = $('#second_number');
var operatorButton = $('#operator');
var equalsButton = $('#equals_button');
var resultButton = $('#result_button');
var plusButton = $('#plus-button');
var minusButton = $('#minus-button');
var multiplyButton = $('#mul-button');
var divideButton = $('#div-button');
var clearButton = $('#clear-button');


// Click on Minus Button
minusButton.click(function() {
    operatorButton.text($(this).text());
});

// Click on Plus Button
plusButton.click(function() {
    operatorButton.text($(this).text());
});

// Click on Multiply Button
multiplyButton.click(function() {
    operatorButton.text($(this).text());
});

// Click on divide Button
divideButton.click(function() {
    operatorButton.text($(this).text());
});

// Equals Button
equalsButton.click(function() {
    var firstNumber = firstNumberElement.val();
    var secondNumber = secondNumberElement.val();
    var operator = operatorButton.text();
    var result = 0;

    if(firstNumber !== '' && secondNumber !== ''){
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.text(result);
    }
    else{
        resultButton.text('RESULT');
    }
});

// Clear button
clearButton.click(function() {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorButton.text('+');
    resultButton.text('RESULT');
});