const express = require("express");
const ValidBusiness = require("../schemas/ValidBusiness");

const User = require("../schemas/User");

const router = express.Router();

const isAmountValid = (req, res, next) => {
  let amountValue = req.body.amount;
  if (typeof amountValue === "number") {
    if (amountValue >= 25 && amountValue <= 300000) {
      next();
    } else {
      res.json({
        message: "The amount needs to be between 25 HTG & 300'000 HTG ",
      });
    }
  } else {
    res.json({ message: "The amount needs to be a number" });
  }
};

const validatePaymentCreation = (req, res, _next) => {
  // verify if the ID is valid
  let payeeId = req.body.payeeId;
  if (typeof payeeId === "number") {
    User.findOne({ uuid: payeeId })
      .exec()
      .then((user) => {
        // verify is the user has business authority
        if (user.isBusiness) {
          // Now the SDK will send the User to the CreatePayment route
          let response = ValidBusiness({
            payeeId: user.uuid,
            businessName: user.businessName,
            amount: req.body.amount,
          });
          res.json(response);
          console.log(response);
        } else {
          res.json({
            message:
              "Only businesses validated by QuickCash can request payment",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json("The payeeId has to be a number");
  }
};

router.post("/", isAmountValid, validatePaymentCreation);

module.exports = router;
