import React, {useState} from 'react';
import {scrollToSection} from '../utils/scrollTo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (event, id) => {
        event.preventDefault();
        scrollToSection(id);
        setIsOpen(false);
    }


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="navbar">
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <a href="#home" onClick={(event) => handleNavigation(event, 'home')}>Home</a>
                <a href="#expertise" onClick={(event) => handleNavigation(event, 'expertise')}>Expertise</a>
                <a href="#work" onClick={(event) => handleNavigation(event, 'work')}>Work</a>
                <a href="#experience" onClick={(event) => handleNavigation(event, 'experience')}>Experience</a>
                <a href="#contact" onClick={(event) => handleNavigation(event, 'contact')}>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
