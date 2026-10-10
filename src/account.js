// account.js: checks the sign-in and sign-up forms and switches between them (no server)
// It reuses isEmpty, isValidName, isValidEmail, showError and clearError from validation.js

// Rule: the password has at least 8 characters
function isValidPassword(value) {
  return value.length >= 8;
}

// Runs when the user clicks "Sign in"
function handleSignIn(event) {
  event.preventDefault(); // stops the page reloading; nothing is sent anywhere
  document.getElementById("signin-success").textContent = "";

  const email = document.getElementById("signin-email").value.trim();
  const password = document.getElementById("signin-password").value;
  let formIsValid = true;

  // Email: required, then a basic valid format
  if (isEmpty(email)) {
    showError("signin-email", "Please fill in this field.");
    formIsValid = false;
  } else if (!isValidEmail(email)) {
    showError("signin-email", "Enter a valid email, like name@example.com.");
    formIsValid = false;
  } else {
    clearError("signin-email");
  }

  // Password: required
  if (isEmpty(password)) {
    showError("signin-password", "Please fill in this field.");
    formIsValid = false;
  } else {
    clearError("signin-password");
  }

  if (formIsValid) {
    document.getElementById("signin-success").textContent =
      "Prototype only: the form is valid, but no real sign-in happens.";
    document.getElementById("signin-form").reset();
  } else {
    // Move the cursor to the first field with an error
    document.querySelector('#signin-form [aria-invalid="true"]').focus();
  }
}

// Runs when the user clicks "Sign up"
function handleSignUp(event) {
  event.preventDefault();
  document.getElementById("signup-success").textContent = "";

  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;
  const confirm = document.getElementById("signup-confirm").value;
  let formIsValid = true;

  // Name: required, then letters and spaces only
  if (isEmpty(name)) {
    showError("signup-name", "Please fill in this field.");
    formIsValid = false;
  } else if (!isValidName(name)) {
    showError("signup-name", "Use letters and spaces only.");
    formIsValid = false;
  } else {
    clearError("signup-name");
  }

  // Email: required, then a basic valid format
  if (isEmpty(email)) {
    showError("signup-email", "Please fill in this field.");
    formIsValid = false;
  } else if (!isValidEmail(email)) {
    showError("signup-email", "Enter a valid email, like name@example.com.");
    formIsValid = false;
  } else {
    clearError("signup-email");
  }

  // Password: required, then at least 8 characters
  if (isEmpty(password)) {
    showError("signup-password", "Please fill in this field.");
    formIsValid = false;
  } else if (!isValidPassword(password)) {
    showError("signup-password", "Use at least 8 characters.");
    formIsValid = false;
  } else {
    clearError("signup-password");
  }

  // Confirm password: required, then must match the password
  if (isEmpty(confirm)) {
    showError("signup-confirm", "Please fill in this field.");
    formIsValid = false;
  } else if (confirm !== password) {
    showError("signup-confirm", "The passwords do not match.");
    formIsValid = false;
  } else {
    clearError("signup-confirm");
  }

  if (formIsValid) {
    document.getElementById("signup-success").textContent =
      "Prototype only: the form is valid, but no account was created.";
    document.getElementById("signup-form").reset();
  } else {
    document.querySelector('#signup-form [aria-invalid="true"]').focus();
  }
}

// Connects each function to its form's submit event
document.getElementById("signin-form").addEventListener("submit", handleSignIn);
document.getElementById("signup-form").addEventListener("submit", handleSignUp);

// Shows one form and hides the other.
// "hidden" is an HTML attribute that removes an element from the page.
function showForm(which) {
  const showSignIn = (which === "signin");

  document.getElementById("signin-section").hidden = !showSignIn;
  document.getElementById("signup-section").hidden = showSignIn;

  // aria-pressed marks the selected button (for screen readers and our CSS)
  document.getElementById("show-signin").setAttribute("aria-pressed", showSignIn);
  document.getElementById("show-signup").setAttribute("aria-pressed", !showSignIn);
}

// Connects each switch button to showForm
document.getElementById("show-signin").addEventListener("click", function () {
  showForm("signin");
});
document.getElementById("show-signup").addEventListener("click", function () {
  showForm("signup");
});

// On load: show sign in and hide sign up.
// This is done in JavaScript, so both forms stay visible if JavaScript is off.
showForm("signin");