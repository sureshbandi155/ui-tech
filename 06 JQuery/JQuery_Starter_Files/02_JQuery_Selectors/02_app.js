/*$('p').click(function () {
   $(this).css({'backgroundColor':'forestgreen',
                                        padding: '10px',
                                        margin : '10px',
                                    'box-shadow' : '0 0 15px black',
                                    color : 'white'});
});*/
/*$('#blue').click(function () {
   $(this).css({'backgroundColor': 'blue',
   padding :' 10px',
   margin : '10px',
   'box-shadow' :'0 0 15px black',
   color : 'white'});
});*/
$('.test').click(function () {
   $(this).css({'backgroundColor': 'lightsalmon',
   padding : '10px',
   margin : '10px',
   'box-shadow' :'0 0 15px black',
   color : 'white'});
});
var checkCount = 0;
$('input[type= "checkbox"]').click(function () {
    if(checkCount % 2=== 0){
        $('#password').attr('type','text');
        checkCount++;
    }
    else {
        $('#password').attr('type','password');
        checkCount++;
    }
});

//image
$('#image1').click(function () {
    $('#images').attr('src','../img/image1.jpeg');
});
$('#image2').click(function () {
    $('#images').attr('src','../img/image2.jpeg');
});
$('#image3').click(function () {
    $('#images').attr('src','../img/image3.jpeg');
});