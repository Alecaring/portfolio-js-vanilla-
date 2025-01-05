const mysql = require('mysql2/promise');
const config = require("../config/db.config");

(async () => {
    try {
        // Connessione al server MySQL
        const connection = await mysql.createConnection({
            host: config.HOST,
            user: config.USER,
            password: config.PASSWORD,
            port: 8889
        });

        // Verifica e crea il database se non esiste
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${config.DB}\`;`);
        console.log(`Database "${config.DB}" verificato o creato.`);

        // Chiudi la connessione temporanea
        await connection.end();

        // Sincronizza Sequelize
        await db.sequelize.sync();
        console.log('Tabelle sincronizzate con successo.');
    } catch (error) {
        console.error('Errore durante la configurazione del database:', error.message);
        process.exit(1); // Termina il processo in caso di errore
    }
})();

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

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.role = require('../models/role.model.js')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles"
});

db.user.belongsToMany(db.role, {
    through: "user_roles"
});

db.ROLES = ["user", "admin", "moderators"];

module.exports = db;