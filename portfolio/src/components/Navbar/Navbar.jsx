import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:bg-slate-950/80">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <div className="cursor-pointer text-xl font-bold text-sky-500">
                    {"</>"}
                </div>

                <ul className="hidden gap-8 md:flex">
                    <li>
                        <button className="cursor-pointer text-sm font-medium text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                            About
                        </button>
                    </li>

                    <li>
                        <button className="cursor-pointer text-sm font-medium text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                            Skills
                        </button>
                    </li>

                    <li>
                        <button className="cursor-pointer text-sm font-medium text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                            Projects
                        </button>
                    </li>

                    <li>
                        <button className="cursor-pointer text-sm font-medium text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                            Contact
                        </button>
                    </li>
                </ul>

                <ThemeToggle />
            </nav>
        </header>
    );
};
