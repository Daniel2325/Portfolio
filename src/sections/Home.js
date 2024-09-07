import {scrollToSection} from "../utils/scrollTo";
import fotoDaniel from "../assets/images/DanielMcBook.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact, faNodeJs, faJsSquare, faDocker} from '@fortawesome/free-brands-svg-icons';


const Home = () => {

    return (<section id="home" className="home-section">
            <div className="home-content">
                <div className="home-text">
                    <h1>Daniel WorkLab</h1>
                    <p className="subtitle">SOFTWARE ENGINEER, FULL STACK DEVELOPER</p>

                    <p className="bio">
                        Soy un desarrollador especializado en la creación de aplicaciones web escalables y eficientes.
                        Con más de 5 años de experiencia en tecnologías como React, Node.js, y MongoDB.
                    </p>

                    <div className="tech-icons">
                        <FontAwesomeIcon icon={faReact}/>
                        <FontAwesomeIcon icon={faNodeJs}/>
                        <FontAwesomeIcon icon={faJsSquare}/>
                        <FontAwesomeIcon icon={faDocker}/>
                    </div>

                    <div className="cta-buttons">
                        <button onClick={() => scrollToSection('Work')} className="cta-button">Ver Proyectos</button>
                        <button className="cta-button dowload">Descargar CV</button>

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
    );
}

export default Home;