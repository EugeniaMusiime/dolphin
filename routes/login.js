const express = require("express")
const router = express.Router()
const Manager = require("../models/managerModel")

router.get("/", (req, res) => {
    res.render("login")
})

router.post("/", (req, res) => {
    res.redirect("/home")
})

module.exports = router;