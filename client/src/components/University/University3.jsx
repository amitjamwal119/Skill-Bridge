import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './University.css'

const University3 = () => {
    const navigate = useNavigate();
    
    const handleEnrollment = () => {
        navigate('/success');}

    useEffect(() => {
        window.scrollTo(0, 0);})


    return (
        <>
            <div className="main">
                <div className="containerd">
                    <img src="https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FArtboard_7_7e42dde5f9.webp&w=3840&q=75" alt="university" />
                    <h1  data-aos="fade-up">Sheffield Hallam University</h1>
                    <p>
                        Sheffield Hallam University, located in Sheffield, England, is a prestigious institution known for academic excellence and international education. Among its diverse programs, the Computing course stands out, offering students expertise in software development, cybersecurity, and emerging technologies. With a strong focus on practical skills, this course provides students with hands-on experience and industry connections, preparing them for successful careers in the tech field. The university's vibrant campus offers state-of-the-art facilities, a diverse student body from over 100 countries, and comprehensive support services, making it an ideal destination for global learners.
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

export default University3;