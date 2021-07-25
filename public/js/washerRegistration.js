//Access the form elements
let fullName = document.getElementById("fullName")
let birthDate = document.getElementById("birthDate")
let inputGender = document.getElementById("inputGender")
let NIN = document.getElementById("NIN")
let residence = document.getElementById("residence")
let employeeId = document.getElementById("employeeId")

//Access the small tags that hold the error string
let errorFullName = document.getElementById("errorFullName")
let errorBirthDate = document.getElementById("errorBirthDate")
let errorGender = document.getElementById("errorGender")
let errorNIN = document.getElementById("errorNIN")
let errorResidence = document.getElementById("errorResidence")
let errorEmployeeId = document.getElementById("errorEmployeeId")

//Regular expressions
var date = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/
let alphaRegex = /^[A-Za-z\s]+$/
let empIdRegex = /^zawash-[0-9]{3}$/
let ninRegex = /^C[A-Z]{1}[0-9]{8}[A-Z]{4}$/

Adult = (inputdate) => {
    let date = inputdate.replace(/-/gi, ", ")
    let today = new Date().getTime()
    let bd = new Date(date).getTime()
    return (today - bd)/(1000*60*60*24*30*12) >= 18 ? true : false  
}

fullName.addEventListener(
    "input",
    (checkFullField = () => {
        if (fullName.value.length < 8 || !fullName.value.match(alphaRegex)) {
            fullName.style.border = "1px solid red"
            errorFullName.innerHTML =
                "Full name should not be less than 8 characters."
            errorFullName.style = "color: red;"
        } else {
            fullName.style.border = "1px solid green"
            errorFullName.innerHTML = ""
        }
    })
)

birthDate.addEventListener(
    "input",
    (checkBirthDateField = () => {
        if (!Adult(birthDate.value)) {
            birthDate.style.border = "1px solid red"
            errorBirthDate.innerHTML =
                "Please input your date of birth (18 years and above)"
            errorBirthDate.style = "color: red;"
        } else {
            birthDate.style.border = "1px solid green"
            errorBirthDate.innerHTML = ""
        }
    })
)

inputGender.addEventListener(
    "click",
    (checkGenderField = () => {
        if (inputGender.value == "Choose:") {
            inputGender.style.border = "1px solid red"
            errorGender.innerHTML = "Select gender"
            errorGender.style = "color: red;"
        } else {
            inputGender.style.border = "1px solid green"
            errorGender.innerHTML = ""
        }
    })
)

NIN.addEventListener(
    "input",
    (checkNINfield = () => {
        if (NIN.value.length !== 14 || !NIN.value.match(ninRegex)) {
            NIN.style.border = "1px solid red"
            errorNIN.innerHTML = "Input a valid NIN"
            errorNIN.style = "color:red;"
        } else {
            NIN.style.border = "1px solid green"
            errorNIN.innerHTML = ""
        }
    })
)

residence.addEventListener(
    "input",
    (checkResidenceField = () => {
        if (!residence.value.match(alphaRegex)) {
            residence.style.border = "1px solid red"
            errorResidence.innerHTML = "Input washer's residence"
            errorResidence.style = "color: red;"
        } else {
            residence.style.border = "1px solid green"
            errorResidence.innerHTML = ""
        }
    })
)

employeeId.addEventListener(
    "input",
    (checkEmployeeIdField = () => {
        if (!employeeId.value.match(empIdRegex)) {
            employeeId.style.border = "1px solid red"
            errorEmployeeId.innerHTML = "Input the employee ID"
            errorEmployeeId.style = "color: red;"
        } else {
            employeeId.style.border = "1px solid green"
            errorEmployeeId.innerHTML = ""
        }
    })
)

// Prevents the form from submitting if any of the fields do not meet the validation criteria
validateWasher = (event) => {
    let val = 0
    if (fullName.value.length < 8 || !fullName.value.match(alphaRegex)) {
        fullName.style.border = "1px solid red"
        errorFullName.innerHTML =
            "Full name should not be less than 8 characters."
        errorFullName.style = "color: red;"
        val++
    }

    if (!Adult(birthDate.value)) {
        birthDate.style.border = "1px solid red"
        errorBirthDate.innerHTML =
            "Please input your date of birth.(18 years and above)"
        errorBirthDate.style = "color: red;"
        val++
    }

    if (inputGender.value === "Choose:") {
        inputGender.style.border = "1px solid red"
        errorGender.innerHTML = "Select gender"
        errorGender.style = "color: red;"
        val++
    }

    if (NIN.value.length !== 14 || !NIN.value.match(ninRegex)) {
        NIN.style.border = "1px solid red"
        errorNIN.innerHTML = "Input a valid NIN"
        errorNIN.style = "color: red"
        val++
    }

    if (!residence.value.match(alphaRegex)) {
        residence.style.border = "1px solid red"
        errorResidence.innerHTML = "Input washer's residence"
        errorResidence.style = "color: red;"
        val++
    }

    if (!employeeId.value.match(empIdRegex)) {
        employeeId.style.border = "1px solid red"
        errorEmployeeId.innerHTML = "Input the employee ID"
        errorEmployeeId.style = "color: red;"
        val++
    }

    if (val > 0) {
        event.preventDefault()
    }
}
