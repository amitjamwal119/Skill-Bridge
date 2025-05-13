import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../css/courseinf.css';

export const Coursesinfo = () => {
  const { courseId } = useParams();

  const courses = [
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Learn the basics of programming with this comprehensive beginner's course covering variables, loops, functions, and basic algorithms.",
      duration: "6 hours",
      difficulty: "Beginner",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3z5aCfAn4KGyd0-ttfl0l6K-2QpYnXIE5A&s",
      category: "Programming"
    }
    ,
        { 
            id: 2, 
            title: "Web Development Fundamentals", 
            description: "Master web development basics", 
            duration: "8 hours", 
            difficulty: "Intermediate",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJuszYK7W-IwZ-GRhO6wFj1UzpOksGzSMiQ&s"
        }
        ,
        { 
            id: 3, 
            title: "Advanced JavaScript", 
            description: "JavaScript essentials, advanced concepts, dynamic web development.", 
            duration: "10 hours", 
            difficulty: "Advanced",
            image: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
        },
        { 
            id: 4, 
            title: "React Development", 
            description: "React fundamentals, components, hooks, dynamic web applications.", 
            duration: "12 hours", 
            difficulty: "Intermediate",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoEJqEcRvH5wpoQ_aCe54kWDLf68kTvxTmfo47CGUPiuNObM5KOonaieZfoHgeZAhO7o&usqp=CAU"
        },
        { 
            id: 5, 
            title: "My SQL Basics", 
            description: "Manage databases efficiently with MySQL.", 
            duration: "15 hours", 
            difficulty: "Beginner",
            image: "https://lucdn.letsupgrade.net/assets/SQL_8d48bf8c30.webp"
        },
        { 
            id: 6, 
            title: "DSA with C++", 
            description: "Optimize your algorithms using C++ DSA.", 
            duration: "20 hours", 
            difficulty: "Advanced",
            image: "https://lucdn.letsupgrade.net/assets/DSA_with_C_f0fe1281ad.webp"
        },
        { 
            id: 7, 
            title: "Chat GPT Bootcamp", 
            description: "Master AI conversations with ChatGPT.", 
            duration: "18 hours", 
            difficulty: "Intermediate",
            image: "https://lucdn.letsupgrade.net/assets/chatgpt_1_67332ba922968_72f2bb149c.webp"
        },
        { 
            id: 8, 
            title: "Postman API Fundamentals", 
            description: "API testing simplified with Postman.", 
            duration: "10 hours", 
            difficulty: "Beginner",
            image: "https://lucdn.letsupgrade.net/assets/Postman_new_thumb_a87679625f.webp"
        },
        { 
            id: 9, 
            title: "Git & GitHub Fundamentals", 
            description: "Streamline code collaboration.", 
            duration: "12 hours", 
            difficulty: "Intermediate",
            image: "https://lucdn.letsupgrade.net/assets/Git_Github_3cd1529f67.webp"
        },
        { 
            id: 10, 
            title: "Data Science BootCamp", 
            description: "Unlock your insights through data science.", 
            duration: "14 hours", 
            difficulty: "Advanced",
            image: "https://lucdn.letsupgrade.net/assets/Data_Science_f129fc5817.webp"
        },
        { 
            id: 11, 
            title: "Advanced Python", 
            description: "Advanced Python programming concepts and applications", 
            duration: "25 hours", 
            difficulty: "Advanced",
            image: "https://www.98thpercentile.com/hubfs/Introduction%20to%20python%20%281%29.png"
        },
        { 
            id: 12, 
            title: "UI/UX Design", 
            description: "Learn the principles of user interface and experience design", 
            duration: "18 hours", 
            difficulty: "Intermediate",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcuTtbBgC4EZxNdi579jS5hvWNcRzrWGZ_g&s"
        }
    // Add more course objects as needed
  ];

  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="course-detail-container">
          <div className="alert-box">
            <h2>Course Not Found</h2>
            <p>The course you're looking for doesn't exist.</p>
            <a href="/courses" className="button-outline">Browse All Courses</a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="course-detail-container">
        <div className="course-card">
          <div className="course-image-container">
            <img src={course.image} alt={course.title} className="course-image" />
          </div>
          <div className="course-details">
            <div className="badges">
              <span className="badge">{course.category}</span>
              <span className={`badge ${course.difficulty.toLowerCase()}`}>{course.difficulty}</span>
            </div>
            <h1 className="course-title">{course.title}</h1>
            <p className="course-description">{course.description}</p>

            <ul className="list-group">
              <li className="list-group-item">
                <span>⏳ Duration</span>
                <span>{course.duration}</span>
              </li>
              <li className="list-group-item">
                <span>📅 Start Date</span>
                <span>Anytime (Self-paced)</span>
              </li>
            </ul>

            {/* <button className="enroll-button">Enroll Now - Free</button> */}
          </div>
        </div>

        <div className="course-section">
          <h2>📘 Course Roadmap</h2>
          <ul className="list-group">
            {[
              "Week 1: Introduction & Basics - Get familiar with core concepts",
              "Week 2: Deep Dive into Core Concepts - Master the fundamentals",
              "Week 3: Mini Projects - Apply your knowledge",
              "Week 4: Final Project - Comprehensive assessment"
            ].map((item, index) => (
              <li key={index} className="list-group-item">
                🔹 {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="course-section">
          <h2>🎥 Sample Course Video</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/8mAITcNt710"
              title="Course preview"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center">
            <a className="button-outline" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              Watch More Preview Videos
            </a>
          </div>
        </div>

        <div className="course-section">
          <h2>🎯 What You'll Learn</h2>
          <div className="learn-grid">
            {[
              "Master core concepts and fundamentals",
              "Build real-world projects",
              "Get hands-on coding experience",
              "Learn industry best practices",
              "Prepare for technical interviews",
              "Join a community of learners"
            ].map((item, index) => (
              <div key={index} className="learn-item">✓ {item}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
