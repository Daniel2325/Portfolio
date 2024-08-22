import React from "react";

const Expertise = () => {
    return (
        <section id="expertise">
            <h2>My Expertise</h2>
            <table className="expertise-table">
                <tbody>
                   <tr>
                       <td className="icon-cell">💻</td>
                       <td>
                           <h3>
                               <span className="highlight pink">Software</span>
                                  Development
                           </h3>
                           <p>Experienced in both functional and OOP: Python, JavaScript, TypeScript, .Net, Salesforce.</p>

                       </td>
                   </tr>
                    <tr>
                        <td className="icon-cell">⚛️</td>
                        <td>
                            <h3>
                                <span className="highlight blue">Frontend</span>
                                Development
                            </h3>
                            <p>Experienced in React, Angular, Vue, and other frontend technologies.</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="icon-cell">📱</td>
                        <td>
                            <h3>
                                <span className="highlight orange">Salesforce</span>
                                Development
                            </h3>
                            <p>Experienced in Salesforce, Apex, SOQL, Triggers, Flows.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Expertise;