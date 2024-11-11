import {scrollToSection} from "../utils/scrollTo";
import fotoDaniel from "../assets/images/foto1.jpeg";
import cvDaniel from "../assets/docs/Currículum Vitae Cv Daniel Dominguez SF.pdf";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faReact,
    faNodeJs,
    faJsSquare,
    faDocker,
    faGithub,
    faSalesforce,
    faPython, faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {useEffect, useRef, useState} from "react";
import {faDownload, faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import {LoadingScreen} from "../components/LoadingScreen/LoadingScreen";

const Typewriter = ({text}) => {
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

    return <h1 ref={textRef} aria-hidden="true"></h1>;
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
                            <Typewriter text={`Daniel.D Dev`}/>

                            <p className="subtitle">Desarrollador Full Stack <span className="divider">|</span> Especialista
                                en
                                DevOps & Salesforce</p>

                            <p className="bio">
                                Ingeniero Full Stack con más de 3 años de experiencia en desarrollo de frontend (React, Angular) y backend (.NET), comprometido en diseñar soluciones escalables y optimizadas para maximizar el rendimiento y la eficiencia.
                            </p>
                            <p className="bio">
                                Experto en DevOps y Azure DevOps, con un enfoque en la implementación de pipelines CI/CD y análisis de código en SonarCloud para asegurar la calidad y robustez en cada etapa de desarrollo.
                            </p>
                            <p className="bio">
                                Líder en soluciones Salesforce, creando arquitecturas escalables que han impulsado la productividad empresarial en un 30%, mejorando significativamente la eficiencia de los procesos y facilitando la toma de decisiones estratégicas.
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
                                <button onClick={() => scrollToSection('work')} className="cta-button">
                                    <FontAwesomeIcon icon={faFolderOpen}/> Contacta conmigo
                                </button>
                                <a href={cvDaniel} download className="cta-button download">
                                    <FontAwesomeIcon icon={faDownload}/> Descarga mi CV
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
                            <img src={fotoDaniel} alt="Daniel" className="profile-image"/>
                        </div>

                    </div>


                </section>

            )}
        </>
    );
}

export default Home;