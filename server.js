const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

const keys = require("./config/keys");

require("./models/User");
require("./models/Project");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const projectRouter = require("./routes/projectRoutes");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey] // encryption key for cookie
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use("/user", userRouter);
server.use("/auth", authRouter);
server.use("/project", projectRouter);

server.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = server;
