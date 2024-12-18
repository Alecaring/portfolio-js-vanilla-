import Footer from "../components/Footer";
import MainHome from "../components/main/MainHome";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";

function HomePage() {
    return (
        <>
            <Navbar />
            <MainSection mainHome={<MainHome />} />
            <Footer />
        </>
    );
}

export default HomePage;