import { Link } from 'react-scroll'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

const navLinks = [
    { name: 'Sobre mí', to: 'about' },
    { name: 'Tecnologías', to: 'skills' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Contacto', to: 'contact' },
]

export const Navbar = () => {
    const linkClass =
        'relative cursor-pointer py-2 text-sm font-semibold text-slate-600 after:absolute after:inset-x-0 after:bottom-0 after:mx-auto after:h-0.5 after:w-0 after:rounded-full after:bg-sky-500 after:transition-all hover:text-sky-500 hover:after:w-full dark:text-slate-300 dark:hover:text-sky-400'

    return (
        <header className="sticky top-0 z-50 px-3 pt-3">
            <nav className="glass-panel mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-6">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-90}
                    className="cursor-pointer text-xl font-bold text-sky-500"
                    aria-label="Ir al inicio"
                >
                    {'</>'}
                </Link>

                <ul className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-90}
                                spy={true}
                                activeClass="!text-sky-500 after:!w-full"
                                className={linkClass}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ThemeToggle />
            </nav>
        </header>
    )
}
