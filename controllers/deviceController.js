const Device = require("../models/Device");

exports.getDevices = async (req, res) => {
  const devices = await Device.find({});
  res.status(200).json({
    message: "all Devices",
    data: devices,
  });
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
