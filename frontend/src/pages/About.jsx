import Footer from "../components/Footer";
import MainAbout from "../components/main/MainAbout";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";

function AboutPage() {
    return (
        <>
            <Navbar ownerName="alessio-caringella" />
            <MainSection mainAbout={<MainAbout />} />
            <Footer footerAccess="_admin-area" />
        </>
    );
}

export default AboutPage;