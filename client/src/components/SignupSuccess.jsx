import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../css/Success.css';
import SuccessImg from "../assets/success.gif";

const SignupSuccess=()=>{
  const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/');
        }, 2500);
    
        return () => clearTimeout(timer);
      }, []);

    return(
        <div className="success-container">
            <img className="success-img" src={SuccessImg}/>
            <h1> Signup Successful</h1>
        </div>
    )
}

export default SignupSuccess;