import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './sections/Home';
import Expertise from './sections/Expertise';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import './styles/main.css';

const App = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        if (!cursor) return;

        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY + window.scrollY}px`;
        };

        document.addEventListener('mousemove', moveCursor);
        return () => document.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <LanguageProvider>
            <div className="App">
                <div className="cursor"></div>
                <Navbar />
                <Home />
                <Expertise />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
                <ScrollToTop />
            </div>
        </LanguageProvider>
    );
};

export default App;
