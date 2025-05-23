import Skills from "../Skills/Skills.jsx";
import {useContext} from "react";
import {ThemeContext} from "../ThemeComponents/ThemeContext.jsx";
import './SkillsInformation.css';

function SkillsInformation() {
    const { theme } = useContext(ThemeContext);

    const mySkills = [
        { id: 1, icon: `/${theme}-js.svg`, text: "JavaScript" },
        { id: 2, icon: `/${theme}-java.svg`, text: "Java" },
        { id: 3, icon: `/${theme}-react.svg`, text: "React" },
        { id: 4, icon: `/${theme}-common-skill.svg`, text: "Lit Element" },
        { id: 5, icon: `/${theme}-common-skill.svg`, text: "Spring boot" },
        { id: 6, icon: `/${theme}-common-skill.svg`, text: "Git" },
        { id: 7, icon: `/${theme}-common-skill.svg`, text: "Cypress" },
        { id: 8, icon: `/${theme}-common-skill.svg`, text: "Playwright" },
        { id: 9, icon: `/${theme}-common-skill.svg`, text: "Storybook" },
        { id: 10, icon: `/${theme}-common-skill.svg`, text: "Redux toolkit" },
    ];

    return (
        <section id="skills-section" className="skill-section">
            <div className="skill-wrapper">
                <div className="skill-title">Skills</div>
            </div>
            <p className="skill-description">The Skills, tools and technologies I am really good at:</p>
            <div className="skills-info">
                {mySkills.map(skill => (<Skills key={skill.id} icon={skill.icon} text={skill.text}/>))}
            </div>
        </section>
    )
}

export default SkillsInformation