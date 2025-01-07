const controller = require('../controllers/contact.controller');

const router = require("express").Router();

router.post("/send-message", controller.postDataMessage);

module.exports = router;