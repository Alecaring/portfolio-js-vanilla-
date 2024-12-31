import { useEffect, useState } from "react";
import "../../scss/partials/mainAbout.scss";
import BaseMainDiv2 from "./common/BaseMainDiv2";
import SidebarAbout from './sidebars/SidebarAbout';
import BornInItaly from "./common/about-content/BornINItaly";
import WebDeveloper from "./common/about-content/WebDeveloper";
import SoftSkills from "./common/about-content/SoftSkills";
import HardSkills from "./common/about-content/HardSkills";
import LoveTecnology from "./common/about-content/LoveTecnology";
import BornInItalyRight from "./common/about-content-right/BornInItalyRight";
import WebDeveloperRight from "./common/about-content-right/WebDeveloperRight";
import SoftSkillsRight from "./common/about-content-right/SoftSkillsRight";
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HardSkillsRight from "./common/about-content-right/HardSkillsRight";
import LoveTecnologyRight from "./common/about-content-right/LoveTecnologyRight";



function MainAbout() {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }

    let content;
    let contentRight;
    switch (selectedItem) {
        case 'born_in_italy':
            content = <BornInItaly/>;
            contentRight = <BornInItalyRight/>;
            break;
        case 'web_developer':
            content = <WebDeveloper/>;
            contentRight = <WebDeveloperRight/>
            break;
        case 'soft_skils':
            content = <SoftSkills/>;
            contentRight = <SoftSkillsRight />
            break;
        case 'hard_skils':
            content = <HardSkills/>;
            contentRight = <HardSkillsRight />
            break;
        case 'loves_technology':
            content = <LoveTecnology/>;
            contentRight = <LoveTecnologyRight />
            break;
    
        default:
            content = <BornInItaly/>
            break;
    }

    useEffect(() => {
        if (selectedItem) console.log(selectedItem);
    }, [selectedItem]);

    return (
        <>
            <div className="sidebar">
                <SidebarAbout onItemClick={handleItemClick} />
            </div>




            <div className="main">
                <div className="container-left-main">
                <div className="top-nav">
                        <div className="cell-opened">
                            <div className="inner-cellOpend">
                                <FontAwesomeIcon icon={faX} />
                                <span>{
                                    selectedItem ?
                                    selectedItem : "starting_page"
                                }</span>
                            </div>
                        </div>
                    </div>
                    {content}
                </div>
                <div className="container-right-main">
                    {contentRight}
                </div>
            </div>
        </>
    );
}

export default MainAbout;