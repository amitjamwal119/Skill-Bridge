import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Success.css";
import SuccessImg from "../assets/success.gif";

export const NewSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const course = location.state?.course;

  useEffect(() => {
    if (!course) {
      // No course info passed, redirect to courses list
      navigate("/courses");  // Or your actual courses route
      return;
    }

    const timer = setTimeout(() => {
      navigate(`/coursinfo/${course.id}`);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [course, navigate]);

  return (
    <div className="success-container">
      <img className="success-img" src={SuccessImg} alt="Success" />
      <h1>Success!</h1>
      <p>You are now Enrolled.</p>
    </div>
  );
};






//  import React,{useEffect} from "react";
//  import { useNavigate } from "react-router-dom";
//  import "../css/Success.css";
//  import SuccessImg from "../assets/success.gif";

// export const NewSuccess = () => {
//    const navigate = useNavigate();
//          useEffect(() => {
//              const timer = setTimeout(() => {
//                navigate('/coursinfo');
//                window.scrollTo(0, 0);
//              }, 2000);
         
//              return () => clearTimeout(timer);
//            }, []);
//      return (
//          <div className="success-container">
//              <img className="success-img" src={SuccessImg}/>
//              <h1>Success!</h1>
//              <p>You are now Enrolled.</p>
//          </div>
//      );
// }
