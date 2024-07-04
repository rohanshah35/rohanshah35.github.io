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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperd 
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