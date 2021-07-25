const express = require("express")
const router = express.Router()
const Car = require("../models/carModel")
const Washer = require("../models/washerModel")

router.get("/", async (req, res) => {
    let profit = false
    let washers = []
    let cars = []

    //
    await Washer.find()
        .exec()
        .then((res) => {
            washers = res
        })
        .catch((err) => console.log(err))
    
    //cars washed on that day(in 24hours)
    await Car.find({
        date: {
            $gte: new Date(new Date().setHours(00, 00, 00)),
            $lt: new Date(new Date().setHours(23, 59, 59))
        }
    })
        .exec()
        .then((res) => {
            cars = res
        })
        .catch((err) => console.log(err))

    let carsWashed = []
    let wages = []

    //for @Kanabe, this nested 'for' loop determines the number of cars washed on that day and the ammout made on that day
    for (i = 0; i < washers.length; i++) {
        let totalCarsWashed = 0
        let wage = 0
        for (j = 0; j < cars.length; j++) {
            let ans = cars[j].washer.includes(washers[i].empID)
            if (ans) {
                totalCarsWashed = totalCarsWashed + 1
                wage = wage + cars[j].unitcost
            }
        }
        carsWashed[i] = totalCarsWashed
        wages[i] = wage
    }

    //This allows me access these through pug
    res.render("home", {
        washers: washers,
        carsWashed: carsWashed,
        wages: wages,
        profit: profit
    })
})

router.post("/", async (req, res) => {
    let profit = 0
    let washers = []
    let cars = []

    await Washer.find()
        .exec()
        .then((res) => {
            washers = res
        })
        .catch((err) => console.log(err))

    await Car.find({
        date: {
            $gte: new Date(new Date().setHours(00, 00, 00)),
            $lt: new Date(new Date().setHours(23, 59, 59))
        }
    })
        .exec()
        .then((res) => {
            cars = res
        })
        .catch((err) => console.log(err))

    let carsWashed = []
    let wages = []

    for (i = 0; i < washers.length; i++) {
        let totalCarsWashed = 0
        let wage = 0
        for (j = 0; j < cars.length; j++) {
            let ans = cars[j].washer.includes(washers[i].empID)
            if (ans) {
                totalCarsWashed = totalCarsWashed + 1
                wage = wage + cars[j].unitcost
            }
        }
        carsWashed[i] = totalCarsWashed
        wages[i] = wage
    }

    let start = req.body.start.replace(/-/gi, ", ")
    let end = req.body.end.replace(/-/gi, ", ")
    await Car.find({
        date: {
            $gte: new Date(new Date(start).setHours(00, 00, 00)),
            $lt: new Date(new Date(end).setHours(23, 59, 59))
        }
    })
        .exec()
        .then((items) => {
            items.forEach((item) => {
                profit = item.ZawashWage + profit
            })
            profit = Intl.NumberFormat().format(profit)

            res.render("home", {
                washers: washers,
                carsWashed: carsWashed,
                wages: wages,
                profit: profit
            })
        })
        .catch((err) => console.log(err))
})

module.exports = router
