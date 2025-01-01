import Footer from "../components/Footer";
import MainProgects from "../components/main/MainProgects";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";

function ProjectsPage() {
    return (
        <>
            <Navbar ownerName="alessio-caringella" />
            <MainSection mainProgects={<MainProgects/>} />
            <Footer footerAccess="_admin-area" />
        </>
    );
}

export default ProjectsPage;