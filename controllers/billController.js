const Bill = require("../models/Bill");
const Device = require("../models/Device");
const User = require("../models/User");

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
  const { amount, duration, employeeId, deviceId } = req.body;
  try {
    const bill = await Bill.create({
      amount,
      duration,
      employee: employeeId,
      device: deviceId,
    });

    return res.status(201).json({ msg: "Created", bill });
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
};
