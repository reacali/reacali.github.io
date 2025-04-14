import React from 'react';
import { Link } from 'react-router-dom'; 

import nameImage from '../assets/images/name.svg';
import profilePhoto from '../assets/images/me.jpg';
import emailIcon from '../assets/images/email.png';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github.png';
import shibaImage from '../assets/images/shiba.png';

function Home() {
    return (
      
      <div className="home-page app-container">

        {/* Name Image */}
        <img src={nameImage} alt="Name" className="name-image" />

        {/* About Me */}
        <div className="about-me-bubble">
          <p> Hi, I'm Reagan! I’m a soon-to-be Computer Science graduate from UIC with a strong foundation in cybersecurity and networking, but I'm also passionate about software engineering and UI design.<br/><br/>
              This site is my portfolio where I can showcase my skills, projects, and professional journey. While I’ve had a focus on cybersecurity and networking, I’m now exploring opportunities in software engineering and UI/UX design.<br/><br/>
              I’m currently seeking a full-time role in cybersecurity, network engineering, software engineering, UI/UX design, or related fields. Let’s connect! Feel free to reach out via LinkedIn or email (both linked to the left).
          </p>
        </div>

        {/* Profile Photo */}
        <img src={profilePhoto} alt="Profile" className="profile-photo" />

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/reacali" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon github-icon" />
          </a>
          <a href="https://linkedin.com/in/reacali" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon linkedin-icon" />
          </a>
          <a href="mailto:caliendoreagan@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email" className="social-icon email-icon" />
          </a>
      </div>

      {/* Shiba Image */}
      <div className="shiba-container">
        <img src={shibaImage} alt="Shiba" className="shiba-image" />
        <div className="speech-bubble">woof!</div>
      </div>

    </div>
    );
}

export default Home;