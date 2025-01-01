import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


function AdminSidebarProjects() {
    return (
        <div className="container-sidebar-projects">
            <div className="main-folder">
            <FontAwesomeIcon icon={faCaretDown} />
                <p>__actions</p>
            </div>
            <ul>
                <li>_create</li>
                <li>_delete</li>
            </ul>
        </div>
    )
}

export default AdminSidebarProjects;
