import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Assicurati che questa importazione sia presente
import "../scss/partials/footer.scss"

function Footer() {
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
                            <a href="https://github.com/Alecaring" target="_blank">
                                <span>@alecaring</span>
                                <span>
                                <FontAwesomeIcon className='icon' icon={faGithub} />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;