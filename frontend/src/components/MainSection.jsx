import MainHome from "./main/MainHome";
import "../scss/partials/mainSection.scss"

function MainSection({mainHome}) {
    return (
        <section className="components-main-section">
            {mainHome}
        </section>

    );
}

export default MainSection;