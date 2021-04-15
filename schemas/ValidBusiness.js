const mongoose = require("mongoose");
const { Schema } = mongoose;

const ValidBusiness = new Schema({
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

module.exports = mongoose.model("ValidBusiness", ValidBusiness);
