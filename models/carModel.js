const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    plate: String,
    color: String,
    date: Date,
    make: String,
    type: String,
    package: String,
    cost: Number,
    unitcost: Number,
    ZawashWage: Number,
    washer: Array,
  },
  { collection: "cars" }
);

module.exports = mongoose.model("Car", carSchema);
