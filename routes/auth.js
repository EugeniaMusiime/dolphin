const Manager = require("../models/managerModel")

const auth = async (req, res) => {
    let user
    
    await Manager.find({
            username: req.body.loginusername,
            password: req.body.loginpassword
        })
        .exec()
        .then((result) => {
            user = result.length
            if (user === 1) {
                res.redirect("/home")
            } else {
                res.redirect("/")
            }
        })
        .catch((err) => console.log(err))
}

module.exports = auth