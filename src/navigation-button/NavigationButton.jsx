import ThemeToggleButton from "../ThemeComponents/ThemeToggleButton.jsx";
import './NavigationButton.css';
import {contactRef, homeRef, skillRef, workRef} from "../App.jsx";

function NavigationButton({ callback }) {
    return (
        <div className="navigation-group">
            <button onClick={() => callback(homeRef)} type="button" className="navigation-button">Home</button>
            <button onClick={() => callback(skillRef)} type="button" className="navigation-button">Skills</button>
            <button onClick={() => callback(workRef)} type="button" className="navigation-button">Work</button>
            <button onClick={() => callback(contactRef)} type="button" className="navigation-button">Contact</button>
            <div className="divider"></div>
            <ThemeToggleButton/>
            {/*<button type="button" className="download-cv">Download CV</button>*/}
        </div>
    )
}


export default NavigationButton;