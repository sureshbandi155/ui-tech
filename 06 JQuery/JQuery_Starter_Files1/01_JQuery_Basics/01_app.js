$('#hide').click(function () {
   if ($(this).text()==='HIDE'){
       $(this).text('SHOW');
       $('#ui').fadeOut(2000);
   }
   else {
       $(this).text('HIDE');
       $('#ui').fadeIn(2000);
   }
});
$('#ui-deve').dblclick(function () {
   $(this).text('MEANSTACK');
   $(this).removeClass('btn-success').addClass('btn-danger');
});
var maxLength = 100;
$('#textarea').keyup(function () {
    var msg = $(this).val().length;
    $('#sms-count').text(maxLength-msg);
});

$('#text').keyup(function () {
   var msg = $(this).val();
    $('#revese').text(reverseString(msg));
});

function reverseString(str) {
    var tempStr = '';
    for(var i =str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
