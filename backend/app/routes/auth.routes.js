const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

const router = require("express").Router();




router.post("/signup", [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
], controller.signup);

router.post("/signin", controller.signin);

router.post("/signout", controller.signout);



module.exports = router;



// module.exports = function (app) {
//     app.use(function (req, res, next) {
//         res.header(
//             "Access-Control-Allow-Headers",
//             "Origin, Content-Type, Accept"
//         );
//         next();
//     });

// };