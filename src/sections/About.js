import React from 'react';
import './About.css';
import profileImage from './face.jpg';
import { ChevronDown } from 'react-bootstrap-icons';

const About = () => {

  const scrollToAbout = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="about" className="about">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <span className="about-text">
      Hello! I'm a sophomore at Purdue University, majoring in Computer Science and set to graduate in 2026. 
      From the great Bay Area, I've grown up surrounded by the innovation hub that is Silicon Valley. 
      My passion for technology was sparked early by my father, whose extensive background in computer science inspired me to build my first PC at the age of 11—an experience that catalyzed my curiosity and drive. 
      Since then, I've dedicated myself to continually refining and expanding my skills, eagerly applying them to projects whenever possible. 
      When I’m not coding, you can see me at the gym, outside enjoying nature, or playing my guitar.
      I invite you to explore my portfolio and discover more about my journey in computer science!
      </span>

      <div className="down-projects-container">
        <button className="down-projects" onClick={scrollToAbout}>
          <ChevronDown />
        </button>
      </div>
    </div>
    
  );
};

export default About;