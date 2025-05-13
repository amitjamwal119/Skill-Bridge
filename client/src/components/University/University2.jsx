import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './University.css'

const University2 = () => {
    const navigate = useNavigate();
        useEffect(() => {
            window.scrollTo(0, 0);})

    const handleEnrollment = () => {
        navigate('/success');
    }

    return (
        <>
                       <div className="main">
                <div className="containerd">
                    <img src="https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FArtboard_8_1a9d7b7708.webp&w=3840&q=75" alt="university" />
                    <h1  data-aos="fade-up">Sheffield Hallam University</h1>
                    <p>
                        Sheffield Hallam University, located in Sheffield, England, is a prestigious institution known for academic excellence and international education. Among its diverse offerings, the IT Management course is particularly notable, equipping students with the skills needed to manage technology projects, optimize IT infrastructure, and drive digital transformation within organizations. With a focus on both technical and managerial aspects, the course prepares students for leadership roles in IT. The university's vibrant campus features state-of-the-art facilities, a diverse student body from over 100 countries, and comprehensive support services, making it an ideal destination for global learners.
                    </p>
                    <ul>
                        <li>Job Opportunities in UK.</li>
                        <li>6 to 8 months India Online + Offline Learning.</li>
                        <li>2-Years Work Visa post MS Degree completion.</li>
                        <li>Apply for Master's Degree in International Relations</li>
                    </ul>
                    <button onClick={handleEnrollment} className="apply-button" >Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default University2;