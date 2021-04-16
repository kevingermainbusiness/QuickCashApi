import express, { Router, Request, Response } from "express";
let router = express.Router();

// Validating a payment transaction

router.post("/", (_req: Request, res: Response) => {
  res.json({ message: "Not implemented yet" });
});

module.exports = router;
