const express = require("express")
const router = express.Router()
const Car = require("../models/carModel")
const Washer = require("../models/washerModel")

//find out what I spent to wash a particular car per washer
UnitCost = (a) => {
    let value

    switch (a) {
        case "5000":
            value = 1500
            break
        case "10000":
            value = 3000
            break
        case "15000":
            value = 4000
            break
    }

    return value
}

//find out what I spent in total to wash a particular car
TotalCost = (package, washers) => {
    let arrayOfWashers = washers.split(" ")
    return UnitCost(package) * arrayOfWashers.length
}

//find out what I made off in total to wash a particular car
ZaWashWage = (a, b) => {
    return a - TotalCost(a, b)
}

router.get("/", async (req, res) => {
    var washerlist = await Washer.find();

    res.render("carRegistration", {washers: washerlist})
})

router.post("/", async (req, res) => {
    let unitCost = UnitCost(req.body.package)
    let cost = TotalCost(req.body.package, req.body.washer)
    let zaWashWage = ZaWashWage(req.body.package, req.body.washer)
    let arrayOfWashers = req.body.washer.split(" ")

    const newCar = new Car({
        plate: req.body.numberplate,
        color: req.body.color,
        date: req.body.date,
        make: req.body.make,
        type: req.body.type,
        package: req.body.package,
        cost: cost,
        ZawashWage: zaWashWage,
        washer: arrayOfWashers,
        unitcost: unitCost
    })

    await newCar
        .save()
        .then(() => console.log("Saved succesfully"))
        .catch((err) => console.log(err))

    res.redirect("/car")
})

module.exports = router
