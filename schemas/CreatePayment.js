const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * An object containing request to make a payment
 * from a payer(payerId) to a business (payeeId)
 */
const CreatePayment = new Schema({
  payeeId: {
    type: Number,
    required: true,
  },
  payerId: {
    type: Number,
    required: true,
  },
  payerPass: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("CreatePayment", CreatePayment);
