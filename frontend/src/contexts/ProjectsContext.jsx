import React, { createContext, useContext, useEffect, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

    const [projectData, setProjectData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            try {

                const resp = await fetch("http://localhost:8080/api/projects/get");
                const result = await resp.json();
                console.log(result);
                setProjectData(result);
                setLoader(false);

            } catch (err) {

                setErrors(err.message);
                setLoader(false);

            }
        }
        fetchData();
    }, [])

    return (
        <ProjectContext.Provider value={{ projectData, loader, errors }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjectContext = () => {
    return useContext(ProjectContext);
};

