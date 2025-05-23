import './ExperienceSection.css';
import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import {useContext} from "react";
import {ThemeContext} from "../ThemeComponents/ThemeContext.jsx";

function ExperienceSection() {

    const { theme } = useContext(ThemeContext);

    const experienceData = [
        {
            logo: `/${theme}-ING.png`,
            jobTitle: 'FullStack Developer 🇧🇪ING BE via TCS onsite',
            descriptions: [
                'Working across multiple ING BE projects, owing key frontend implementations in production-critical applications.',
                'Took initiative in streamlining component reuse and design consistency across multiple web apps.',
                'Delivered frontend features under high-pressure timelines without compromising on code quality.',
                'Coordinated with backend teams and product owners to align UI logic with business workflows.',
                'Quickly adapted to multiple project environments and proved versatility within 4 months of joining',
            ],
            duration: 'Jan 2025 - present'
        },
        {
            logo: `/${theme}-ING.png`,
            jobTitle: 'Frontend Developer 🇳🇱ING NL via TCS onsite',
            descriptions: [
                'Strengthened cross-cultural collaboration by working shoulder-to-shoulder with ING NL\'s internal teams.',
                'Gained firsthand exposure to ING\'s enterprise engineering culture and agile delivery methods.',
                'Contributed to feature development and troubleshooting during live releases in the Netherlands.',
                'Enhanced trust and visibility with ING stakeholders through proactive communication and delivery.',
                'Built long-term working relationships with global teams, which helped in future ING BE collaboration.'
            ],
            duration: 'Mar 2022 - May 2022'
        },
        {
            logo: `/${theme}-ING.png`,
            jobTitle: 'Frontend Developer 🇳🇱ING NL via TCS remote',
            descriptions: [
                'Collaborated directly with ING NL\'s in-house team to deliver critical frontend features using LitElement and JavaScript.',
                'Spearheaded UI development for scalable design systems aligned with ING\'s enterprise standards.',
                'Resolved complex accessibility and performance issues across multiple frontend modules.',
                'Assisted and mentored ING NL frontend developers, contributing beyond my assigned scope.',
                'Delivered consistent, high-quality code through Agile practices, CI/CD, and rigorous peer reviews.',
            ],
            duration: 'Oct 2020 - Jan 2025'
        }
    ]
    return (
        <>
            <section id="experience-section" className="experience-section">
                <div className="experience-wrapper">
                    <div className="experience-title">Experience</div>
                </div>
                <p className="experience-description">Here is a quick summary of my experiences:</p>
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