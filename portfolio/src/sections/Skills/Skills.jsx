import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
    FaGitAlt,
    FaGithub,
    FaJava,
    FaNodeJs,
    FaReact,
} from 'react-icons/fa'
import {
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiSpringboot,
    SiTailwindcss,
} from 'react-icons/si'

const technologies = [
    { name: 'React', icon: <FaReact />, color: 'text-cyan-400', description: 'Lo uso para construir interfaces por componentes, manejar estados y crear experiencias dinámicas.' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400', description: 'Es la base de la lógica interactiva que conecta el comportamiento del frontend y el backend.' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400', description: 'Me permite diseñar interfaces responsivas con rapidez y mantener estilos consistentes.' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', description: 'Lo utilizo para desarrollar servicios, APIs y lógica de servidor con JavaScript.' },
    { name: 'Express', icon: <SiExpress />, color: 'text-slate-600 dark:text-slate-200', description: 'Lo uso para crear APIs REST, rutas, middlewares y gestionar peticiones del servidor.' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500', description: 'Lo utilizo para construir backends robustos y APIs organizadas dentro del ecosistema Java.' },
    { name: 'Java', icon: <FaJava />, color: 'text-orange-500', description: 'Lo uso para lógica orientada a objetos, servicios backend y aplicaciones estructuradas.' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-500', description: 'Lo utilizo para modelar y consultar datos relacionales con integridad y buen rendimiento.' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500', description: 'Lo uso cuando el proyecto necesita documentos flexibles y una estructura de datos adaptable.' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-sky-500', description: 'Lo utilizo para almacenar y relacionar datos en aplicaciones académicas y personales.' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500', description: 'Lo uso para controlar versiones, trabajar por ramas y mantener un historial claro de cambios.' },
    { name: 'GitHub', icon: <FaGithub />, color: 'text-slate-700 dark:text-white', description: 'Centralizo repositorios, colaboro con otros desarrolladores y documento mis proyectos.' },
]

const MarqueeGroup = ({ items, hidden = false, onTechnologyChange }) => (
    <div className="tech-marquee-group" aria-hidden={hidden}>
        {[...items, ...items].map((technology, index) => (
            <div
                key={`${hidden ? 'copy-' : ''}${technology.name}-${index}`}
                tabIndex={hidden ? -1 : 0}
                onMouseEnter={() => onTechnologyChange(technology)}
                onMouseLeave={() => onTechnologyChange(null)}
                onFocus={() => onTechnologyChange(technology)}
                onBlur={() => onTechnologyChange(null)}
                onClick={() => onTechnologyChange(technology)}
                className="flex shrink-0 cursor-help items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-md hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 dark:border-slate-800 dark:bg-slate-900/75 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-3.5"
            >
                <span className={`text-2xl ${technology.color}`}>{technology.icon}</span>
                <span className="whitespace-nowrap text-sm font-bold">{technology.name}</span>
            </div>
        ))}
    </div>
)

export const Skills = () => {
    const [activeTechnology, setActiveTechnology] = useState(null)
    const firstRow = technologies.slice(0, 6)
    const secondRow = technologies.slice(6)

    return (
        <section id="skills" className="overflow-hidden py-16 sm:py-24 md:py-32">
            <div className="section-shell">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55 }}
                    className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 lg:flex-row lg:items-end"
                >
                    <div>
                        <span className="section-eyebrow">Tecnologías</span>
                        <h2 className="section-title">
                            Tecnologías
                            <span className="text-gradient"> que dominó.</span>
                        </h2>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="section-shell relative space-y-4"
            >
                <div className="tech-marquee">
                    <div className="tech-marquee-track">
                        <MarqueeGroup items={firstRow} onTechnologyChange={setActiveTechnology} />
                        <MarqueeGroup items={firstRow} hidden onTechnologyChange={setActiveTechnology} />
                    </div>
                </div>
                <div className="tech-marquee">
                    <div className="tech-marquee-track tech-marquee-track-reverse">
                        <MarqueeGroup items={secondRow} onTechnologyChange={setActiveTechnology} />
                        <MarqueeGroup items={secondRow} hidden onTechnologyChange={setActiveTechnology} />
                    </div>
                </div>

                <div className="mt-5 flex min-h-36 items-center justify-center sm:min-h-24">
                    <AnimatePresence mode="wait">
                        {activeTechnology ? (
                            <motion.div
                                key={activeTechnology.name}
                                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -5, scale: 0.98 }}
                                transition={{ duration: 0.18 }}
                                className="glass-panel flex w-full max-w-2xl flex-col items-center gap-3 rounded-2xl px-4 py-4 text-center sm:flex-row sm:gap-4 sm:px-5 sm:text-left"
                            >
                                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-800 ${activeTechnology.color}`}>
                                    {activeTechnology.icon}
                                </span>
                                <div>
                                    <p className="font-bold">{activeTechnology.name}</p>
                                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                        {activeTechnology.description}
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.p
                                key="hint"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-sm text-slate-400"
                            >
                                <span className="sm:hidden">Toca una tecnología para conocer cómo la utilizo.</span>
                                <span className="hidden sm:inline">Pasa el cursor sobre una tecnología para conocer cómo la utilizo.</span>
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    )
}
