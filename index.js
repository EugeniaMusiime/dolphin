//import modules into this file (dependencies in package.json)
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const car = require("./routes/car")
const washer = require("./routes/washer")
const home = require("./routes/home")
const manager = require("./routes/manager")
const login = require("./routes/login")

//instantiations
const app = express()

//settings or configurations
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

//Allows express to serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

//middle ware
app.use(express.urlencoded({ extended: true }))

//routes
app.use("/", login)
app.use("/manager", manager)
app.use("/car", car)
app.use("/washer", washer)
app.use("/home", home)

//mongoose.connect opens a connection to the database
mongoose.connect(
    "mongodb+srv://Eugenia:eugenia@cluster0.29a2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) throw err

        console.log("Successfully connected to the database.")
    }
)

//For non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('Please input a valid URL')
})

//set this server to listen for requests on `PORT = 4000`
app.listen(4000, () => {
    console.log("listening on http://127.0.0.1:4000")
})
