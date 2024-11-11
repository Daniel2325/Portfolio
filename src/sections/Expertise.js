import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfinity} from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
    return (
        <section id="expertise" className="expertise-section">
            <h2>My Expertise</h2>
            <div className="expertise-grid">
                {/* Software Development */}
                <div className="expertise-item">
                    <span className="icon">💻</span>
                    <div className="expertise-details">
                        <h3>
                            <span className="highlight pink">Backend</span> Development
                        </h3>
                        <p> Desarrollador backend especializado en la creación de aplicaciones escalables y robustas,
                            utilizando .NET, C#, y Node.js. Experiencia avanzada en la integración de APIs REST, SOAP y
                            microservicios, asegurando arquitecturas eficientes y alineadas con las mejores prácticas de
                            la industria. Mi enfoque en soluciones robustas permite un rendimiento óptimo y una
                            integración fluida entre sistemas.</p>
                        <div className="tech-icons">
                            <i className="fab fa-node-js"></i>
                            <i className="fab fa-docker"></i>
                            <i className="fab fa-python"></i>
                            <i className="fab fa-aws"></i>
                        </div>
                    </div>
                </div>

                {/* Frontend Development */}
                <div className="expertise-item">
                    <span className="icon">⚛️</span>
                    <div className="expertise-details">
                        <h3>
                            <span className="highlight blue">Frontend</span> Development
                        </h3>
                        <p> Amplia experiencia en la construcción de interfaces de usuario dinámicas y accesibles
                            utilizando React, Angular y TypeScript. Capacidad comprobada para crear aplicaciones
                            interactivas optimizadas para una experiencia de usuario excepcional, combinando diseño
                            responsivo con alto rendimiento y facilidad de mantenimiento.</p>
                    </div>
                </div>

                {/* Salesforce Development */}
                <div className="expertise-item">
                    <span className="icon">📱</span>
                    <div className="expertise-details">
                        <h3>
                            <span className="highlight orange">Salesforce</span> Development
                        </h3>
                        <p>Especialista en Salesforce con un dominio profundo de Apex, SOQL, Triggers y Flows, enfocado
                            en la optimización y personalización de procesos empresariales. Diseño soluciones escalables
                            que aumentan la eficiencia operativa y brindan una experiencia integral a los usuarios de
                            Salesforce, alineadas con los objetivos estratégicos del negocio.</p>
                    </div>
                </div>
                {/* DevOps */}
                <div className="expertise-item">
                    <span className="icon"> <FontAwesomeIcon icon={faInfinity}/></span>
                    <div className="expertise-details">

                        <h3>
                            <span className="highlight blue">DevOps</span> & CI/CD
                        </h3>
                        <p>
                            Administrador DevOps especializado en la implementación de pipelines CI/CD con Azure
                            DevOps
                            y DevOps Center de Salesforce, facilitando el control de versiones y la entrega continua
                            en
                            entornos de desarrollo colaborativos. Integro herramientas como Docker para despliegues
                            automatizados y eficientes, y utilizo SonarCloud para análisis de calidad de código,
                            asegurando entregas confiables y un software de alta calidad que se adapta a las
                            necesidades
                            cambiantes del negocio.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise;