const DeviceType = require("../models/DeviceType");

exports.getAll = async (req, res) => {
  try {
    const deviceTypes = await DeviceType.find({});
    return res.status(200).json({ msg: "all types", deviceTypes });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const deviceType = await DeviceType.create({ name });
    return res.status(200).json({ msg: "Created", deviceType });
  } catch (err) {
    return res.status(400).json({
      msg: err,
    });
  }
};

exports.deleteDeviceType = async (req, res) => {
  try {
    await DeviceType.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "deleted",
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};

exports.editDeviceType = async (req, res) => {
  try {
    const deviceType = await DeviceType.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      msg: "Edited Bill",
      data: deviceType,
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};

exports.getOneType = async (req, res) => {
  try {
    const deviceType = await DeviceType.findOne({ _id: req.params.id });
    res.status(200).json({
      msg: "found the device type",
      data: deviceType,
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};
