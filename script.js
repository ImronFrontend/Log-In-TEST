const elForm = document.querySelector(".form");
const elEmail = document.querySelector("#email");
const elPassword = document.querySelector("#password");
const emailError = document.querySelector(".email-error");
const passwdError = document.querySelector(".passwd-error");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailValue = elEmail.value.trim();
    const passwordValue = elPassword.value.trim();

    if (!emailValue || !passwordValue) {
        alert("iltimos maydonni toldiring");
        return;
    }

    if (!emailRegex.test(emailValue)) {
        alert("iltimos togri email manzilini kiriting");
        return;
    }

    if (!passwordRegex.test(passwordValue)) {
        alert("iltimos togri parolni kiriting");
        return;
    }

    console.log("Email:", emailValue);
    console.log("Parol:", passwordValue);
    alert("kirdingiz!");
});

elEmail.addEventListener('input', () => {
    const isValid = emailRegex.test(elEmail.value.trim());
    if (isValid) {
        emailError.textContent = "togri email";
        emailError.style.color = "green";
    } else {
        emailError.textContent = "notogri email";
        emailError.style.color = "red";
    }
});

elPassword.addEventListener('input', () => {
    const isValid = passwordRegex.test(elPassword.value.trim());
    if (isValid) {
        passwdError.textContent = "kuchli parol";
        passwdError.style.color = "green";
    } else {
        passwdError.textContent = "kuchsiz parol";
        passwdError.style.color = "red";
    }
});