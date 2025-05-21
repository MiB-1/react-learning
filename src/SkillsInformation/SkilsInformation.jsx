import Skills from "../Skills/Skills.jsx";
import {useContext} from "react";
import {ThemeContext} from "../ThemeComponents/ThemeContext.jsx";
import './SkillsInformation.css';

function SkillsInformation() {
    const { theme } = useContext(ThemeContext);

    const mySkills = [
        { id: 1, icon: `/asset/${theme}-js.svg`, text: "JavaScript" },
        { id: 2, icon: `/asset/${theme}-java.svg`, text: "Java" },
        { id: 3, icon: `/asset/${theme}-react.svg`, text: "React" },
        { id: 4, icon: `/asset/${theme}-common-skill.svg`, text: "Lit Element" },
        { id: 5, icon: `/asset/${theme}-common-skill.svg`, text: "Spring boot" },
        { id: 6, icon: `/asset/${theme}-common-skill.svg`, text: "Git" },
        { id: 7, icon: `/asset/${theme}-common-skill.svg`, text: "Cypress" },
        { id: 8, icon: `/asset/${theme}-common-skill.svg`, text: "Playwright" },
        { id: 9, icon: `/asset/${theme}-common-skill.svg`, text: "Storybook" },
        { id: 10, icon: `/asset/${theme}-common-skill.svg`, text: "Redux toolkit" },
    ];

    return (
        <div className="skill-section">
            <div className="skill-wrapper">
                <div className="skill-title">skills</div>
            </div>
            <div className="skills-info">
                {mySkills.map(skill => (<Skills key={skill.id} icon={skill.icon} text={skill.text}/>))}
            </div>
        </div>
    )
}

export default SkillsInformation