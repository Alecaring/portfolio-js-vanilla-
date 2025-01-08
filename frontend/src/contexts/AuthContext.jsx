import React, { createContext, useContext, useState } from "react";

// Crea il contesto
const AuthContext = createContext();

// Provider del contesto
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false); // Stato di autenticazione
  const [validToken, setValidToken] = useState(isAuth);
  const [loading, setLoading] = useState(true);


  // Funzione per eseguire il login
  const login = async ({ username, password }) => {
    // setIsAuth(true);
    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`); // Gestione errori HTTP
      }

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setIsAuth(true);
      } else {
        alert("Credenziali non valide");
      };

    } catch (error) {
      console.error("errore nel log-in", error.message);

    }
  };

  // Funzione per eseguire il logout
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, validToken, loading, setLoading, setValidToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizzato per utilizzare il contesto
export const useAuth = () => {
  return useContext(AuthContext);
};
