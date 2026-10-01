const form = document.querySelector("form");

function showError(field, message) {

  let error = field.parentElement.querySelector(".error");
  
  if (!error) {

    error = document.createElement("span");
    error.className = "error";
    field.insertAdjacentElement("afterend", error);

  }

  error.textContent = message;
}

function validateField(field) {

  const value = field.value.trim();

  let message = "";

  if (field.required && value === "") {

    message = "Please fill out this field.";

  } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

    message = "Enter an email like name@example.com.";

  }

  showError(field, message);

  return message === "";

}

form.addEventListener("submit", function (event) {

  let valid = true;

  form.querySelectorAll("input, select, textarea").forEach(function (field) {

    if (!validateField(field)) {
      valid = false;
    }

  });

  if (!valid) {

    event.preventDefault();
  }
});