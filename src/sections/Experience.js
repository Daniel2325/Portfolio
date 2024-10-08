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
                            <h3>Analista Programador</h3>
                            <h4>Metropolitan Touring, Quito, Ecuador</h4>
                            <p>
                                Responsable de liderar mejoras continuas en los sistemas de la empresa, específicamente en Salesforce y en la integración de sistemas hoteleros y de operaciones utilizando patrones de arquitectura para optimizar procesos.
                            </p>
                            <ul>
                                <li>Optimización de flujos en Salesforce: Desarrollé y mejoré funcionalidades mediante Apex, triggers, LWC y flows, logrando un aumento significativo en la eficiencia de los procesos comerciales y operativos.</li>
                                <li>Resolución de errores críticos: Brindé soporte de nivel 2 para garantizar la continuidad de los procesos comerciales, reduciendo tiempos de inactividad en un 30%.</li>
                                <li>Integración de sistemas: Refactoricé las integraciones entre Salesforce y sistemas como Opera y XTS, lo que resultó en una reducción del 90% en errores de conectividad y problemas de timeout.</li>
                                <li>Automatización de despliegues: Implementé DevOps Center en Salesforce, lo que permitió una automatización completa del ciclo de despliegue, mejorando el control sobre los entornos.</li>
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
                                Participación en el desarrollo del sistema CORE: Colaboré en la construcción de un nuevo sistema de operaciones, reemplazando una solución obsoleta, lo que mejoró significativamente los tiempos de respuesta y rendimiento de los procesos operativos.
                            </p>
                            <ul>
                                <li>Automatización de desarrollo: Implementé pipelines de CI/CD con Azure DevOps, logrando una reducción del 99% en los tiempos de despliegue y mejorando la calidad del código mediante SonarCloud.</li>
                                <li>Microservicios y escalabilidad: Diseñé e implementé microservicios en .NET, aumentando la escalabilidad y reduciendo los costos de infraestructura al integrar Docker en los flujos de CI/CD.</li>
                                <li>El frontend fue desarrollado utilizando React y TypeScript, lo que permitió una experiencia de usuario más rica y mantenible.<span className="highlight">15%</span>.</li>
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
