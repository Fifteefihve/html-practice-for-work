const registerButton = document.getElementById("register");
registerButton.addEventListener("click", registerUser);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const maleRadioButton = document.getElementById("male");
const femaleRadioButton = document.getElementById("female");
const adultInput = document.getElementById("adult");
const countryInput = document.getElementById("country");
const numberInput = document.getElementById("number");

function registerUser() {

    // get all users from stoorage
    const usersString = localStorage.getItem("users") || "[]"
    const users = JSON.parse(usersString);

    // create new users object

    const userData = {
        email: emailInput.value,
        password: passwordInput.value,
        name: nameInput.value,
        surname: surnameInput.value,
        male: maleRadioButton.checked,
        female: femaleRadioButton.checked,
        adult: adultInput.checked,
        country: countryInput.value,
        number: numberInput.value
    }

    // check if email is already in use by an account
    for(let i = 0; i < users.length; i++) {
        let user = users[i];
        if(userData.email.toLowerCase() == user.email.toLowerCase()) {
            // provided email matches with one thats already registered, dont register
            console.log('Found duplicate');
            return alert("Email already in use.");
        }
    }

    users.push(userData);
    console.log(userData, users);
    
    localStorage.setItem("users", JSON.stringify(users));
}