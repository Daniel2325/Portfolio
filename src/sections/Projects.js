import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaUser } from 'react-icons/fa';
import { PROJECTS } from '../data/portfolio';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-card-header">
                <div className="project-type-badge">
                    {project.type === 'Trabajo' ? (
                        <><FaBriefcase /> Trabajo</>
                    ) : (
                        <><FaUser /> Personal</>
                    )}
                </div>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="Ver código">
                            <FaGithub />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Ver demo">
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
    const [filter, setFilter] = useState('Todos');
    const filters = ['Todos', 'Trabajo', 'Personal'];

    const filtered = filter === 'Todos'
        ? PROJECTS
        : PROJECTS.filter((p) => p.type === filter);

    return (
        <section id="projects" className="projects-section">
            <h2>Proyectos</h2>
            <p className="projects-subtitle">
                Una selección de proyectos que reflejan mi experiencia técnica y capacidad de resolución de problemas.
            </p>

            <div className="projects-filter">
                {filters.map((f) => (
                    <button
                        key={f}
                        className={`filter-btn ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filtered.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
