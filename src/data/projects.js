import portfolioImg from "../assets/projects/portfolio.png";
import webStoreImg from "../assets/projects/tiendaMascota.png";
import algoritmosImg from "../assets/projects/algoritmosgeneticos.png";
import KnapsackImg from "../assets/projects/KnapsackProblem.png";
import TSPImg from "../assets/projects/TSP.png";

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
    github: "https://github.com/LeanCarrion/TPI_AlgGeneticos_Optimizaci-n-de-Carteras-Financieras",
    demo: "",
    image: algoritmosImg,
  },
  {
    title: "El Problema de la Mochila (Knapsack Problem)",
    description: "Este proyecto implementa y compara dos enfoques algorítmicos clásicos para resolver el Problema de la Mochila ",
    technologies: "Python (Librerías nativas os e itertools) & Git / GitHub.",
    github: "https://github.com/LeanCarrion/tp2-problema-mochila",
    demo: "",
    image: KnapsackImg,
  },
  {
    title: "El Problema del Viajante (TSP)",
    description: "Este proyecto implementa diferentes soluciones para el Problema del Viajante de Comercio (TSP) aplicado a las capitales de las provincias de la República Argentina. Se evalúan enfoques exhaustivos, heurísticos (Vecino Más Cercano) y metaheurísticos (Algoritmos Genéticos).",
    technologies: "Python & Git / GitHub.",
    github: "https://github.com/LeanCarrion/TrabajoPractico3-ProblemaDelViajante",
    demo: "",
    image: TSPImg,
  },
];

export default projects;