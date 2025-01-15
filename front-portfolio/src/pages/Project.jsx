// -----------------------------------------------------
// namespace : PROJECT.JSX
// -----------------------------------------------------
// REACT :: REACT
import { useEffect } from "react";
// componete :: layout contenitore principale
import CommonSectionLayout from "../components/layouts/CommonSectionLayout";
// componete :: layout sidebar
import CommonSidebarLayout from "../components/layouts/CommonSidebarLayout";
// componete :: rende l'icona
import Icon from "../components/Icon";
// icona :: fortawesome
import { faCaretDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
// contesto :: provider
import { useProject } from "../contexts/ProjectContext";
// scss :: stile
import "../scss/partials/project.scss";
import { useNavigate } from "react-router-dom";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Project = () => {


    const {
        // () => {} :: func;
        fetchData, // chiamata api al server GET;
        // [] :: state;
        projectData, // contiene i dati json;
        // bool :: state;
        loader, // varibile per lo stato di caricamento;
        // {} :: state;
        errors, // in caso di fallimento della chimata al server;
        // () => {} return [] :: func;
        filteredProjects, // applica i filtri in base ai parametri, HTML, CSS, JS...;
        // [] :: state;
        list, // lista della sidebar;
        // bool :: state;
        openFilter, // tiene traccia della apertura e chiusura del folder nella sidebar;
        // () => {} :: func;
        toggleOpenFilter, // funzione che aggiorna openFilter;
        // [] :: state;
        checkedItems, // tiene traccia della voce selezionata per filtrare projectData;
        // () => {} :: func;
        handleCheckboxChange, // aggiorna lo stato di checkedItems;
        // () => {} :: func;
        handleSubmitFilter, // permette di avviare l'azione per filtrare;

        totalPages,
        currentPage,
        setCurrentPage
    } = useProject(); // contesto

    /**
     * effetto usato nel componente per permettere di effettuare la chiamata 
     * solo quando l'utente ha l'effettivo accesso.
     * ------------------
     * questa procedura rende piu veloce l'applicazione.
     * ------------------
     * recupera i dati dei progetti
     */
    useEffect(() => {
        fetchData(currentPage); // chiamata in GET
    }, [currentPage]);

    const navigate = useNavigate();

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
          setCurrentPage(newPage);
        }
      };

    const handleShowProject = (repoName) => {
        navigate(`/editor/${repoName}`);
    }

    const iconMap = {
        faReact: faReact,
    }

    const getIcon = (iconName) => {
        return iconMap[iconName] || null;
    }

    return (
        <section className="container-main">

            {/* sidebar */}
            <CommonSidebarLayout>
                <div className="container-sidebar-projects">
                    <p className="name_page_projects">_projects</p>
                    <div className="main-folder" onClick={toggleOpenFilter}>
                        <Icon icon={faCaretDown} />

                        <p>projects</p>
                    </div>
                    <ul className={openFilter ? "filter-section-project" : "filter-section-project-open"}>
                        {list.map((s) => (
                            <li key={s.id} className="list-item">
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(s.name)}
                                    checked={checkedItems.includes(s.name)}
                                />
                                <Icon icon={s.icon} />
                                <p>{s.name}</p>
                            </li>
                        ))}
                        <button onClick={handleSubmitFilter} type="button">_filter</button>
                    </ul>
                </div>
            </CommonSidebarLayout>

            {/* sezione principale */}
            <CommonSectionLayout>
                <div className="main-projects-section">
                    <div className="card-container">

                    {loader ? (
                        <h1>Loading...</h1>
                    ) : errors && errors.message ? (
                        <h1>{errors.message}</h1>
                    ) : projectData && projectData.length > 0 ? (
                        filteredProjects.map((s) => (
                            <div key={s.id} className="card">
                                <div className="card-header">
                                    <p>{s.title}</p>
                                    <span>{s.subtitle}</span>
                                </div>
                                <div className="card-main">
                                    <div className="card-image-cont">
                                        <img src={s.image} alt={s.title} />
                                        <Icon icon={getIcon(s.icon)} className="ref-icon" />
                                        {/* <span className="ref-icon">{s.icon}</span> */}
                                    </div>
                                    <div className="description">
                                        <p>{s.description}</p>
                                        <button onClick={() => handleShowProject(s.repositoryName)}>view-project</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>No projects found.</h1>
                    )}
                    </div>
                    <div className="pagination-container">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            <Icon icon={faCaretLeft} />
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            <Icon icon={faCaretRight} />
                        </button>
                    </div>
                </div>
            </CommonSectionLayout>

        </section>
    );
};

export default Project;
