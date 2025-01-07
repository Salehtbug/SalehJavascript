
const nameRegex = /^[A-Za-z]+$/;
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


function validateFirstName() {
  const firstName = document.getElementById('firstName').value.trim();
  const firstNameError = document.getElementById('firstNameError');
  if (!nameRegex.test(firstName)) {
    firstNameError.textContent = 'First name must contain only letters.';
  } else {
    firstNameError.textContent = '';
  }
}
function validateLastName() {
  const lastName = document.getElementById('lastName').value.trim();
  const lastNameError = document.getElementById('lastNameError');
  if (!nameRegex.test(lastName)) {
    lastNameError.textContent = 'Last name must contain only letters.';
  } else {
    lastNameError.textContent = '';
  }
}
function validateBirthDate() {
  const birthDate = document.getElementById('birthDate').value.trim();
  const birthDateError = document.getElementById('birthDateError');
  if (!dateRegex.test(birthDate)) {
    birthDateError.textContent = 'The format should be dd/mm/yyyy.';
  } else {
    birthDateError.textContent = '';
  }
}
function validateEmail() {
  const email = document.getElementById('email').value.trim();
  const emailError = document.getElementById('emailError');
  if (!emailRegex.test(email)) {
    emailError.textContent = 'The email is not valid.';
  } else {
    emailError.textContent = '';
  }
}
function validateConfirmEmail() {
  const email = document.getElementById('email').value.trim();
  const confirmEmail = document.getElementById('confirmEmail').value.trim();
  const confirmEmailError = document.getElementById('confirmEmailError');
  if (email !== confirmEmail) {
    confirmEmailError.textContent = 'Emails do not match.';
  } else {
    confirmEmailError.textContent = '';
  }
}
function validatePassword() {
  const password = document.getElementById('password').value.trim();
  const passwordError = document.getElementById('passwordError');
  if (!passwordRegex.test(password)) {
    passwordError.textContent = 'Password must be 8+ characters, with upper, lower, number, and special character.';
  } else {
    passwordError.textContent = '';
  }
}
function validateConfirmPassword() {
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match.';
  } else {
    confirmPasswordError.textContent = '';
  }
}
document.getElementById('firstName').addEventListener('input', validateFirstName);
document.getElementById('lastName').addEventListener('input', validateLastName);
document.getElementById('birthDate').addEventListener('input', validateBirthDate);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('confirmEmail').addEventListener('input', validateConfirmEmail);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirmPassword').addEventListener('input', validateConfirmPassword);
