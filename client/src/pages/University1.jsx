import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/University.css';

const University1 = () => {
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
                        src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                        alt="Sheffield Hallam University"
                        style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px' }}
                    />
                    <h1 data-aos="fade-up">Sheffield Hallam University</h1>
                    <p>
                        Sheffield Hallam University, located in Sheffield, England, is a prestigious institution renowned for its commitment to academic excellence and international education. It offers a wide range of programs, including a highly regarded Data Analytics course that equips students with essential skills in data analysis, machine learning, and business intelligence. With strong industry links, the course provides hands-on experience and career opportunities. The university's vibrant campus offers state-of-the-art facilities, a diverse student body from over 100 countries, and comprehensive support services, making Sheffield Hallam an ideal destination for global learners seeking innovation, research, and student success.
                    </p>
                    <ul>
                        <li>Job Opportunities in UK.</li>
                        <li>6 to 8 months India Online + Offline Learning.</li>
                        <li>2-Years Work Visa post MS Degree completion.</li>
                        <li>Apply for Master's Degree in International Relations</li>
                    </ul>
                    <button onClick={handleEnrollment} className="apply-button">Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default University1; 