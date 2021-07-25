const mongoose = require("mongoose");

const washerSchema = mongoose.Schema(
  {
    fullname: String,
    gender: String,
    dob: Date,
    nin: String,
    residence: String,
    empID: String,
  },
  { collection: "washers" }
);

module.exports = mongoose.model("Washer", washerSchema);
