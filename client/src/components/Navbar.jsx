import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.gif';
import "../css/Navbar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import userImg from '../assets/user1.gif'




const navbar = () => {

  const navigate = useNavigate();
  
  const course_redirect = () => {
    navigate("/courses");
  };

  const CheckProfile = () => {
    navigate("/studentprofile");
  }

  const EnrolledCourses = () => {
    navigate("/enrolledcourses")
  }

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
            <Link to="/home"><img className="logo" src={logo} /></Link>
          </div>
          <div className="end">
            {/* <button className="nav-link" onClick={handleLogout}><strong>LogOut</strong></button> */}
             <Dropdown align="end">
  <Dropdown.Toggle as="div" id="dropdown-custom" style={{ border: "none", background: "transparent", padding: 0 }}>
    <img
      src={userImg} // or use require or import if local
      title = "View profile"
      alt="User"
      style={{width: "50px", height: "50px", borderRadius: "50%", cursor: "pointer", objectFit: "cover"}}

    />
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={CheckProfile} >My Profile</Dropdown.Item>
    <Dropdown.Item onClick={EnrolledCourses}> Enrolled Courses</Dropdown.Item>
    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

          </div>
        </div>
        <div >
          <div className="scroll-text"> -🌟- <b>Early Sale:</b> Upto 85% off on all courses -🌟- Nagaraj Bevinmarad has enrolled in Postman API Fundamentals Student Expert Certification  -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  Lãkesh Prädhån has enrolled in Postman API Fundamentals Student Expert Certification   -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟- -🌟-  Ashootosh Rathod has enrolled in Postman API Fundamentals Student Expert Certification -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-   -🌟-  SHAZAIN ALI _07 has enrolled in Canva Bootcamp  -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  -🌟-  Uma maheswari has enrolled in Python Bootcamp  -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  -🌟-  Lemesh kumar Nishad has enrolled in GenAI 101 with Pieces -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟- -🌟- Manishrama Mani has enrolled in Python Bootcamp -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  SRAYOSI MONDAL has enrolled in Excel Bootcamp -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟- Yashvardhan Singh Kanawat has enrolled in Excel Bootcamp -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  Aysha Afrah has enrolled in Data Science with Python -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  Ashootosh Rathod has enrolled in Postman API Fundamentals Student Expert Certification -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses  -🌟-  Nagaraj Bevinmarad has enrolled in Postman API Fundamentals Student Expert Certification  -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  Lãkesh Prädhån has enrolled in Postman API Fundamentals Student Expert Certification  -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  -🌟-  Ashootosh Rathod has enrolled in Postman API Fundamentals Student Expert Certification -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-   -🌟-  SHAZAIN ALI _07 has enrolled in Canva Bootcamp  -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  -🌟-  Uma maheswari has enrolled in Python Bootcamp  -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  -🌟-  Lemesh kumar Nishad has enrolled in GenAI 101 with Pieces -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟- Manishrama Mani has enrolled in Python Bootcamp -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  SRAYOSI MONDAL has enrolled in Excel Bootcamp -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  Yashvardhan Singh Kanawat has enrolled in Excel Bootcamp -🌟- -🌟-  <b>Early Sale:</b> Upto 85% off on all courses   -🌟-  Aysha Afrah has enrolled in Data Science with Python -🌟- Ashootosh Rathod has enrolled in Postman API Fundamentals Student Expert Certification.
          </div>
        </div>
        
      </nav>
    </>
  )
}

export default navbar;