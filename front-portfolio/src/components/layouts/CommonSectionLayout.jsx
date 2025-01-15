import { useLocation } from "react-router-dom";
import "../../scss/partials/commonSectionLayout.scss";

const CommonSectionLayout = ({ children }) => {
    const location = useLocation();

    // Usa l'operatore di comparazione '==='
    const isHomePage = location.pathname === "/";
    const isLoginPage = location.pathname === "/login";
    const isProjectPage = location.pathname === "/project";
    const isEditorPage = location.pathname === "/editor";

    return (
        <div className={isHomePage || isLoginPage ? "common-section-layout-no-sidebar" : "common-section-layout"}>
            {children}
        </div>
    );
};

export default CommonSectionLayout;
