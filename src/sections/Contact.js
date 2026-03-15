import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolio';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = e.target;
        const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Portfolio — Contacto de ${name.value}&body=${encodeURIComponent(message.value)}%0D%0A%0D%0ADe: ${name.value}%0D%0AEmail: ${email.value}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Pongámonos en contacto</h2>
            <p>Si tienes un proyecto o simplemente quieres saludar, ¡no dudes en comunicarte!</p>

            <div className="contact-container">
                <div className="contact-details contact-card">
                    <h3 className="contact-title">Información de contacto</h3>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
                    </div>
                    <div className="contact-item">
                        <FaLinkedin className="contact-icon" />
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                    <div className="contact-item">
                        <FaGithub className="contact-icon" />
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="contact-form contact-card">
                    <h3 className="contact-title">Envía un mensaje</h3>
                    {submitted ? (
                        <p className="form-success">
                            ¡Gracias! Se ha abierto tu cliente de correo con el mensaje listo para enviar.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Nombre" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Mensaje" required></textarea>
                            </div>
                            <button type="submit" className="send-message-button">
                                Enviar Mensaje
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
