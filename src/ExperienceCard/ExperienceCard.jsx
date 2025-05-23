import './ExperienceCard.css';


function ExperienceCard({ logo, jobTitle, descriptions, duration}) {
    return (
        <div className="experience-card">
            <div className="company-logo">
                <img className="logos" src={logo} alt={jobTitle} />
            </div>
            <div className="main-content">
                <h3>{jobTitle}</h3>
                <ul>
                    {descriptions.map((description, index) => (<li key={index}>{description}</li>))}
                </ul>
            </div>
            <div className="duration">{duration}</div>
        </div>
    )
}

export default ExperienceCard;