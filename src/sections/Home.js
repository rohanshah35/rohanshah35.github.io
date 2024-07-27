/*
 * Have to fix down button to far down on phone screen
 * Have to fix icons too small on phone screen
 * Have to fix typing text to small on phone screen
 */

import React from 'react';
import './Home.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'react-bootstrap-icons';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Rohan Shah', 'from the Bay Area, CA', 'a CS student'],
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
        <span style={{ color: "rgb(255, 0, 68)", fontWeight: "normal" }}>
          {text}
        </span>
        <Cursor cursorStyle='<' />
        <a href='https://drive.google.com/file/d/1MG4wwdgJlegGgA7uvzyHl8VQM3RJgSXR/view?usp=sharing' target="_blank" rel="noopener noreferrer">
          <div className="container">
            <button className="resume">RESUMÉ ↗</button>
          </div>
        </a>
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
