import { useEffect, useState } from 'react';

const SECTIONS = ['home', 'expertise', 'projects', 'experience', 'contact'];

/**
 * Tracks which page section is currently visible in the viewport.
 * Returns the id of the active section.
 */
const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = '';

            SECTIONS.forEach((section) => {
                const element = document.getElementById(section);
                const bounding = element?.getBoundingClientRect();

                if (bounding) {
                    const isSectionVisible =
                        bounding.top <= window.innerHeight / 2 &&
                        bounding.bottom >= window.innerHeight / 2;
                    if (isSectionVisible) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return activeSection;
};

export default useActiveSection;
