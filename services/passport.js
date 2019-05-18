const passport = require("passport");
const GithubStrategy = require("passport-github2");
const mongoose = require("mongoose");
const keys = require("../config/keys");

// get the users model
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user);
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
    async function(accessToken, refreshToken, profile, done) {
      try {
        const existingUser = await User.findOne({ githubID: profile.id });

        if (existingUser) return done(null, existingUser);

        const newUser = await new User({
          name: profile.displayName,
          githubID: profile.id
        }).save();

        done(null, {
          accessToken,
          newUser
        });
      } catch (err) {
        console.log(err);
      }
    }
  )
);
