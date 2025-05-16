import Navbar from "../../components/Navbar";
import Footer from "../Footer";

export const CyberSecuritySyllabus = () => {
  return (
    <>
    <Navbar/>
    <div className="syllabus-container">
      <h1>Master’s in Cybersecurity – Syllabus Overview</h1>
      <p>This syllabus outlines the core modules and learning outcomes for the Cybersecurity program at Sheffield Hallam University.</p>

      <h2>Semester 1</h2>
      <ul>
        <li>🔐 Introduction to Cybersecurity</li>
        <li>🧠 Fundamentals of Computer Networks</li>
        <li>🛠️ Secure Software Development</li>
        <li>📊 Risk Assessment & Management</li>
        <li>📄 Information Security Governance & Compliance</li>
      </ul>

      <h2>Semester 2</h2>
      <ul>
        <li>💻 Ethical Hacking and Penetration Testing</li>
        <li>🔍 Digital Forensics & Incident Response</li>
        <li>🖧 Network Security & Cryptography</li>
        <li>☁️ Cloud Security</li>
        <li>👥 Cyber Law & Ethics</li>
      </ul>

      <h2>Semester 3</h2>
      <ul>
        <li>📚 Research Methodologies in Cybersecurity</li>
        <li>📈 Advanced Topics in Cyber Threat Intelligence</li>
        <li>🎓 Final Project / Dissertation</li>
      </ul>

      <h2>Tools & Technologies Covered</h2>
      <ul>
        <li>Wireshark, Kali Linux, Metasploit</li>
        <li>Burp Suite, Nmap, Splunk</li>
        <li>Python for Cybersecurity Scripting</li>
        <li>Cloud Platforms: AWS, Azure Security Modules</li>
      </ul>

      <p><strong>Note:</strong> The syllabus may vary slightly based on academic updates and industry trends.</p>
    </div>
    <Footer/>
    </>
    
  );
};

