const express = require("express");
const passport = require("passport");
const userDB = require("../data/userData");

const router = express.Router();

router.get("/github", passport.authenticate("github"));
router.get("/error", (req, res) => {
  res.json({ message: "Authentication failed" });
});
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/auth/error" }),
  (req, res) => {
    res.json({ message: "Authentication succeeded" });
  }
);

module.exports = router;
