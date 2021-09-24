const router = require("express").Router();
const billController = require("..//controllers/billController");

router.route("/").get(billController.getBills).post(billController.createBill);

module.exports = router;
