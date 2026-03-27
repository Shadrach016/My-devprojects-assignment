

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const success = document.getElementById("success");


nameInput.addEventListener("input", function () {
    if (nameInput.value === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }
});

emailInput.addEventListener("input", function () {
    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Enter a valid email";
    } else {
        emailError.textContent = "";
    }
});


passwordInput.addEventListener("input", function () {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
    } else {
        passwordError.textContent = "";
    }
});


form.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;

    if (nameInput.value === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        success.textContent = "Form submitted successfully!";
    } else {
        success.textContent = "";
    }
});
