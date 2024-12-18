import { Link } from "react-router-dom";
import "../scss/partials/navbar.scss";

function Navbar() {
    return (
        <div className="container-navbar">
            <div className="inner-container-name">
                <Link to="/">alessio-caringella</Link>
            </div>
            <div className="inner-container-links">
                <div className="links-left">
                    <ul>
                        <li>
                        <Link to="/">_hello</Link>
                        </li>
                        <li>
                        <Link to="/about">_about-me</Link>
                        </li>
                        <li>
                        <Link to="/projects">_projects</Link>
                        </li>
                    </ul>
                </div>
                <div className="links-right">
                    <ul>
                        <li>
                        <Link to="/contacts">_contact-me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;