import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profileImage from '../../assets/images/developer.png'
import { TypeAnimation } from 'react-type-animation'

export const Hero = () => {
    return (
        <section className="flex min-h-[calc(100vh-4rem)] items-center pt-10">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
                
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="mb-4 text-5xl font-bold md:text-7xl">
                        Roberto Rodríguez
                    </h1>

                    <h2 className="mb-6 text-2xl font-semibold text-slate-500 dark:text-slate-400 md:text-4xl">
                        <TypeAnimation
                            sequence={[
                                'Desarrollador Frontend',
                                1500,
                                'Desarrollador Backend',
                                1500,
                                'Desarrollador Full Stack',
                                1500,
                                'Desarrollador React',
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            deletionSpeed={65}
                            repeat={Infinity}
                            className="text-sky-500"
                        />
                    </h2>

                    <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                        Construyo aplicaciones web modernas utilizando React, Node.js,
                        TailwindCSS, Spring Boot, MySQL y más.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="cursor-pointer rounded-full bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600"
                        >
                            Ver proyectos
                        </Link>

                        <a
                            href="#contact"
                            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 
                                        hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:text-slate-300"
                        >
                            Contactarme
                        </a>
                    </div>

                    <div className="mt-8 flex gap-5">
                        <a
                            href="https://github.com/rrodriguez-2023342"
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl text-slate-500 hover:text-sky-500 dark:text-slate-400"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/roberto-rodriguez-422724324"
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl text-slate-500 hover:text-sky-500 dark:text-slate-400"
                        >
                            <FaLinkedin />
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {['React', 'Node.js', 'Tailwind CSS', 'Spring Boot', 'MySQL'].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 
                                            dark:border-slate-700 dark:text-slate-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-3xl bg-sky-500/20 blur-2xl" />

                        <img
                            src={profileImage}
                            alt="Roberto Rodríguez"
                            className="relative h-[360px] w-[280px] rounded-3xl border border-sky-500/20 object-cover object-top 
                                        shadow-2xl sm:h-[420px] sm:w-[320px]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}