import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  // Estado para saber si el menú móvil está abierto
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <h2 className="navbar-logo">Leandro</h2>

      {/* Botón Hamburguesa: Solo se verá en pantallas chicas */}
      <button className={`navbar-burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Si isOpen es true, añadimos la clase 'active' para mostrar el menú */}
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#hero" className="navbar-link" onClick={toggleMenu}>Inicio</a>
        </li>
        <li>
          <a href="#projects" className="navbar-link" onClick={toggleMenu}>Proyectos</a>
        </li>
        <li>
          <a href="#about" className="navbar-link" onClick={toggleMenu}>Sobre mí</a>
        </li>
        <li>
          <a href="#contact" className="navbar-link" onClick={toggleMenu}>Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;