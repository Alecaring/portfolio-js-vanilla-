const mysql = require('mysql2/promise');
const config = require("../config/db.config");


(async () => {
    try {
        // Connessione temporanea per creare il database
        const connection = await mysql.createConnection({
            host: config.HOST,
            user: config.USER,
            password: config.PASSWORD,
            port: config.port || 3306
        });

        // Crea il database se non esiste
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${config.DB}\`;`);
        console.log(`Database "${config.DB}" verificato o creato.`);

        // Chiudi la connessione temporanea
        await connection.end();

    } catch (error) {
        console.error('Errore durante la creazione del database e sincronizzazione delle tabelle:', error.message);
        process.exit(1);
    }
})();
