let plate = document.getElementById("plate")
let _date = document.getElementById("date")
let make = document.getElementById("make")
let type = document.getElementById("type")
let color = document.getElementById("color")
let assignedWasher = document.getElementById("assignedWasher")
let washPackage = document.getElementById("washPackage")
let submit = document.getElementById("submit")

//The small tag for the errors.
let errorPlate = document.getElementById("errorPlate")
let errorDate = document.getElementById("errorDate")
let errorMake = document.getElementById("errorMake")
let errorType = document.getElementById("errorType")
let errorColor = document.getElementById("errorColor")
let errorAssignedWasher = document.getElementById("errorAssignedWasher")
let errorWashPackage = document.getElementById("errorWashPackage")

//Regular expressions
let plateRegex = /^U[A-Z]{2}[0-9]{3}[A-Z]{1}$/
let alphaRegex = /^[A-Za-z\s]+$/
// let empIdRegex = /^zawash-[0-9]{3}$/

//event listeners.....
plate.addEventListener(
    "input",
    (checkPlateField = () => {
        if (plate.value > 7 || !plate.value.match(plateRegex)) {
            plate.style.border = "1px solid red"
            errorPlate.innerHTML = "Enter a valid Number Plate."
            errorPlate.style = "color: red;"
        } else {
            plate.style.border = "1px solid green"
            errorPlate.innerHTML = ""
        }
    })
)

_date.addEventListener(
    "input",
    (checkDateField = () => {
        if (_date.value === "") {
            _date.style.border = "1px solid red"
            errorDate.innerHTML = "Enter the entry date."
            errorDate.style = "color: red;"
        } else {
            _date.style.border = "1px solid green"
            errorDate.innerHTML = ""
        }
    })
)

make.addEventListener(
    "input",
    (checkMakeField = () => {
        if (!make.value.match(alphaRegex)) {
            make.style.border = "1px solid red"
            errorMake.innerHTML = "Enter the car make."
            errorMake.style = "color: red;"
        } else {
            make.style.border = "1px solid green"
            errorMake.innerHTML = ""
        }
    })
)

type.addEventListener(
    "input",
    (checkTypeField = () => {
        if (!type.value.match(alphaRegex)) {
            type.style.border = "1px solid red"
            errorType.innerHTML = "Enter the car type."
            errorType.style = "color: red;"
        } else {
            type.style.border = "1px solid green"
            errorType.innerHTML = ""
        }
    })
)

color.addEventListener(
    "input",
    (checkColorField = () => {
        if (!color.value.match(alphaRegex)) {
            color.style.border = "1px solid red"
            errorColor.innerHTML = "Enter the car color."
            errorColor.style = "color: red;"
        } else {
            color.style.border = "1px solid green"
            errorColor.innerHTML = ""
        }
    })
)

assignedWasher.addEventListener(
    "input",
    (checkWasherField = () => {
        if (assignedWasher.value === "") {
            assignedWasher.style.border = "1px solid red"
            errorAssignedWasher.innerHTML = "Enter the assigned washer."
            errorAssignedWasher.style = "color: red;"
        } else {
            assignedWasher.style.border = "1px solid green"
            errorAssignedWasher.innerHTML = ""
        }
    })
)

washPackage.addEventListener(
    "click",
    (checkPackageField = () => {
        if (washPackage.value == "Choose a Wash Package:") {
            washPackage.style.border = "1px solid red"
            errorWashPackage.innerHTML = "Select the wash package."
            errorWashPackage.style = "color: red;"
        } else {
            washPackage.style.border = "1px solid green"
            errorWashPackage.innerHTML = ""
        }
    })
)

// Prevents the form from submitting if any of the fields do not meet the validation criteria
validateCar = (event) => {
    let val = 0
    if (plate.value > 7 || !plate.value.match(plateRegex)) {
        plate.style.border = "1px solid red"
        errorPlate.innerHTML = "Enter a valid Number Plate."
        errorPlate.style = "color: red;"
        val++
    }

    if (_date.value === "") {
        _date.style.border = "1px solid red"
        errorDate.innerHTML = "Enter the entry date."
        errorDate.style = "color: red;"
        val++
    }

    if (!make.value.match(alphaRegex)) {
        make.style.border = "1px solid red"
        errorMake.innerHTML = "Enter the car make."
        errorMake.style = "color: red;"
        val++
    }

    if (!type.value.match(alphaRegex)) {
        type.style.border = "1px solid red"
        errorType.innerHTML = "Enter the car type."
        errorType.style = "color: red;"
        val++
    }

    if (!color.value.match(alphaRegex)) {
        color.style.border = "1px solid red"
        errorColor.innerHTML = "Enter the car color."
        errorColor.style = "color: red;"
        val++
    }

    if (assignedWasher.value === "") {
        assignedWasher.style.border = "1px solid red"
        errorAssignedWasher.innerHTML = "Enter the assigned washer."
        errorAssignedWasher.style = "color: red;"
        val++
    }

    if (washPackage.value == "Choose a Wash Package:") {
        washPackage.style.border = "1px solid red"
        errorWashPackage.innerHTML = "Select the wash package."
        errorWashPackage.style = "color: red;"
        val++
    }

    if (val > 0) {
        event.preventDefault()
    }
}
