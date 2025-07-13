import React from 'react';
import './About.css';

const About = ({ darkMode }) => {
  return (
    <div className={`about-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="about-content">
        <div className="about-header">
          <h1>About Me</h1>
          <div className="header-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="profile-section">
              <div className="profile-image">
                <img src="/api/placeholder/250/250" alt="Phan Minh Gia Bảo" />
              </div>
              <div className="profile-info">
                <h2>Phan Minh Gia Bảo</h2>
                <p className="title">Software Engineering Student</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>pmgbao2004@gmail.edu.vn</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>0375539204</span>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-github"></i>
                    <a href="https://github.com/IamBao2k4" target="_blank" rel="noopener noreferrer">
                      github.com/IamBao2k4
                    </a>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-facebook"></i>
                    <a href="https://www.facebook.com/bao.phanminhgia.54" target="_blank" rel="noopener noreferrer">
                      Facebook Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="intro-section">
              <h3>Introduction</h3>
              <p>
                I'm a 3rd year student at Ho Chi Minh City University of Science, majoring in 
                Software Engineering. I'm passionate about technology and constantly working 
                day by day to become a skilled developer. My journey in software development 
                has been driven by curiosity and a desire to create meaningful solutions.
              </p>
            </div>

            <div className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <div className="edu-header">
                  <h4>Ho Chi Minh City University of Science</h4>
                  <span className="edu-period">2022 - Present</span>
                </div>
                <p className="edu-major">Software Engineering</p>
                <p className="edu-gpa">GPA: 3.62</p>
              </div>
              <div className="education-item">
                <div className="edu-header">
                  <h4>Provincial Math Gold Medal</h4>
                  <span className="edu-period">2021</span>
                </div>
                <p className="edu-description">
                  Achieved Gold Medal in Provincial Mathematics Competition, 
                  demonstrating strong analytical and problem-solving skills.
                </p>
              </div>
            </div>

            <div className="goals-section">
              <h3>Goals</h3>
              <div className="goals-content">
                <div className="goal-item">
                  <h4>Short-term Goals</h4>
                  <p>
                    Take an internship to gain practical experience, learn more about 
                    software architecture patterns, and improve my development process 
                    knowledge.
                  </p>
                </div>
                <div className="goal-item">
                  <h4>Long-term Goals</h4>
                  <p>
                    Become a full-stack software engineer, contribute to open source 
                    projects, and build products that benefit the community and make 
                    a positive impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="soft-skills-section">
              <h3>Soft Skills</h3>
              <div className="soft-skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="skill-content">
                    <h4>Teamwork</h4>
                    <p>Strong collaboration skills with experience in team projects</p>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <div className="skill-content">
                    <h4>Communication</h4>
                    <p>Effective communication in both technical and non-technical contexts</p>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="skill-content">
                    <h4>Problem-solving</h4>
                    <p>Analytical thinking and creative approach to challenges</p>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="skill-content">
                    <h4>Self-motivation</h4>
                    <p>Driven to continuously learn and improve skills</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hobbies-section">
              <h3>Hobbies & Interests</h3>
              <div className="hobbies-content">
                <p>When I'm not programming, I enjoy:</p>
                <ul>
                  <li>
                    <i className="fas fa-futbol"></i>
                    Playing sports like soccer and badminton
                  </li>
                  <li>
                    <i className="fas fa-gamepad"></i>
                    Playing games with friends
                  </li>
                  <li>
                    <i className="fas fa-utensils"></i>
                    Cooking and experimenting with new recipes
                  </li>
                </ul>
              </div>
            </div>

            <div className="languages-section">
              <h3>Languages</h3>
              <div className="language-item">
                <div className="language-header">
                  <h4>English</h4>
                  <span className="language-level">TOEIC 725</span>
                </div>
                <div className="language-bar">
                  <div className="language-progress" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;