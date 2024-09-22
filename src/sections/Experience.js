import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    const [expandedItems, setExpandedItems] = useState([true, true, true]);

    const handleToggle = (index) => {
        const newExpandedItems = [...expandedItems];
        newExpandedItems[index] = !newExpandedItems[index];
        setExpandedItems(newExpandedItems);
    };

    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="timeline-container">
                <div className="timeline">
                    {/* Primer trabajo */}
                    <div className="timeline-item">
                        <div className="timeline-date"onClick={() => handleToggle(0)} >2022 - Present</div>
                        <div className={`timeline-content ${expandedItems[0] ? 'expanded' : 'collapsed'}`}>
                            <FontAwesomeIcon icon={faCode} className="experience-icon" />
                            <FontAwesomeIcon icon={faDatabase} className="experience-icon" />
                            <FontAwesomeIcon icon={faProjectDiagram} className="experience-icon" />
                            <h3>Analista de Programación</h3>
                            <h4>Metropolitan Touring, Quito, Ecuador</h4>
                            <p>
                                Responsable de analizar, diseñar y desarrollar soluciones de software utilizando
                                tecnologías modernas como Git y patrones de arquitectura.
                            </p>
                            <ul>
                                <li>Automatización de procesos internos, reduciendo el tiempo de desarrollo en un <span className="highlight">20%</span>.</li>
                                <li>Mejora de la eficiencia de las bases de datos mediante optimización de consultas SQL.</li>
                                <li>Implementación de pruebas unitarias con un <span className="highlight">30%</span> menos de errores en producción.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Segundo trabajo */}
                    <div className="timeline-item">
                        <div className="timeline-date" onClick={() => handleToggle(1)}>2021 - 2022</div>
                        <div className={`timeline-content ${expandedItems[1] ? 'expanded' : 'collapsed'}`}>
                            <h3>Ingeniero de Software Júnior</h3>
                            <h4>Metropolitan Touring, En remoto</h4>
                            <p>
                                Desarrollo de aplicaciones usando programación en .NET y Entity Framework, colaborando
                                en un entorno ágil con DevOps.
                            </p>
                            <ul>
                                <li>Reducción de costos en infraestructura mediante la integración de Docker en CI/CD.</li>
                                <li>Diseño e implementación de microservicios mejorando la escalabilidad en un <span className="highlight">40%</span>.</li>
                                <li>Optimización de procesos, reduciendo el tiempo de despliegue en un <span className="highlight">15%</span>.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Tercer trabajo */}
                    <div className="timeline-item">
                        <div className="timeline-date" onClick={() => handleToggle(2)}>2021</div>
                        <div className={`timeline-content ${expandedItems[2] ? 'expanded' : 'collapsed'}`}>
                            <h3>Pasante IT</h3>
                            <h4>Metropolitan Touring, En remoto</h4>
                            <p>
                                Participación en el soporte técnico y desarrollo de software, trabajando directamente
                                con bases de datos SQL.
                            </p>
                            <ul>
                                <li>Soporte en la migración de datos críticos, reduciendo tiempos de inactividad.</li>
                                <li>Desarrollo de reportes analíticos para la toma de decisiones del negocio.</li>
                                <li>Aprendizaje y aplicación de mejores prácticas de desarrollo, incluyendo principios SOLID.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
