import portfolioImg from "../assets/projects/portfolio.png";
import webStoreImg from "../assets/projects/tiendaMascota.png";
import algoritmosImg from "../assets/projects/algoritmosgeneticos.png";
import KnapsackImg from "../assets/projects/KnapsackProblem.png";
import TSPImg from "../assets/projects/TSP.png";

const projects = [
  {
    title: "Algoritmos Genéticos",
    description: "Algoritmo genético programado en Python que automatiza el cálculo de carteras financieras eficientes mediante el Modelo de Markowitz. Procesa datos históricos de mercado extraídos vía API para resolver la distribución óptima de capital bajo restricciones matemáticas estrictas. Papper presentado en CoNaIISI 2026",
    technologies: "Python - Pandas",
    github: "https://github.com/LeanCarrion/TPI_AlgGeneticos_Optimizaci-n-de-Carteras-Financieras",
    demo: "",
    image: algoritmosImg,
  },
  {
    title: "Resolución y Optimización del Knapsack Problem",
    description: "Implementación en Python de métodos clásicos de búsqueda para resolver la asignación óptima de elementos bajo restricciones de peso y volumen. Evalúa el grado de optimización comparando la precisión de una búsqueda exhaustiva frente a la velocidad de un algoritmo goloso (Greedy).",
    technologies: "Python • Librerías Nativas (os) • Git • GitHub",
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
  {
    title: "Portfolio Profesional y Plataforma de Proyectos",
    description: "Aplicación web responsive desarrollada desde cero para centralizar y exhibir mis soluciones técnicas. Configurada con un flujo de integración continua que automatiza las actualizaciones en la nube",
    technologies: "React • Vite • CSS3 • Git & GitHub • Vercel.",
    github: "https://github.com/LeanCarrion/portfolio-react",
    demo: "https://portfolio-react-two-ivory-25.vercel.app/",
    image: portfolioImg,
  },
  {
    title: "Plataforma Web Integral (Full Stack)",
    description: "Proyecto académico que integra el desarrollo frontend y backend para la gestión de productos y stock. Destaca por estructurar una arquitectura limpia para el flujo de información, desde el cliente hasta la base de datos relacional.",
    technologies: "React • Node.js • MySQL.",
    github: "https://github.com/MRP2004/Petshop-",
    demo: "",
    image: webStoreImg,
  },
];

export default projects;