import "../../scss/partials/mainAbout.scss";
import BaseMainDiv2 from "./common/BaseMainDiv2";
import SidebarAbout from './sidebars/SidebarAbout';

function MainAbout() {
    return (
        <>
            <div className="sidebar">
                <SidebarAbout />
            </div>
            <div className="main">
                <div className="container-left-main">
                    <div className="top-nav">
                    <p>personal-info</p>
                </div>
                </div>
                <div className="container-right-main"></div>
            </div>
        </>
    );
}

export default MainAbout;