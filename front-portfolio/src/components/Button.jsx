const Button = ({ btxTxt, onClick, type }) => {


    return <button
    type={type}
    onClick={onClick}
    >{btxTxt}</button>
}

export default Button;