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
        'relative cursor-pointer py-2 font-semibold text-slate-600 after:absolute after:inset-x-0 after:bottom-0 after:mx-auto after:h-0.5 after:w-0 after:rounded-full after:bg-sky-500 after:transition-all hover:text-sky-500 hover:after:w-full dark:text-slate-300 dark:hover:text-sky-400'

    return (
        <header className="sticky top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3">
            <nav className="glass-panel mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between rounded-2xl px-4 md:h-16 md:flex-nowrap sm:px-6">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-125}
                    className="cursor-pointer text-xl font-bold text-sky-500"
                    aria-label="Ir al inicio"
                >
                    {'</>'}
                </Link>

                <ul className="order-3 flex w-full items-center gap-5 overflow-x-auto border-t border-slate-200/70 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dark:border-slate-700/60 md:order-none md:w-auto md:gap-7 md:overflow-visible md:border-0 md:py-0">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-125}
                                spy={true}
                                activeClass="!text-sky-500 after:!w-full"
                                className={`${linkClass} shrink-0 text-xs md:text-sm`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="py-2 md:py-0">
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
