const mongoose = require("mongoose");

const managerSchema = mongoose.Schema(
    {
        firstname: String,
        surname: String,
        username: String,
        password: String,
    },
    {collection: "manager"}
);

module.exports = mongoose.model("Manager", managerSchema);