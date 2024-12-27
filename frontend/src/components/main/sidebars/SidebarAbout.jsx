import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faEnvelope, faPhone, faFolder, faCode, faIcicles, faGamepad, faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "../../../scss/partials/sidebars/sidebarAbout.scss";
import { useState } from 'react';

function SidebarAbout() {

    // Dati simulati (come se arrivassero dal server)
    const [sections, setSections] = useState([
        {
            id: 'personal-info',
            title: 'personal-info',
            isOpen: true,
            items: [
                {
                    icon: faFolder,
                    label: 'bio',
                    subItems: [
                        { label: 'Born in Italy' },
                        { label: 'Web developer' },
                        { label: 'Loves technology' }
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
            isOpen: true,
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
                                                <li key={subIndex} className="sub-item">
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
