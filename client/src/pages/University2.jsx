import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/University.css';

const University2 = () => {
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
                        src="https://source.unsplash.com/1600x900/?university,campus" 
                        alt="University of Melbourne"
                        style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px' }}
                    />

                    <h1 data-aos="fade-up">University of Melbourne</h1>
                    <p>
                        The University of Melbourne, one of Australia's leading research-intensive institutions, is globally recognized for its high academic standards and vibrant campus life. The Master of Data Science program stands out for its comprehensive curriculum that blends computer science, statistics, and real-world data application. Students gain expertise in data analysis, machine learning, and big data technologies, preparing them for high-impact roles across various industries. With top-notch faculty, cutting-edge labs, and strong industry connections, the University provides a dynamic environment for aspiring data professionals.
                    </p>
                    <ul>
                        <li>Global Career Opportunities in Data Science.</li>
                        <li>Hybrid Learning: Online + On-Campus Mode.</li>
                        <li>2-Years Post-Study Work Visa in Australia.</li>
                        <li>Apply for a Master's Degree in Data Science.</li>
                    </ul>
                    <button onClick={handleEnrollment} className="apply-button">Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default University2;
