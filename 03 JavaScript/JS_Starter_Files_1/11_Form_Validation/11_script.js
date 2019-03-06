var username= document.querySelector('#username');
var email = document.querySelector('#email');
var pass = document.querySelector('#password');
var conPass = document.querySelector('#password_confirm');

var eName = document.querySelector('#name_error');
var eEmail = document.querySelector('#email_error');
var ePass = document.querySelector('#password_error');
username.addEventListener('blur',function () {
    clearErrorMessage(username,eName);
});
email.addEventListener('blur',function () {
   clearErrorMessage(email,eEmail);
});
pass.addEventListener('blur',function () {
   clearErrorMessage(pass,ePass);
   clearErrorMessage(conPass,ePass);
});
conPass.addEventListener('blur',function () {
    clearErrorMessage(pass,ePass);
    clearErrorMessage(conPass,ePass);
});
function validate() {
    isFormValid = false;
    message = '';
    if (username.value === '') {
        message = 'username is required';
        displayErrorMessage(username,eName,message);
        isFormValid = false;
        return isFormValid;
    }
    if (username.value.length < 5){
        message='username should be atleast 5 characters';
        displayErrorMessage(username,eName,message);
        isFormValid = false;
        return isFormValid;
    }
    if (email.value === '') {
        message = 'email is required';
        displayErrorMessage(email,eEmail,message);
        isFormValid = false;
        return isFormValid;
    }
    if (pass.value === ''){
        message = 'password is required';
        displayErrorMessage(pass,ePass,message);
        isFormValid = false;
        return isFormValid;
    }
    if (conPass.value === ''){
        message = 'confirm password is required';
        displayErrorMessage(conPass,ePass,message);
        isFormValid = false;
        return isFormValid;
    }
    if (pass.value !== conPass.value) {
        message = "Password didn't match please check";
        displayErrorMessage(pass,ePass,message);
        displayErrorMessage(conPass,ePass,message);
        isFormValid = false;
        return isFormValid;
    }
}
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.borderColor = 'red';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.style.color = 'red';
    errorElement.textContent = message;
}
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.backgroundColor = 'white';
    inputElement.style.borderColor = 'gray';
    inputElement.style.boxShadow = '0 0 0px white';
    errorElement.style.color = '';
    errorElement.textContent = '';


}