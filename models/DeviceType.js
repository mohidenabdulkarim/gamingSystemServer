const mongoose = require("mongoose");

const DeviceTypeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const deviceTypeModel = mongoose.model("deviceType", DeviceTypeSchema);
module.exports = deviceTypeModel;
