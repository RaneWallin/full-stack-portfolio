const express = require("express");
const mongoose = require("mongoose");

//const user = require("../models/User");

const User = mongoose.model("users");

const router = express.Router();

router.post("/", (req, res) => {
  const user = new User(req.body);
  user.save();
  res.json(user);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (user) return res.json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
