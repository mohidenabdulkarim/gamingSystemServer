const router = require("express").Router();
const userController = require("..//controllers/userContoller");

router.post("/", userController.createUser);

module.exports = router;
