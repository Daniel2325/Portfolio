import React, { useState } from 'react';

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
                        <div className="circle" onClick={() => handleToggle(0)}></div>
                        <div className="timeline-date">2022 - Present</div>
                        <div className={`timeline-content ${expandedItems[0] ? 'expanded' : 'collapsed'}`}>
                            <h3>Analista de Programación</h3>
                            <h4>Metropolitan Touring, Quito, Ecuador</h4>
                            <p>
                                Responsable de analizar, diseñar y desarrollar soluciones de software.
                                Trabajando con tecnologías como Git, atención al detalle y otras 8 habilidades destacadas.
                            </p>
                        </div>
                    </div>

                    {/* Segundo trabajo */}
                    <div className="timeline-item">
                        <div className="circle" onClick={() => handleToggle(1)}></div>
                        <div className="timeline-date">2021 - 2022</div>
                        <div className={`timeline-content ${expandedItems[1] ? 'expanded' : 'collapsed'}`}>
                            <h3>Ingeniero de Software Júnior</h3>
                            <h4>Metropolitan Touring, En remoto</h4>
                            <p>
                                Desarrollé aplicaciones usando programación en .NET y Entity Framework.
                                Mejora de procesos de desarrollo y colaboración en un entorno ágil.
                            </p>
                        </div>
                    </div>

                    {/* Tercer trabajo */}
                    <div className="timeline-item">
                        <div className="circle" onClick={() => handleToggle(2)}></div>
                        <div className="timeline-date">2021</div>
                        <div className={`timeline-content ${expandedItems[2] ? 'expanded' : 'collapsed'}`}>
                            <h3>Pasante IT</h3>
                            <h4>Metropolitan Touring, En remoto</h4>
                            <p>
                                Participación en proyectos de soporte técnico y desarrollo de software durante el período de prácticas.
                                Aprendí habilidades clave de programación y gestión de bases de datos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
