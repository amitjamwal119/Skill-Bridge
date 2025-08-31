import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './University.css';
import Navbar from "../Navbar";
import Footer from "../Footer";

const University3 = () => {
    const navigate = useNavigate();

    const handleEnrollment = () => {
        navigate('/success');
    };

    const handleSyllabus = () => {
        navigate('/csecsyllabus')
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="main my-3">
                    <div className="containerd">
                        <img src="https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FArtboard_7_7e42dde5f9.webp&w=3840&q=75" alt="university" />
                        <h1 data-aos="fade-up">Sheffield Hallam University</h1>
                        <p>
                            Sheffield Hallam University, located in Sheffield, England, is a respected institution known for academic excellence and a global outlook. The university's Master’s in Cybersecurity program is designed to prepare students for rapidly evolving threats in the digital world. The course covers network security, ethical hacking, digital forensics, and information governance. With a strong emphasis on practical skills and real-world applications, students gain hands-on experience using industry-standard tools. The university’s modern campus, inclusive learning environment, and global student community make it a top choice for aspiring cybersecurity professionals.
                        </p>
                        <ul className="tick-list">
                            <li><span className="tick-icon">✓</span> Growing Demand for Cybersecurity Experts in the UK.</li>
                            <li><span className="tick-icon">✓</span> 6 to 8 Months of Hybrid Learning (Online + Offline) in India.</li>
                            <li><span className="tick-icon">✓</span> 2-Year Post-Study Work Visa After MS in Cybersecurity.</li>
                            <li><span className="tick-icon">✓</span> Apply for a Master’s Degree in Cybersecurity.</li>
                        </ul>
                        <div className="button-area">
                            <button onClick={handleEnrollment} className="apply-button">Apply Now</button>
                            <button onClick={handleSyllabus} className="apply-button" style={{ margin: "0 0 0 20px" }}>Check Syllabus</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default University3;
