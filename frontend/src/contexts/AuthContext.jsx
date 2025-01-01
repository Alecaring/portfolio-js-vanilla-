import React, { createContext, useContext, useState } from "react";

// Crea il contesto
const AuthContext = createContext();

// Provider del contesto
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false); // Stato di autenticazione

  // Funzione per eseguire il login
  const login = () => {
    setIsAuth(true);
  };

  // Funzione per eseguire il logout
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizzato per utilizzare il contesto
export const useAuth = () => {
  return useContext(AuthContext);
};
