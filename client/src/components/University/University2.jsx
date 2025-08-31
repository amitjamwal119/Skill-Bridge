import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './University.css'
import Navbar from "../Navbar"
import Footer from "../Footer"

const University2 = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const handleEnrollment = () => {
        navigate('/success');
    }

    const handleSyllabus = () => {
        navigate('/dssyllabus')
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="main my-3">
                    <div className="containerd">
                        <img src="https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FArtboard_8_1a9d7b7708.webp&w=3840&q=75" alt="university" />
                        <h1 data-aos="fade-up">Sheffield Hallam University</h1>
                        <p>
                            Sheffield Hallam University, situated in Sheffield, England, is a well-regarded institution recognized for its commitment to academic excellence and global education. Its Master’s in Data Science program is designed to equip students with in-demand skills in data analytics, machine learning, statistical modeling, and data-driven decision-making. The course offers a balanced blend of theoretical knowledge and hands-on experience, preparing graduates to solve complex real-world problems across various industries. With cutting-edge facilities, expert faculty, and a dynamic learning environment, the university fosters innovation and collaboration. Its diverse international community and robust student support services make it an ideal choice for aspiring data science professionals from around the world.                    </p>
                        <ul className="tick-list">
                            <li><span className="tick-icon">✓</span> High Demand for Data Science Professionals in the UK.</li>
                            <li><span className="tick-icon">✓</span> 6 to 8 Months of Blended Learning (Online + Offline) in India.</li>
                            <li><span className="tick-icon">✓</span> 2-Year Post-Study Work Visa After MS in Data Science.</li>
                            <li><span className="tick-icon">✓</span> Apply for a Master’s Degree in Data Science.</li>
                        </ul>
                        <div className="button-area">
                            <button onClick={() => handleEnrollment()} className="apply-button" >Apply Now</button>
                            <button onClick={() => handleSy()} className="apply-button" style={{ margin: "0 0 0 20px" }}>Check Syllabus</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default University2;