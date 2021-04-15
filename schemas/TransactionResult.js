const mongoose = require("mongoose");

const TransactionResult = mongoose.Schema({
  payeeId: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TransactionResult", TransactionResult);
