import { motion } from 'framer-motion'
import {
    FaReact,
    FaNodeJs,
    FaJava,
    FaGitAlt,
    FaGithub,
} from 'react-icons/fa'
import {
    SiJavascript,
    SiTailwindcss,
    SiExpress,
    SiSpringboot,
    SiPostgresql,
    SiMongodb,
    SiMysql,
} from 'react-icons/si'

const skillGroups = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', icon: <FaReact /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'Spring Boot', icon: <SiSpringboot /> },
            { name: 'Java', icon: <FaJava /> },
        ],
    },
    {
        title: 'Bases de datos',
        skills: [
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'MySQL', icon: <SiMysql /> },
        ],
    },
    {
        title: 'Herramientas',
        skills: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'GitHub', icon: <FaGithub /> },
        ],
    },
]

export const Skills = () => {
    return (
        <section id="skills" className="py-24">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-500">
                        Tecnologías y herramientas
                    </p>

                    <h2 className="mb-10 text-3xl font-bold md:text-5xl">
                        Tecnologías que utilizo
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {skillGroups.map((group) => (
                            <article
                                key={group.title}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
                            >
                                <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
                                    {group.title}
                                </h3>

                                <div className="space-y-4">
                                    {group.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
                                        >
                                            <span className="text-xl text-sky-500">
                                                {skill.icon}
                                            </span>

                                            <span className="font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
