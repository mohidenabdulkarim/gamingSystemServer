const router = require("express").Router();
const userController = require("..//controllers/userContoller");

router.route("/").get(userController.getUsers).post(userController.saveUser);

router
  .route("/:id")
  .delete(userController.deleteUser)
  .put(userController.editUser);

module.exports = router;
