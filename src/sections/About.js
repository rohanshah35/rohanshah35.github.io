import React from 'react';
import './About.css';
import profileImage from './face.jpg';

const About = () => {


  return (
    <div id="about" className="about">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <span className="about-text">
      Hello! I'm a sophomore at Purdue University, majoring in Computer Science and set to graduate in 2026. 
      From the great Bay Area, I've grown up surrounded by the innovation hub that is Silicon Valley. 
      My passion for technology was sparked early by my Dad, whose extensive background in computer science inspired me to build my first PC at the age of 11—an experience that catalyzed my curiosity and drive. 
      Since then, I've dedicated myself to continually refining and expanding my skills, eagerly applying them to projects whenever possible. 
      When I’m not coding, you can see me at the gym, outside enjoying nature, or playing my guitar!
      </span>

    </div>
    
  );
};

export default About;