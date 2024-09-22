import {scrollToSection} from "../utils/scrollTo";
import fotoDaniel from "../assets/images/foto1.jpeg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faReact,
    faNodeJs,
    faJsSquare,
    faDocker,
    faGithub,
    faSalesforce,
    faPython
} from '@fortawesome/free-brands-svg-icons';
import {useEffect, useRef, useState} from "react";

const LoadingScreen = () => {
    return (
        <div className={"loading-screen"}>
            <div className={"spinner"}></div>
            <p className={"loading-text"}>Loading...</p>
        </div>
    )
}

const Typewriter = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        let index = 0;
        let currentHTML = "";
        const interval = setInterval(() => {
            if (index < text.length) {
                currentHTML += text[index]; // Añade carácter por carácter
                textRef.current.innerHTML = currentHTML; // Inserta el HTML
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Ajusta la velocidad según lo que prefieras
        return () => clearInterval(interval);
    }, [text]);

    return <h1 ref={textRef}></h1>;
};

const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer)
    }, []);

    return (

        <>
            {loading ? (
                <LoadingScreen/>
            ) : (
                <section id="home" className="home-section">
                    <div className="home-content">
                        <div className="home-text">
                            <Typewriter text={`Daniel.D Dev`} />

                            <p className="subtitle">Full Stack Developer <span className="divider">|</span> Especialista
                                en
                                DevOps & Salesforce</p>

                            <p className="bio">
                                Ingeniero Full Stack con 3 años de experiencia en frontend (React, Angular) y backend
                                (.NET,
                                Python).
                                Administro Azure DevOps implementando CI/CD y análisis de código con SonarCloud. Experto
                                en
                                Salesforce, creando soluciones escalables y optimizadas.
                                Mi enfoque está en el desarrollo ágil, automatización y optimización de procesos.
                            </p>

                            <div className="tech-icons">
                                <FontAwesomeIcon icon={faReact}/>
                                <FontAwesomeIcon icon={faNodeJs}/>
                                <FontAwesomeIcon icon={faJsSquare}/>
                                <FontAwesomeIcon icon={faSalesforce}/>
                                <FontAwesomeIcon icon={faPython}/>
                                <FontAwesomeIcon icon={faDocker}/>
                                <FontAwesomeIcon icon={faGithub}/>

                            </div>

                            <div className="cta-buttons">
                                <button onClick={() => scrollToSection('work')} className="cta-button">Explora mis
                                    Proyectos
                                </button>
                                <button className="cta-button dowload">Descarga mi CV</button>
                            </div>

                            <div className="scroll-icon" onClick={() => scrollToSection('expertise')}>
                    <span className="mouse">
                        <span className="mouse-in"></span>
                    </span>
                                <span className="arrow"></span>
                            </div>

                        </div>

                        <div className="home-image">
                            <img src={fotoDaniel} alt="Daniel" className="profile-image"/>
                        </div>

                    </div>


                </section>

            )}
        </>
    );
}

export default Home;