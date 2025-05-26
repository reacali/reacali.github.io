import React from 'react';
import STL from '../assets/images/stl.png';
import Toronto from '../assets/images/toronto.png';
import Banff from '../assets/images/banff.png';

function About() {
    return (
        <div className="content">
            <section className="about-me">
            <h2>About Me</h2>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;
                I’m a computer science graduate who loves both technical challenges 
                and creative design. In my senior year at UIC, I led SIG Cybersecurity for UIC's 
                chapter of ACM, where I created workshops to enhance members' cybersecurity 
                skills. This experience deepened my passion for tech and has led me to pursue a 
                career that blends coding and creativity.<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;
                Whether I’m building secure systems or crafting user-friendly interfaces, I find 
                joy in bringing my ideas to life through both code and design. All the elements 
                you see on this site, from the icons to the overall layout, were hand-drawn by me, 
                including the custom handwriting font you see throughout, giving the site a unique 
                personal touch. <br/><br/>
            </p>
            </section>

            <section className="outside-tech">
            <h2>Outside Tech...</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;
                When I’m not behind a computer, you can usually find me outdoors, exploring new places. I love traveling, 
                especially to mountainous areas where I can discover new hiking trails. Banff is one of my favorite spots, and 
                I highly recommend everyone visit it at least once! <br /><br />

                &nbsp;&nbsp;&nbsp;&nbsp; 
                Music is another passion of mine, and I jump at any chance 
                to play. I also embrace my creative side through graphic design and art, which is why you’ll see many of the designs 
                on this site created by me. Cooking and baking are other hobbies I enjoy, and I’m always on the lookout for new 
                recipes to try. <br /><br />
                
                &nbsp;&nbsp;&nbsp;&nbsp; 
                I believe finding a balance between work and play is essential for a fulfilling life, and I’m lucky 
                that my hobbies often overlap with my career path, allowing me to keep my creativity flowing.
            </p>
            <div className="images">
                <div className="image-container stl">
                <img src={STL} alt="St. Louis" />
                </div>

                <div className="image-container toronto">
                <img src={Toronto} alt="Toronto" />
                </div>

                <div className="image-container banff">
                <img src={Banff} alt="Banff" />
                </div>
            </div>
            </section>
        </div>
    );
}

export default About;