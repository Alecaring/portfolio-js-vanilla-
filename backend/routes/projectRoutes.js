const express = require("express");
const router = express.Router();
const ProjectController = require("../controllers/ProjectController");

router.get("/projects", ProjectController.getProject);
router.post("/projects", ProjectController.createProject);
router.delete('/projects/:id', ProjectController.deleteProject);

module.exports = router;