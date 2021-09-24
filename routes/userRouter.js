const router = require("express").Router();
const userController = require("..//controllers/userContoller");

router.route("/").get(userController.getUsers).post(userController.createUser);

module.exports = router;
