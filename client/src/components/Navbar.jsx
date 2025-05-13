import React from "react";
import {Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.gif';
import "../css/Navbar.css"
const navbar = () => {
  const navigate = useNavigate();
  const course_redirect = () => {
    navigate("/courses");
  };
  
  const handleLogout = () => {
    localStorage.removeItem('UserId');
    navigate("/", { replace: true })
    setTimeout(() => {
      window.location.reload(); 
    }, 0);
  };
    return (
        <>
                       <nav className="navbar">
                        <div className="container">
                          <div className="start">
                          <button className="nav-link" onClick={course_redirect}><strong>Courses</strong></button>
                          </div>
                          <div className="center">
                          <Link to="/home"><img className="logo" src={logo}/></Link>
                          </div>
                          <div className="end">
                          <button className="nav-link" onClick={handleLogout}><strong>LogOut</strong></button>
                          </div>
                        </div>
                  <div >
                    <div className="scroll-text">Nagaraj Bevinmarad has enrolled in Postman API Fundamentals Student Expert Certification  -🌟-  Lãkesh Prädhån has enrolled in Postman API Fundamentals Student Expert Certification   -🌟-  Ashootosh Rathod has enrolled in Postman API Fundamentals Student Expert Certification   -🌟-  SHAZAIN ALI _07 has enrolled in Canva Bootcamp   -🌟-  Uma maheswari has enrolled in Python Bootcamp   -🌟-  Lemesh kumar Nishad has enrolled in GenAI 101 with Pieces -🌟- Manishrama Mani has enrolled in Python Bootcamp -🌟- SRAYOSI MONDAL has enrolled in Excel Bootcamp -🌟- Yashvardhan Singh Kanawat has enrolled in Excel Bootcamp -🌟- Aysha Afrah has enrolled in Data Science with Python -🌟- Ashootosh Rathod has enrolled in Postman API Fundamentals Student Expert Certification -🌟- Nagaraj Bevinmarad has enrolled in Postman API Fundamentals Student Expert Certification  -🌟-  Lãkesh Prädhån has enrolled in Postman API Fundamentals Student Expert Certification   -🌟-  Ashootosh Rathod has enrolled in Postman API Fundamentals Student Expert Certification   -🌟-  SHAZAIN ALI _07 has enrolled in Canva Bootcamp   -🌟-  Uma maheswari has enrolled in Python Bootcamp   -🌟-  Lemesh kumar Nishad has enrolled in GenAI 101 with Pieces -🌟- Manishrama Mani has enrolled in Python Bootcamp -🌟- SRAYOSI MONDAL has enrolled in Excel Bootcamp -🌟- Yashvardhan Singh Kanawat has enrolled in Excel Bootcamp -🌟- Aysha Afrah has enrolled in Data Science with Python -🌟- Ashootosh Rathod has enrolled in Postman API Fundamentals Student Expert Certification.
                    </div>
                  </div>
                </nav>
        </>
    )}

export default navbar;