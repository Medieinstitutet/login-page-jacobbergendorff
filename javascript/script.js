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
    {id: 6, username: 'janne5', password: 'test5'},
];

// Specifications for localStorage - controls if the user is logged in
const localStorageUsername = localStorage.getItem("Username");
const localStoragePassword = localStorage.getIten("Password");

if (localStorageUsername && localStoragePassword) {
    for (const user of userList) {
        if (user.username === localStorageUsername && user.password = localStoragePassword) {
            console.log(`Username: ${localStorageUsername}, Password: ${localStoragePassword}`);
            isLoggedIn = true;
            break;
        }
    }
};

// Login function 

loginButton.addEventListener('click', validateLogin);

function validateLogin() {
    const username = usernameEnter.value;
    const password = passwordEnter.value;

    for (const user of userList) {

        if (user.username === username && user.password === password) {
            localStorage.setItem("Username", username);
            localStorage.setItem("Password", password);

            console.log(`Username: ${username}, Password: ${password}`);

            login();

            alert("Login Successful!");

            return;
        } 
    }
    alert("Login Failed!");
};

function login() {
    loginContainer.style.display = "none";
    contentHeading.insertAdjacentHTML("beforeend", " " + usernameEnter.value + "!");
    logoutButton.style.display = "block";
    content.style.display = "block";
};

logoutButton.addEventListener("click", executeLogout);

function executeLogout() {

    localStorage.removeItem("Username", usernameEnter.value);
    localStorage.removeItem("Password", passwordEnter.value);

    loginContainer.style.display = "block";
    content.style.display = "none";
    logoutButton.style.display = "none";

};