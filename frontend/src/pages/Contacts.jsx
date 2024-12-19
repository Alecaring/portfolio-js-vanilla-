import Footer from "../components/Footer";
import MainContacts from "../components/main/MAinContacts";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";

function ContactsPage() {
    return (
        <>
            <Navbar />
            <MainSection mainContacts={<MainContacts />} />
            <Footer />
        </>
    );
}

export default ContactsPage;