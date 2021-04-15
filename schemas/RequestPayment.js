const mongoose = require("mongoose");

const RequestPayment = mongoose.Schema({
  payeeId: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RequestPayment", RequestPayment);
