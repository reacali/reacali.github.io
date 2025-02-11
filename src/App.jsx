import React from 'react';
import nameImage from './assets/images/name.svg';
import profilePhoto from './assets/images/me.jpg';
import emailIcon from './assets/images/email.png';
import linkedinIcon from './assets/images/linkedin.png';
import githubIcon from './assets/images/github.png';
import shibaImage from './assets/images/shiba.png';

function App() {


  return (
      <div className = "app-container">
        <nav className="menu-bar">
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
        <img src={nameImage} alt="Name" className="name-image" />
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
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
      <div className="shiba-container">
        <img src={shibaImage} alt="Shiba" className="shiba-image" />
        <div className="speech-bubble">woof!</div>
      </div>
    </div>
  );
}
 
export default App
