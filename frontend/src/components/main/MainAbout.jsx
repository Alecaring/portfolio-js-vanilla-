import { useEffect, useState } from "react";
import "../../scss/partials/mainAbout.scss";
import BaseMainDiv2 from "./common/BaseMainDiv2";
import SidebarAbout from './sidebars/SidebarAbout';
import BornInItaly from "./common/about-content/BornINItaly";
import WebDeveloper from "./common/about-content/WebDeveloper";
import SoftSkills from "./common/about-content/SoftSkills";
import HardSkills from "./common/about-content/HardSkills";
import LoveTecnology from "./common/about-content/LoveTecnology";

function MainAbout() {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }

    let content;
    switch (selectedItem) {
        case 'born_in_italy':
            content = <BornInItaly/>;
            break;
        case 'web_developer':
            content = <WebDeveloper/>;
            break;
        case 'soft_skils':
            content = <SoftSkills/>;
            break;
        case 'hard_skils':
            content = <HardSkills/>;
            break;
        case 'loves_technology':
            content = <LoveTecnology/>;
            break;
    
        default:
            content = "select"
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
                        <p>personal-info</p>
                    </div>
                    {content}
                </div>
                <div className="container-right-main">
                </div>
            </div>
        </>
    );
}

export default MainAbout;