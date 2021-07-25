const express = require("express")
const router = express.Router()
const Washer = require("../models/washerModel")

router.get("/", (req, res) => {
    res.render("washerRegistration")
})

router.post("/", async (req, res) => {
    const newWasher = new Washer({
        fullname: req.body.fullname,
        gender: req.body.gender,
        dob: req.body.dob,
        nin: req.body.nin,
        residence: req.body.residence,
        empID: req.body.employeeid
    })

    await newWasher
        .save()
        .then((item) => console.log("Saved succesfully: " + item))
        .catch((err) => console.log(err))

    res.redirect("/washer")
})

module.exports = router
