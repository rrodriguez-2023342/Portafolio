import { motion } from 'framer-motion'

const skills = [
    'React',
    'JavaScript',
    'Node.js',
    'Express',
    'Java',
    'Spring Boot',
    'MySQL',
    'Git',
    'GitHub',
    'Tailwind CSS',
    'PostgreSQL',
    'MongoDB',
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
                        Tecnologías y habilidades
                    </p>

                    <h2 className="mb-10 text-3xl font-bold md:text-5xl">
                        Tecnologías que utilizo
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-medium text-slate-700 hover:border-sky-500 hover:text-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}