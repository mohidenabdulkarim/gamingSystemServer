const mongoose = require("mongoose");
const User = require("./User");
const Device = require("./Device");

const BillShcema = mongoose.Schema({
  amount: {
    type: String,
  },
  duration: {
    type: String,
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  device: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "devices",
  },
});

const billModel = mongoose.model("bill", BillShcema);
module.exports = billModel;
