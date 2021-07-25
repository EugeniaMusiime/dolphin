const express = require("express")
const router = express.Router()
const Car = require("../models/carModel")
const Washer = require("../models/washerModel")

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

TotalCost = (package, washers) => {
    let arrayOfWashers = washers.split(" ")
    return UnitCost(package) * arrayOfWashers.length
}

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
