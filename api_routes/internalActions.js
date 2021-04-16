const express = require("express");
const router = express.Router();
const User = require("../schemas/User");

let insertNewUser = (req, res) => {
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
    .then((usr) => {
      res.json(usr);
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

let deleteAllUsers = (_req, res) => {
  let query = { isSuspended: false };
  User.deleteMany(query)
    .then((result) => {
      res.json({ message: `Deleted ${result.deletedCount} item(s).` });
    })
    .catch((err) => {
      res.json({ message: `Delete failed with error: ${err}` });
    });
};

let getAllUsers = (_req, res) => {
  User.find()
    .exec()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

router.get("/", () => {
  res.send("<h5>This is an internal API route</h5>");
});

router.get("/getAllUsers", getAllUsers);
router.post("/insertNewUser", insertNewUser);
router.delete("/deleteAllUsers", deleteAllUsers);

module.exports = router;
