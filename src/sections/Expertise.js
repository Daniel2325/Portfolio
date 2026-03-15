import React from 'react';
import { EXPERTISE } from '../data/portfolio';

const Expertise = () => {
    return (
        <section id="expertise" className="expertise-section">
            <h2>My Expertise</h2>
            <div className="expertise-grid">
                {EXPERTISE.map(({ icon, highlightClass, title, titleSuffix, description, skills }) => (
                    <div key={title} className="expertise-item">
                        <span className="icon">{icon}</span>
                        <div className="expertise-details">
                            <h3>
                                <span className={`highlight ${highlightClass}`}>{title}</span> {titleSuffix}
                            </h3>
                            <p>{description}</p>
                            <div className="skill-tags">
                                {skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Expertise;
