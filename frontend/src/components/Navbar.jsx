import { NavLink } from "react-router-dom";
import "../scss/partials/navbar.scss";
import { useAuth } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function Navbar({ ownerName }) {
    const { isAuth } = useAuth();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
    }
    // useEffect(() => {


    //     openMenu();

    // }, [])

    return (
        <header className="container-navbar text-white">
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

            {/* dispositivi diversi da desktop */}
            <div className="container-hamburger-menu">
                <FontAwesomeIcon icon={faBars} onClick={openMenu} />
            </div>
            <div className={isMenuOpen ? "dropdown-menu-open" : "dropdown-menu"}>

                <ul className="list-group-navbar">
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
                    <li>
                        <NavLink
                            to="/contacts"
                            className={({ isActive }) => (isActive ? "active" : "link")}
                        >
                            _contact-me
                        </NavLink>

                    </li>
                </ul>

                <Footer />
            </div>
        </header>
    );
}

export default Navbar;
