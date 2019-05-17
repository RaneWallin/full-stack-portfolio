const express = require("express");
const mongoose = require("mongoose");

//const user = require("../models/User");

const User = mongoose.model("users");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ hello: "world" });
});

router.post("/", (req, res) => {
  const user = new User(req.body);
  user.save();
  res.json(user);
});

module.exports = router;
