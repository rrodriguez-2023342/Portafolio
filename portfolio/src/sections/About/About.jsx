import { motion } from 'framer-motion'

export const About = () => {
    return (
        <section id="about" className="py-24">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-500">
                        Sobre mí
                    </p>

                    <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                        Desarrollador en formación con enfoque en soluciones reales
                    </h2>

                    <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                        Soy Roberto Rodríguez, estudiante de Perito en Informática. Me gusta
                        desarrollar aplicaciones web funcionales, limpias y bien organizadas,
                        combinando frontend, backend y bases de datos.
                    </p>

                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                        Actualmente trabajo con tecnologías como React, JavaScript, Node.js,
                        Spring Boot, Java y MySQL, creando proyectos académicos y personales
                        orientados a resolver problemas reales.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
