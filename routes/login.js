const express = require("express")
const router = express.Router()
const Manager = require("../models/managerModel")
const auth = require("./auth")

router.get("/", (req, res) => {
    res.render("login")
})

router.post("/", auth, (req, res) => {
    res.redirect("/home")
})

module.exports = router;