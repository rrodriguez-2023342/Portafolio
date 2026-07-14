import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import {
    FaArrowDown,
    FaArrowRight,
    FaCode,
    FaDatabase,
    FaDownload,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import profileImage from '../../assets/images/developer-temp.png'

const technologies = ['React', 'Node.js', 'Tailwind CSS', 'Spring Boot', 'MySQL']

export const Hero = () => {
    return (
        <section id="home" className="relative flex min-h-[calc(100svh-7rem)] items-center overflow-hidden py-12 sm:py-16 md:min-h-[calc(100svh-5rem)] lg:py-20">
            <div className="section-shell grid w-full items-center gap-12 sm:gap-16 lg:grid-cols-[1.08fr_0.92fr]">
                <motion.div
                    initial={{ opacity: 0, x: -35 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    className="relative z-10"
                >
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                        Hola, soy
                    </p>

                    <h1 className="text-[clamp(2.75rem,15vw,4.5rem)] font-black leading-[0.98] tracking-[-0.055em]">
                        Roberto
                        <span className="text-gradient block">Rodríguez</span>
                    </h1>

                    <h2 className="mt-6 min-h-14 text-xl font-semibold leading-tight text-slate-600 dark:text-slate-300 sm:min-h-10 sm:text-2xl md:text-3xl">
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
                        />
                        <span className="text-sky-500">_</span>
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                        Convierto ideas en aplicaciones web modernas, funcionales y
                        preparadas para crecer, conectando frontend, backend y datos.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="skeuo-button group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold min-[420px]:w-auto"
                        >
                            Ver proyectos
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>

                        <a
                            href="/cv/Curr%C3%ADculum%20Vitae%20Roberto%20Rodr%C3%ADguez.pdf"
                            download="CV Roberto Rodríguez.pdf"
                            className="skeuo-chip group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-slate-700 hover:text-amber-800 dark:text-slate-200 dark:hover:text-amber-300 min-[420px]:w-auto"
                        >
                            Descargar CV
                            <FaDownload className="transition-transform group-hover:translate-y-0.5" />
                        </a>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="skeuo-chip w-full cursor-pointer rounded-xl px-6 py-3 text-center font-semibold text-slate-700 hover:text-amber-800 dark:text-slate-200 dark:hover:text-amber-300 min-[420px]:w-auto"
                        >
                            Hablemos
                        </Link>
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                        <span className="mr-1 text-sm text-slate-500 dark:text-slate-400">
                            Encuéntrame
                        </span>
                        <a
                            href="https://github.com/rrodriguez-2023342"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-button h-11 w-11 text-xl text-slate-600 dark:text-slate-300"
                            aria-label="Perfil de GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/roberto-rodriguez-422724324"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-button h-11 w-11 text-xl text-slate-600 dark:text-slate-300"
                            aria-label="Perfil de LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="skeuo-chip rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:ml-auto"
                >
                    <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-500/20 blur-3xl" />
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative"
                    >
                        <div className="absolute -inset-3 rounded-[2.2rem] border border-white/60 shadow-[0_3px_8px_rgba(39,53,63,.3)] dark:border-white/10" />
                        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
                            <img
                                src={profileImage}
                                alt="Roberto Rodríguez"
                                className="h-[min(110vw,420px)] w-full rounded-[1.45rem] object-cover object-top sm:h-[480px]"
                            />
                            <div className="absolute inset-x-3 bottom-3 rounded-b-[1.45rem] bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-4 pt-16 text-white sm:p-6 sm:pt-20">
                                <p className="font-bold">Full Stack Developer</p>
                                <p className="text-sm text-slate-300">Guatemala</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="glass-panel absolute -left-4 top-16 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-xl md:flex lg:-left-8"
                    >
                        <span className="rounded-xl bg-sky-500/10 p-2 text-sky-500"><FaCode /></span>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Enfoque</p>
                            <p className="text-sm font-bold">Código limpio</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                        className="glass-panel absolute -right-4 bottom-20 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-xl md:flex lg:-right-6"
                    >
                        <span className="rounded-xl bg-indigo-500/10 p-2 text-indigo-500"><FaDatabase /></span>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Stack</p>
                            <p className="text-sm font-bold">Frontend + Backend</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 lg:flex"
            >
                Explorar
                <FaArrowDown className="animate-bounce text-sky-500" />
            </Link>
        </section>
    )
}
