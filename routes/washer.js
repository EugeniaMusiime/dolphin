//import modules into this file
const express = require("express")
const router = express.Router()
const Washer = require("../models/washerModel")

//what I serve to the client(rendering a pug file)
router.get("/", (req, res) => {
    res.render("washerRegistration")
})

//what I serve to the database
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
        //save to the database
        .save()
        //promise given
        .then((item) => console.log("Saved succesfully: " + item))
        //catch an error literally
        .catch((err) => console.log(err))

    res.redirect("/washer")
})

module.exports = router
