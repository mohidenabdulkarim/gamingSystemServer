const mongoose = require("mongoose");

const DeviceTypeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const deviceTypeModel = mongoose.model("deviceType", DeviceTypeSchema);
module.exports = deviceTypeModel;
