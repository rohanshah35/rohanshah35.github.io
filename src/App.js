import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div id="home" className="section">
          <h2>Home Section</h2>
          <p>Content for the home section.</p>
        </div>
        <div id="about" className="section">
          <h2>About Section</h2>
          <p>Content for the about section.</p>
        </div>
        <div id="projects" className="section">
          <h2>Project Section</h2>
          <p>Content for the project section.</p>
        </div>
        <div id="contact" className="section">
          <h2>Contact Section</h2>
          <p>Content for the contact section.</p>
        </div>
    </div>
  );
}

export default App;