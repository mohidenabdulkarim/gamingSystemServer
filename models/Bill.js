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
  employee: User,
  device: Device,
});

const billModel = mongoose.model("bill", BillShcema);
module.exports = billModel;
