import { useState } from 'react';
import '../css/ContactUs.css';
import Navbar from '../components/Navbar';



const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <Navbar />


            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our team</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>Office Address</h3>
                            <p>123 Education Street</p>
                            <p>Mandi, Himachal Pradesh 175021</p>
                            <p>India</p>
                        </div>

                        <div className="info-card">
                            <h3>Contact Details</h3>
                            <p>Phone: +91 98765 43210</p>
                            <p>Email: info@skillbridge.com</p>
                            <p>Support: support@skillbridge.com</p>
                        </div>

                        <div className="info-card">
                            <h3>Business Hours</h3>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="visit-us-section">
                    <h2>Visit Us</h2>
                    <p>Come visit our office at the heart of Mumbai. We're happy to meet in person!</p>
                    <div className="map-container">
                        <iframe
                            title="SkillBridge Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609880958!2d72.74109941422963!3d19.082197838154643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce4006ae76fb%3A0x37e6b8aa4c0298d7!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>



            </div>
        </>

    );
};

export default ContactUs; 