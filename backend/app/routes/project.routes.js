const controller = require("../controllers/project.controller");

const router = require("express").Router();




router.get("/", controller.getAllProjects);


module.exports = router;
