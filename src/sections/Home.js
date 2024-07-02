/*
 * Have to fix down button to far down on phone screen
 * Have to fix icons too small on phone screen
 * Have to fix typing text to small on phone screen
 */

import React from 'react';
import './Home.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { ChevronDown, Linkedin, EnvelopeFill, Github } from 'react-bootstrap-icons';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Rohan Shah.', 'a developer.', 'currently a student.'],
    typeSpeed: 120,
    deleteSpeed: 120,
    loop: {}
  });

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="home">
      <div style={{ color: "black", fontSize: "4.5vw" }}>
        I'm&nbsp;
        <span style={{ color: "red", fontWeight: "normal" }}>
          {text}
        </span>
        <Cursor cursorStyle='<' />
      </div>

      <div className="icon-buttons-container">
        <div className="icon-buttons">
          <a href="https://www.linkedin.com/in/rohanshah2/" rel="noopener noreferrer" target="_blank" className="icon-button" style={{ color: 'black' }}><Linkedin /></a>
          <a href="mailto:rohanshahsf@gmail.com" rel="noopener noreferrer" target="_blank" className="icon-button" style={{ color: 'black' }}><EnvelopeFill /></a>
          <a href="https://github.com/rohanshah35" rel="noopener noreferrer" target="_blank" className="icon-button" style={{ color: 'black' }}><Github /></a>
        </div>
      </div>
      
      <div className="down-about-container">
        <button className="down-about" onClick={scrollToAbout}>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Home;
