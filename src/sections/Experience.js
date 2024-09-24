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
                            <h3>Analista Programador</h3>
                            <h4>Metropolitan Touring, Quito, Ecuador</h4>
                            <p>
                                Responsable de liderar mejoras continuas en los sistemas de la empresa, específicamente en Salesforce y la integración con sistemas hoteleros y de operaciones utilizando patrones de arquitectura para mejorar procesos.
                            </p>
                            <ul>
                                <li>Mejoras en flujos de Salesforce: Desarrollo y optimización de nuevas funcionalidades en Salesforce mediante Apex, triggers, LWC, y flows, mejorando la eficiencia en los procesos comerciales y operativos.</li>
                                <li>Soporte de nivel 2: Resolución de errores críticos, asegurando la continuidad de los procesos comerciales y reduciendo tiempos de inactividad.</li>
                                <li>Integraciones con sistemas hoteleros: Refactorización de las integraciones entre Salesforce y sistemas como Opera y XTS, lo que resultó en una reducción del 90% en errores de conectividad y problemas de timeout.</li>
                                <li>Automatización de despliegues: Implementación de DevOps Center en Salesforce, lo que permitió una automatización completa del ciclo de vida de despliegue y mejoró el control sobre los entornos.</li>
                                <li>Integración con JDE: Desarrollo de integraciones con el sistema JDE, mejorando la conectividad y automatización de flujos operativos.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Segundo trabajo */}
                    <div className="timeline-item">
                        <div className="timeline-date" onClick={() => handleToggle(1)}>2021 - 2022</div>
                        <div className={`timeline-content ${expandedItems[1] ? 'expanded' : 'collapsed'}`}>
                            <h3>Programador Júnior</h3>
                            <h4>Metropolitan Touring, En remoto</h4>
                            <p>
                                Participación en el desarrollo del sistema CORE para el área de operaciones, utilizando tecnologías de última generación como React en el frontend y .NET en el backend, colaborando
                                en un entorno ágil con DevOps.
                            </p>
                            <ul>
                                <li>Desarrollo del sistema CORE: Colaboración en la construcción de un nuevo sistema de operaciones, reemplazando una solución obsoleta, mejorando significativamente los tiempos de respuesta y rendimiento de los procesos operativos.</li>
                                <li>Automatización de desarrollo: Implementación de pipelines CI/CD con Azure DevOps, lo que permitió reducir en un 99% los tiempos de despliegue y mejorar la calidad del código mediante SonarCloud.</li>
                                <li>Microservicios y escalabilidad: Diseño e implementación de microservicios en .NET, mejorando la escalabilidad y reduciendo los costos de infraestructura al integrar Docker en los flujos de CI/CD.<span className="highlight">15%</span>.</li>
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
                                Apoyo en la mejora de procesos internos y en el control de la calidad del código desarrollado en el área de IT.
                            </p>
                            <ul>
                                <li>Optimización de procesos de contratación IT: Colaboración en la mejora del flujo de contratación de proveedores IT, asegurando un control más eficiente del código desarrollado.</li>
                                <li>Control de calidad de código: Desarrollo de reportes y herramientas para asegurar la calidad y cumplimiento de los estándares de desarrollo.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
