import React from 'react';
import portfolioPostcard from '../assets/images/portfolio_postcard.png';
import fridgePostcard from '../assets/images/fridge_postcard.png';
import sigcyberPostcard from '../assets/images/sigcyber_postcard.png';
import cryptoPostcard from '../assets/images/crypto_postcard.png';
import githubIcon from '../assets/images/github.png';
import linkIcon from '../assets/images/link.png';
import '../styles/Portfolio.css';

function Portfolio() {
    return (
        <div className="postcards">
            <div className="postcard">
                <div className="postcard-content">
                    <img src={portfolioPostcard} alt="Portfolio Postcard" className="portfolio-postcard-image" />
                    <div className="postcard-text-container">
                        <p className="postcard-text">
                            <h3>Portfolio Website</h3>
                            <br/>
                            This website! I designed and built this portfolio to showcase my skills and projects. 
                            Every element is hand drawn and designed by me to reflect my personal style and creativity.
                            I've used this site to demonstrate my abilities in web design and development, and also as a passion project!
                        </p>
                        <div className="link-icons">
                            <a href="https://github.com/reacali/reacali.github.io" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub" className="github-link" />
                            </a>
                            <a href="https://reacali.github.io" target="_blank" rel="noopener noreferrer">
                                <img src={linkIcon} alt="Link" className="link-link" />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="postcard">
                <div className="postcard-content">
                    <img src={fridgePostcard} alt="Fridge Postcard" className="portfolio-postcard-image" />
                    <div className="postcard-text-container">
                        <p className="postcard-text">
                            <h3>Fridge Management App</h3>
                            <br/>
                            A web application designed to help users find meals based on what they have in their fridge.
                            First, my team did a user researchy study, paper prototyping, and user testing to determiner the best features 
                            and then implemented in Figma, then in an HTML and CSS prototype.
                        </p>
                        <div className="link-icons">
                            <a href="https://github.com/reacali/fridge" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub" className="github-link" />
                            </a>
                            <a href="https://reacali.github.io/fridge" target="_blank" rel="noopener noreferrer">
                                <img src={linkIcon} alt="Link" className="link-link" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="postcard">
                <div className="postcard-content">
                    <img src={sigcyberPostcard} alt="SigCyber Postcard" className="portfolio-postcard-image" />
                    <div className="postcard-text-container">
                        <p className="postcard-text">
                            <h3>ACM SIG Cyber</h3>
                            <br/>
                            As the lead for the ACM SIG Cybersecurity chapter at UIC, I created workshops and events to teach cybersecurity skills.
                            I also designed promotional  showcasing my design skills.
                            This allowed me to combine my passion for cybersecurity with my love for design!
                        </p>
                        <div className="link-icons">
                            <a href="https://github.com/reacali/SIG-Cybersecurity-Presentations" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub" className="github-link" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="postcard">
                <div className="postcard-content">
                    <img src={cryptoPostcard} alt="Crypto Postcard" className="portfolio-postcard-image" />
                    <div className="postcard-text-container">
                        <p className="postcard-text">
                            <h3>Crypto Sentiment Analysis</h3>
                            <br/>
                            A project where I used Python to analyze social media sentiment towards cryptocurrencies.
                            I collected data from Reddit and Coinbase, performed sentiment analysis using natural language processing, and visualized the results comparing sentiment to crypto value.
                        </p>
                        <div className="link-icons">
                            <a href="https://github.com/reacali/crypto-sentiment-analysis" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub" className="github-link" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
