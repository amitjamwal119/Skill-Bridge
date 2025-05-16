import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>SkillBridge</h3>
                    <p>Your gateway to academic excellence and career success</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: info@skillbridge.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: 123 Education Street, Mandi, HP 175021</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Twitter</a>
                        <a href="#" className="social-icon">LinkedIn</a>
                        <a href="#" className="social-icon">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 