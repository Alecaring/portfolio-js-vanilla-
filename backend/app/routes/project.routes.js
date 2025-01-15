const controller = require("../controllers/project.controller");
const { authJwt } = require("../middleware");
const router = require("express").Router();




router.get("/get", controller.getAllProjects);

router.post("/create-new-card", authJwt.verifyToken, controller.createNewCard);

module.exports = router;

