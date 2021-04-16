const express = require("express");
const router = express.Router();

router.post("/requestPayment", require("./payment/requestPayment"));
router.post("/createPayment", require("./payment/createPayment"));

module.exports = router;
