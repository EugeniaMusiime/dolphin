const express = require("express")
const router = express.Router()
const Manager = require("../models/managerModel")

router.get("/", (req, res) => {
    res.render("managerReg")
})

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
        .then((item) => console.log("Saved succesfully: " + item))
        .catch((err) => console.log(err))

    res.redirect("/home")
})

module.exports = router