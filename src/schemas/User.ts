import { model, Schema } from "mongoose";

// interface UserInterface {
//   uuid: Number;
//   userPass: String;
//   areaCode: String;
//   isBusiness: Boolean;
//   businessName: String;
//   isSuspended: Boolean;
//   dateOfCreation: Date;
//   balance: Number;
// }

let User = new Schema({
  uuid: {
    type: Number,
    required: true,
  },
  userPass: {
    type: String,
    required: true,
  },
  areaCode: {
    type: String,
    required: true,
    default: "HT",
  },
  isBusiness: {
    type: Boolean,
    required: true,
    default: false,
  },
  businessName: {
    type: String,
    required: true,
    default: "",
  },
  isSuspended: {
    type: Boolean,
    required: true,
    default: false,
  },
  dateOfCreation: {
    type: Date,
    required: true,
    default: Date.now,
  },
  balance: {
    type: Number,
    required: true,
  },
});

export default model("User", User);
