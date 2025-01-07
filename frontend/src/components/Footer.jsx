import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Assicurati che questa importazione sia presente
import "../scss/partials/footer.scss"
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


function Footer({ footerAccess }) {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Esegui il logout
        navigate("/login"); // Reindirizza alla pagina di login
    };

    return (
        <>
            <div className="container-footer text-white">
                <div className="inner-container-left">
                    <ul>
                        <li>find me in:</li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faFacebook} />
                        </li>
                    </ul>
                </div>
                <div className="inner-container-right">
                    <ul>
                        <li>
                            {footerAccess === "logout" ? (
                                <button onClick={handleLogout} className="logout-button">
                                    Logout
                                </button>
                            ) : (
                                <Link to="/admin">{footerAccess}</Link>
                            )}
                        </li>
                        <li>
                            <a href="https://github.com/Alecaring" target="_blank" rel="noopener noreferrer">
                                <span>@alecaring</span>
                                <span>
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* footer per dispositivi diversi da desktop */}
                <div className="inner-container-left-mobile">
                    <span>find me in:</span>
                </div>
                <div className="inner-container-right-mobile">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;
