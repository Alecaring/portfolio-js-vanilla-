import "../../scss/partials/mainContacts.scss";
import SidebarAbout from './sidebars/SidebarAbout';
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

// Funzione helper per creare righe dinamiche
const createContactRows = (rows) =>
    rows.map(({ lineNumber, content }, index) => (
        <div key={index} className="cont-rows-contacts">
            <span className="colls-numered text-bordeaux">{lineNumber}</span> {content}
        </div>
    ));

function MainContacts() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmitEmail = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/api/contacts/send-message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log(data);
            setIsSuccess(data.success);

        } catch (error) {
            console.error("Errore durante l'invio:", error);
            setResponse("Errore durante l'invio del messaggio");

        }
    }

    const [date, setDate] = useState("");

    useEffect(() => {
        const dt = DateTime.now();
        setDate(`${dt.day}-${dt.month}-${dt.year}`);
    }, []);

    // Gestione dinamica del cambio di input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Righe dinamiche della sezione "form-contacts-graphics"
    const contactRows = createContactRows([
        { lineNumber: 1, content: <><span className="const">const</span> <span className="text-turchese-chiaro">button</span> = <span className="method">document.getElementById<span className="class">("#sendBtn")</span><span>;</span></span></> },
        { lineNumber: 2, content: "" },
        { lineNumber: 3, content: <><span className="const">const</span> <span className="text-turchese-chiaro">message</span> = <span>&#123;</span></> },
        { lineNumber: 4, content: <><span className="const-assignament space1">name:</span> <span className="class">"{formData.name.trim()}",</span></> },
        { lineNumber: 5, content: <><span className="const-assignament space1">email:</span> <span className="class">"{formData.email.trim()}",</span></> },
        { lineNumber: 6, content: <><span className="const-assignament space1">message:</span> <span className="class">"{formData.message.trim()}",</span></> },
        { lineNumber: 7, content: <><span className="const-assignament space1">date:</span> <span className="class">"{date}",</span></> },
        { lineNumber: 8, content: <span>&#125;;</span> },
        { lineNumber: 9, content: "" },
        { lineNumber: 10, content: <><span className="method"><span className="text-turchese-chiaro">button</span>.addEventListener<span className="grey">(</span><span className="class">"click",</span><span className="grey"> () =&#62;</span><span></span> <span className="grey">&#123;</span></span></> },
        { lineNumber: 11, content: <><span className="space1 method">form.send<span>(</span>message<span>);</span></span></> },
        { lineNumber: 12, content: <span>&#125;);</span> },
    ]);

    return (
        <>
            <div className="sidebar">
                <SidebarAbout />
            </div>
            <div className="main">

                <div className="container-left-contacts">
                    <div className="top-nav">
                        <div className="cell-opened">
                            <div className="inner-cellOpend">
                                <FontAwesomeIcon icon={faX} />
                                <span>_contacts</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-contacts">
                        {isSuccess ?
                            (
                                <div className="container-response-success">
                                    <h1>Thank you! 🤘</h1>
                                    <p>Your message has been accepted. You will recieve answer really soon!</p>
                                    <button  onClick={() => setIsSuccess(false)}>send-new-message</button>
                                </div>
                            ) : (

                                <form onSubmit={handleSubmitEmail}>
                                    {["name", "email", "message"].map((field) => (
                                        <div key={field}>
                                            <label htmlFor={field}>_{field}:</label>
                                            {field === "message" ? (
                                                <textarea
                                                    onChange={handleChange}
                                                    value={formData[field]}
                                                    name={field}
                                                    id={field}
                                                    placeholder={`_${field}...`}
                                                    cols="3"
                                                ></textarea>
                                            ) : (
                                                <input
                                                    onChange={handleChange}
                                                    value={formData[field]}
                                                    type={field === "email" ? "email" : "text"}
                                                    id={field}
                                                    name={field}
                                                    placeholder={field === "name" ? "Jhon Doe" : "user@gmail.com"}
                                                />
                                            )}
                                        </div>
                                    ))}
                                    <button type="submit">submit-message</button>
                                </form>
                            )
                        }
                    </div>
                </div>

                <div className="container-right-contacts">
                    <div className="top-nav">
                        <div className="cell-opened">
                            <div className="inner-cellOpend">
                                <FontAwesomeIcon icon={faX} />
                                <span>_preview-contacts</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-contacts-graphics">{contactRows}</div>
                </div>
            </div>
        </>
    );
}

export default MainContacts;
