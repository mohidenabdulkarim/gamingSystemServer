const router = require("express").Router();
const deviceTypeController = require("../controllers/deviceTypeController");

router
  .route("/")
  .get(deviceTypeController.getAll)
  .post(deviceTypeController.create);

module.exports = router;
