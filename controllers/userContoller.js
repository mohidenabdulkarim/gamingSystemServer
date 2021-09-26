const User = require("../models/User");
const bcrypt = require("bcrypt");

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

// exports.createUser = async (req, res) => {
//   const { name, username, role, password } = req.body;
//   try {
//     const user = await User.create({ name, username, role, password });

//     return res.status(201).json({ msg: "Created", user });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).json(err);
//   }
// };

exports.saveUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user !== null) {
    return res.status(400).json({ msg: "email is already exists" });
  }
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  const { name, username, role, password, email } = req.body;
  try {
    const user = await User.create({
      name,
      username,
      email,
      role,
      hashPassword,
    });
    return res.status(200).json({
      msg: "user been created",
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      msg: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      msg: "deleted",
    });
  } catch (err) {
    return res.status(400).json({
      msg: err,
    });
  }
};
