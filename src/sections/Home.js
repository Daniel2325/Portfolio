import {scrollToSection} from "../utils/scrollTo";

const Home = () => {
    return (<section id="home" className="home-section">
            <div className="home-content">
                <div className="home-text">
                    <div className="shapes">
                        <div className="cube"></div>
                        <div className="sphere"></div>
                    </div>

                    <h1>Daniel WorkLab</h1>
                    <p className="subtitle">SOFTWARE ENGINEER, FULL STACK DEVELOPER</p>
                    <div className="scroll-icon" onClick={() => scrollToSection('expertise')}>
                    <span className="mouse">
                        <span className="mouse-in"></span>
                    </span>
                        <span className="arrow"></span>
                    </div>
                    <div className="cube"></div>
                </div>

                <div className="home-image">
                    <img src="ruta/foto.jpg" alt="Daniel" className="profile-image"/>
                </div>

            </div>
        </section>);
}

export default Home;