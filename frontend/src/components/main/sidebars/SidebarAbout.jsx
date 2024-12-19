import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import "../../../scss/partials/sidebars/sidebarAbout.scss";

function SidebarAbout() {
    return (
        <>
            <div className="left">
                <div className="cell">i</div>
                <div className="cell">i</div>
                <div className="cell">i</div>
            </div>
            <div className="right">
                <div className="main-dropdown-personal-info">
                    <span>
                        <FontAwesomeIcon className='' icon={faChevronRight} />
                    </span>
                    <p>personal-info</p>
                </div>
                <ul>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                </ul>
                <div className="main-dropdown-contacts">
                    <span>
                        <FontAwesomeIcon className='' icon={faChevronRight} />
                    </span>
                    <p>contacts</p>
                </div>
                <ul>
                    <li className='cell-to-dropdown'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>caringella@gmail.com</p>
                    </li>
                    <li className='cell-to-dropdown'>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+39-3921340458</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SidebarAbout;