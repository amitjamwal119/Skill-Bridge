import '../css/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About SkillBridge</h1>
                <p>Empowering learners worldwide with quality education</p>
            </div>

            <div className="about-content">
                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>At SkillBridge, we are committed to providing accessible, high-quality education to learners around the world. Our mission is to bridge the gap between traditional education and modern learning needs through innovative online courses and programs.</p>
                </section>

                <section className="vision-section">
                    <h2>Our Vision</h2>
                    <p>We envision a world where education is accessible to all, regardless of geographical location or financial constraints. Through our platform, we aim to create a global community of lifelong learners.</p>
                </section>

                <section className="values-section">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Quality Education</h3>
                            <p>We maintain the highest standards in course content and delivery.</p>
                        </div>
                        <div className="value-card">
                            <h3>Accessibility</h3>
                            <p>Making education available to everyone, everywhere.</p>
                        </div>
                        <div className="value-card">
                            <h3>Innovation</h3>
                            <p>Constantly evolving to meet the changing needs of learners.</p>
                        </div>
                        <div className="value-card">
                            <h3>Community</h3>
                            <p>Building a supportive learning environment for all students.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs; 