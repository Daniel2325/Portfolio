import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaUser } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project, typeLabels }) => {
    return (
        <div className="project-card">
            <div className="project-card-header">
                <div className="project-type-badge">
                    {project.type === 'work' ? (
                        <><FaBriefcase /> {typeLabels.work}</>
                    ) : (
                        <><FaUser /> {typeLabels.personal}</>
                    )}
                </div>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FaGithub />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Demo">
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    const { t } = useLanguage();
    const { PROJECTS, UI } = t;
    const { filterLabels, typeLabels } = UI.projects;

    const [filter, setFilter] = useState('all');
    const filterKeys = ['all', 'work', 'personal'];

    const filtered = filter === 'all'
        ? PROJECTS
        : PROJECTS.filter((p) => p.type === filter);

    return (
        <section id="projects" className="projects-section">
            <h2>{UI.projects.sectionTitle}</h2>
            <p className="projects-subtitle">{UI.projects.subtitle}</p>

            <div className="projects-filter">
                {filterKeys.map((key) => (
                    <button
                        key={key}
                        className={`filter-btn ${filter === key ? 'active' : ''}`}
                        onClick={() => setFilter(key)}
                    >
                        {filterLabels[key]}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filtered.map((project) => (
                    <ProjectCard key={project.title} project={project} typeLabels={typeLabels} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
