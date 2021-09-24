const Device = require("../models/Device");

exports.getDevices = async (req, res) => {
  const devices = await Device.find({});
  res.status(200).json({
    message: "all Devices",
    data: devices,
  });
};

exports.editDevice = async (req, res) => {
  try {
    await Device.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      msg: "Device been edited",
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};

exports.deleteDevice = async (req, res) => {
  try {
    await Device.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      msg: "Device been deleted",
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};

exports.findDevice = async (req, res) => {
  try {
    const device = await Device.findOne({ id: req.params.id });
    res.status(200).json({
      msg: "found the Device",
      data: device,
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};

exports.createDevice = async (req, res) => {
  const { name, type, hourRate, category } = req.body;
  try {
    const device = await Device.create({ name, type, hourRate, category });

    return res.status(201).json({ msg: "Created", device });
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
};
