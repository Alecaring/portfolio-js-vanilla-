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


exports.createNewCard = async (req, res, next) => {

    try {

        const { title, subtitle, image, icon, description } = req.body;

        if (!title || !subtitle || !image || !icon || !description) {
            res.status(400).json({
                success: false,
                message: "errore dati mancanti!"
            });
        };

        const newCard = Project.create({
            title: title,
            subtitle: subtitle,
            image: image,
            icon: icon,
            description: description
        });

        return res.status(200).json({
            success: true,
            message: "card creata con successo",
            cardData: newCard
        });

    } catch (error) {

    }

}