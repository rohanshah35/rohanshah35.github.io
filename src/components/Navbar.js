import './Navbar.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
  );
}