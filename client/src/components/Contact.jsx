import { useState } from 'react';
import axios from 'axios';
import '../css/Contact.css';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess(false);

        try {
            const response = await axios.post('https://skill-bridge-7gdh.onrender.com/api/contact/submit', formData);
            // http://localhost:5000/api/contact/submit
            // https://skill-bridge-7gdh.onrender.com
            if (response.status === 201) {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Failed to submit form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />

            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>Get in Touch</h3>
                            <p>Email: info@skillbridge.com</p>
                            <p>Phone: +91 98765 43210</p>
                            <p>23 Education Street, Mandi, HP 175021</p>
                        </div>
                        <div className="info-card">
                            <h3>Business Hours</h3>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">Message sent successfully! We'll get back to you soon.</div>}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="visit-us-section">
                <h2>Our Location</h2>
                <p>We welcome you to our office located in the beautiful town of Mandi, Himachal Pradesh.</p>
                <div className="map-container">
                    <iframe
                        title="Mandi Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109193.37064254016!2d76.91894158930589!3d31.711106389131313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904e4f25229634f%3A0x76a9bdb29b3d7e14!2sMandi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1715767100000!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        <Footer/>
        </>

    );
};

export default Contact; 