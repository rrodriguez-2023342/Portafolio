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
        'relative cursor-pointer rounded-lg px-2.5 py-1.5 font-semibold text-slate-600 after:absolute after:inset-x-2 after:bottom-0 after:mx-auto after:h-0.5 after:w-0 after:rounded-full after:bg-amber-700 after:transition-all hover:text-amber-800 hover:after:w-3/5 dark:text-slate-300 dark:hover:text-amber-300'

    return (
        <header className="sticky top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3">
            <nav className="glass-panel mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between rounded-2xl px-4 md:h-16 md:flex-nowrap sm:px-6">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-125}
                    className="skeuo-inset cursor-pointer rounded-lg px-3 py-1.5 font-mono text-lg font-bold text-amber-800 dark:text-amber-300"
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
                                activeClass="!text-amber-800 after:!w-3/5 dark:!text-amber-300"
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
