// Definitions
const loginContainer = document.getElementById("login-container");
const content = document.getElementById("content");
const contentText = document.getElementById("content-text");
const contentHeading = document.getElementById("content-heading");

const usernameEnter = document.getElementById("username-enter");
const passwordEnter = document.getElementById("password-enter");

const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");

// Array containing usernames
const userList = [
    {id: 1, username: 'janne', password: 'test'},
    {id: 2, username: 'janne1', password: 'test1'},
    {id: 3, username: 'janne2', password: 'test2'},
    {id: 4, username: 'janne3', password: 'test3'},
    {id: 5, username: 'janne4', password: 'test4'},
    {id: 6, username: 'janne5', password: 'test5'}
];

// Login function 

loginButton.addEventListener('click', validateLogin);

function validateLogin() {
    const username = usernameEnter.value;
    const password = passwordEnter.value;

    for (const user of userList) {
        if (user.username === username && user.password === password) {
            localStorage.setItem("Username", username);
            localStorage.setItem("Password", password);

            alert("Login Successful!");

            login();
            break;
        } 
    }
    alert("Login Failed!")
};

function login() {
    loginContainer.style.display = "block";
    content.style.display = "none";
    logoutButton.style.display = "none";
};

logoutButton.addEventListener("click", executeLogout);

function executeLogout() {

    localStorage.clearItem("Username", usernameEnter.value);
    localStorage.clearItem("Password", passwordEnter.value);

    loginContainer.style.display = "none";
    content.style.display = "block";
    contentHeading.insertAdjacentHTML("beforeend", " " + usernameEnter.value + "!");
    logoutButton.style.display = "block";

};
