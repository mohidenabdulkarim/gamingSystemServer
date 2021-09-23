const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    message: "all Uses",
    data: users,
  });
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
