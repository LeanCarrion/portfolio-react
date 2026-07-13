function Hero() {
    return (
        <section style={styles.hero}>

            <h1 style={styles.title}>
                Hola, soy Leandro
            </h1>

            <p style={styles.subtitle}>
                Estudiante de Ingeniería en Sistemas
                apasionado por el desarrollo de software
                y el análisis de datos.
            </p>

            <button style={styles.button}>
                Ver proyectos
            </button>

        </section>
    )
}

const styles = {

    hero: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        textAlign: "center",
        padding: "20px"
    },

    title: {
        fontSize: "3rem"
    },

    subtitle: {
        maxWidth: "700px",
        marginTop: "20px",
        fontSize: "1.2rem",
        lineHeight: "1.6"
    },

    button: {
        marginTop: "30px",
        padding: "12px 24px",
        fontSize: "1rem",
        cursor: "pointer"
    }

}

export default Hero