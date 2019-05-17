const express = require("express");
const mongoose = require("mongoose");

mongoose.connect();

const server = express();

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
