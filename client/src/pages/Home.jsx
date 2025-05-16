import  { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      image: 'https://lucdn.letsupgrade.net/assets/DSA_with_C_f0fe1281ad.webp',
      title: 'DSA with C++'
    },
    {
      image: 'https://lucdn.letsupgrade.net/assets/Data_Science_f129fc5817.webp',
      title: 'Data Science BootCamp'
    },
    {
      image: 'https://lucdn.letsupgrade.net/assets/SQL_8d48bf8c30.webp',
      title: 'My SQL Basics'
    },
    {
      image: 'https://lucdn.letsupgrade.net/assets/Git_Github_3cd1529f67.webp',
      title: 'Git & GitHub Fundamentals'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const course_redirect = () => {
    navigate('/courses');
  };

  const handleUniversityClick = (id) => {
    navigate(`/university${id}`);
  };

  const handledataanalytics = () => {
    navigate('/dataanalytics')
  }
  const handledatascience = () => {
    navigate('/datascience')
  }
  const handlecybersecurity = () => {
    navigate('/cybersecurity')
  }

  return (
    <div className="home-container">
      <Navbar />
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {courses.map((course, index) => (
            <div key={index} className="carousel-slide">
              <img src={course.image} alt={course.title} />
              <div className="slide-title">{course.title}</div>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {courses.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="enroll-now-btn-container">
        <button className="enroll-now-btn" onClick={course_redirect}>
          Enroll Now
        </button>
      </div>
      <div className="top-div">
        <div className="content">
          <h1>Welcome to Skill Bridge</h1>
          <p>Your gateway to academic excellence and career success</p>
        </div>
      </div>
      <div className="containerr">
        <div className="containerr-1">
          <h5>Partner University Programs</h5>
          <div className="cards">
            <div className="card" onClick={() => handledataanalytics()}>
              <div className="card-img-box">
                <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                className="card-img" 
                alt="Data Analytics Program" 
              />
              </div>
              <div className="card-body">
                <h5 className="card-title">Data Analytics Program</h5>
                <p className="card-text">Master Data Analytics</p>
                <button className="card-button">Learn More</button>
              </div>
            </div>
            <div className="card" onClick={() =>  handledatascience()}>
              <div className="card-img-box">
                <img 
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                className="card-img" 
                alt="IT Management Program" 
              />
              </div>
              <div className="card-body">
                <h5 className="card-title">Master of Data Science</h5>
                <p className="card-text">Excel in IT Management</p>
                <button className="card-button">Learn More</button>
              </div>
            </div>
            <div className="card" onClick={() => handlecybersecurity()}>
              <div className="card-img-box">
                <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                className="card-img" 
                alt="Computing Program" 
              />
              </div>
              <div className="card-body">
                <h5 className="card-title">Master of Cybersecurity</h5>
                <p className="card-text">Advance your Computing skills</p>
                <button className="card-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;