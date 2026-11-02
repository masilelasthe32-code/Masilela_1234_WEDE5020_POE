const form = document.getElementById('enquiryForm');
const nameinput = document.getElementById('name');
const emailinput = document.getElementById('email');
const messageinput = document.getElementById('message');
const passwordinput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
});

console.log('Form stopped for validation');

if (nameinput.value.trim() === '') {
  alert('Please enter your name.');
  nameinput.focus();
  return;
}
if (emailinput.value.trim() === '') {
  alert('Please enter your email.');
  emailinput.focus();
  return;
}
if (messageinput.value.trim() === '') {
  alert('Please enter your message.');
  messageinput.focus();
  return;
}
if (passwordinput.value.trim() === '') {
  alert('Please enter your password.');
  passwordinput.focus();
  return;
}
else if (passwordinput.value.trim().length < 8) {
  alert('Password must be at least 8 characters long.');
  passwordinput.focus();
  return;
}
else {
    clearError(passwordError);
}



const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

