import './Navbar.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <ul>
        <li onClick={() => scrollToSection('home')}>
          <span>HOME</span>
        </li>
        <li onClick={() => scrollToSection('about')}>
          <span>ABOUT</span>
        </li>
        <li onClick={() => scrollToSection('projects')}>
          <span>PROJECTS</span>
        </li>
        <li onClick={() => scrollToSection('contact')}>
          <span>CONTACT</span>
        </li>
      </ul>
    </nav>
  );
}