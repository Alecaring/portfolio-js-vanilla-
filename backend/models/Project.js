const db = require("../database/dbConfig");

const ProjectModel = {

    createProject: (name, callback) => {
        const query = `INSERT INTO projects (name, created_at) VALUES (?, ?)`;
        db.run(
            query,
            [name, new Date()],
            (err) => callback(err, this.lastID)
        )
    },

    getProject: (callback) => {
        const query = `SELECT * FROM projects`;
        db.all(
            query,
            [],
            (err, rows) => callback(err, rows)
        );
    },

    deleteProject: (id, callback) => {
        const query = `DELETE FROM projects WHERE id = ?`;
        db.run(query, [id], function(err) {
            callback(err, this.changes);  // Restituisce il numero di righe modificate (cancella il progetto)
        });
    },
    

};

module.exports = ProjectModel;