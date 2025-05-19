import './IconButton.css';

function IconButton({icon, callBack, altText}) {
    return (
        <button type="button" className={"icon-button"} onClick={callBack}>
            <img src={icon} alt={altText}/>
        </button>
    )
}

export default IconButton;