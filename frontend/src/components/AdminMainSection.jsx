import "../scss/partials/mainSection.scss";

function AdminMainSection({ children }) {
    return (
        <section className="components-main-section text-white">
            {children}
        </section>
    );
}

export default AdminMainSection;
