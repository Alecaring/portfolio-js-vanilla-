const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


exports.signup = async (req, res) => {
    // save user to database
    try {
        // console.log("_CONTROLLER_REGISTER_" + JSON.stringify(req.body));

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });

        if (req.body.roles && req.body.roles.length > 0) {
            const roles = await Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles
                    }
                }
            });

            // Assegna i ruoli trovati all'utente
            const role = await user.setRoles(roles);


            // genero il token
            const token = jwt.sign(
                { id: user.id },
                config.secret,
                {
                    algorithm: "HS256",
                    allowInsecureKeySizes: true,
                    expiresIn: 86400 // 24 ore
                }
            );
            // assegno il token
            req.session.token = token;


            return res.status(200).send({
                success: true,
                message: "User registered successfully with roles!",
                user: {
                    username: req.body.username,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 8),
                    roles: role,
                    token: req.session.token,     
                },
            });


        } else {
            // Se non ci sono ruoli, assegna il ruolo predefinito (ID 1)
            const defaultRole = await user.setRoles([1]);  // Assegna il ruolo predefinito
            console.log(defaultRole);



            return res.status(200).send({
                success: true,
                message: "User registered successfully with default role!",
                user: {
                    username: req.body.username,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 8),
                    rolesDefault: defaultRole,
                    token: req.session.token,     
                },
            });
        }

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};


exports.signin = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!user) {
            return res.status(404).json({
                message: "User Not found."
            });
        };

        const passwordValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordValid) {
            return res.status(401).json({
                message: "Invalid Password!"
            })
        };

        const token = jwt.sign(
            { id: user.id },
            config.secret,
            {
                algorithm: "HS256",
                allowInsecureKeySizes: true,
                expiresIn: 86400 // 24 ore
            }
        );

        let authorities = [];

        const roles = await user.getRoles();
        for (let i = 0; i < roles.length; i++) {
            authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }

        // req.session.token = token;


        // Imposta il token come cookie HttpOnly
        res.cookie('token', token, {
            httpOnly: true,    // Rende il cookie non accessibile via JavaScript
            // secure: false,     // Usa true in produzione (HTTPS)
            sameSite: 'strict', // Protegge contro CSRF
            maxAge: 86400000   // Durata del cookie: 24 ore
        });

        return res.status(200).send({
            success: true,
            id: user.id,
            username: user.username,
            email: user.email,
            roles: authorities,
            // token: req.session.token
        });

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};


exports.signout = async (req, res) => {
    try {
        req.session = null;
        return res.status(200).json({
            message: "You've been signed out!"
        });
    } catch (err) {
        this.next(err);
    }
};

