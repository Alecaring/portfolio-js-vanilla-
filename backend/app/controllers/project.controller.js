const db = require("../models");
const Project = db.project;



exports.getAllProjects = async (req, res, next) => {
    try {
        const project = await Project.findAll();

        console.log("_CONTROLLER_PROJECTS" + project);

        if (project === 0) {
            console.log("progetti vuoti");
            return res.send("progetti vuoti")
        }

        return res.send(project);

    } catch (err) {
        console.error("Errore durante il recupero dei progetti", err);
    }
};