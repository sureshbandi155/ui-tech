//get the elements
var firstNumber = $('#first_number');
var secondNumber = $('#second_number');
var operatorButton = $('#operator');
var equalsButton = $('#equals_button');
var resultButton = $('#result_button');
var plusButton = $('#plus-button');
var minusButton = $('#minus-button');
var divedeButton = $('#div-button');
var mulButton = $('#mul-button');
var clearButton = $('#clear-button');

minusButton.click(function () {
   operatorButton.text($(this).text());
});
divedeButton.click(function () {
    operatorButton.text($(this).text());
});
mulButton.click(function () {
    operatorButton.text($(this).text());
});
clearButton.click(function () {
    operatorButton.text('+');
    firstNumber.val('')
    secondNumber.val('');
    resultButton.text('RESULT');
});

equalsButton.click(function () {
   var firstNumbers = firstNumber.val();
   var secondNumbers = secondNumber.val();
   var operator = operatorButton.text();
   var result = 0;
   if (firstNumbers !== '' && secondNumbers !== ''){
       firstNumbers = parseFloat(firstNumbers);
       secondNumbers = parseFloat(secondNumbers);
       switch (operator){
           case '+':
               result = firstNumbers + secondNumbers;
               break;
           case '-':
               result = firstNumbers - secondNumbers;
               break;
           case '/':
               result = firstNumbers / secondNumbers;
               break;
           case '*':
               result = firstNumbers * secondNumbers;
               break;
           default:
               result =0;
               break;
       }
       resultButton.text(result);
   }
   else {
       resultButton.text('RESULT');
   }
});