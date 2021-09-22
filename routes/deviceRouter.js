const router = require("express").Router();
const deviceController = require("..//controllers/deviceController");

router.get("/", deviceController.getDevices);
router.post("/", deviceController.createDevice);

module.exports = router;
