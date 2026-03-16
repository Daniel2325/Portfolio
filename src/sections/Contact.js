import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const { PERSONAL_INFO, UI } = t;
    const c = UI.contact;

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = e.target;
        const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${c.emailSubject} ${name.value}&body=${encodeURIComponent(message.value)}%0D%0A%0D%0A${c.emailFrom}: ${name.value}%0D%0AEmail: ${email.value}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact-section">
            <h2>{c.sectionTitle}</h2>
            <p>{c.subtitle}</p>

            <div className="contact-container">
                <div className="contact-details contact-card">
                    <h3 className="contact-title">{c.infoTitle}</h3>
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
                    <h3 className="contact-title">{c.formTitle}</h3>
                    {submitted ? (
                        <p className="form-success">{c.successMessage}</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder={c.namePlaceholder} required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder={c.emailPlaceholder} required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder={c.messagePlaceholder} required></textarea>
                            </div>
                            <button type="submit" className="send-message-button">
                                {c.submitButton}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
