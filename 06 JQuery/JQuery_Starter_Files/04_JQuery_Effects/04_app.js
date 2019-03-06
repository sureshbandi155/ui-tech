var hello = 0;
$('#hide').click(function () {
    if(hello %2=== 0){
        $('#hide').text('SHOW');
        $('#text').hide(2000);
        hello++;
    }
    else {
        $('#hide').text('HIDE');
        $('#text').show(2000);
        hello++;
    }
});
var hai = 0;
$('#fadeOut').click(function () {
    if(hai %2 === 0) {
        $('#text1').fadeOut(2000);
        $(this).text('FADEIN');
        hai++;
    }
    else {
        $('#text1').fadeIn(2000);
        $(this).text('FADEOUT');
        hai++;
    }
});

$('$fadeOut1').click(function () {
   if ($(this).text() === 'FADEOUT'){
       $('#text2').fadeToggle(2000);
   }
   else {
       $(this).text('FADEIN');
   }
});
var slide = 0;
$('#slideuo').click(function () {
    if(slide %2 === 0){
        $('#text3').slideUp(1000);
        $(this).text('slideIN');
        slide++;
    }
    else {
        $('#text3').slideDown(1000);
        $(this).text('slideout');
        slide++;
    }
});