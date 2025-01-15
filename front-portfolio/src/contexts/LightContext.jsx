import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themes, setThemes] = useState(() => {
        // Carica il tema iniziale da localStorage
        const storedTheme = localStorage.getItem("theme");
        return storedTheme
            ? JSON.parse(storedTheme)
            : {
                  _curTheme: "light",
                  bgThemeSecondary: "bg-white",
                  bgThemeMain: "bg-white",
                  bgThemeInput: "bg-lightGrey",
                  txtTheme: "text-dark-blue",
              };
    });

    const handleLightApp = () => {
        const newTheme = themes._curTheme === "light" ? "dark" : "light";

        const updatedThemes = {
            ...themes,
            _curTheme: newTheme,
            bgThemeSecondary: newTheme === "light" ? "bg-white" : "bg-black",
            bgThemeMain: newTheme === "light" ? "bg-white" : "bg-dark-blue",
            bgThemeInput: newTheme === "light" ? "bg-lightGrey" : "bg-purple",
            txtTheme: newTheme === "light" ? "text-dark-blue" : "text-white",
        };

        setThemes(updatedThemes);
        localStorage.setItem("theme", JSON.stringify(updatedThemes));
    };

    useEffect(() => {
        console.log(`Tema corrente: ${themes._curTheme}`);
        console.log(themes);
    }, [themes]);

    return (
        <ThemeContext.Provider value={{ themes, handleLightApp }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const setTheme = () => useContext(ThemeContext);
