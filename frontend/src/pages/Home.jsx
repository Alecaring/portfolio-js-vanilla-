import Footer from "../components/Footer";
import MainHome from "../components/main/MainHome";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";

function HomePage() {
    return (
        <>
            <Navbar ownerName="alessio-caringella" />
            <MainSection mainHome={<MainHome />} />
            <Footer footerAccess="_admin-area" />
        </>
    );
}

export default HomePage;