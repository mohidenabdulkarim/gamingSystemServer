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
  const { name } = req.body;
  const deviceType = await DeviceType.create({ name });
  return res.status(201).json({ msg: "Created", deviceType });
};
