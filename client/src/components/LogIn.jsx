import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/LogIn.css";

const LogIn = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/login", { email, password });
            
            if (response.data.success) {
                localStorage.setItem("userId", response.data.userId);
                navigate("/LoginSuccess");
            } else {
                setError("Invalid Credentials. Please try again.");
            }
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data) {
                setError("Invalid Credentials. Please try again.");
            } else {
                setError("An error occurred. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Welcome Back !</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            placeholder="Email" type="email" id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            placeholder="Password" type="password" id="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    </form>
                <div className="auth-links">
                    <p>Don't have an account?{""}
                        <a href="/signup">Create Now</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;