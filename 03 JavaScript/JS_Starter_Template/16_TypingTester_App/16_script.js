//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));
//Get the HTML elements
var originalTextElement = document.querySelector('.text-section p');
var textAreaElement = document.querySelector('#text-area');
var textAreaBorder = document.querySelector('#text-area');
var minutesElement =document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds');
var resetButtonElement = document.querySelector('#reset');
var congMessage = document.querySelector('.cong-section');

var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
var timerRunning = false;
// Event listener for TextArea
textAreaElement.addEventListener('keypress',function() {
    var textEnteredLength = textAreaElement.value.length;
    if(textEnteredLength === 0 && !timerRunning){
        // start the timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});
// Event Listener for TextArea for border colors
textAreaElement.addEventListener('keyup',function() {
    var textEntered = textAreaElement.value;
    var originalText = originalTextElement.textContent;
    var partialText = originalText.substr(0,textEntered.length);
    if(textEntered === ''){
        textAreaBorder.style.borderColor = 'gray';
    }
    else{
        if(textEntered === originalText){
            textAreaBorder.style.borderColor = 'seagreen';
            clearInterval(interval);
            congMessage.style.display = 'block';

        }
        else{
            if(textEntered === partialText){
                textAreaBorder.style.borderColor = 'lightblue';
            }
            else{
                textAreaBorder.style.borderColor = 'orangered';
            }
        }
    }
});
//Reset button logic
resetButtonElement.addEventListener('click',function() {
    var timer = 0;
    var minutes = 0;
    var seconds = 0;
    var interval = 0;
    var timerRunning = false;
    textAreaElement.value='';
    clearInterval(interval);
    congMessage.style.display = 'none';
    textAreaBorder.style.borderColor = 'gray';
    minutesElement.textContent = '00';
    secondsElement.textContent ='00';

});


// Start Timer Function
function startTimer() {

    minutes = Math.floor((timer / 100) / 60);
    seconds = Math.floor((timer / 100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);
    timer++;

}
// leadingZero Function
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}

