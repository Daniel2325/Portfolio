import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Pongámonos en contacto</h2>
            <p>Si tienes un proyecto o simplemente quieres saludar, ¡No dudes en comunicarte!</p>

            <div className="contact-container">
                <div className="contact-details contact-card">
                    <h3 className="contact-title">Información de contacto</h3>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon"/>
                        <a href="mailto:dan.iban232526@gmail.com">dan.iban232526@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <FaLinkedin className="contact-icon"/>
                        <a href="https://www.linkedin.com/in/daniel-dom%C3%ADnguez-04a866210/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className="contact-item">
                        <FaGithub className="contact-icon"/>
                        <a href="https://github.com/Daniel2325" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

                <div className="contact-form contact-card">
                    <h3 className="contact-title">Envía un mensaje</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Nombre" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="send-message-button">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
