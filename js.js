document.addEventListener("DOMContentLoaded", function () {
  // retrieve DOM elements
  const form = document.querySelector("form");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#password-conf");
  const passwordErrorDiv = document.querySelector(".error-message");

  // function to show error
  function showError(message) {
    if (passwordErrorDiv) {
      passwordErrorDiv.textContent = message;
    }
    // just to style error div
    if (passwordInput) {
      passwordInput.classList.add("error-input");
    }
    if (confirmPasswordInput) {
      confirmPasswordInput.classList.add("error-input");
    }
  }

  // function to clear error output
  function clearError() {
    if (passwordErrorDiv) {
      passwordErrorDiv.textContent = "";
    }
    // optional
    if (passwordInput) {
      passwordInput.classList.remove("error-input");
    }
    if (confirmPasswordInput) {
      confirmPasswordInput.classList.remove("error-input");
    }
  }

  // function to Validate password matched
  function validatePasswords() {
    if (!passwordInput || !confirmPasswordInput) {
      console.error("Please fill both password fields!");
      return false;
    }

    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    if (passwordValue === "" && confirmPasswordValue === "") {
      clearError();
      return true;
    }

    if (passwordValue === "" || confirmPasswordValue === "") {
      showError("Please fill both password fields!");
      return false;
    }

    // check password matches
    if (passwordValue !== confirmPasswordValue) {
      showError("Password fields doesn't match");
      return false;
    }

    clearError();
    return true;
  }

  // submit form event function
  if (form) {
    form.addEventListener("submit", function (event) {
      // validate password matches
      const passwordsAreValid = validatePasswords();

      if (!passwordsAreValid) {
        // stop sending form if passwords does not match each other
        event.preventDefault();
        console.log("Form submit stopped due to password not match.");
      } else {
        console.log("Submitting form");
      }
    });
  } else {
    console.error("عنصر فرم با شناسه 'registrationForm' یافت نشد.");
  }

  // // on type validating
  // if (confirmPasswordInput) {
  //   confirmPasswordInput.addEventListener("input", validatePasswords);
  // }
  // if (passwordInput) {
  //   passwordInput.addEventListener("input", validatePasswords);
  // }
});
