import React from "react";

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
                        <p> Experto en la creación de aplicaciones robustas utilizando .NET, C#, y Node.js, con
                            integración de APIs REST, SOAP y Microservicios.</p>
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
                        <p> Experiencia en React, Angular y desarrollo de interfaces altamente interactivas, accesibles y con excelente rendimiento.</p>
                    </div>
                </div>

                {/* Salesforce Development */}
                <div className="expertise-item">
                    <span className="icon">📱</span>
                    <div className="expertise-details">
                        <h3>
                            <span className="highlight orange">Salesforce</span> Development
                        </h3>
                        <p> Especializado en el desarrollo y optimización de flujos con Salesforce, Apex, SOQL, Triggers, y Flows.</p>
                    </div>
                </div>
                {/* DevOps */}
                <div className="expertise-item">
                    <div className="expertise-details">
                        <h3>
                            <span className="highlight blue">DevOps</span> & CI/CD
                        </h3>
                        <p>
                            Implementación de pipelines de CI/CD con Azure DevOps, integración de Docker, y automatización de despliegues.
                        </p>
                        <div className="tech-icons">
                            <i className="fab fa-azure"></i>
                            <i className="fab fa-docker"></i>
                            <i className="fab fa-jenkins"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise;