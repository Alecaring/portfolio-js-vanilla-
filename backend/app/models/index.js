const mysql = require('mysql2/promise');
const config = require("../config/db.config");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        port: config.port,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize; // oggetto
db.sequelize = sequelize; // metodo

db.user = require('../models/user.model.js')(sequelize, Sequelize); // modello utente
db.role = require('../models/role.model.js')(sequelize, Sequelize); // modello ruoli
db.project = require("../models/project.model.js")(sequelize, Sequelize); // modello progetti


// relazioni tra tabelle
db.role.belongsToMany(db.user, {
    through: "user_roles"
});

db.user.belongsToMany(db.role, {
    through: "user_roles"
});


db.ROLES = ["user", "admin", "moderators"];



module.exports = db;