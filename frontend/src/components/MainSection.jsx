import "../scss/partials/mainSection.scss"

function MainSection({mainHome, mainAbout, mainContacts}) {
    return (
        <section className="components-main-section text-white">
            {mainHome}
            {mainAbout}
            {mainContacts}
        </section>

    );
}

export default MainSection;