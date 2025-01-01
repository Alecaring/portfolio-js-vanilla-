import "../../scss/partials/login.scss";
import { useAuth } from "../../contexts/AuthContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainLogin() {
    const { login } = useAuth(); // Recupera la funzione login dal contesto
    const navigate = useNavigate();

    // Stato locale per i dati del form
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    // Gestore per aggiornare i valori dello stato
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Gestore per l'invio del form
    const handleSubmit = (event) => {
        event.preventDefault(); // Previene il comportamento predefinito
        const { username, password } = formData;

        // Simula il login (qui puoi aggiungere una validazione o un'API call)
        if (username && password) {
            login({ username, password }); // Passa i dati del login
            navigate("/admin"); // Reindirizza all'area admin
        } else {
            alert("Inserisci username e password validi.");
        }
    };

    return (
        <section className="container-login-page">
            <form onSubmit={handleSubmit} className="form">
                <h1 className="title">_Admin-area</h1>
                
                <div className="username-container">
                    <label htmlFor="username">_username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="_insert-username" 
                        value={formData.username} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="password-container">
                    <label htmlFor="password">_password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="_insert-password" 
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="button-container">
                    <button type="submit">submit</button>
                </div>
            </form>
        </section>
    );
}

export default MainLogin;
