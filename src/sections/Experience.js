import React, {useState} from 'react';


const Experience = () => {
    const [expandedItems, setExpandedItems] = useState([true, true, true]);

    const handleToggle = (index) => {
        const newExpandedItems = [...expandedItems];
        newExpandedItems[index] = !newExpandedItems[index];
        setExpandedItems(newExpandedItems);
    };

    return (
        <section id="experience" className="experience-section">
            <h2>Experiencia</h2>
            <div className="timeline-container">
                <div className="timeline">
                    {/* Primer trabajo */}
                    <div className="timeline-item">
                        <div className="timeline-date" onClick={() => handleToggle(0)}>2022 - Actualidad</div>
                        <div className={`timeline-content ${expandedItems[0] ? 'expanded' : 'collapsed'}`}>
                            <h3>Analista Programador</h3>
                            <h4>Metropolitan Touring, Quito, Ecuador</h4>
                            <p>
                                Como Analista Programador, lidero mejoras continuas en los sistemas de la empresa, con
                                un enfoque específico en Salesforce e integración de sistemas hoteleros y operativos. Mi
                                rol incluye el uso de patrones de arquitectura y técnicas avanzadas para optimizar
                                procesos y asegurar la continuidad de las operaciones
                            </p>
                            <ul>
                                <li> Optimización de Flujos en Salesforce: Desarrollé y mejoré funcionalidades mediante
                                    Apex, Triggers, LWC y Flows, logrando un aumento significativo en la eficiencia de
                                    los procesos comerciales y operativos.
                                </li>
                                <li>Resolución de Errores Críticos: Proporcioné soporte de nivel 2 para garantizar la
                                    continuidad de los procesos comerciales, logrando una reducción del 30% en tiempos
                                    de inactividad mediante una atención eficaz a incidentes y una resolución rápida de
                                    problemas.
                                </li>
                                <li>Integración de Sistemas: Refactoricé las integraciones entre Salesforce y sistemas
                                    críticos como Opera y XTS, obteniendo una reducción del 90% en errores de
                                    conectividad y problemas de timeout en ubicaciones con poca cobertura de red.
                                </li>
                                <li>Automatización de Despliegues: Implementé DevOps Center en Salesforce, automatizando
                                    el ciclo completo de despliegue y mejorando el control sobre los entornos. Esta
                                    automatización ha permitido una gestión más ágil y una entrega continua de
                                    actualizaciones de alta calidad.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Segundo trabajo */}
                    <div className="timeline-item">
                        <div className="timeline-date" onClick={() => handleToggle(1)}>2021 - 2022</div>
                        <div className={`timeline-content ${expandedItems[1] ? 'expanded' : 'collapsed'}`}>
                            <h3>Programador</h3>
                            <h4>Metropolitan Touring, En remoto</h4>
                            <p>
                                Como Programador, participé activamente en el desarrollo de un sistema CORE para
                                operaciones, reemplazando una solución obsoleta. Este proyecto mejoró considerablemente
                                los tiempos de respuesta y la eficiencia de los procesos operativos, contribuyendo a una
                                infraestructura tecnológica más moderna y escalable.
                            </p>
                            <ul>
                                <li>Automatización del Desarrollo: Implementé pipelines de CI/CD con Azure DevOps,
                                    logrando una reducción del 99% en los tiempos de despliegue. Además, aseguré una
                                    mejora continua en la calidad del código mediante análisis con SonarCloud, lo que
                                    permitió identificar y resolver problemas de forma temprana.
                                </li>
                                <li>Microservicios y Escalabilidad: Diseñé e implementé microservicios en .NET,
                                    mejorando la escalabilidad del sistema y optimizando los costos de infraestructura.
                                    Integré Docker en los flujos de CI/CD, facilitando la administración de entornos y
                                    la eficiencia en los despliegues.
                                </li>
                                <li>Desarrollo Frontend en React y TypeScript: Colaboré en la creación de una interfaz
                                    de usuario rica y mantenible con React y TypeScript, lo cual incrementó la
                                    satisfacción del usuario en un 15%, ofreciendo una experiencia visual y funcional
                                    mejorada..<span className="highlight">15%</span>.
                                </li>
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
                                Durante mi pasantía en el área de IT, apoyé la mejora de procesos internos y contribuí
                                en el control de calidad del código, logrando optimizaciones clave en los flujos de
                                trabajo y en la consistencia del desarrollo.
                            </p>
                            <ul>
                                <li>Optimización del Proceso de Contratación IT: Colaboré en la optimización del flujo
                                    de contratación de proveedores IT, implementando medidas que aseguraron un control
                                    más eficiente y ágil, mejorando la eficiencia en la selección y contratación de
                                    servicios tecnológicos.
                                </li>
                                <li>Control de Calidad de Código: Desarrollé reportes y herramientas específicas para
                                    monitorear y asegurar el cumplimiento de estándares de calidad en el código
                                    desarrollado, contribuyendo a una base de código más robusta y alineada con las
                                    mejores prácticas.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
