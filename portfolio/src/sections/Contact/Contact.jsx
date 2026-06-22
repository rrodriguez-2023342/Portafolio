import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-500">
                        Contacto
                    </p>

                    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                        ¿Trabajamos juntos?
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                        Actualmente estoy abierto a nuevas oportunidades,
                        proyectos y colaboraciones relacionadas con el
                        desarrollo de software.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:tucorreo@gmail.com"
                            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-medium 
                                    text-white hover:bg-sky-600"
                        >
                            <FaEnvelope />
                            Enviar correo
                        </a>

                        <a
                            href="https://github.com/rrodriguez-2023342"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 
                                    hover:border-sky-500 hover:text-sky-500 dark:border-slate-700"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/roberto-rodriguez-422724324"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 
                                    hover:border-sky-500 hover:text-sky-500 dark:border-slate-700"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}