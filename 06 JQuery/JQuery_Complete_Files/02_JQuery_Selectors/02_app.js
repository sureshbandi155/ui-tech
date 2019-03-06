// Tag Selector
/*
$('p').click(function() {
    $(this).css({'background-color':'lightsalmon',
                  padding : '10px',
                  margin : '20px',
                  'box-shadow' : '0 0 15px black'
                });
});
*/

// Id Selector
/*
$('#para').click(function() {
    $(this).css({'background-color':'lightsalmon',
        padding : '10px',
        margin : '20px',
        'box-shadow' : '0 0 15px black'
    });
});
*/

// Class Selector
$('.test').click(function() {
    $(this).css({'background-color':'lightsalmon',
        padding : '10px',
        margin : '20px',
        'box-shadow' : '0 0 15px black'
    });
});

// Login form with Attribute Selection
var checkCount = 0;
$('input[type="checkbox"]').click(function() {
    if(checkCount % 2 === 0){
        $('#password').attr('type','text');
        checkCount++;
    }
    else{
        $('#password').attr('type','password');
        checkCount++;
    }
});

// Image Selection
$('#image1').click(function() {
    $('#card-img').attr('src','../img/image1.jpeg');
});

$('#image2').click(function() {
    $('#card-img').attr('src','../img/image2.jpeg');
});

$('#image3').click(function() {
    $('#card-img').attr('src','../img/image3.jpeg');
});