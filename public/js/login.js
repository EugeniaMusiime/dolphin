//instantiation 
let loginForm = document.getElementById('loginForm')
let loginUsername = document.getElementById('loginusername')
let loginPassword = document.getElementById('loginpassword')

//small error tags
let loginerrorUsername = document.getElementById('loginerrorUsername')
let loginerrorPassword = document.getElementById('loginerrorPassword')

//Regular Expressions
let nameReg = /^[A-Za-z\s]+$/
let passwordReg = /^[0-9a-zA-Z]+$/

//event listeners for when information is being input into the system
loginUsername.addEventListener('input', (checkLoginUsername = () => {
    if (!loginUsername.value.match(nameReg)) {
        loginUsername.style.border = '1px solid red'
        loginerrorUsername.innerHTML = 'Enter your correct username'
        loginerrorUsername.style = 'color: red;'
    }else{
        loginUsername.style.border = '1px solid green'
        loginerrorUsername.innerHTML = ""
    }
}))

loginPassword.addEventListener('input', (checkLoginPassword = () => {
    if (loginPassword.value === "") {
        loginPassword.style.border = '1px solid red'
        loginerrorPassword.innerHTML = 'Please enter your password'
        loginerrorPassword.style = 'color: red;'
    }else{ 
        loginPassword.style.border = '1px solid green'
        loginerrorPassword.innerHTML = ""
    }
}))

validateLogin = (event) => {
    let val = 0
    if (!loginUsername.value.match(nameReg)) {
        loginUsername.style.border = '1px solid red'
        loginerrorUsername.innerHTML = 'Enter your correct username'
        loginerrorUsername.style = 'color: red;'
        val++
    }
    if (loginPassword.value === "") {
        loginPassword.style.border = '1px solid red'
        loginerrorPassword.innerHTML = 'Please enter your password'
        loginerrorPassword.style = 'color: red;'
        val++
    }
    if (val > 0){
        event.preventDefault();
    }
}