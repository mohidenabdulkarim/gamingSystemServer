const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    message: "all Uses",
    data: users,
  });
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      msg: "user been edited",
      updatedUser: user,
    });
  } catch (err) {
    res.status(400).json({
      msg: err,
    });
  }
};

exports.createUser = async (req, res) => {
  const { name, username, role, password } = req.body;
  try {
    const user = await User.create({ name, username, role, password });

    return res.status(201).json({ msg: "Created", user });
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
};
