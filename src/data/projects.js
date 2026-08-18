import portfolioImg from "../assets/projects/portfolio.png";
import webStoreImg from "../assets/projects/tiendaMascota.png";
import algoritmosImg from "../assets/projects/algoritmosgeneticos.png";

const projects = [
  {
    title: "Portfolio",
    description: "Portfolio personal desarrollado con React.",
    technologies: "React - Vite - CSS",
    github: "https://github.com/LeanCarrion/portfolio-react",
    demo: "https://portfolio-react-two-ivory-25.vercel.app/",
    image: portfolioImg,
  },
  {
    title: "Web Store",
    description: "Tienda online de alimento para perros.",
    technologies: "React - Node - MySQL",
    github: "https://github.com/MRP2004/Petshop-",
    demo: "",
    image: webStoreImg,
  },
  {
    title: "Algoritmos Genéticos",
    description: "Paper sobre optimización de carteras mediante algoritmos genéticos.",
    technologies: "Python - Pandas",
    github: "https://github.com/",
    demo: "",
    image: algoritmosImg,
  },
];

export default projects;