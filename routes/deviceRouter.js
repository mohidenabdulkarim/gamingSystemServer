const router = require("express").Router();
const deviceController = require("..//controllers/deviceController");

router
  .route("/")
  .get(deviceController.getDevices)
  .post(deviceController.createDevice);

router
  .route("/:id")
  .get(deviceController.findDevice)
  .put(deviceController.editDevice)
  .delete(deviceController.deleteDevice);
module.exports = router;
