const Project = require("../models/Project");

const ProjectController = {

    createProject: (req, res) => {
        const { name } = req.body;
        Project.createProject(name, (err, id) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ message: "project created", id })
        });
    },

    getProject: (req, res) => {
        Project.getProject((err, projects) => {

            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json(projects);

        });
    },

    deleteProject: (req, res) => {
        const { id } = req.params;  // Ottieni l'ID dal parametro dell'URL
        Project.deleteProject(id, (err, changes) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (changes === 0) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.status(200).json({ message: `Project ${id} deleted successfully` });
        });
    },


}

module.exports = ProjectController;