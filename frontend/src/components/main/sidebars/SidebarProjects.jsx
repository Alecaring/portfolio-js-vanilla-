import "../../../scss/partials/sidebars/sidebarPorjects.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faCss3Alt, faVuejs } from '@fortawesome/free-brands-svg-icons'; 
import { useState } from "react";

function SidebarProjects({ setSelectedFilters }) {
    const [list, setList] = useState([
        { id: 1, icon: faReact, name: "React" },
        { id: 2, icon: faHtml5, name: "HTML" },
        { id: 3, icon: faCss3Alt, name: "CSS" },
        { id: 4, icon: faVuejs, name: "Vue" },
    ]);

    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (name) => {
        setCheckedItems(prevState =>
            prevState.includes(name) ? prevState.filter(item => item !== name) : [...prevState, name]
        );
    };

    const handleSubmitFilter = () => {
        setSelectedFilters(checkedItems); // Passo i filtri selezionati
    };

    return (
        <div className="container-sidebar-projects">
            <div className="main-folder">
                <FontAwesomeIcon icon={faCaretDown} />
                <p>projects</p>
            </div>
            <ul>
                {list.map((s) => (
                    <li key={s.id} className="list-item">
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(s.name)}
                            checked={checkedItems.includes(s.name)}
                        />
                        <FontAwesomeIcon icon={s.icon} />
                        <p>{s.name}</p>
                    </li>
                ))}
                <button onClick={handleSubmitFilter} type="button">_filter</button>
            </ul>
        </div>
    );
}

export default SidebarProjects;
