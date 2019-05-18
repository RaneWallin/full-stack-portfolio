const passport = require("passport");
const GithubStrategy = require("passport-github2");
const mongoose = require("mongoose");
const keys = require("../config/keys");

// get the users model
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user.profile.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubCientSecret,
      callbackURL: "http://localhost:8080/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      done(null, {
        accessToken,
        profile
      });
    }
  )
);
