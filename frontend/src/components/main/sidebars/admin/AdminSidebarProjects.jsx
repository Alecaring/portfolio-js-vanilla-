import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function AdminSidebarProjects({onAdminActionClick}) {

    const [adminListItemProjects, setAdminListItemProjects] = useState([
        { id: 1, label: '_create-card', icon: faPlus, iconClass: 'text-turchese-chiaro' },
        { id: 2, label: '_edit-card', icon: faPenToSquare, iconClass: 'text-turchese-chiaro' },
        { id: 3, label: '_delete-card', icon: faTrash, iconClass: 'text-turchese-chiaro' },
    ]);

    const handleAdminListClick = (item) => {
        console.log("clicked on:" + " " + item);
        onAdminActionClick(item);
    };

    return (
        <div className="container-sidebar-projects">
            <div className="main-folder">
                <FontAwesomeIcon icon={faCaretDown} />
                <p>__actions</p>
            </div>
            <ul>
                {adminListItemProjects.map((s) => (

                    <li key={s.id} onClick={() => handleAdminListClick(s.label)} className='list-item'>
                        <FontAwesomeIcon className={s.iconClass} icon={s.icon} />
                        <p>{s.label}</p>
                    </li>
                ))}


            </ul>
        </div>
    )
}

export default AdminSidebarProjects;
