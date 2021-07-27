//import modules into this file
const express = require("express")
const router = express.Router()
const Manager = require("../models/managerModel")

//what I serve to the client(rendering a pug file)
router.get("/", (req, res) => {
    res.render("managerReg")
})

//what I serve to the database
router.post("/", async (req, res) => {
    const newManager = new Manager(
        {
            firstname: req.body.managerFirstname,
            surname: req.body.managerSurname,
            username: req.body.managerUsername,
            password: req.body.managerPassword
        }
    )

    await newManager
        .save()
        .then()
        .catch((err) => console.log(err))

    res.redirect("/home")
})

module.exports = router