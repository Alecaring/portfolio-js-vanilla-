import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({icon, className}) => {
    return <FontAwesomeIcon className={className} icon={icon} />
}

export default Icon;