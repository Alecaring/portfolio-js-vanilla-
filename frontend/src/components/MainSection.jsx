import { ProjectProvider } from "../contexts/ProjectsContext";
import "../scss/partials/mainSection.scss"

function MainSection({ mainHome, mainAbout, mainContacts, mainProgects, mainLogin }) {
    return (
        <section className="components-main-section text-white">
            <ProjectProvider>
                {mainProgects}
            </ProjectProvider>
            {mainHome}
            {mainAbout}
            {mainContacts}
            {mainLogin}
        </section>

    );
}

export default MainSection;