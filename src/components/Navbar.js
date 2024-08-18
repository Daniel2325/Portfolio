import React from 'react';
import { scrollToSection } from '../utils/scrollTo';

const Navbar = () => {
    const handleNavigation = (event, id) => {
        event.preventDefault();
        scrollToSection(id);
    }

    return (
        <div className="navbar">
            <a href="#home" onClick={(event) => handleNavigation(event, 'home')}>Home</a>
            <a href="#expertise" onClick={(event) => handleNavigation(event, 'expertise')}>Expertise</a>
            <a href="#work" onClick={(event) => handleNavigation(event, 'work')}>Work</a>
            <a href="#experience" onClick={(event) => handleNavigation(event, 'experience')}>Experience</a>
            <a href="#contact" onClick={(event) => handleNavigation(event, 'contact')}>Contact</a>
        </div>
    );
}

export default Navbar;
