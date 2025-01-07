import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHandsBound, faLaptopCode, faTerminal, faChevronDown, faEnvelope, faPhone, faFolder, faCode, faIcicles, faGamepad, faCaretRight, faCaretDown, faBrain, faBaseballBatBall } from '@fortawesome/free-solid-svg-icons';
import "../../../scss/partials/sidebars/sidebarAbout.scss";
import { useState } from 'react';

function SidebarAbout({onItemClick}) {

    // Dati simulati (come se arrivassero dal server)
    const [sections, setSections] = useState([
        {
            id: 'personal-info',
            title: 'personal-info',
            isOpen: false,
            items: [
                {
                    icon: faFolder,
                    label: 'bio',
                    subItems: [
                        { label: 'born_in_italy', icon: faHandsBound, iconClass: 'text-turchese-chiaro' },
                        { label: 'web_developer', icon: faTerminal, iconClass: 'text-terracotta-chiara' },
                        { label: 'soft_skils', icon: faBrain, iconClass: 'text-orange' },
                        { label: 'hard_skils', icon: faBaseballBatBall, iconClass: 'text-purple' },
                        { label: 'loves_technology', icon: faLaptopCode, iconClass: 'text-terracotta-chiara' }
                    ],
                    iconClass: 'text-purple'
                },
                {
                    icon: faFolder,
                    label: 'interests',
                    subItems: [
                        { label: 'Coding' },
                        { label: 'Gaming' },
                        { label: 'Music' }
                    ],
                    iconClass: 'text-blu-lilla'
                },
                {
                    icon: faFolder,
                    label: 'education',
                    subItems: [
                        { label: 'Bachelor\'s Degree in Computer Science' },
                        { label: 'Full Stack Web Development Bootcamp' }
                    ],
                    iconClass: 'text-terracotta-chiara'
                },
            ],
        },
        {
            id: 'contacts',
            title: 'contacts',
            isOpen: false,
            items: [
                { icon: faEnvelope, label: 'caringella@gmail.com', iconClass: '' },
                { icon: faPhone, label: '+39-3921340458', iconClass: '' },
            ],
        },
    ]);

    // Funzione per togglare l'apertura/chiusura delle sezioni
    const toggleSection = (id) => {
        setSections(prevSections =>
            prevSections.map(section =>
                section.id === id
                    ? { ...section, isOpen: !section.isOpen }
                    : section
            )
        );
    };

    // Funzione per togglare l'apertura/chiusura delle sottosezioni
    const toggleSubSection = (sectionId, subIndex) => {
        setSections(prevSections =>
            prevSections.map(section =>
                section.id === sectionId
                    ? {
                        ...section,
                        items: section.items.map((item, index) =>
                            index === subIndex
                                ? { ...item, isOpen: !item.isOpen }
                                : item
                        ),
                    }
                    : section
            )
        );
    };

    const handleItemClick = (item) => {
        console.log("clicked on:" + " " + item);
        
        onItemClick(item);

    };

    return (
        <>

            <div className="left">
                <div className="cell">
                    <FontAwesomeIcon icon={faCode} />
                </div>
                <div className="cell">
                    <FontAwesomeIcon icon={faIcicles} />
                </div>
                <div className="cell">
                    <FontAwesomeIcon icon={faGamepad} />
                </div>
                <p>_contact-me</p>
            </div>


            <div className="right">
                {/* Mappa le sezioni */}
                {sections.map(section => (
                    <div className='list-about-container' key={section.id}>
                        {/* Personal Info o Contacts Dropdown */}
                        <div
                            className={`main-dropdown-${section.id}`}
                            onClick={() => toggleSection(section.id)}
                        >
                            <span>
                                <FontAwesomeIcon
                                    icon={section.isOpen ? faChevronDown : faChevronRight}
                                />
                            </span>
                            <p>{section.title}</p>
                        </div>

                        {/* Lista con transizione */}
                        <ul className={`dropdown-list ${section.isOpen ? 'open' : ''}`}>
                            {section.items.map((item, index) => (
                                <div key={index}>
                                    <li className="folders" onClick={() => item.subItems && toggleSubSection(section.id, index)}>
                                        {item.subItems && (
                                            <FontAwesomeIcon
                                                icon={item.isOpen ? faCaretDown : faCaretRight}
                                            />
                                        )}
                                        <div className={`icon ${item.iconClass}`}>

                                            <FontAwesomeIcon
                                                icon={item.icon}
                                            />
                                        </div>
                                        <p>{item.label}</p>

                                    </li>
                                    {item.subItems && item.isOpen && (
                                        <ul className="sub-item-list">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li onClick={() => handleItemClick(subItem.label)} key={subIndex} className="sub-item">
                                                    <FontAwesomeIcon icon={subItem.icon} className={subItem.iconClass} style={{
                                                        fontSize: ".8rem"
                                                    }} />
                                                    <p>{subItem.label}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SidebarAbout;
