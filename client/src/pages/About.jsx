import userImg from "../assets/user1.gif";
import "../css/About.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="about-container">
        <div className="about-content">
          <div className="hero-section">
            <h1 className="hero-title">About Us</h1>
            <p className="hero-description">
              We are a leading technology company dedicated to innovation and excellence.
            </p>
          </div>
          <div className="team-section">
            <h2 className="section-title"></h2>

          </div>
          <div className="company-overview">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">
              At SkillBridge, we're on a mission to upskill individuals for the tech industry by combining expert-led live training, real-world projects, and the power of a supportive learning community.

              We believe that education should be practical, engaging, and accessible. That’s why our platform connects learners with experienced instructors, career-relevant courses, and peer-driven collaboration—all designed to help you grow faster and smarter.

              Whether you're a student exploring your first tech role or a professional looking to switch careers, SkillBridge is your launchpad to success. From mastering full-stack development to understanding cloud computing or preparing for tech interviews, our hands-on programs are curated to match industry needs.
            </p>
          </div>
            <div className="team-members">
            {/* [1,2,3].map */}
            {[1].map((item) => (                        
              <div key={item} className="team-member">
                <img 
                  src={userImg} 
                  className="team-member-image"
                />
                <h3 className="team-member-name">Amit</h3>
                <p className="team-member-role">Software Engineer</p>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer/>
    </>
  );
};

export default About;