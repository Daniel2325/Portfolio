import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Let's Get in Touch</h2>
            <p>If you have a project or just want to say hi, feel free to reach out!</p>

            <div className="contact-container">
                <div className="contact-details">
                    <h3>Contact Information</h3>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon"/>
                        <a href="mailto:daniel@example.com">daniel@example.com</a>
                    </div>
                    <div className="contact-item">
                        <FaLinkedin className="contact-icon"/>
                        <a href="https://www.linkedin.com/in/daniel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className="contact-item">
                        <FaGithub className="contact-icon"/>
                        <a href="" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

                <div className="contact-form">
                    <h3>Send a Message</h3>
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
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;