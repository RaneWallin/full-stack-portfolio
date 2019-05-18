const express = require("express");
const passport = require("passport");
const userDB = require("../data/userData");
const keys = require("../config/keys");

const router = express.Router();

router.get("/github", passport.authenticate("github"));
router.get("/error", (req, res) => {
  res.json({ message: "Authentication failed" });
});
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/auth/error" }),
  (req, res) => {
    if (req.user.githubID != keys.githubOnlyID)
      return res.status(403).json({ message: "You are not authorized." });

    res.json({ message: "Authentication succeeded" });
  }
);
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
