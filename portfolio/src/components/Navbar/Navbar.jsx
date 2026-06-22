import { Link } from 'react-scroll'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

export const Navbar = () => {
    const navLinks = [
        { name: 'Sobre mí', to: 'about' },
        { name: 'Tecnologías', to: 'skills' },
        { name: 'Proyectos', to: 'projects' },
        { name: 'Contacto', to: 'contact' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-slate-950/80">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <div className="cursor-pointer text-xl font-bold text-sky-500">
                    {'</>'}
                </div>

                <ul className="hidden gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="cursor-pointer text-sm font-medium text-slate-600 hover:text-sky-500 dark:text-slate-300 
                                        dark:hover:text-sky-400"
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