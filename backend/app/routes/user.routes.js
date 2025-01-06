const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

const router = require("express").Router();



router.get("/test/all", controller.allAccess);
router.get("/test/user", [authJwt.verifyToken], controller.userBoard);
router.get("/test/mod", [authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);
router.get("/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);



module.exports = router;



// module.exports = function (app) {
//   app.use(function (req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, Content-Type, Accept"
//     );
//     next();
//   });


// };