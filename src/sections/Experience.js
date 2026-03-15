import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolio';

const Experience = () => {
    const [expandedItems, setExpandedItems] = useState(() => Array(EXPERIENCES.length).fill(true));

    const handleToggle = (index) => {
        setExpandedItems((prev) => prev.map((val, i) => (i === index ? !val : val)));
    };

    return (
        <section id="experience" className="experience-section">
            <h2>Experiencia</h2>
            <div className="timeline-container">
                <div className="timeline">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={exp.period} className="timeline-item">
                            <div className="timeline-date" onClick={() => handleToggle(index)}>
                                {exp.period}
                            </div>
                            <div className={`timeline-content ${expandedItems[index] ? 'expanded' : 'collapsed'}`}>
                                <h3>{exp.title}</h3>
                                <h4>{exp.company} · {exp.location}</h4>
                                <p>{exp.description}</p>
                                <ul>
                                    {exp.highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="experience-tags">
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className="skill-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
