import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <h2 className="navbar-logo">Leandro</h2>

      <ul className="navbar-menu">
        <li>
          <a href="#hero" className="navbar-link">Inicio</a>
        </li>
        <li>
          <a href="#projects" className="navbar-link">Proyectos</a>
        </li>
        <li>
          <a href="#about" className="navbar-link">Sobre mí</a>
        </li>
        <li>
          <a href="#contact" className="navbar-link">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
