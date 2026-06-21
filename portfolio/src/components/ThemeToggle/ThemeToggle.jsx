import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../../hooks/useTheme'

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-full border border-slate-300 bg-white p-3 text-slate-900 shadow-sm transition-all duration-300
                        hover:scale-105 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            aria-label="Cambiar tema"
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    )
}