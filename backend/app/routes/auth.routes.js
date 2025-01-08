const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/auth.controller");

const router = require("express").Router();




router.post("/signup", [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
], controller.signup);

router.post("/signin", controller.signin);

router.post("/signout", controller.signout);

router.get("/verify-token", authJwt.verifyToken, (req, res) => {
    res.status(200).json({ message: 'Token valido' });
  });



module.exports = router;
