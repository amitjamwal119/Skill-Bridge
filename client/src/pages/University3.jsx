import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/University.css';

const University3 = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleEnrollment = () => {
        navigate('/success');
    }

    return (
        <>
            <div className="main">
                <div className="containerd">
                    <img 
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                        alt="University of Toronto"
                        style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px' }}
                    />
                    <h1 data-aos="fade-up">University of Toronto</h1>
                    <p>
                        The University of Toronto, located in Canada, is internationally recognized for its academic excellence, innovation, and research. Its Master of Cybersecurity program offers a deep dive into critical areas such as network defense, digital forensics, cryptography, and information security management. Students benefit from access to advanced research labs, experienced faculty, and real-world security projects. With a curriculum designed to meet industry demands, the program equips graduates with the skills required to safeguard digital assets and lead cybersecurity initiatives globally.
                    </p>
                    <ul>
                        <li>High-Demand Careers in Cybersecurity.</li>
                        <li>Flexible Learning: Online + On-Campus Options.</li>
                        <li>3-Years Post-Study Work Visa in Canada.</li>
                        <li>Apply for a Master's Degree in Cybersecurity.</li>
                    </ul>
                    <button onClick={handleEnrollment} className="apply-button">Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default University3;
