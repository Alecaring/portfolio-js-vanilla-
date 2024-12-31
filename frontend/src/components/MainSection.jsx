import "../scss/partials/mainSection.scss"

function MainSection({mainHome, mainAbout, mainContacts, mainProgects}) {
    return (
        <section className="components-main-section text-white">
            {mainHome}
            {mainProgects}
            {mainAbout}
            {mainContacts}
        </section>

    );
}

export default MainSection;