import React, { useState } from 'react';
import axios from 'axios';
import '../css/Contact.css';

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
            const response = await axios.post('http://localhost:5000/api/contact/submit', formData);
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
                        <p>Address: 123 Education Street, Mumbai, Maharashtra 400001</p>
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
    );
};

export default Contact; 