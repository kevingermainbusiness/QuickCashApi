/**
 * This is the API for QuickCash SDK to communicate with to validate payments
 * The lifecycle of a Payment is as follow:
 * requestPayment -> createPayment -> otpVerification -> transactionResult
 *
 * When an SDK sends a POST request to /api/request_payment
 * The request is processed to verify if the payeeID is a valid business of
 * QuickCash, then if so, this API responds with a ValidBusiness object, indicating
 * that the transfer is valid.
 *
 * At that point, the SDK should send a CreatePayment object with the user's personnal info.
 * Then the /api/create_payment will validate the info to proceed with OTP authentication.
 */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./schemas/User");
const app = express();

app.use(express.json());
app.use(cors()); // to be able to call localhost:3000 from another website

app.get("/", (_req, res) => {
  res.json({ message: "This is the QuickCashApi Home address" });
});

app.use("/api/request_payment", require("./routes/requestPayment"));
app.use("/api/create_payment", require("./routes/createPayment"));

// To create a new User
app.post("/insertUser", async (req, res) => {
  const user = new User({
    uuid: req.body.uuid,
    userPass: req.body.userPass,
    areaCode: req.body.areaCode,
    isBusiness: req.body.isBusiness,
    businessName: req.body.businessName,
    isSuspended: req.body.isSuspended,
    dateOfCreation: new Date(),
    balance: req.body.balance,
  });

  try {
    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    res.json({ message: error });
  }
});

app.listen(3000);

mongoose
  .connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;
