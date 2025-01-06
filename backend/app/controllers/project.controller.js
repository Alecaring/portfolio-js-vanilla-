const db = require("../models");
const Project = db.project;



exports.getAllProjects = async (req, res, next) => {
    try {
        const project = await Project.findAll();

        console.log("_CONTROLLER_PROJECTS" + project);

        return project;

    } catch (err) {
        console.error("Errore durante il recupero degli utenti", err);
    }
};