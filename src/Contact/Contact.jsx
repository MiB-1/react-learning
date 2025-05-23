import './Contact.css';
import { useContext } from "react";
import { ThemeContext } from "../ThemeComponents/ThemeContext.jsx";

function Contact() {

    const { theme } = useContext(ThemeContext);
    return (
        <section id="contact-section">
            <div className="contact-wrapper">
                <div className="contact-title">Get in touch</div>
            </div>
            <p className="contact-description">
                <p className="description-text">
                    What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </p>
            </p>
            <div className="contact-info">
                <a href="mailto:vignesh134410@gmail.com" className="mail-info">
                    <img className="contact-img" src={`/${theme}-mail.svg`} alt="mail"/>
                    <h1>vignesh134410@gmail.com</h1>
                </a>
                <a href="tel:+32465494241" className="phone-info">
                    <img className="contact-img" src={`/${theme}-phone.svg`} alt="Phone"/>
                    <h1>+32-465494241</h1>
                </a>
            </div>
            <div>
                <p id="more-info">You may also find me on these platforms!</p>
                <div className="img-links">
                    <a href="https://github.com/MiB-1" target="_blank">
                        <img className="img-icon" src={`${theme}-github.svg`} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/vignesh-krishnasamy-mib/" target="_blank">
                        <img className="img-icon" src={`${theme}-linkedin.svg`} alt="Linked in" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;