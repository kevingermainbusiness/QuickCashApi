import express, { Router, Request, Response } from "express";
const router: Router = express.Router();
import User from "../schemas/User";

let insertNewUser = (req: Request, res: Response) => {
  let user = new User({
    uuid: req.body.uuid,
    userPass: req.body.userPass,
    areaCode: req.body.areaCode,
    isBusiness: req.body.isBusiness,
    businessName: req.body.businessName,
    isSuspended: req.body.isSuspended,
    dateOfCreation: new Date(),
    balance: req.body.balance,
  });

  user
    .save()
    .then((usr: any) => {
      res.json(usr);
    })
    .catch((error: any) => {
      res.json({ message: error });
    });
};

let deleteAllUsers = (_req: Request, res: Response) => {
  let query = { isSuspended: false };
  User.deleteMany(query)
    .then((result: { deletedCount: any }) => {
      res.json({ message: `Deleted ${result.deletedCount} item(s).` });
    })
    .catch((err: any) => {
      res.json({ message: `Delete failed with error: ${err}` });
    });
};

let getAllUsers = (_req: Request, res: Response) => {
  User.find()
    .exec()
    .then((users: any) => {
      res.json(users);
    })
    .catch((error: any) => {
      res.json({ message: error });
    });
};

router.get("/", (_res: Request, res: Response) => {
  res.send("<h5>This is an internal API route</h5>");
});

router.get("/getAllUsers", getAllUsers);
router.post("/insertNewUser", insertNewUser);
router.delete("/deleteAllUsers", deleteAllUsers);

module.exports = router;
