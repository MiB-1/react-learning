import ThemeToggleButton from "../ThemeComponents/ThemeToggleButton.jsx";
import './NavigationButton.css';
import {ThemeContext} from "../ThemeComponents/ThemeContext.jsx";
import { contactRef, homeRef, skillRef, workRef } from "../App.jsx";
import { useContext, useEffect, useState } from "react";

function NavigationButton({ callback }) {

    const [isMobile, setIsMobile] = useState( window.innerWidth < 767);
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useContext(ThemeContext);


    useEffect(() => {
        const resizeHandler = () => {
            setIsMobile(window.innerWidth < 767);
        }

        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    const pointerCallBack = (reference) => {
        setIsOpen(false);
        callback(reference);
    }


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if(isMobile) {
        return (
            <nav className="navigation-group">
                <div onClick={() => setIsOpen(true)}>
                    <img id="ham-burger" src={`${theme}-bars.svg`} alt="Menu"/>
                </div>

                <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
                    <div className="menu-content">
                        <div id="close-wrapper" onClick={() => setIsOpen(false)}>
                            <img id="close-button" src={`${theme}-close.svg`} alt="Close button"/>
                        </div>
                        <div className="navigation-group">
                            <button onClick={() => pointerCallBack(homeRef)} type="button" className="navigation-button">Home</button>
                            <button onClick={() => pointerCallBack(skillRef)} type="button" className="navigation-button">Skills</button>
                            <button onClick={() => pointerCallBack(workRef)} type="button" className="navigation-button">Work</button>
                            <button onClick={() => pointerCallBack(contactRef)} type="button" className="navigation-button">Contact</button>
                            <ThemeToggleButton />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    return (
        <nav className="navigation-group">
            <button onClick={() => callback(homeRef)} type="button" className="navigation-button">Home</button>
            <button onClick={() => callback(skillRef)} type="button" className="navigation-button">Skills</button>
            <button onClick={() => callback(workRef)} type="button" className="navigation-button">Work</button>
            <button onClick={() => callback(contactRef)} type="button" className="navigation-button">Contact</button>
            <div className="divider"></div>
            <ThemeToggleButton/>
            {/*<button type="button" className="download-cv">Download CV</button>*/}
        </nav>
    )
}


export default NavigationButton;