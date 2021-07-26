const express = require("express")
const router = express.Router()
const Manager = require("../models/managerModel")
const auth = require("./auth")

router.get("/", (req, res) => {
    res.render("login")
})

//auth is my middleware to check whether my manager is a valid user.
router.post("/", auth, (req, res) => {
    res.redirect("/home")
})

module.exports = router;