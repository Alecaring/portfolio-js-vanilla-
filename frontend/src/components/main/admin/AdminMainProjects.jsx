import { useEffect, useState } from "react";
import AdminSidebarProjects from "../sidebars/admin/AdminSidebarProjects";
import "../../../scss/partials/mainPorjects.scss"
import CreateCard from "../common/admin/projects-content/CreateCard";
import CreateCardPreview from "../common/admin/projects-content-right/CreateCardPreview"

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

    const [selectedActionAdminProjects, setSelectedActionAdminProjects] = useState(null)

    const handleAdminActionClick = (item) => {
        setSelectedActionAdminProjects(item);
    }

    let formAdminProjectLeft;
    let previewAdminProjectRight;
    switch (selectedActionAdminProjects) {
        case "_create-card":
            formAdminProjectLeft = <CreateCard
                title={title}
                subTitle={subTitle}
                image={image}
                icon={icon}
                description={description}
                handleTitleChange={(e) => setTitle(e.target.value)}
                handleSubTitleChange={(e) => setSubTitle(e.target.value)}
                handleImageChange={(e) => setImage(e.target.value)}
                handleIconChange={(e) => setIcon(e.target.value)}
                handleDescriptionChange={(e) => setDescription(e.target.value)}
            />;
            previewAdminProjectRight = <CreateCardPreview title={title} subTitle={subTitle} image={image} icon={icon} description={description} />;
            break;
        case "_edit-card":
            formAdminProjectLeft = "";
            previewAdminProjectRight = "";
            break;
        case "_delete-card":
            formAdminProjectLeft = "";
            previewAdminProjectRight = "";
            break;
        default:
            formAdminProjectLeft = <CreateCard title={title} subTitle={subTitle} image={image} icon={icon} description={description}
                handleTitleChange={(e) => setTitle(e.target.value)}
                handleSubTitleChange={(e) => setSubTitle(e.target.value)}
                handleImageChange={(e) => setImage(e.target.value)}
                handleIconChange={(e) => setIcon(e.target.value)}
                handleDescriptionChange={(e) => setDescription(e.target.value)}

            />;
            previewAdminProjectRight = <CreateCardPreview title={title} subTitle={subTitle} image={image} icon={icon} description={description} />;
            break;
    }

    useEffect(() => {
    }, [selectedActionAdminProjects])



    return (
        <>
            <AdminSidebarProjects onAdminActionClick={handleAdminActionClick} />

            <div className="main">
                <div className="container-left-main">


                    {formAdminProjectLeft}
                </div>

                <div className="container-right-main">

                    {previewAdminProjectRight}
                </div>
            </div>
        </>
    );
}

export default AdminMainProjects;
