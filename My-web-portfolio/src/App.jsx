import React from 'react';
import './App.css';
import profilePic from './assets/Arvin B. Calinog.png';
// Ensure these files exist in your assets folder
import project1Img from './assets/portfolio-preview.png';
import project2Vid from './assets/assesment-exam-system.mp4';

const App = () => {
  return (
    <div className="portfolio-wrapper">
      {/* 00. NAVIGATION */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">ARVIN<span>.IT</span></div>
          <div className="menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* 01. HOME SECTION */}
      <section id="home" className="hero-fullscreen">
        <div className="hero-content">
          <div className="hero-text">
            <span className="eyebrow-tag">BS INFORMATION TECHNOLOGY</span>
            <h1 className="display-name">Arvin B. Calinog</h1>
            <p className="hero-sub">
              A proactive and responsible IT professional based in San Pedro City, Laguna. 
              Expert in streamlining operations through technical solutions and teamwork.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-solid">Hire Me</a>
              <a href="#experience" className="btn-outline">View Work</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-accent">
              <img src={profilePic} alt="Arvin Calinog" className="main-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* 02. ABOUT ME SECTION */}
      <section id="about" className="content-section light-bg">
        <div className="narrow-container">
          <h2 className="section-label">01. About Me</h2>
          <p className="big-about-text">
            I am a proactive, organized, and responsible person, with good interpersonal relationships. 
            I stand out for teamwork, quick decision-making, and pressure management. 
            I am looking for a challenging position to keep learning.
          </p>
        </div>
      </section>

      {/* 03. EDUCATION SECTION */}
      <section id="education" className="content-section">
        <div className="wide-container">
          <h2 className="section-label">02. Educational Background</h2>
          <div className="edu-grid">
            <div className="edu-box">
              <span className="date">2022 — Present</span>
              <h3>SFICS</h3>
              <p>Bachelor of Science in Information Technology</p>
            </div>
            <div className="edu-box">
              <span className="date">2007 — 2011</span>
              <h3>IETI Magsaysay Campus</h3>
              <p>High School Graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. PROJECTS SECTION */}
      <section id="projects" className="content-section">
        <div className="wide-container">
          <h2 className="section-label">03. Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-media">
                <img src={project1Img} alt="Web Portfolio" />
              </div>
              <div className="project-info">
                <h3>Project 1: Web Portfolio</h3>
                <p>Developed a responsive portfolio website using React and CSS.</p>
                <div className="tech-tags">
                  <span>React</span> <span>CSS3</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-media">
                <video autoPlay loop muted playsInline>
                  <source src={project2Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="project-info">
                <h3>Project 2: Web-based Examination System</h3>
                <p>Online exam platform with an automated course recommendation report system.</p>
                <div className="tech-tags">
                  <span>VB.Net</span><span>bootstrap</span> <span>MySQL</span> <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. WORK EXPERIENCE SECTION */}
      <section id="experience" className="content-section light-bg">
        <div className="wide-container">
          <h2 className="section-label">04. Work Experience</h2>
          <div className="work-stack">
            <div className="work-item">
              <div className="work-header">
                <h3>Forwarder | QuadX Logistics</h3>
                <span className="date">2019</span>
              </div>
              <ul className="work-list">
                <li>Coordinate with shipping carriers.</li>
                <li>Process import/export documents.</li>
                <li>Track shipments for timely delivery.</li>
                <li>Created transmittal forms for shipment tracking processes.</li>
              </ul>
            </div>
            
            <div className="work-item">
              <div className="work-header">
                <h3>Sales Promodiser | DIY Hardware</h3>
                <span className="date">2017 — 2018</span>
              </div>
              <ul className="work-list">
                <li>Suggested products to highlight features and benefits.</li>
                <li>Ensured products were neatly displayed and organized.</li>
                <li>Exceeded monthly sales quotas and targets.</li>
                <li>Managed inventory levels and replenishment processes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06. SKILLS SECTION */}
      <section id="skills" className="content-section">
        <div className="wide-container">
          <h2 className="section-label">05. Skills</h2>
          <div className="edu-grid">
            <div className="edu-box">
              <h3>Technical Skills</h3>
              <ul className="skill-inner-list">
                <li>HTML, CSS, JavaScript, React, Node.js, SQL</li>
                <li>MS Office (Word, Excel, PowerPoint)</li>
                <li>Basic Graphic Design (Canva, Photoshop)</li>
              </ul>
            </div>
            <div className="edu-box">
              <h3>Soft Skills</h3>
              <ul className="skill-inner-list">
                <li>Excellent customer service and communication.</li>
                <li>Adaptability and pressure management.</li>
                <li>Process optimization and workflow management.</li>
                <li>Strong attention to detail and accuracy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 07. CONTACT SECTION */}
      <section id="contact" className="content-section dark-bg">
        <div className="narrow-container center-text">
          <h2 className="section-label">06. Contact</h2>
          <div className="contact-main">
            <h3 className="footer-email">arvincalinog.lj@gmail.com</h3>
            <p className="location-text">San Pedro City, Laguna, Philippines</p>
          </div>
          <div className="contact-actions">
            <a href="mailto:arvincalinog.lj@gmail.com" className="btn-solid-white">Send Message</a>
            <a href="https://www.facebook.com/arvincalinog" target="_blank" rel="noreferrer" className="btn-outline-white">Facebook</a>
            <a href="https://www.linkedin.com/in/arvin-calinog-75a4183a6/" target="_blank" rel="noreferrer" className="btn-outline-white">LinkedIn</a>
            <a href="https://vinxy09.github.io/Arvin-Portfolio-Main/" target="_blank" rel="noreferrer" className="btn-outline-white">Portfolio</a>
          </div>
          <div className="availability-tag">
            <p>Available for IT opportunities in Workflow Optimization & Data Management</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;