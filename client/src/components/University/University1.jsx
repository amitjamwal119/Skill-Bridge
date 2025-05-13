import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './University.css'

const University1 = () => {
    const navigate = useNavigate;

    useEffect(() => {
        window.scrollTo(0, 0);})

    const handleEnrollment = () => {
        navigate('/success');
    }

    return (
        <>
            <div className="main">
                <div className="containerd">
                    <img src="https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FArtboard_9_89807f58e0.webp&w=3840&q=75" alt="university" />
                    <h1  data-aos="fade-up">Sheffield Hallam University</h1>
                    <p>
                        Sheffield Hallam University, located in Sheffield, England, is a prestigious institution renowned for its commitment to academic excellence and international education. It offers a wide range of programs, including a highly regarded Data Analytics course that equips students with essential skills in data analysis, machine learning, and business intelligence. With strong industry links, the course provides hands-on experience and career opportunities. The university's vibrant campus offers state-of-the-art facilities, a diverse student body from over 100 countries, and comprehensive support services, making Sheffield Hallam an ideal destination for global learners seeking innovation, research, and student success.
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

export default University1;