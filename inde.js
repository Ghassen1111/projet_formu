document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  if (!validateEmail(email)) {
    emailInput.classList.add("error");
    emailInput.classList.remove("success");
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailInput.classList.add("success");
    emailInput.classList.remove("error");
    emailError.style.display = "none";
  }

  if (password.length < 8) {
    passwordInput.classList.add("error");
    passwordInput.classList.remove("success");
    passwordError.textContent = "Password must be at least 8 characters long.";
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordInput.classList.add("success");
    passwordInput.classList.remove("error");
    passwordError.style.display = "none";
  }

  if (isValid) {

    alert("Form submitted successfully!");
  }
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

document.getElementById("googleSignIn").addEventListener("click", function () {
  alert("Google Sign-In not implemented.");
});
