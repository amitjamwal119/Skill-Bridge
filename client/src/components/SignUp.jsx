import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password!== confirmPassword){
            setError("Passwords do not match");
            return
        }
          axios.post("http://localhost:5000/register", { name, email, password })
          .then(result=>{
            console.log(result);
            localStorage.setItem("userId",result.data._id);
            navigate("/SignupSuccess");
          })
              .catch((err) => {
                alert("Registration failed. Please try again.");
                  console.log(err);
              })
              }
  

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2 className="signup-title">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input
                            type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input
                            type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required minLength="6" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="confirmPassword" value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required minLength="6"/>
                        </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <div className="auth-links">
                    <p>
                        Already have an account?{" "}
                        <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;