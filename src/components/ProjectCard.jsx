import "./ProjectCard.css";

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
}) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <strong>Tecnologías:</strong> {technologies}
      </p>

      <div>
        <button onClick={() => window.open(github, "_blank")}>
          GitHub
        </button>

        <button onClick={() => window.open(demo, "_blank")}>
          Demo
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;