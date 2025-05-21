import './AboutSection.css';
import { ThemeContext } from "../ThemeComponents/ThemeContext.jsx";
import { useContext } from "react";

function AboutSection() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="information">
          <div className="about-info">
              <div className="title">
                  <h1>Hi, I'm Vignesh</h1>
                  <img id="computer" src={`/${theme}-computer-solid.svg`} alt="computer" />
              </div>
              <p>
                  Full Stack Developer with 4+ years of experience in <strong>JavaScript, Java, React, LitElement and Spring boot</strong>.
                  I build scalable web applications end-to-end and love turning complex problems into clean, efficient solutions.
              </p>

              <div className="info-group">
                  <img id="location" src={`/${theme}-location.svg`} alt="Location" />
                  <p>Brussels, Belgium 1000.</p>
              </div>

              <div className="info-group">
                  <img id="available" src={"/circle.svg"} alt="Available" />
                  <p>Driven by curiosity - Open to engaging in unique and inspiring projects.</p>
              </div>
          </div>
          <div className="info-photo">
              <img id="personal-photo" src={"/vignesh.jpg"} alt="Myphoto" />
          </div>
        </div>
    );
}

export default AboutSection;