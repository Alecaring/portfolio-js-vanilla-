const sqlite3 = require("sqlite3").verbose();
const { error } = require("console");
const path = require("path");

const dbPath = path.resolve(__dirname, "db.sqlite");

// creo o apro il database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.log("Errore nella connessione al database:", err.message);
    } else {
        console.log("connesso correttamente a SQLite");
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            created_at TEXT NOT NULL
        )`,
        (err) => {
            if (err) console.error("Errore nella creazione della tabella:", err.message);
            else console.log("tabella projects pronta");

        });
});


module.exports = db;