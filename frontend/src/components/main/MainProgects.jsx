import SidebarProjects from "./sidebars/SidebarProjects";
import "../../scss/partials/mainPorjects.scss";
import { useState } from "react";
import { useProjectContext } from "../../contexts/ProjectsContext";

function MainProgects() {
    const { projectData, loader, errors } = useProjectContext();
    console.log("ProjectsData:", projectData);


    const [selectedFilters, setSelectedFilters] = useState([]); // Stato per i filtri selezionati

    const filteredProjects = projectData.filter(project =>
        selectedFilters.length === 0 || project.tags.some(tag => selectedFilters.includes(tag))
    );

    return (
            <>
                <SidebarProjects setSelectedFilters={setSelectedFilters} />
                <div className="main-projects-section">
                    {filteredProjects.map((s) => (
                        <div key={s.id} className="card">
                            <div className="card-header">
                                <p>{s.title}</p>
                                <span>{s.subtitle}</span>
                            </div>
                            <div className="card-main">
                                <div className="card-image-cont">
                                    <img src={s.image} alt="" />
                                    <span className="ref-icon">{s.icon}</span>
                                </div>
                                <div className="description">
                                    <p>{s.description}</p>
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
