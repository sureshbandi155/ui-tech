$('#blue-button').click(function() {
    var buttonText = $(this).text();
    if(buttonText === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
    $('#blue-card').fadeToggle();
});


// Button Logic
$('#ui-button').dblclick(function() {
    $(this).removeClass('btn-success').addClass('btn-danger').text('MEAN STACK');
});

// Input Elements
$('#user-input').keyup(function() {
    var user = $(this).val();
    //$('#user-text').text(reverseString(user));
    // $('#user-text').text(triangleString(user));
    $('#user-text').text(butterFlyString(user));
});

// Reverse String
function reverseString(str) {
    var tempString = '';
    for(var i=str.length-1; i>=0;i--){
        tempString += str.charAt(i);
    }
    return tempString;
}

// Triangle One
function triangleString(str) {
    var tempStr = '';
    for(var i=str.length; i>= 0; i--){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}

// ButterFly String
function butterFlyString(str) {
    var tempStr = '';
    var  length = str.length;
    for(var i = 0; i<=length/2; i++){
        var num1 = length - (2 * i);
        tempStr += str.substr(0,i) + addSpace(num1) + str.substr(length-i) + '\n';
    }
    for(var j = length/2; j>=0; j--){
        var num2 = length - (2 * j);
        tempStr += str.substr(0,j) + addSpace(num2) + str.substr(length-j) + '\n';
    }
    return tempStr;
}

function addSpace(num) {
    var tempSpace = '';
    for(var i=0; i<num;i++){
        tempSpace += ' ';
    }
    return tempSpace;
}


// SMS App
var maxLength = 100;
$('#sms-input').keyup(function() {
    var len = $(this).val().length;
    $('#sms-count').text(maxLength - len);
});