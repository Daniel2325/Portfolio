import React, {useEffect, useState} from 'react';
import {scrollToSection} from '../utils/scrollTo';
import {faEnvelope, faInfinity} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../assets/images/DanielDev Logo.jpeg"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons"; // Puedes usar el ícono que prefieras


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleNavigation = (event, id) => {
        event.preventDefault();
        scrollToSection(id);
        setIsOpen(false);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Detectar la sección activa mientras el usuario navega
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'expertise', 'work', 'experience', 'contact'];
            let currentSection = '';

            sections.forEach(section => {
                const element = document.getElementById(section);
                const bounding = element?.getBoundingClientRect();

                if (bounding) {
                    // Verificar si la sección está en el viewport, incluyendo parte superior e inferior
                    const isSectionVisible = bounding.top <= window.innerHeight / 2 && bounding.bottom >= window.innerHeight / 2;

                    if (isSectionVisible) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className="navbar">
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <div className={`devops-icon ${isOpen ? 'hidden' : ''}`} onClick={toggleModal}>
                    <FontAwesomeIcon icon={faInfinity}/>
                </div>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a
                        href="#home"
                        onClick={(event) => handleNavigation(event, 'home')}
                        className={activeSection === 'home' ? 'active' : ''}
                    >
                        Home
                    </a>
                    <a
                        href="#expertise"
                        onClick={(event) => handleNavigation(event, 'expertise')}
                        className={activeSection === 'expertise' ? 'active' : ''}
                    >
                        Expertise
                    </a>
                    <a
                        href="#work"
                        onClick={(event) => handleNavigation(event, 'work')}
                        className={activeSection === 'work' ? 'active' : ''}
                    >
                        Work
                    </a>
                    <a
                        href="#experience"
                        onClick={(event) => handleNavigation(event, 'experience')}
                        className={activeSection === 'experience' ? 'active' : ''}
                    >
                        Experience
                    </a>
                    <a
                        href="#contact"
                        onClick={(event) => handleNavigation(event, 'contact')}
                        className={activeSection === 'contact' ? 'active' : ''}
                    >
                        Contact
                    </a>
                </div>
            </div>
            {isModalOpen && (
                <div className="devops-modal" onClick={toggleModal}>
                    <div className="devops-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>DevOps y Crecimiento Sin Límites</h2>
                        <p>
                            Estoy comprometido con prácticas de DevOps que aseguran integración continua y un flujo de
                            trabajo ágil. Conectemos para descubrir soluciones que transformen la tecnología.
                        </p>
                        <img src={logo} alt="Daniel" className="profile-image"/>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/daniel-dom%C3%ADnguez-04a866210/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon
                                icon={faLinkedinIn}/>
                            </a>
                            <a href="mailto:dan.iban23252@gmail.com"> <FontAwesomeIcon
                                icon={faEnvelope}/></a>
                        </div>
                        <button onClick={toggleModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
