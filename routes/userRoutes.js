const express = require("express");
const userDb = require("../data/userHandler");

const requireLogin = require("../middleware/requireLogin");

const router = express.Router();

router.post("/", async (req, res) => {
  const user = await userDb.addUser(req.body);
  res.json(user);
});

router.get("/:id", requireLogin, async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userDb.getUser(id);

    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.put("/", requireLogin, async (req, res) => {
  try {
    const result = await userDb.updateUser(req.body);

    if (!result)
      return res.status(400).json({ message: "User was not updated." });

    res.status(200).json({ message: "User updated." });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
