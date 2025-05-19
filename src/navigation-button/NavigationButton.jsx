import ThemeToggleButton from "../ThemeComponents/ThemeToggleButton.jsx";
import './NavigationButton.css';

function NavigationButton() {
    return (
        <div className="navigation-group">
            <button type="button" className="navigation-button">About</button>
            <button type="button" className="navigation-button">Work</button>
            <button type="button" className="navigation-button">Contact</button>
            <div className="divider"></div>
            <ThemeToggleButton/>
            <button type="button" className="download-cv">Download CV</button>
        </div>
    )
}


export default NavigationButton;