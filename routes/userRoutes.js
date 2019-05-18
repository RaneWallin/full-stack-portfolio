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

module.exports = router;
