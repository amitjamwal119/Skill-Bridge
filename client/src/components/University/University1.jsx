import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './University.css'
import Navbar from "../Navbar"
import Footer from "../Footer"

const University1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const handleEnrollment = () => {
        navigate('/success');
    }

    const handleSyllabus = () => {
        navigate('/dasyllabus')
    }

    return (
        <>
            <Navbar />
            <div className="container">
                 <div className="main my-3">
                <div className="containerd">
                    {/* <div className="img-university">
                        <img src="https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FArtboard_9_89807f58e0.webp&w=3840&q=75" alt="university" />
                        <img src="../../assets/uni-images/harvard-university-cambridge-usa.jpg" alt="" srcset="" class="da"/>
                    </div> */}
                    <h1 data-aos="fade-up">Sheffield Hallam University</h1>
                    <p>
                        Sheffield Hallam University, located in Sheffield, England, is a prestigious institution renowned for its commitment to academic excellence and international education. It offers a wide range of programs, including a highly regarded Data Analytics course that equips students with essential skills in data analytics, machine learning, and business intelligence. With strong industry links, the course provides hands-on experience and career opportunities. The university's vibrant campus offers state-of-the-art facilities, a diverse student body from over 100 countries, and comprehensive support services, making Sheffield Hallam an ideal destination for global learners seeking innovation, research, and student success.
                    </p>
                    <ul className="tick-list">
                        <li><span className="tick-icon">✓</span> Strong Job Prospects for Data Analysts in the UK.</li>
                        <li><span className="tick-icon">✓</span> 6 to 8 Months of Hybrid Learning (Online + Offline) in India.</li>
                        <li><span className="tick-icon">✓</span> 2-Year Post-Study Work Visa After MS in Data Analytics.</li>
                        <li><span className="tick-icon">✓</span> Apply for a Master’s Degree in Data Analytics.</li>
                    </ul>
                    <div className="button-area">
                        <button onClick={() => handleEnrollment()} className="apply-button" >Apply Now</button>
                        <button onClick={() => handleSyllabus()} className="apply-button" style={{margin : "0 0 0 20px"}} >Check Syllabus</button>
                    </div>

                </div>
            </div>
            </div>
           
            <Footer />
        </>
    );
};

export default University1;