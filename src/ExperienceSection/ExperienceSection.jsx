import './ExperienceSection.css';
import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import {useContext} from "react";
import {ThemeContext} from "../ThemeComponents/ThemeContext.jsx";

function ExperienceSection() {

    const { theme } = useContext(ThemeContext);

    const experienceData = [
        {
            logo: `/${theme}-ING.png`,
            jobTitle: 'FullStack Developer',
            descriptions: [
                'Developer frontend features',
                'Developed Rest APIs'
            ],
            duration: 'Oct 2020 - present'
        },
        {
            logo: `/${theme}-ING.png`,
            jobTitle: 'FullStack Developer',
            descriptions: [
                'Developer frontend features',
                'Developed Rest APIs'
            ],
            duration: 'Oct 2020 - present'
        }
    ]
    return (
        <>
            <section id="experience-section" className="experience-section">
                <div className="experience-wrapper">
                    <div className="experience-title">Experience</div>
                </div>
                <p className="experience-description">Here is a quick summary of my most recent experiences:</p>
                <div className="experience-cards">
                    {experienceData.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            logo={experience.logo}
                            jobTitle={experience.jobTitle}
                            descriptions={experience.descriptions}
                            duration={experience.duration}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ExperienceSection;