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
                    <h2 className="mb-12 flex items-center gap-3 text-3xl font-bold md:text-4xl">
                        Proyectos
                    </h2>

                    <div className="space-y-16">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="grid gap-8 md:grid-cols-[420px_1fr]"
                            >

                                <ProjectCarousel images={project.images} title={project.title} /> 

                                <div>
                                    <h3 className="mb-3 text-2xl font-bold">
                                        {project.title}
                                    </h3>

                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <p className="mb-5 leading-relaxed text-slate-600 dark:text-slate-400">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium hover:border-sky-500 hover:text-sky-500 dark:border-slate-700"
                                        >
                                            <FaGithub />
                                            Code
                                        </a>
                                        
                                        <a
                                            href={project.demo}
                                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium hover:border-sky-500 hover:text-sky-500 dark:border-slate-700"
                                        >
                                            <FaExternalLinkAlt />
                                            Preview
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}