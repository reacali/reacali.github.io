import React from 'react';
import portfolioPostcard from '../assets/images/portfolio_postcard.png';
import fridgePostcard from '../assets/images/fridge_postcard.png';
import sigcyberPostcard from '../assets/images/sigcyber_postcard.png';
import cryptoPostcard from '../assets/images/crypto_postcard.png';
import '../styles/Portfolio.css'; // Import your CSS file for styling

function Portfolio() {
    return (
        <div className="postcards">
            <div className="postcard">
                <img src={portfolioPostcard} alt="Portfolio Postcard" className="portfolio-postcard-image" />
                <p className="postcard-text">Portfolio Project</p>
            </div>
            <div className="postcard">
                <img src={fridgePostcard} alt="Fridge Postcard" className="portfolio-postcard-image" />
                <p className="postcard-text">Fridge Management App</p>
            </div>
            <div className="postcard">
                <img src={sigcyberPostcard} alt="SigCyber Postcard" className="portfolio-postcard-image" />
                <p className="postcard-text">ACM SIG Cyber</p>
            </div>
            <div className="postcard">
                <img src={cryptoPostcard} alt="Crypto Postcard" className="portfolio-postcard-image" />
                <p className="postcard-text">Cryptocurrency Sentiment Analysis</p>
            </div>
        </div>
    );
}

export default Portfolio;