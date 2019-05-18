const express = require("express");
const projectDB = require("../data/projectHandler");

const requireLogin = require("../middleware/requireLogin");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await projectDB.getProjects();
    res.json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", requireLogin, async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "No data received." });

  try {
    const project = await projectDB.addProject(req.body);

    if (project && Object.keys(project).length > 0) return res.json(project);

    res.status(400).json({ message: "Could not create new project." });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
