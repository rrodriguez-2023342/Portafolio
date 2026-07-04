import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/projects'
import { ProjectCarousel } from '../../components/ProjectCarousel/ProjectCarousel'

export const Projects = () => {
    return (
        <section id="projects" className="py-16 sm:py-24 md:py-32">
            <div className="section-shell">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-eyebrow">Proyectos</span>
                    <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end">
                        <h2 className="section-title">
                            Ideas convertidas en
                            <span className="text-gradient"> productos reales.</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                                className="
                                    glass-panel
                                    relative grid gap-6 overflow-hidden
                                    rounded-2xl
                                    p-4 sm:gap-8 sm:rounded-3xl sm:p-7
                                    transition-shadow hover:shadow-2xl hover:shadow-sky-500/10
                                    lg:grid-cols-[minmax(300px,440px)_1fr]
                                "
                            >
                                <div className="relative z-10">
                                    <ProjectCarousel
                                        images={project.images}
                                        title={project.title}
                                    />
                                </div>

                                <div className="relative z-10 flex flex-col justify-center">
                                    <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                                        <span className="text-sm font-black tracking-widest text-sky-500">
                                            0{index + 1}
                                        </span>
                                        <span className="h-px w-10 bg-sky-500/40" />
                                        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                            Proyecto destacado
                                        </span>
                                    </div>

                                    <h3 className="mb-3 text-xl font-bold tracking-tight sm:text-3xl">
                                        {project.title}
                                    </h3>

                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-slate-200 bg-white/55 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="mb-7 leading-relaxed text-slate-600 dark:text-slate-400">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-col gap-3 min-[380px]:flex-row min-[380px]:flex-wrap">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                inline-flex w-full items-center justify-center gap-2 min-[380px]:w-auto
                                                rounded-full
                                                border border-slate-300
                                                px-4 py-2
                                                text-sm font-medium
                                                transition-all hover:-translate-y-0.5
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
                                                inline-flex w-full items-center justify-center gap-2 min-[380px]:w-auto
                                                rounded-full
                                                border border-slate-300
                                                px-4 py-2
                                                text-sm font-medium
                                                transition-all hover:-translate-y-0.5
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
                                <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-sky-500/5 blur-2xl" />
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
