import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./components/LogIn";
import About from "./pages/About";
import SignUp from "./components/SignUp";
import Courses from "./pages/Courses";
import Contact from './components/Contact';
import Success from './components/Success';
import LoginSuccess from './components/LoginSuccess';
import SignupSuccess from './components/SignupSuccess';
import University1 from './components/University/University1';
import University2 from './components/University/University2';
import University3 from './components/University/University3';
import './App.css';
import { NewSuccess } from './dynamic/NewSuccess';
import { Coursesinfo } from './dynamic/Coursesinf';

    function App() {
      const instance = axios.create({
        baseURL: 'http://localhost:5000',
        timeout: 5000,
        headers: {'X-Custom-Header': 'foobar'}
    });
  return (
    <>
    <Router>
        <Routes>
          <Route path='/newsuccess' element={<NewSuccess/>} />
          <Route path='/coursinfo/:courseId' element={<Coursesinfo/>} />
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/loginSuccess" element={<LoginSuccess />} />
          <Route path="/signupSuccess" element={<SignupSuccess />} />
          <Route path="/university1" element={<University1 />} />
          <Route path="/university2" element={<University2 />} />
          <Route path="/university3" element={<University3 />} />
        </Routes>
      {/* <div data-aos="fade" className="footer-section"> THE PART DATA-AOS="FADE " HAS BEEN COMENTED      */} 

      <div   className="footer-section">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Have questions or want to learn more about our services? Contact us today.
          </p>
          <div className="footer-links">
            <Link className="footer-link" to="/about">About</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
          <div className="footer-bottom">
          <p>&copy; 2025 Skill Bridge. All rights reserved.</p>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
