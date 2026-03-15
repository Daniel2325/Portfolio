import React, { useState } from 'react';
import { scrollToSection } from '../utils/scrollTo';
import { faEnvelope, faInfinity, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/DanielDev Logo.jpeg';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import useActiveSection from '../hooks/useActiveSection';
import { PERSONAL_INFO } from '../data/portfolio';

const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const activeSection = useActiveSection();

    const handleNavigation = (event, id) => {
        event.preventDefault();
        scrollToSection(id);
        setIsOpen(false);
    };

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const toggleModal = () => setIsModalOpen((prev) => !prev);

    return (
        <>
            <div className="navbar">
                <div className={`hamburger-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <div className={`devops-icon ${isOpen ? 'hidden' : ''}`} onClick={toggleModal}>
                    <FontAwesomeIcon icon={faInfinity} />
                </div>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    {NAV_LINKS.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(event) => handleNavigation(event, id)}
                            className={activeSection === id ? 'active' : ''}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="devops-modal" onClick={toggleModal}>
                    <div className="devops-modal-content" onClick={(e) => e.stopPropagation()}>

                        <button className="modal-close" onClick={toggleModal} aria-label="Cerrar">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        <div className="modal-profile">
                            <div className="modal-avatar-wrapper">
                                <img src={logo} alt="Daniel Domínguez" className="modal-avatar" />
                            </div>
                            <h3 className="modal-name">Daniel Domínguez</h3>
                            <p className="modal-role">Full Stack · DevOps · Salesforce</p>
                            <div className="modal-social">
                                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>

                        <div className="modal-body">
                            <span className="modal-eyebrow">
                                <FontAwesomeIcon icon={faInfinity} /> DevOps &amp; Crecimiento
                            </span>
                            <h2 className="modal-title">Sin Límites</h2>
                            <p className="modal-description">
                                Comprometido con prácticas DevOps que garantizan integración continua, entrega confiable
                                y código de alta calidad. Conectemos para construir soluciones que marquen la diferencia.
                            </p>

                            <div className="modal-stats">
                                <div className="modal-stat">
                                    <span className="stat-value">4+</span>
                                    <span className="stat-label">Años de experiencia</span>
                                </div>
                                <div className="modal-stat">
                                    <span className="stat-value">99%</span>
                                    <span className="stat-label">Reducción en deploys</span>
                                </div>
                                <div className="modal-stat">
                                    <span className="stat-value">90%</span>
                                    <span className="stat-label">Menos errores</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
