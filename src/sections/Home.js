import React from 'react';
import './Home.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'react-bootstrap-icons';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Rohan Shah.', 'a developer.'],
    typeSpeed: 120,
    deleteSpeed: 120,
    loop: {}
  })

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
        <Cursor cursorStyle='_' />
      </div>
      <button className="scroll-button" onClick={scrollToAbout}>
        <ChevronDown size={32} color="black" />
      </button>
    </div>
  );
};

export default Home;
