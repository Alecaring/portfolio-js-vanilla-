import { useEffect, useState } from "react";
import AdminSidebarProjects from "../sidebars/admin/AdminSidebarProjects";
import "../../../scss/partials/mainPorjects.scss";
import CreateCard from "../common/admin/projects-content/CreateCard";
import CreateCardPreview from "../common/admin/projects-content-right/CreateCardPreview";

function AdminMainProjects() {
    const [title, setTitle] = useState("project 1");
    const [subTitle, setSubTitle] = useState("// _ui-animation");
    const [image, setImage] = useState("https://i0.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?resize=1024%2C675&ssl=1");
    const [icon, setIcon] = useState("R");
    const [description, setDescription] = useState("Questa è la descrizione di questo fantastico progetto nato per salvare il mondo");

    // Funzioni per gestire il cambiamento dei campi
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleSubTitleChange = (e) => setSubTitle(e.target.value);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result); // Salva l'immagine come stringa base64
            };
            reader.readAsDataURL(file); // Converte il file in base64
        }
    };
    const handleIconChange = (e) => setIcon(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const [selectedActionAdminProjects, setSelectedActionAdminProjects] = useState(null);

    const handleAdminActionClick = (item) => {
        setSelectedActionAdminProjects(item);
    };

    

    let formAdminProjectLeft;
    let previewAdminProjectRight;

    switch (selectedActionAdminProjects) {
        case "_create-card":
            formAdminProjectLeft = (
                <CreateCard
                    title={title}
                    subTitle={subTitle}
                    image={image}
                    icon={icon}
                    description={description}
                    handleTitleChange={handleTitleChange}
                    handleSubTitleChange={handleSubTitleChange}
                    handleImageChange={handleImageChange}
                    handleIconChange={handleIconChange}
                    handleDescriptionChange={handleDescriptionChange}
                />
            );
            previewAdminProjectRight = (
                <CreateCardPreview
                    title={title}
                    subTitle={subTitle}
                    image={image}
                    icon={icon}
                    description={description}
                />
            );
            break;
        case "_edit-card":
        case "_delete-card":
            formAdminProjectLeft = "";
            previewAdminProjectRight = "";
            break;
        default:
            formAdminProjectLeft = (
                <CreateCard
                    title={title}
                    subTitle={subTitle}
                    image={image}
                    icon={icon}
                    description={description}
                    handleTitleChange={handleTitleChange}
                    handleSubTitleChange={handleSubTitleChange}
                    handleImageChange={handleImageChange}
                    handleIconChange={handleIconChange}
                    handleDescriptionChange={handleDescriptionChange}
                />
            );
            previewAdminProjectRight = (
                <CreateCardPreview
                    title={title}
                    subTitle={subTitle}
                    image={image}
                    icon={icon}
                    description={description}
                />
            );
            break;
    }

    useEffect(() => { }, [selectedActionAdminProjects]);

    return (
        <>
            <AdminSidebarProjects onAdminActionClick={handleAdminActionClick} />
            <div className="main">
                <div className="container-left-main">{formAdminProjectLeft}</div>
                <div className="container-right-main">{previewAdminProjectRight}</div>
            </div>
        </>
    );
}

export default AdminMainProjects;
