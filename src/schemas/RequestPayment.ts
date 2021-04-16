import { model, Schema } from "mongoose";

let RequestPayment = new Schema({
  payeeId: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

export default model("RequestPayment", RequestPayment);
