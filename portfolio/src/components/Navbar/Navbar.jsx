import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Sobre mí', to: 'about' },
        { name: 'Tecnologías', to: 'skills' },
        { name: 'Proyectos', to: 'projects' },
        { name: 'Contacto', to: 'contact' },
    ]

    const linkClass =
        'cursor-pointer text-sm font-medium text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400'

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-slate-950/80">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer text-xl font-bold text-sky-500"
                >
                    {'</>'}
                </Link>

                <ul className="hidden gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                spy={true}
                                activeClass="!text-sky-500"
                                className={linkClass}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer text-xl text-slate-700 md:hidden dark:text-slate-300"
                        aria-label="Abrir menú"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden">
                    <ul className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pb-6">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    spy={true}
                                    activeClass="!text-sky-500"
                                    onClick={() => setIsOpen(false)}
                                    className={`${linkClass} block`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}
