// Get the Input Elements

var userNameElement = document.querySelector('#username');
var emailElement = document.querySelector('#email');
var passwordElement = document.querySelector('#password');
var confirmPasswordElement = document.querySelector('#password_confirm');

// Get the Error Elements
var userNameErrorElement = document.querySelector('#name_error');
var emailErrorElement = document.querySelector('#email_error');
var passwordErrorElement = document.querySelector('#password_error');

// blur Event for UserName Field
userNameElement.addEventListener('blur',function() {
    // Clear the Error Message
    clearErrorMessage(userNameElement,userNameErrorElement);
});

// blur Event for Email Field
emailElement.addEventListener('blur',function() {
    // Clear the Error Messagebl
    clearErrorMessage(emailElement,emailErrorElement);
});

// blur Event for password Field
passwordElement.addEventListener('blur',function() {
    // Clear the Error Message
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});

// blur Event for confirm Password Field
confirmPasswordElement.addEventListener('blur',function() {
    // Clear the Error Message
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});

// validate Function
function validate() {
    var isFormValid = false;
    var message = '';

    // Required UserName Validation
    if(userNameElement.value === ''){
        message = 'UserName is Required';
        displayErrorMessage(userNameElement,userNameErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // UserName Length Validation
    if(userNameElement.value.length < 5){
        message = 'Enter at least 5 letters';
        displayErrorMessage(userNameElement,userNameErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // Pattern Match Validation for UserName
    if(!userNameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        message = 'RegExp is Not Matched';
        displayErrorMessage(userNameElement,userNameErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // Required Email Validation
    if(emailElement.value === ''){
        message = 'Email is Required';
        displayErrorMessage(emailElement,emailErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // Required Password Validation
    if(passwordElement.value === ''){
        message = 'Password is Required';
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // Required Confirm Password Validation
    if(confirmPasswordElement.value === ''){
        message = 'ConfirmPassword is Required';
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }

    // Passwords match validation
    if(passwordElement.value !== confirmPasswordElement.value){
        message = "Passwords didn't Match";
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        isFormValid = false;
        return isFormValid;
    }


    if(isFormValid){
        return isFormValid;
    }
    else{
        alert('Form Submitted Successfully');
        return true;
    }
}

// Function for display Error Message
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.borderColor = 'red';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// Clear Error Messages
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.backgroundColor = 'white';
    inputElement.style.borderColor = 'gray';
    inputElement.style.boxShadow = '0 0 0px white';
    errorElement.textContent = '';
}