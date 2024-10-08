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
                        <p> Experto en crear aplicaciones robustas utilizando .NET, C#, y Node.js. Tengo experiencia en la integración de APIs REST, SOAP y Microservicios, asegurando soluciones escalables y eficientes.</p>
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
                        <p> Amplia experiencia en React y Angular, desarrollando interfaces altamente interactivas y accesibles, optimizadas para un rendimiento excepcional. También domino TypeScript, lo que mejora la mantenibilidad y escalabilidad del código.</p>
                    </div>
                </div>

                {/* Salesforce Development */}
                <div className="expertise-item">
                    <span className="icon">📱</span>
                    <div className="expertise-details">
                        <h3>
                            <span className="highlight orange">Salesforce</span> Development
                        </h3>
                        <p>Especializado en la optimización de flujos en Salesforce, incluyendo Apex, SOQL, Triggers y Flows. Me enfoco en soluciones que impulsan la eficiencia operativa y la satisfacción del cliente.</p>
                    </div>
                </div>
                {/* DevOps */}
                <div className="expertise-item">
                    <div className="expertise-details">
                        <h3>
                            <span className="highlight blue">DevOps</span> & CI/CD
                        </h3>
                        <p>
                            Implementación de pipelines de CI/CD con Azure DevOps, integrando Docker y automatizando despliegues para mejorar la velocidad y fiabilidad del desarrollo de software.
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