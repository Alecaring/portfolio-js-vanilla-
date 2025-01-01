import "../scss/partials/mainSection.scss"

function MainSection({mainHome, mainAbout, mainContacts, mainProgects, mainLogin}) {
    return (
        <section className="components-main-section text-white">
            {mainHome}
            {mainProgects}
            {mainAbout}
            {mainContacts}
            {mainLogin}
        </section>

    );
}

export default MainSection;