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
                            <span className="highlight pink">Software</span> Development
                        </h3>
                        <p>Experienced in both functional and OOP: Python, JavaScript, TypeScript, .Net, Salesforce.</p>
                    </div>
                </div>

                {/* Frontend Development */}
                <div className="expertise-item">
                    <span className="icon">⚛️</span>
                    <div className="expertise-details">
                        <h3>
                            <span className="highlight blue">Frontend</span> Development
                        </h3>
                        <p>Experienced in React, Angular, Vue, and other frontend technologies.</p>
                    </div>
                </div>

                {/* Salesforce Development */}
                <div className="expertise-item">
                    <span className="icon">📱</span>
                    <div className="expertise-details">
                        <h3>
                            <span className="highlight orange">Salesforce</span> Development
                        </h3>
                        <p>Experienced in Salesforce, Apex, SOQL, Triggers, Flows.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise;