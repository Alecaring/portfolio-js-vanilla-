import "../scss/partials/mainSection.scss"

function MainSection({mainHome, mainAbout, mainContacts}) {
    return (
        <section className="components-main-section">
            {mainHome}
            {mainAbout}
            {mainContacts}
        </section>

    );
}

export default MainSection;