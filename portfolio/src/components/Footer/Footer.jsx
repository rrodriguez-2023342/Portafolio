import { Link } from 'react-scroll'
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="pb-8 pt-4">
            <div className="section-shell">
                <div className="glass-panel flex flex-col items-center justify-between gap-5 rounded-2xl px-6 py-5 text-center sm:flex-row sm:text-left">
                    <div>
                        <p className="text-sm font-bold">
                            Roberto Rodríguez <span className="text-sky-500">·</span> Full Stack Developer
                        </p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            © {currentYear} Diseñado y desarrollado con atención al detalle.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/rrodriguez-2023342"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-button h-10 w-10 text-lg text-slate-500 dark:text-slate-400"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/roberto-rodriguez-422724324"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-button h-10 w-10 text-lg text-slate-500 dark:text-slate-400"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="icon-button ml-2 h-10 w-10 cursor-pointer text-slate-500 dark:text-slate-400"
                            aria-label="Volver al inicio"
                        >
                            <FaArrowUp />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
