//auth is my middleware to check whether my manager is a valid user.
//look into passport...
const Manager = require("../models/managerModel")

const auth = async (req, res) => {
    let user

    //.find helps me find users in the database with this username and password
    await Manager.find({
            username: req.body.loginusername,
            password: req.body.loginpassword
        })

        //.exec promisifies my query so that I can use .then and .catch
        .exec()
        
        //with the promise(result) gotten; if the user exists, redirect them to home else redirect them back to login.
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