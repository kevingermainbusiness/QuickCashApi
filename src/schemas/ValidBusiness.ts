import { model, Schema } from "mongoose";

let ValidBusiness = new Schema({
  payeeId: {
    type: Number,
    required: true,
  },
  businessName: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export default model("ValidBusiness", ValidBusiness);
