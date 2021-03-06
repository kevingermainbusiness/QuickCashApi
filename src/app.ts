require("dotenv").config();
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";

let app: Application = express();

app.use(express.json());
app.use(cors()); // to be able to call localhost:3000 from another website

app.use("/api/internal_actions", require("./api_routes/internalActions")); // insert, delete user
app.use("/api/payment_process", require("./api_routes/paymentProcess")); // make payment

app.get("/", (_req, res) => {
  res.json({ message: "This is the QuickCashApi Home address" });
});

app.listen(3000);

mongoose
  .connect(process.env.DB_CONNECTION_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;
