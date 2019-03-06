// Hide & Show Effects
var hideCount = 0;
$('#buttonOne').click(function() {
    if(hideCount % 2 === 0){
        $('#cardOne').hide(1000);
        $(this).text('SHOW');
        hideCount++;
    }
    else{
        $('#cardOne').show(1000);
        $(this).text('HIDE');
        hideCount++;
    }
});

// FadeIn & FadeOut Effects
var fadeCount = 0;
$('#buttonTwo').click(function() {
    if(fadeCount % 2 === 0){
        $('#cardTwo').fadeOut(1000);
        $(this).text('FadeIn');
        fadeCount++;
    }
    else{
        $('#cardTwo').fadeIn(1000);
        $(this).text('FadeOut');
        fadeCount++;
    }
});

// FadeToggle
$('#buttonThree').click(function() {
    $('#cardThree').fadeToggle(1000);
    if($(this).text() === 'FADEOUT'){
        $(this).text('FADEIN');
    }
    else{
        $(this).text('FADEOUT');
    }
});

// SlideUp & SlideDown Effects
var slideCount = 0;
$('#buttonFour').click(function() {
    if(slideCount % 2 === 0){
        $('#cardFour').slideUp(1000);
        $(this).text('SLIDEDOWN');
        slideCount++;
    }
    else{
        $('#cardFour').slideDown(1000);
        $(this).text('SLIDEUP');
        slideCount++;
    }
});
