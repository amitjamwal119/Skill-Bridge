import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../css/Success.css";
import SuccessImg from "../assets/success.gif";

const Success = () => {
  const navigate = useNavigate();
        useEffect(() => {
            const timer = setTimeout(() => {
              navigate('/home');
              window.scrollTo(0, 0);
            }, 2000);
        
            return () => clearTimeout(timer);
          }, []);
    return (
        <div className="success-container">
            <img className="success-img" src={SuccessImg}/>
            <h1>Success!</h1>
            <p>You are now Enrolled.</p>
        </div>
    );
};

export default Success;