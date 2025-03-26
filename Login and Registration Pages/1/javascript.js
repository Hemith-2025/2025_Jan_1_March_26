const formsToggle = document.getElementById("formsToggle");
const infoToggle = document.getElementById("infoToggle");
const loginForm = document.getElementById("loginForm");
const registrationForm = document.getElementById("registrationForm");
const registrationToggleBtn = document.getElementById("registrationToggleBtn");
const loginToggleBtn = document.getElementById("loginToggleBtn");
registrationToggleBtn.addEventListener("click" , (event) => {
    formsToggle.classList.remove('showLoginForm');
    formsToggle.classList.add('showRegistrationForm');
    event.preventDefault();
    loginForm.reset();
    infoToggle.classList.remove('showLoginInfo');
    infoToggle.classList.add('showRegistrationInfo');
});
loginToggleBtn.addEventListener("click" , (event) => {
    formsToggle.classList.remove('showRegistrationForm');
    formsToggle.classList.add('showLoginForm');
    event.preventDefault();
    registrationForm.reset();
    infoToggle.classList.remove('showRegistrationInfo');
    infoToggle.classList.add('showLoginInfo');
});
const body = document.body;
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click" , () => {
    body.classList.toggle('dark');
    if (themeBtn.textContent == "Dark"){
        themeBtn.textContent = "Light";
    }
    else {
        themeBtn.textContent = "Dark";
    }
});