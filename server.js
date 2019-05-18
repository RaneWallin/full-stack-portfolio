const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Authentication
const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;

const keys = require("./config/keys");

require("./models/User");

mongoose.connect(keys.mongoURI);

const userRouter = require("./routes/userRoutes");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.use("/users", userRouter);

module.exports = server;
