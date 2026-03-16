import { useEffect, useRef, useState } from 'react';
import { scrollToSection } from '../utils/scrollTo';
import fotoDaniel from '../assets/images/foto1.jpeg';
import cvDaniel from '../assets/docs/Currículum Vitae Cv Daniel Dominguez SF.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare, faDocker, faGithub, faSalesforce, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { LoadingScreen } from '../components/LoadingScreen/LoadingScreen';
import { useLanguage } from '../context/LanguageContext';

const Typewriter = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        let index = 0;
        let currentHTML = '';
        const interval = setInterval(() => {
            if (index < text.length) {
                currentHTML += text[index];
                textRef.current.innerHTML = currentHTML;
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [text]);

    return <h1 ref={textRef} aria-hidden="true"></h1>;
};

const Home = () => {
    const [loading, setLoading] = useState(true);
    const { t } = useLanguage();
    const { PERSONAL_INFO, BIO, UI } = t;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <section id="home" className="home-section">
                    <div className="home-content">
                        <div className="home-text">
                            <Typewriter text={PERSONAL_INFO.displayName} />

                            <p className="subtitle">
                                {PERSONAL_INFO.titleDisplay}
                                <span className="divider">|</span>
                                {PERSONAL_INFO.subtitleDisplay}
                            </p>

                            {BIO.map((paragraph, i) => (
                                <p key={i} className="bio">{paragraph}</p>
                            ))}

                            <div className="tech-icons">
                                <FontAwesomeIcon icon={faReact} />
                                <FontAwesomeIcon icon={faNodeJs} />
                                <FontAwesomeIcon icon={faJsSquare} />
                                <FontAwesomeIcon icon={faSalesforce} />
                                <FontAwesomeIcon icon={faPython} />
                                <FontAwesomeIcon icon={faDocker} />
                                <FontAwesomeIcon icon={faGithub} />
                            </div>

                            <div className="cta-buttons">
                                <button onClick={() => scrollToSection('contact')} className="cta-button">
                                    <FontAwesomeIcon icon={faFolderOpen} /> {UI.home.ctaContact}
                                </button>
                                <a href={cvDaniel} download className="cta-button download">
                                    <FontAwesomeIcon icon={faDownload} /> {UI.home.ctaDownload}
                                </a>
                            </div>

                            <div className="scroll-icon" onClick={() => scrollToSection('expertise')}>
                                <span className="mouse">
                                    <span className="mouse-in"></span>
                                </span>
                                <span className="arrow"></span>
                            </div>
                        </div>

                        <div className="home-image">
                            <img src={fotoDaniel} alt="Daniel" className="profile-image" />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Home;
