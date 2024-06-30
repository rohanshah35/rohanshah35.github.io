import './Navbar.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <ul>
        <li onClick={() => scrollToSection('home')}>
          <h1>HOME</h1>
        </li>
        <li onClick={() => scrollToSection('about')}>
          <h1>ABOUT</h1>
        </li>
        <li onClick={() => scrollToSection('projects')}>
          <h1>PROJECTS</h1>
        </li>
        <li onClick={() => scrollToSection('contact')}>
          <h1>CONTACT</h1>
        </li>
      </ul>
    </nav>
  );
}
