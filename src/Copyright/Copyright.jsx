import './Copyright.css';
import {useContext} from "react";
import {ThemeContext} from "../ThemeComponents/ThemeContext.jsx";

function Copyright() {
    const { theme } = useContext(ThemeContext);
    return (
        <div id="copyright-section">
            <p id="copyright-text">{theme === 'dark' ? '© ' : '©️ '}2025 | <u>Developed</u> with 🩷 by Vignesh Krishnasamy</p>
        </div>
    )
}

export default Copyright;