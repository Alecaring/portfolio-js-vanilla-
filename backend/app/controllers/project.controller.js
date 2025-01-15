const db = require("../models");
const Project = db.project;



exports.getAllProjects = async (req, res, next) => {
    try {
        // Recupera i parametri di pagina e limite dalla query string
        const { page = 1, limit = 3 } = req.query;

        // Calcola l'offset per la paginazione
        const offset = (page - 1) * limit >= 0 ? (page - 1) * limit : 0;

        // Recupera i progetti con la paginazione (limit e offset)
        const projects = await Project.findAndCountAll({
            limit: Number(limit),  // Limite di progetti da restituire
            offset: offset,        // Offset per saltare i progetti già recuperati
        });

        // Verifica se ci sono progetti
        if (projects.count === 0) {
            return res.status(404).send("Progetti vuoti");
        }

        // Calcola il numero totale di pagine
        const totalPages = Math.ceil(projects.count / limit);

        // Risponde con i progetti, il numero totale di pagine e la pagina corrente
        return res.json({
            data: projects.rows,
            totalPages,
            currentPage: Number(page),
        });

    } catch (err) {
        console.error("Errore durante il recupero dei progetti", err);
        res.status(500).send("Errore nel recupero dei progetti");
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