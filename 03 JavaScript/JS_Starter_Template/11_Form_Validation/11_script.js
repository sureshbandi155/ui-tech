var userName = document.querySelector('#text');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirmpass');

var userNameError = document.querySelector('#errorText');
var emailError = document.querySelector('#emailError');
var confirmPasswordError= document.querySelector('#errorConfirmps');

//clear Error messages
userName.addEventListener('blur',function () {
   clearErrorMessage(userName,userNameError);
});
email.addEventListener('blur',function () {
   clearErrorMessage(email,emailError);
});
password.addEventListener('blur',function () {
    clearErrorMessage(password,confirmPasswordError);
});
email.addEventListener('blur',function () {
    clearErrorMessage(password,confirmPasswordError);
    clearErrorMessage(confirmPassword,confirmPasswordError);
});
function validate() {
    var isForm = false;
    var message = '';
    if (userName.value === ''){
       message = 'User name is Required';
       displayErrorMessage(userName,userNameError,message);
       isForm = false;
       return isForm;
    }
    if(userName.value.length<5){
        message = 'atleast five characters';
        displayErrorMessage(userName,userNameError,message);
        isForm = false;
        return isForm;
    }
    if(email.value === ''){
        message = 'Email is Required';
        displayErrorMessage(email,emailError,message);
        isForm = false;
        return isForm;
    }
    if(password.value === ''){
        message = 'password is Required';
        displayErrorMessage(password,confirmPasswordError,message);
        isForm = false;
        return isForm;
    }
    if(confirmPassword.value === ''){
        message = 'confirm password is Required';
        displayErrorMessage(confirmPassword,confirmPasswordError,message);
        isForm = false;
        return isForm;
    }
    if(password.value !== confirmPassword.value){
        message = "password didn't match";
        displayErrorMessage(password,confirmPasswordError,message);
        displayErrorMessage(confirmPassword,confirmPasswordError,message);
        isForm = false;
        return isForm;
    }
    if(isForm){
        return isForm;
    }
    else {
        alert('form submitted successfully');
    }
    
}
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.borderColor = 'red';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.backgroundColor = 'white';
    inputElement.style.borderColor = 'gray';
    inputElement.style.boxShadow = '0 0 0px white';
    errorElement.textContent = '';
}