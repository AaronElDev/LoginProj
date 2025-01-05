const signupbutton = document.getElementById('signupbutton');
const signinbutton = document.getElementById('signinbutton');
const signinForm = document.getElementById('signin');
const signupForm = document.getElementById('signup');

signupbutton.addEventListener('click', function () {
    signinForm.style.display = "none";
    signupForm.style.display = "block"; // Show sign-up form
});

signinbutton.addEventListener('click', function () {
    signupForm.style.display = "none";
    signinForm.style.display = "block"; // Show sign-in form
});