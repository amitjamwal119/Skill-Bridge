import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Courses.css';
import Navbar from "../components/Navbar.jsx";  
import axios from 'axios';
import Footer from "../components/Footer.jsx";

const Courses = () => {
    const courses = [
        { 
            id: 1, 
            title: "Introduction to Programming", 
            description: "Learn the basics of programming", 
            duration: "6 hours", 
            difficulty: "Beginner",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3z5aCfAn4KGyd0-ttfl0l6K-2QpYnXIE5A&s"
        },
        { 
            id: 2, 
            title: "Web Development Fundamentals", 
            description: "Master web development basics", 
            duration: "8 hours", 
            difficulty: "Intermediate",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJuszYK7W-IwZ-GRhO6wFj1UzpOksGzSMiQ&s"
        },
        { 
            id: 3, 
            title: "Advanced JavaScript", 
            description: "JavaScript essentials, advanced concepts, dynamic web development.", 
            duration: "10 hours", 
            difficulty: "Advanced",
            image: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
        },
        { 
            id: 4, 
            title: "React Development", 
            description: "React fundamentals, components, hooks, dynamic web applications.", 
            duration: "12 hours", 
            difficulty: "Intermediate",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoEJqEcRvH5wpoQ_aCe54kWDLf68kTvxTmfo47CGUPiuNObM5KOonaieZfoHgeZAhO7o&usqp=CAU"
        },
        { 
            id: 5, 
            title: "My SQL Basics", 
            description: "Manage databases efficiently with MySQL.", 
            duration: "15 hours", 
            difficulty: "Beginner",
            image: "https://lucdn.letsupgrade.net/assets/SQL_8d48bf8c30.webp"
        },
        { 
            id: 6, 
            title: "DSA with C++", 
            description: "Optimize your algorithms using C++ DSA.", 
            duration: "20 hours", 
            difficulty: "Advanced",
            image: "https://lucdn.letsupgrade.net/assets/DSA_with_C_f0fe1281ad.webp"
        },
        { 
            id: 7, 
            title: "Chat GPT Bootcamp", 
            description: "Master AI conversations with ChatGPT.", 
            duration: "18 hours", 
            difficulty: "Intermediate",
            image: "https://lucdn.letsupgrade.net/assets/chatgpt_1_67332ba922968_72f2bb149c.webp"
        },
        { 
            id: 8, 
            title: "Postman API Fundamentals", 
            description: "API testing simplified with Postman.", 
            duration: "10 hours", 
            difficulty: "Beginner",
            image: "https://lucdn.letsupgrade.net/assets/Postman_new_thumb_a87679625f.webp"
        },
        { 
            id: 9, 
            title: "Git & GitHub Fundamentals", 
            description: "Streamline code collaboration.", 
            duration: "12 hours", 
            difficulty: "Intermediate",
            image: "https://lucdn.letsupgrade.net/assets/Git_Github_3cd1529f67.webp"
        },
        { 
            id: 10, 
            title: "Data Science BootCamp", 
            description: "Unlock your insights through data science.", 
            duration: "14 hours", 
            difficulty: "Advanced",
            image: "https://lucdn.letsupgrade.net/assets/Data_Science_f129fc5817.webp"
        },
        { 
            id: 11, 
            title: "Advanced Python", 
            description: "Advanced Python programming concepts and applications", 
            duration: "25 hours", 
            difficulty: "Advanced",
            image: "https://www.98thpercentile.com/hubfs/Introduction%20to%20python%20%281%29.png"
        },
        { 
            id: 12, 
            title: "UI/UX Design", 
            description: "Learn the principles of user interface and experience design", 
            duration: "18 hours", 
            difficulty: "Intermediate",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcuTtbBgC4EZxNdi579jS5hvWNcRzrWGZ_g&s"
        }
    ];
    const navigate = useNavigate();

    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [enrollmentStatus, setEnrollmentStatus] = useState({ message: '', type: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        setIsLoggedIn(!!userId);
    }, []);

    const handleEnroll = async (courseId) => {
        const userId = localStorage.getItem('userId');
        if (!isLoggedIn) {
            setEnrollmentStatus({ message: 'Please log in to enroll.', type: 'error' });
            return;
        }
    
        try {
            const course = courses.find(c => c.id === courseId);
            if (!course) {
                setEnrollmentStatus({ message: 'Course not found.', type: 'error' });
                return;
            }
    
            // ✅ Call your API
            const response = await axios.post('https://skill-bridge-7gdh.onrender.com/enroll-course',
                // http://localhost:5000/enroll-course
                // https://skill-bridge-7gdh.onrender.com
                {
                userId: userId,
                courseTitle: course.title
            });
    
            if (response.status === 200) {
                // API call was successful, navigate to success page
                navigate('/newsuccess', { 
                    state: { 
                        course: {
                            id: course.id,
                            title: course.title
                        }
                    } 
                });
            } else {
                setEnrollmentStatus({ message: 'Enrollment failed. Try again.', type: 'error' });
            }
        } 
         catch (error) {
            console.error('Error:', error);
            setEnrollmentStatus({ message: 'An error occurred. Please try again.', type: 'error' });
        }
    };

    const CourseCard = ({ course }) => {
        const isEnrolled = enrolledCourses.includes(course.id);
        return (
            <div className="course-card">
                <img 
                    src={course.image} 
                    alt="Course thumbnail" 
                    className="course-image"
                />
                <h3 className="course-title">{course.title}</h3>
                {/* <p className="course-description">{course.description}</p> */}
                <div className="course-info">
                    <span className="course-duration">{course.duration}</span>
                    <span className={`difficulty-badge ${course.difficulty.toLowerCase()}`}>
                        {course.difficulty}
                    </span>
                     <div className="Course-price">₹399/- <s>₹3000/-</s></div>

                </div>

                <button className={`enroll-button ${isEnrolled ? 'enrolled' : ''}`} 
                    onClick={() => handleEnroll(course.id)} 
                    disabled={isEnrolled}>
                    {isEnrolled ? 'Enrolled' : 'Enroll Now'}</button>
            </div>
        );
    };

    return (
        <>
            <Navbar />
        <div className="courses-container">
            {!isLoggedIn && (
                <div className="login-message">
                    Please log in to enroll in courses.
                </div>
            )}
            {enrollmentStatus.message && (
                <div className={`enrollment-status ${enrollmentStatus.type}`}>
                    {enrollmentStatus.message}
                </div>
            )}
            <div className="courses-grid">
                {courses.map(course => (
                    <CourseCard course={course} key={course.id} />
                ))}
            </div>
        </div>

        <Footer/>
        </>
    );
};

export default Courses;