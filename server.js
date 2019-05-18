const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const passport = require("passport");
const mongoose = require("mongoose");

const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.use(passport.initialize());
server.use(passport.session());

server.use("/users", userRouter);
server.use("/auth", authRouter);

module.exports = server;
