import Footer from "../components/Footer";
import MainProgects from "../components/main/MainProgects";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";

function ProjectsPage() {
    return (
        <>
            <Navbar />
            <MainSection mainProgects={<MainProgects/>} />
            <Footer />
        </>
    );
}

export default ProjectsPage;