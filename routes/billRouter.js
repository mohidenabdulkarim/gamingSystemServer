const router = require("express").Router();
const billController = require("..//controllers/billController");

router.get("/", billController.getBills);
router.post("/", billController.createBill);

module.exports = router;
