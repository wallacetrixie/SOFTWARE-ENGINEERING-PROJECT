function toggleForms()
 {
  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");
  var signUpLink = document.getElementById("signUpLink");

  // Hide the login form and show the signup form
  loginForm.style.display = "none";
  signupForm.style.display = "block";

  // Hide the login button and "Don't have an account?" text
  signUpLink.style.display = "none";
}

function login() {
  windows.open('homepage.html');
}

function signup() {
  // Add your signup logic here
  alert("Account created successfully!");

  // Switch to the login form after successful signup
  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");
  var signUpLink = document.getElementById("signUpLink");

  loginForm.style.display = "block";
  signupForm.style.display = "none";

  // Show the login button and "Don't have an account?" text
  signUpLink.style.display = "block";
}
