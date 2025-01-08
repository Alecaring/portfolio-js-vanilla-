import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { validToken, setValidToken, loading, setLoading } = useAuth();

  useEffect(() => {
    const verifyToken = async () => {
      setLoading(true); // Imposta loading a true all'inizio della verifica
      try {
        const response = await fetch("http://localhost:8080/api/auth/verify-token", {
          method: "GET",
          credentials: "include", // Include i cookie nella richiesta
        });

        if (response.ok) {
          setValidToken(true);
        } else {
          setValidToken(false);
        }
        const result = await response.json();
        console.log(result.message);
        
      } catch (error) {
        console.error('Errore nella verifica del token:', error);
        setValidToken(false);
      } finally {
        setLoading(false); // Imposta loading a false dopo la verifica
      }
    };

    verifyToken();
  }, [setLoading, setValidToken]); // I set di stato non devono essere dentro l'array di dipendenze, solo le variabili usate

  // Mostra un caricamento finché non abbiamo verificato il token
  if (loading) {
    return <div>Caricamento...</div>;
  }

  // Se il token non è valido, reindirizza alla pagina di login
  if (!validToken) {
    return <Navigate to="/login" />;
  }

  return children; // Se il token è valido, mostra i figli
};

export default ProtectedRoute;
