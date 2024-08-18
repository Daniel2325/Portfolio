import {scrollToSection} from "../utils/scrollTo";

const Home = () => {
    return (
        <section id="home">
            <h1>Daniel WorkLab</h1>
            <p className="subtitle">SOFTWARE ENGINEER, FULL STACK DEVELOPER</p>

            <div className="scroll-icon" onClick={() => scrollToSection('expertise')}>
                <span className="mouse">
                    <span className="mouse-in"></span>
                </span>
                <span className="arrow"></span>
            </div>

            <div className="cube"></div>
        </section>
    );
}

export default Home;