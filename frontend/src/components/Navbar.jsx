import { NavLink } from "react-router-dom";
import "../scss/partials/navbar.scss";
import { useAuth } from "../contexts/AuthContext";

function Navbar({ ownerName }) {
    const { isAuth } = useAuth();

    return (
        <div className="container-navbar text-white">
            <div className="inner-container-name">
                <NavLink to={isAuth ? "/admin" : "/"} end>
                    {ownerName}
                </NavLink>
            </div>
            <div className="inner-container-links">
                <div className="links-left">
                    <ul>
                        <li>
                            <NavLink
                                to={isAuth ? "/admin" : "/"}
                                end
                                className={({ isActive }) => (isActive ? "active" : "link")}
                            >
                                _hello
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={isAuth ? "/admin/about" : "/about"}
                                className={({ isActive }) => (isActive ? "active" : "link")}
                            >
                                _about-me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={isAuth ? "/admin/projects" : "/projects"}
                                className={({ isActive }) => (isActive ? "active" : "link")}
                            >
                                _projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="links-right">
                    <ul>
                        <li>
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) => (isActive ? "active" : "link")}
                            >
                                _contact-me
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
