function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Leandro</h2>

      <ul style={styles.links}>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Sobre mí</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    cursor: "pointer",
  },
};

export default Navbar;