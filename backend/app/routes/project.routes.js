const controller = require("../controllers/project.controller");
const { authJwt } = require("../middleware");
const router = require("express").Router();




router.get(
    // path
    "/get",

    // controller
    controller.getAllProjects
);

router.post(
    // path
    "/create-new-card",

    // miidleware
    authJwt.verifyToken,
    
    // controller
    controller.createNewCard
);


module.exports = router;
