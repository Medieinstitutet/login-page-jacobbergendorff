// Definitions of items relating to the login and registration forms
const loginContainer = document.getElementById('login-container');
const content = document.getElementById('content');
const contentText = document.getElementById('content-text');
const contentHeading = document.getElementById('content-heading');

const usernameEnter = document.getElementById('username-enter');
const passwordEnter = document.getElementById('password-enter');

const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');

loginButton.addEventListener("click", executeLogin);

function executeLogin() {
    if (usernameEnter.value == "janne" && passwordEnter.value == "test") {
        loginContainer.style.display = "none";
        content.style.display = "block";
        contentHeading.insertAdjacentHTML("beforeend", " " + usernameEnter.value + "!");
        logoutButton.style.display = "block";
    } else {
        alert("Login failed");
    }};

localStorage.setItem("username", usernameEnter.value);
localStorage.setItem("password", passwordEnter.value);
console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("password"));

logoutButton.addEventListener("click", executeLogout);

function executeLogout() {
    loginContainer.style.display = "block";
    content.style.display = "none";
    logoutButton.style.display = "none";
};




