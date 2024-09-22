import React, {useEffect, useState} from 'react';
import {scrollToSection} from '../utils/scrollTo';
import {faInfinity} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Puedes usar el ícono que prefieras


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleNavigation = (event, id) => {
        event.preventDefault();
        scrollToSection(id);
        setIsOpen(false);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'expertise', 'work', 'experience', 'contact'];
            let currentSection = '';
            // Recorrer las secciones y verificar cuál está visible en el viewport
            sections.forEach(section => {
                const element = document.getElementById(section);
                const bounding = element?.getBoundingClientRect();
                if (bounding && bounding.top >= 0 && bounding.top <= window.innerHeight / 2) {
                    currentSection = section;
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="navbar">
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`devops-icon ${isOpen ? 'hidden' : ''}`}>
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
    );
}

export default Navbar;
