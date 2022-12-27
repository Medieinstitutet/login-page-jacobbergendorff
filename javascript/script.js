// Array containing usernames
var userList = [
    {username: "janne", password: "test"},
    {username: "janne1", password: "test1"},
    {username: "janne2", password: "test2"},
    {username: "janne3", password: "test3"},
    {username: "janne4", password: "test4"},
    {username: "janne5", password: "test5"}
];

// Definitions of items relating to the login and registration forms
const loginContainer = document.getElementById('login-container');
const content = document.getElementById('content');
const contentText = document.getElementById('content-text');
const contentHeading = document.getElementById('content-heading');

const usernameEnter = document.getElementById('username-enter');
const passwordEnter = document.getElementById('password-enter');

const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');


// Function that executes login 
loginButton.addEventListener("click", executeLogin);

function executeLogin() {
    for (var i = 0; i < userList.length; i++) {
        if (usernameEnter.value === userList[i].username && passwordEnter.value === userList[i].password) {

            localStorage.setItem("Username", usernameEnter.value);
            localStorage.setItem("Password", passwordEnter.value);

            loginContainer.style.display = "none";
            content.style.display = "block";
            contentHeading.insertAdjacentHTML("beforeend", " " + usernameEnter.value + "!");
            logoutButton.style.display = "block";

            alert("Welcome to Global Internet Solutions " + usernameEnter.value + "!");

            return true;

        } else {

            alert("Login failed! Try again " + usernameEnter.value + "!");

            return false;
}}};
    
logoutButton.addEventListener("click", executeLogout);

function executeLogout() {

    localStorage.clearItem("Username", usernameEnter.value);
    localStorage.clearItem("Password", passwordEnter.value);
    
    loginContainer.style.display = "block";
    content.style.display = "none";
    logoutButton.style.display = "none";
};



