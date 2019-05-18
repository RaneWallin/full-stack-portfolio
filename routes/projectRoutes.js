const express = require("express");
const projectDB = require("../data/projectHandler");

const requireLogin = require("../middleware/requireLogin");

const router = express.Router();

router.get("/", (req, res) => {});

module.exports = router;
