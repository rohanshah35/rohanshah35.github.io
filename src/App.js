import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <div className={`content ${isModalOpen ? 'blur-background' : ''}`}>
        <Navbar />
        <div className="snap-scroll-container">
          <div className="snap-scroll-item">
            <Home />
          </div>
          <div className="snap-scroll-item">
            <About />
          </div>
          <div className="snap-scroll-item">
            <Projects setIsModalOpen={setIsModalOpen} />
          </div>
          <div className="snap-scroll-item">
            <Contact />
          </div>
        </div>
      </div>
    </div>        
  );
}

export default App;