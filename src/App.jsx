import './App.css'
import Navigation from './navigation/Navigation.jsx';
import AboutSection from "./AboutSection/AboutSection.jsx";
import SkillsInformation from "./SkillsInformation/SkilsInformation.jsx";
import ExperienceSection from "./ExperienceSection/ExperienceSection.jsx";
import Contact from "./Contact/Contact.jsx";
import Copyright from "./Copyright/Copyright.jsx";

export const homeRef = 'about-section';
export const skillRef = 'skills-section';
export const workRef = 'experience-section';
export const contactRef = 'contact-section';

function App() {

  const scrollToSection = (ref) => {
    document.getElementById(ref)?.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <>
      <Navigation callback={scrollToSection} />
      <AboutSection />
      <SkillsInformation />
      <ExperienceSection />
      <Contact />
      <Copyright />
    </>
  )
}

export default App
