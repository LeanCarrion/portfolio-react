import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Abouth from "./components/About"
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";
import "./App.css";


function App() {

    return (

        <>

            <Navbar />

            <Hero />
            
            <Abouth/>
            <section className="projects">

                <h2>Proyectos</h2>

                <div className="projects-container">
                    {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                    />
                    ))}
                </div>
            </section>

        </>

    )

}

export default App;