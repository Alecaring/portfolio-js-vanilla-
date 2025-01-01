import Footer from "../components/Footer";
import MainContacts from "../components/main/MAinContacts";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";

function ContactsPage() {
    return (
        <>
            <Navbar ownerName="alessio-caringella" />
            <MainSection mainContacts={<MainContacts />} />
            <Footer footerAccess="_admin-area" />
        </>
    );
}

export default ContactsPage;