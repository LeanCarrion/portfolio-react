import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h2>Contacto</h2>

      <p>
        Si te interesa mi perfil o querés ponerte en contacto conmigo,
        podés encontrarme en:
      </p>

      <div className="contact-links">

        <a
          href="https://www.linkedin.com/in/TU-LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>

        <a href="mailto:tu-email@frro.utn.edu.ar">
          📧 Email
        </a>

      </div>

    </section>
  );
}

export default Contact;