import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Expertise = () => {
    const { t } = useLanguage();
    const { EXPERTISE, UI } = t;

    return (
        <section id="expertise" className="expertise-section">
            <h2>{UI.expertise.sectionTitle}</h2>
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
