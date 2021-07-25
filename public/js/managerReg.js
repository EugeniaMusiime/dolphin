//instantiate
let managerReg = document.getElementById('ManagerRegister')
let managerFirstname = document.getElementById('managerFirstname')
let managerSurname = document.getElementById('managerSurname')
let managerUsername = document.getElementById('managerUsername')
let managerPassword = document.getElementById('managerPassword')

//error small tags
let errorFirstName = document.getElementById('errorFirstName')
let errorSurName = document.getElementById('errorSurName')
let errorUsername = document.getElementById('errorUsername')
let errorPassword = document.getElementById('errorPassword')

//Regular Exp
let nameReg = /^[A-Za-z]+$/
let passwordReg = /^[0-9a-zA-Z]+$/

//event listeners....
managerFirstname.addEventListener('input', (checkFirstname = () => {
    if (!managerFirstname.value.match(nameReg)) {
        managerFirstname.style.border = '1px solid red'
        errorFirstName.innerHTML = 'Enter your First Name'
        errorFirstName.style = 'color: red;'
    } else {
        managerFirstname.style.border = '1px solid green'
        errorFirstName.innerHTML = ""
    }
}))

managerSurname.addEventListener('input', (checkSurName = () => {
    if (!managerSurname.value.match(nameReg)) {
        managerSurname.style.border = '1px solid red'
        errorSurName.innerHTML = 'Enter your Surname'
        errorSurName.style = 'color: red;'
    } else {
        managerSurname.style.border = '1px solid green'
        errorSurName.innerHTML = ""
    }
}))

managerUsername.addEventListener('input', (checkUsername = () => {
    if (!managerUsername.value.match(nameReg)) {
        managerUsername.style.border = '1px solid red'
        errorUsername.innerHTML = 'Please enter your username'
        errorUsername.style = 'color: red;'
    } else {
        managerUsername.style.border = '1px solid green'
        errorUsername.innerHTML = ""
    }
}))

managerPassword.addEventListener('input', (checkPassword = () => {
    if (!managerPassword.value.match(passwordReg)) {
        managerPassword.style.border = '1px solid red'
        errorPassword.innerHTML = 'Enter a valid password'
        errorPassword.style = 'color: red;'
    } else {
        managerPassword.style.border = '1px solid green'
        errorPassword.innerHTML = ""
    }
}))

validateManager = (event) => {
    let val = 0
    if (!managerFirstname.value.match(nameReg)) {
        managerFirstname.style.border = '1px solid red'
        errorFirstName.innerHTML = 'Enter your First Name'
        errorFirstName.style = 'color: red;'
        val++
    }

    if (!managerSurname.value.match(nameReg)) {
        managerSurname.style.border = '1px solid red'
        errorSurName.innerHTML = 'Enter your Surname'
        errorSurName.style = 'color: red;'
        val++
    }

    if (!managerUsername.value.match(nameReg)) {
        managerUsername.style.border = '1px solid red'
        errorUsername.innerHTML = 'Please enter your username'
        errorUsername.style = 'color: red;'
        val++
    }

    if (!managerPassword.value.match(passwordReg)) {
        managerPassword.style.border = '1px solid red'
        errorPassword.innerHTML = 'Enter a valid password'
        errorPassword.style = 'color: red;'
        val++
    }

    if (val > 0) {
        event.preventDefault()
    }
}