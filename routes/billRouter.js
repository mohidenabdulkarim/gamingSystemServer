const router = require("express").Router();
const billController = require("..//controllers/billController");

router.route("/").get(billController.getBills).post(billController.createBill);

router
  .route("/:id")
  .put(billController.editBill)
  .delete(billController.deleteBill)
  .get(billController.findBill);

module.exports = router;
