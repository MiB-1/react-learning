import './Skills.css';

function Skills({ icon, text }) {
    return (
        <div className="skill">
            <div>
                <img className="skill-img" src={icon} alt={text} />
            </div>
            <div className="skill-text">
                {text}
            </div>
        </div>
    )
}

export default Skills;