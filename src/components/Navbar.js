import './Navbar.css';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <ul>
          <li onClick={() => scrollToSection('home')}>
            <span>Home</span>
          </li>
          <li onClick={() => scrollToSection('about')}>
            <span>About</span>
          </li>
          <li onClick={() => scrollToSection('projects')}>
            <span>Projects</span>
          </li>
          <li onClick={() => scrollToSection('contact')}>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
      <nav className="phone-nav">
        <div className="menu-button">
          <Hamburger
            size={26}
            toggled={open}
            toggle={setOpen}
          />
        </div>
        <div className={`hamburger-menu ${open ? 'show' : ''}`}>
          <ul>
            <li onClick={() => {
              scrollToSection('home');
              setOpen(false);
            }}>
              <span>Home</span>
            </li>
            <li onClick={() => {
              scrollToSection('about');
              setOpen(false);
            }}>
              <span>About</span>
            </li>
            <li onClick={() => {
              scrollToSection('projects');
              setOpen(false);
            }}>
              <span>Projects</span>
            </li>
            <li onClick={() => {
              scrollToSection('contact');
              setOpen(false);
            }}>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
