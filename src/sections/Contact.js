import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Contact.css';
import { Linkedin, EnvelopeFill, Github } from 'react-bootstrap-icons';

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const preventFlip = (event) => {
    event.stopPropagation();
  };

  return (
    <div id="contact" className='contact'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='card' onClick={handleClick}>
          <div className='card-content'>
            <p className='logo-text'>RS</p>
            <div className='card-type' style={{ color: "black", fontSize: "1.75vw" }}>
              <span style={{ color: "rgb(255, 0, 68)", fontWeight: "normal", fontSize: "2.5vw" }}>
                ↺
              </span>
            </div>
          </div>
        </div>

        <div className='card card-back' onClick={handleClick}>
          <div className='card-content'>
            <div className="icon-buttons-container">
              <div className="icon-buttons">
                <a href="https://www.linkedin.com/in/rohanshah2/" rel="noopener noreferrer" target="_blank" className="icon-button" style={{ color: 'white' }} onClick={preventFlip}><Linkedin /></a>
                <a href="mailto:rohanshahsf@gmail.com" rel="noopener noreferrer" target="_blank" className="icon-button" style={{ color: 'white' }} onClick={preventFlip}><EnvelopeFill /></a>
                <a href="https://github.com/rohanshah35" rel="noopener noreferrer" target="_blank" className="icon-button" style={{ color: 'white' }} onClick={preventFlip}><Github /></a>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Contact;
