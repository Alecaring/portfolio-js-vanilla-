import SidebarProjects from "./sidebars/SidebarProjects";
import "../../scss/partials/mainPorjects.scss";
import { useState } from "react";

function MainProgects() {
    const [projectsData, setProjectsData] = useState([
        {
            id: 1,
            projTitle: "project 1",
            projSubtitle: "// _ui-animation",
            progImg: "https://img.freepik.com/vettori-gratuito/sfondo-realistico-in-stile-futuristico_23-2149129125.jpg",
            progIcon: "R",
            progDescription: "Questa è la descrizione di questo fantastico progetto nato per salvare il mondo",
            tags: ["React", "CSS"],
        },
        {
            id: 2,
            projTitle: "project 2",
            projSubtitle: "// _web-development",
            progImg: "https://img.freepik.com/vettori-gratuito/sfondo-colorato-geometrico-tecnologico_23-2149111277.jpg",
            progIcon: "H",
            progDescription: "Un progetto straordinario per l'innovazione tecnologica",
            tags: ["HTML", "Vue"],
        },
    ]);

    const [selectedFilters, setSelectedFilters] = useState([]); // Stato per i filtri selezionati

    const filteredProjects = projectsData.filter(project =>
        selectedFilters.length === 0 || project.tags.some(tag => selectedFilters.includes(tag))
    );

    return (
        <>
            <SidebarProjects setSelectedFilters={setSelectedFilters} />
            <div className="main-projects-section">
                {filteredProjects.map((s) => (
                    <div key={s.id} className="card">
                        <div className="card-header">
                            <p>{s.projTitle}</p>
                            <span>{s.projSubtitle}</span>
                        </div>
                        <div className="card-main">
                            <div className="card-image-cont">
                                <img src={s.progImg} alt="" />
                                <span className="ref-icon">{s.progIcon}</span>
                            </div>
                            <div className="description">
                                <p>{s.progDescription}</p>
                                <button>view-project</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MainProgects;
