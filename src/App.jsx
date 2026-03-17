import "./App.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import portfolioImg from "./assets/portfolio.png";
import studentImg from "./assets/student.png";
import profileImg from "./assets/profile.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div>

      {/* FLOATING PARTICLES */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 5 + Math.random() * 10 + "s",
              animationDelay: Math.random() * 5 + "s"
            }}
          ></span>
        ))}
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Ritik Dhawan</h2>

        {/* Hamburger */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">

          <div>
            <h1>Ritik Dhawan</h1>

            <h2>
              <Typewriter
                words={[
                  "React Developer",
                  "JavaScript Developer",
                  "Python Enthusiast"
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          <img src={profileImg} alt="profile" className="profile-img" />

        </div>
      </section>
     
      {/* ABOUT */}
      <motion.section
        id="about"
        className="section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am a passionate React developer with a strong foundation in JavaScript, Python, and modern web technologies.
            I enjoy building responsive and user-friendly applications. I have worked on real-world projects like a portfolio
            website and a student management system, and I am eager to grow as a developer.
          </p>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="box">React</div>
            <div className="box">JavaScript</div>
            <div className="box">HTML</div>
            <div className="box">CSS</div>
            <div className="box">Python</div>
            <div className="box">SQL</div>
          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Projects</h2>

          <div className="project-container">

            <div className="project-card">
              <img src={portfolioImg} alt="Portfolio" />
              <h3>Portfolio Website</h3>
              <p>React-based personal portfolio</p>
            </div>

            <div className="project-card">
              <img src={studentImg} alt="Student" />
              <h3>Student Management System</h3>
              <p>Python + MySQL CRUD app</p>
            </div>

          </div>
        </div>
      </motion.section>
      
      {/*Hire me Section*/}
      <motion.section
        className="cta"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container">

          <h2>Let's Work Together 🚀</h2>
          <p>I’m open to opportunities and collaborations.</p>

          <div className="cta-buttons">

          <motion.a
            href={`${import.meta.env.BASE_URL}Ritik_Dhawan_Resume.pdf`}
            download
            className="btn resume-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>

            <motion.a
              href="#contact"
              className="btn hire-btn"
              onClick={() => setShowContact(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>

          </div>

        </div>
      </motion.section>    


      {/* CONTACT */}
      <motion.section
        id="contact"
        className="section"
        initial={{ opacity: 0, y: 80 }}
        animate={showContact ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {showContact && (
          <div className="container">
            <h2>Contact</h2>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </motion.section>

    </div>
  );
}

export default App;
