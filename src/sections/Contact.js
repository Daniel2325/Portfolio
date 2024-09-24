import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Let's Get in Touch</h2>
            <p>If you have a project or just want to say hi, feel free to reach out!</p>

            <div className="contact-container">
                <div className="contact-details contact-card">
                    <h3 className="contact-title">Contact Information</h3>
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
                    <h3 className="contact-title">Send a Message</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" required/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="send-message-button">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
