import Footer from "../components/Footer";
import MainAbout from "../components/main/MainAbout";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";

function AboutPage() {
    return (
        <>
            <Navbar />
            <MainSection mainAbout={<MainAbout />} />
            <Footer />
        </>
    );
}

export default AboutPage;