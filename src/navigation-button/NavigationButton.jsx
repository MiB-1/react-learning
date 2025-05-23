import ThemeToggleButton from "../ThemeComponents/ThemeToggleButton.jsx";
import './NavigationButton.css';
import { homeRef, skillRef } from "../App.jsx";

function NavigationButton({ callback }) {
    return (
        <div className="navigation-group">
            <button onClick={() => callback(homeRef)} type="button" className="navigation-button">About</button>
            <button onClick={() => callback(skillRef)} type="button" className="navigation-button">Work</button>
            <button type="button" className="navigation-button">Contact</button>
            <div className="divider"></div>
            <ThemeToggleButton/>
            {/*<button type="button" className="download-cv">Download CV</button>*/}
        </div>
    )
}


export default NavigationButton;