import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    // login utente
    const login = async ({ username, password }) => {
        const payload = {
            username: username,
            password: password
        };

        try {
            const response = await fetch("http://localhost:8080/api/auth/signin", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Errore HTTP: ${response.status}`);
            }

            const result = await response.json();

            if (result.success) {
                setUser(true);
                console.log("login effettuato:" + result);
            } else {
                console.log("credenziali non valide");
            }

        } catch (error) {
            console.error("errore nel log-in", error.message);
        }
    };

    // registarzione utente
    const signup = async ({ username, email, password }) => {
        const payload = {
            username: username,
            email: email,
            password: password
        };

        try {
            const response = await fetch("http://localhost:8080/api/auth/signup", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Errore HTTP ${response.status}`);
            }

            const result = await response.json();

            if (result.success) {
                setUser(true);
                console.log("registato correttamente");
            } else {
                console.log("errore nella registazione");
            }

        } catch (error) {
            console.error("errore nel signup", error.message);
        }
    };

    // verifica del token
    const verifyToken = async () => {

        try {

            const response = await fetch("http://localhost:8080/api/auth/verify-token", {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                setUser(true);

            } else {

                setUser(false);
                throw new Error(`Errore nel controllo del cookie ${response.status}`);
            }

            const result = await response.json();
            console.log(result.message);

        } catch (error) {
            console.error("errore nella verifica del token", error.message);
        }

    };

    const logout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        setUser(false);
        console.log("Logout eseguito, cookie cancellato");
        window.location.href = "/";
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, verifyToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);