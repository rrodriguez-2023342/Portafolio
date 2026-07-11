import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../../hooks/useTheme'

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="icon-button h-10 w-10 cursor-pointer text-slate-700 hover:rotate-12 dark:text-slate-200"
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    )
}
