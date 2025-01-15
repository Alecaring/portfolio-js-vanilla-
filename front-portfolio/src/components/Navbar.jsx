import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL, faMoon, faSun, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "../scss/partials/navbar.scss";
import { setTheme } from "../contexts/LightContext";
import Footer from "./Footer";



const Navbar = () => {
  const { user, logout } = useAuth();

  const { themes, handleLightApp } = setTheme();
  const location = useLocation();
  const isEditor = location.pathname.includes("/editor");

  const [navLinks, setNavLinks] = useState([
    {
      id: 1,
      left: true,
      to: user ? "/admin" : "/",
      content: "_hello",
      className: ({ isActive }) => (isActive ? "active" : "link"),
    },
    {
      id: 2,
      left: true,
      to: user ? "/admin/about" : "/about",
      content: "_about-me",
      className: ({ isActive }) => (isActive ? "active" : "link"),
    },
    {
      id: 3,
      left: true,
      to: user ? "/admin/projects" : "/projects",
      content: "_projects",
      className: ({ isActive }) => (isActive ? "active" : "link"),
    },
    {
      id: 4,
      left: false,
      to: user ? "/admin/contacts" : "/contacts",
      content: "_contact-me",
      className: ({ isActive }) => (isActive ? "active" : "link"),
    }
  ])
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  }

  const ownerName = user ? "_admin-dashboard" : "_alessio-caringella";
  const linkTo = user ? "/admin" : "/";

  return (

    <header className="container-navbar-desktop">
      <div className="inner-container-name-cell">
        <NavLink to={linkTo} end>
          {ownerName}
        </NavLink>
      </div>
      <div className="inner-container-links">
        <div className="links-left">
          <ul className="list-group">
            {navLinks.filter(
              (link) => link.left
            ).map((s) => (
              <li className="list-items-left" key={s.id}>
                <NavLink to={s.to} className={s.className} end>{s.content}</NavLink>
              </li>
            ))}
            
            <li className={isEditor ? "special-editor-opened" : "none"}>_editor</li>
          </ul>
        </div>
        <div className="links-right">
          <ul className="list-group">
            <li className="list-items-right">
              <button onClick={handleLightApp}>
                <FontAwesomeIcon className={`${themes.txtTheme} transition-02s`} icon={themes._curTheme == "light" ? faMoon : faSun} />
              </button>
            </li>
            {navLinks.filter(
              (link) => !link.left
            ).map((s) => (
              <li className="list-items-right" key={s.id}>
                <NavLink to={s.to} className={s.className} end>{s.content}</NavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* dispositivi diversi da desktop */}
      <div className="container-hamburger-menu" >
        <FontAwesomeIcon icon={faBars} onClick={openMenu} />
      </div>
      <div className={isMenuOpen ? `dropdown-menu-open ${themes.bgThemeMain} transition-02s` : `dropdown-menu`}>

        <ul className="list-group-navbar">
          {navLinks.map((s) => (
            <li key={s.id}>
              <NavLink onClick={() => setIsMenuOpen(false)} to={s.to} className={s.className} end>{s.content}</NavLink>
            </li>
          ))}
        </ul>

        <Footer />
      </div>
    </header>
  );
};

export default Navbar;
