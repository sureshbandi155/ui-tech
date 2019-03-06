//get html elements
var cardHeader = $('#form-card-header');
var cardTitle = $('.card-title');
var cardBody = $('#submit-button');


$('#login-button').click(function () {
   cardHeader.removeClass('bg-teal').removeClass('bg-danger').addClass('bg-success');
   cardTitle.text('Login Here');
   cardBody.text('Login').removeClass('btn-teal').removeClass('btn-danger').addClass('btn-success');
});
$('#register-button').click(function () {
    cardHeader.removeClass('bg-teal').addClass('bg-warning').removeClass('bg-success');
    cardTitle.text('Register Here');
    cardBody.text('Register').removeClass('btn-teal').addClass('btn-warning').removeClass('btn-success');
});
$('#signup-button').click(function () {
    cardHeader.addClass('bg-teal').removeClass('bg-danger').removeClass('bg-success');
    cardTitle.text('SignUp Here');
    cardBody.text('Signup').addClass('btn-teal').removeClass('btn-danger').removeClass('btn-success');
});