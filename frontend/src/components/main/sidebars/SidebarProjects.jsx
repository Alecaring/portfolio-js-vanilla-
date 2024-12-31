import "../../../scss/partials/sidebars/sidebarPorjects.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons'; // Import dal pacchetto brand



function SidebarProjects() {
    return (
        <div className="container-sidebar-projects">
            <div className="main-folder">
                <FontAwesomeIcon icon={faCaretDown} />
                <p>projects</p>
            </div>
            <ul>
                <li className="list-item">
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faReact} />
                    <p>React</p>
                </li>
                <li className="list-item">
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faReact} />
                    <p>HTML</p>
                </li>
                <li className="list-item">
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faReact} />
                    <p>CSS</p>
                </li>
                <li className="list-item">
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faReact} />
                    <p>React</p>
                </li>
                <li className="list-item">
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faReact} />
                    <p>HTML</p>
                </li>
                <li className="list-item">
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faReact} />
                    <p>CSS</p>
                </li>
                <li className="list-item">
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faReact} />
                    <p>React</p>
                </li>
                <li className="list-item">
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faReact} />
                    <p>HTML</p>
                </li>
                <li className="list-item">
                    <input type="checkbox" />
                    <FontAwesomeIcon icon={faReact} />
                    <p>CSS</p>
                </li>
            </ul>
        </div>
    )
}

export default SidebarProjects;