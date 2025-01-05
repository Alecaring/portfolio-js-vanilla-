const { where } = require("sequelize");
const db = require("../models");
const ROLES = db.ROLES;
const User = db.User;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        // username
        let user = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (user) {
            return res.status(400).json({
                message: "failed: Username is already in use!"
            });
        };

        // email
        user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (user) {
            return res.status(400).json({
                message: "failed: Email is already in use!"
            });
        };

        next();

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};


checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).json({
                    message: "Failed! Role does not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
};

module.exports = verifySignUp;

