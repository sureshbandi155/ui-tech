//get the elements
var userName = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPass = document.querySelector('#password_confirm');

var userNameError = document.querySelector('#name_error');
var emailError = document.querySelector('#email_error');
var passwordError = document.querySelector('#password_error');



//form validate
function validate() {
    var isFormField = false;
    var message = '';

    //required user name validation
    if (userName.value === ''){
        message = 'Enter userName';
        displayErrorMessages(userName,userNameError,message);
        isFormField = false;
        return isFormField;
    }
    if (userName.value.length < 5){
        message = 'Enter Atleast 5 characters';
        displayErrorMessages(userName,userNameError,message);
        isFormField = false;
        return isFormField;
    }
    if (email.value === ''){
        message='Enter Email id';
        displayErrorMessages(email,emailError,message);
        isFormField= false;
        return isFormField;
    }
    if (password.value === ''){
        message = 'Password is Required';
        displayErrorMessages(password,passwordError,message);
        isFormField = false;
        return isFormField;
    }
    if (confirmPass.value === ''){
        message = 'Password is Required';
        displayErrorMessages(confirmPass,passwordError,message);
        isFormField = false;
        return isFormField;
    }
    if (password.value !== confirmPass.value){
        message ="password didn't match";
        displayErrorMessages(password,passwordError,message);
        displayErrorMessages(confirmPass,passwordError,message);
        isFormField = false;
        return isFormField;
    }
    if(isFormField){
        return isFormField;
    }
    else {
        alert('form submitted successfully');
        return true;
    }

}

//display error messages
function displayErrorMessages(inputElement,errorElement,message) {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.color = 'red';
    inputElement.style.boxShadow = '0 0 15px black';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}
