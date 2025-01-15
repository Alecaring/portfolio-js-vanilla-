import React, { createContext, useContext, useEffect, useState } from "react";
import { faReact, faHtml5, faCss3Alt, faVuejs } from '@fortawesome/free-brands-svg-icons';


const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

    const [projectData, setProjectData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [errors, setErrors] = useState(null);
    const [openFilter, setOpenFilter] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]); // Stato per i filtri selezionati
    const [list, setList] = useState([
        { id: 1, icon: faReact, name: "React" },
        { id: 2, icon: faHtml5, name: "HTML" },
        { id: 3, icon: faCss3Alt, name: "CSS" },
        { id: 4, icon: faVuejs, name: "Vue" },
    ]);
    const [totalPages, setTotalPages] = useState("");
    const [currentPage, setCurrentPage] = useState("");


    const fetchData = async (page = 1) => {

        try {

            const resp = await fetch(`http://localhost:8080/api/projects/get?page=${page}&limit=3`);
            const result = await resp.json();
            console.log(result);

            setProjectData(result.data);
            setTotalPages(result.totalPages);
            setCurrentPage(result.currentPage);

            setLoader(false);

        } catch (err) {
            console.error("errore nel fetch dei dati")
            setErrors(
                {
                    error: err.message,
                    message: "il server potrebbe essere spento"
                }
            );
            setLoader(false);

        }
    }


    const filteredProjects = projectData.filter(project =>
        selectedFilters.length === 0 || project.tags.some(tag => selectedFilters.includes(tag))
    );

    const handleCheckboxChange = (name) => {
        setCheckedItems(prevState =>
            prevState.includes(name) ? prevState.filter(item => item !== name) : [...prevState, name]
        );
    };

    const handleSubmitFilter = () => {
        setSelectedFilters(checkedItems); // Passo i filtri selezionati
    };

    const toggleOpenFilter = () => {
        setOpenFilter(prevOpenFilter => !prevOpenFilter);
    }

    return (
        <ProjectContext.Provider value={{
            fetchData,
            projectData,
            loader,
            errors,
            selectedFilters,
            setSelectedFilters,
            filteredProjects,
            list,
            setList,
            openFilter,
            setOpenFilter,
            checkedItems,
            setCheckedItems,
            handleCheckboxChange,
            handleSubmitFilter,
            toggleOpenFilter,
            totalPages,
            currentPage,
            setCurrentPage,
        }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProject = () => {
    return useContext(ProjectContext);
};

