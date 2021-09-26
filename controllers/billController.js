const Bill = require("../models/Bill");
const Device = require("../models/Device");
const User = require("../models/User");
const calcTime = require("../util/calcTime");

exports.getBills = async (req, res) => {
  const bills = await Bill.find({})
    .populate({
      path: "employee",
      select: "name role",
      model: User,
    })
    .populate({ path: "device", select: "name hourRate", model: Device });
  res.status(200).json({
    message: "all Uses",
    data: bills,
  });
};

exports.createBill = async (req, res) => {
  const { startTime, endTime, employeeId, deviceId } = req.body;
  try {
    const hr = await Device.findById(deviceId);
    const result = calcTime(startTime, endTime, hr.hourRate);
    const bill = await Bill.create({
      amount: result.amount,
      duration: result.duration,
      playedTimeInMinutes: result.allMinutes,
      employee: employeeId,
      device: deviceId,
    });

    return res.status(201).json({ msg: "Created", bill });
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
};

exports.deleteBill = async (req, res) => {
  try {
    await Bill.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Deleted",
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};

exports.findBill = async (req, res) => {
  try {
    await Bill.findOne(req.params.id);
    res.status(200).json({
      msg: "found the Bill",
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};

exports.editBill = async (req, res) => {
  try {
    await Bill.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      msg: "Edited",
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};
