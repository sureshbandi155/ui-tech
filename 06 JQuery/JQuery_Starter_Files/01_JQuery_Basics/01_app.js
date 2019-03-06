$('#hide').click(function () {
    var buttonText = $(this).text();
    if (buttonText === 'HIDE'){
        $(this).text('SHOW');
    }
    else {
        $(this).text('HIDE');
    }
    $('#card').fadeToggle(2000);
});
$('#ui').click(function () {
   $(this).text('MEANSTACK');
   $(this).removeClass('btn-success').addClass('btn-primary');
});

//sms app
var maxLength = 100;
$('#text').keyup(function () {
   var textarea = $(this).val().length;
   $('#sms-count').text(maxLength-textarea);
});

$('#user-name').keyup(function () {
   var user = $(this).val();
   $('#user-text').text(reverse(user));
});

function reverse(str) {
    var tempStr ='';
    for (var i=str.length-1; i>=0; i--){
        var reverses = str.charAt(i);
        tempStr +=reverses;
    }
    return tempStr;
}