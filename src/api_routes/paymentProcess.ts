/**
 * This is the API for QuickCash SDK to communicate with to validate payments
 * The lifecycle of a Payment is as followed:
 * requestPayment -> createPayment -> otpVerification -> transactionResult
 *
 * When an SDK sends a POST request to /api/requestPayment
 * The request is processed to verify if the payeeID is a valid business of
 * QuickCash, then if so, this API responds with a ValidBusiness object, indicating
 * that the transfer is valid.
 *
 * At that point, the SDK should send a CreatePayment object with the user's personnal info.
 * Then the /api/createPayment will validate the info to proceed with OTP authentication.
 */
import express, { Router } from "express";
let router: Router = express.Router();

router.post("/requestPayment", require("./payment/requestPayment"));
router.post("/createPayment", require("./payment/createPayment"));

module.exports = router;
