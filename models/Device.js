const mongoose = require("mongoose");

const DeviceShcema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "deviceType",
  },
  hourRate: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

const deviceModel = mongoose.model("device", DeviceShcema);
module.exports = deviceModel;
