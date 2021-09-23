const Bill = require("../models/Bill");

exports.getBills = async (req, res) => {
  const bills = await Bill.find({});
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
