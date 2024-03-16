"use strict";

function showSignUpForm() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
}

function showLogInForm() {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

function checkPasswordStrength() {
  var newPassword = document.getElementById('newPassword').value;
  var passwordStrengthMessage = document.getElementById('passwordStrengthMessage');

  if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) && /\d/.test(newPassword) && /[!@$%^&*()_+=<>{}.,/?\/[\]]/.test(newPassword)) {
    passwordStrengthMessage.textContent = "Password strength: Strong";
    passwordStrengthMessage.style.color = "green";
    passwordStrengthMessage.style.display = "block";
  } else {
    passwordStrengthMessage.textContent = "Password must have at least: a character, uppercase, lowercase, and a number";
    passwordStrengthMessage.style.color = "red";
    passwordStrengthMessage.style.display = "block";
  }
}

function registerUser() {
  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (newPassword === confirmPassword) {
    alert('Account created successfully');
  } else {
    alert('Passwords do not match,try again');
  }
}

function login() {
  window.open('homepage.html');
}