import './App.css'
import Navigation from './navigation/Navigation.jsx';
import AboutSection from "./AboutSection/AboutSection.jsx";
import SkillsInformation from "./SkillsInformation/SkilsInformation.jsx";
import ExperienceSection from "./ExperienceSection/ExperienceSection.jsx";

export const homeRef = 'about-section';
export const skillRef = 'skills-section';

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
    </>
  )
}

export default App
