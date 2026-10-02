// validation.js: checks the contact form with our own functions (no server involved)

// Rule: the value is not empty. trim() removes spaces at the start and end,
// so a value made only of spaces counts as empty.
function isEmpty(value) {
  return value.trim() === "";
}

// Rule: letters and spaces only, no numbers or symbols.
// The pattern ^[A-Za-z ]+$ means: from start to end, only letters or spaces.
function isValidName(value) {
  return /^[A-Za-z ]+$/.test(value);
}

// Rule: digits only, exactly 9 or 10 of them.
function isValidPhone(value) {
  return /^[0-9]{9,10}$/.test(value);
}

// Rule: basic email shape (text, then @, then text, then a dot, then text).
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Shows an error message next to a field and marks the field as invalid
// (aria-invalid also lets screen readers and our CSS know about the error).
function showError(fieldId, message) {
  document.getElementById(fieldId + "-error").textContent = message;
  document.getElementById(fieldId).setAttribute("aria-invalid", "true");
}

// Removes the error message and the invalid mark from a field.
function clearError(fieldId) {
  document.getElementById(fieldId + "-error").textContent = "";
  document.getElementById(fieldId).removeAttribute("aria-invalid");
}

// Runs every rule when the user clicks Send.
function validateForm(event) {
  event.preventDefault(); // stops the page from reloading; nothing is sent anywhere

  // Remove any success message left from a previous attempt
  document.getElementById("success").textContent = "";

  // Read the values; trim() removes accidental spaces at the start and end
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const query = document.getElementById("query").value;
  const message = document.getElementById("message").value.trim();

  // This stays true unless one of the checks below finds a problem
  let formIsValid = true;

  // Name: required, then letters and spaces only
  if (isEmpty(name)) {
    showError("name", "Please fill in this field.");
    formIsValid = false;
  } else if (!isValidName(name)) {
    showError("name", "Use letters and spaces only.");
    formIsValid = false;
  } else {
    clearError("name");
  }

  // Phone: required, then numbers only, 9 or 10 digits
  if (isEmpty(phone)) {
    showError("phone", "Please fill in this field.");
    formIsValid = false;
  } else if (!isValidPhone(phone)) {
    showError("phone", "Use numbers only, 9 or 10 digits.");
    formIsValid = false;
  } else {
    clearError("phone");
  }

  // Email: required, then a basic valid format
  if (isEmpty(email)) {
    showError("email", "Please fill in this field.");
    formIsValid = false;
  } else if (!isValidEmail(email)) {
    showError("email", "Enter a valid email, like name@example.com.");
    formIsValid = false;
  } else {
    clearError("email");
  }

  // Query type: the "Choose one..." option has an empty value, so isEmpty works here
  if (isEmpty(query)) {
    showError("query", "Please choose a query type.");
    formIsValid = false;
  } else {
    clearError("query");
  }

  // Message: required
  if (isEmpty(message)) {
    showError("message", "Please write a message.");
    formIsValid = false;
  } else {
    clearError("message");
  }

  if (formIsValid) {
    // All fields passed: show the success message and clear the form
    document.getElementById("success").textContent = "Form submitted successfully!";
    document.getElementById("contact-form").reset();
  } else {
    // Move the cursor to the first field with an error (helps keyboard users)
    document.querySelector('[aria-invalid="true"]').focus();
  }
}

// Connects validateForm to the form's submit event.
document.getElementById("contact-form")
        .addEventListener("submit", validateForm);