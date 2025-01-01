import { useState } from "react";
import AdminSidebarProjects from "../sidebars/admin/AdminSidebarProjects";
import "../../../scss/partials/mainPorjects.scss"

function AdminMainProjects() {
    const [title, setTitle] = useState("project 1");
    const [subTitle, setSubTitle] = useState("// _ui-animation");
    const [image, setImage] = useState("https://img.freepik.com/vettori-gratuito/sfondo-realistico-in-stile-futuristico_23-2149129125.jpg");
    const [icon, setIcon] = useState("R");
    const [description, setDescription] = useState("Questa è la descrizione di questo fantastico progetto nato per salvare il mondo");

    // Funzioni per gestire il cambiamento dei campi
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleSubTitleChange = (e) => setSubTitle(e.target.value);
    const handleImageChange = (e) => setImage(e.target.value);
    const handleIconChange = (e) => setIcon(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    return (
        <>
            <AdminSidebarProjects />

            <div className="main">
                <div className="container-left-main">

                    <div className="form-create-card-admin">

                        <div className="title-container">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </div>

                        <div className="subtitle-container">
                            <label htmlFor="subtitle">Subtitle</label>
                            <input
                                type="text"
                                id="subtitle"
                                value={subTitle}
                                onChange={handleSubTitleChange}
                            />
                        </div>

                        <div className="image-container">
                            <label htmlFor="image">Image URL</label>
                            <textarea
                                type="text"
                                id="image"
                                value={image}
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="icon-container">
                            <label htmlFor="icon">Icon</label>
                            <input
                                type="text"
                                id="icon"
                                value={icon}
                                onChange={handleIconChange}
                            />
                        </div>

                        <div className="description-container">
                            <label htmlFor="description">Description</label>
                            <textarea
                                type="text"
                                id="description"
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="container-right-main">
                    <div className="card">
                        <div className="card-header">
                            <p>{title}</p>
                            <span>{subTitle}</span>
                        </div>
                        <div className="card-main">
                            <div className="card-image-cont">
                                <img src={image} alt="project" />
                                <span className="ref-icon">{icon}</span>
                            </div>
                            <div className="description">
                                <p>{description}</p>
                                <button>view-project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminMainProjects;
