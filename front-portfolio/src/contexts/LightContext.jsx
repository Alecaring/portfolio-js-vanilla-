import { createContext, useContext, useState } from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isLight, setIsLight] = useState(true);

    const handleLightApp = () => {
        setIsLight(prevIsLight => !prevIsLight);
        console.log(isLight);
    }

    return (
        <ThemeContext.Provider value={{ isLight, handleLightApp }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const setTheme = () => useContext(ThemeContext);