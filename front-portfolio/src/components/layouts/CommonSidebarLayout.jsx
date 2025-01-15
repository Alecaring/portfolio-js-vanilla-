import "../../scss/partials/commonSidebarLayout.scss";

const CommonSidebarLayout = ({children}) => {
    return (
        <div className="common-sidebar-layout">
            {children}
        </div>
    )
}

export default CommonSidebarLayout;