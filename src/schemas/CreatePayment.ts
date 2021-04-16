import { Schema, model } from "mongoose";

/**
 * An object containing request to make a payment
 * from a payer(payerId) to a business (payeeId)
 */
let CreatePayment = new Schema({
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

export default model("CreatePayment", CreatePayment);
