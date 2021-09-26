const router = require("express").Router();
const deviceTypeController = require("../controllers/deviceTypeController");

router
  .route("/")
  .get(deviceTypeController.getAll)
  .post(deviceTypeController.create);

router
  .route("/:id")
  .delete(deviceTypeController.deleteDeviceType)
  .put(deviceTypeController.editDeviceType)
  .get(deviceTypeController.getOneType);
module.exports = router;
