import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/projects'
import { ProjectCarousel } from '../../components/ProjectCarousel/ProjectCarousel'

export const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-500">
                        Proyectos
                    </p>

                    <h2 className="mb-12 text-3xl font-bold md:text-5xl">
                        Proyectos destacados
                    </h2>

                    <div className="space-y-10">
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                                className="
                                    grid gap-8
                                    rounded-3xl
                                    border border-slate-200
                                    bg-slate-50
                                    p-5
                                    transition-all
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    md:grid-cols-[420px_1fr]
                                    dark:border-slate-800
                                    dark:bg-slate-900/50
                                "
                            >
                                <ProjectCarousel
                                    images={project.images}
                                    title={project.title}
                                />

                                <div className="flex flex-col justify-center">
                                    <h3 className="mb-3 text-2xl font-bold">
                                        {project.title}
                                    </h3>

                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="
                                                    rounded-full
                                                    bg-slate-200
                                                    px-3 py-1
                                                    text-xs
                                                    font-medium
                                                    text-slate-700
                                                    dark:bg-slate-800
                                                    dark:text-slate-300
                                                "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                inline-flex items-center gap-2
                                                rounded-full
                                                border border-slate-300
                                                px-4 py-2
                                                text-sm font-medium
                                                transition-all
                                                hover:border-sky-500
                                                hover:text-sky-500
                                                dark:border-slate-700
                                            "
                                        >
                                            <FaGithub />
                                            Código
                                        </a>

                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                inline-flex items-center gap-2
                                                rounded-full
                                                border border-slate-300
                                                px-4 py-2
                                                text-sm font-medium
                                                transition-all
                                                hover:border-sky-500
                                                hover:text-sky-500
                                                dark:border-slate-700
                                            "
                                        >
                                            <FaExternalLinkAlt />
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}