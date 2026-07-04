import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    © {currentYear} Roberto Rodríguez. Todos los derechos reservados.
                </p>

                <div className="flex gap-5">
                    <a
                        href="https://github.com/rrodriguez-2023342"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl text-slate-500 hover:text-sky-500 dark:text-slate-400"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/roberto-rodriguez-422724324"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl text-slate-500 hover:text-sky-500 dark:text-slate-400"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    )
}
