const router = require("express").Router();
const userController = require("..//controllers/userContoller");

router.get("/", userController.getUsers);
router.post("/", userController.createUser);

module.exports = router;
