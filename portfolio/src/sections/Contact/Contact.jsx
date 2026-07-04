import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
    FaCheckCircle,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
} from 'react-icons/fa'

const contactLinks = [
    {
        label: 'Correo',
        value: 'robertoandre0307@gmail.com',
        href: 'mailto:robertoandre0307@gmail.com',
        icon: <FaEnvelope />,
    },
    {
        label: 'GitHub',
        value: '@rrodriguez-2023342',
        href: 'https://github.com/rrodriguez-2023342',
        icon: <FaGithub />,
    },
    {
        label: 'LinkedIn',
        value: 'Roberto Rodríguez',
        href: 'https://linkedin.com/in/roberto-rodriguez-422724324',
        icon: <FaLinkedin />,
    },
]

const fieldClass =
    'w-full rounded-xl border border-slate-300 bg-white/70 px-4 py-3.5 text-slate-900 outline-none backdrop-blur-sm placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-950/70 dark:text-white dark:focus:border-sky-400'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isSending, setIsSending] = useState(false)
    const [status, setStatus] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSending(true)
        setStatus(null)

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )

            setStatus({
                type: 'success',
                message: 'Mensaje enviado correctamente.',
            })
            setFormData({ name: '', email: '', message: '' })
        } catch {
            setStatus({
                type: 'error',
                message: 'Ocurrió un error al enviar el mensaje.',
            })
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section id="contact" className="py-16 sm:py-24 md:py-32">
            <div className="section-shell">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="glass-panel relative overflow-hidden rounded-2xl p-4 sm:rounded-[2rem] sm:p-8 lg:p-12"
                >
                    <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-36 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

                    <div className="relative z-10 grid gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                        <div>
                            <span className="section-eyebrow">Contacto</span>
                            <h2 className="section-title">
                                Construyamos algo
                                <span className="text-gradient"> juntos.</span>
                            </h2>
                            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                                Si tienes una oportunidad, una idea o simplemente quieres
                                conversar sobre tecnología, mi bandeja está abierta.
                            </p>

                            <div className="mt-8 space-y-3">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                                        className="group flex min-w-0 items-center gap-3 rounded-xl border border-slate-200/80 bg-white/45 p-3 hover:border-sky-500/35 hover:bg-sky-500/5 dark:border-slate-800 dark:bg-slate-900/35 sm:gap-4 sm:rounded-2xl sm:p-4"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-lg text-sky-500 group-hover:scale-110">
                                            {link.icon}
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                                                {link.label}
                                            </span>
                                            <span className="block truncate text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                {link.value}
                                            </span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/55 p-4 shadow-xl shadow-slate-950/5 backdrop-blur-md sm:rounded-3xl sm:p-7 dark:border-slate-800 dark:bg-slate-900/55">
                            <div className="mb-5">
                                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    placeholder="Tu nombre"
                                    className={fieldClass}
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                                    Correo electrónico
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    placeholder="tu@correo.com"
                                    className={fieldClass}
                                />
                            </div>

                            <div className="mb-6">
                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <label htmlFor="message" className="text-sm font-semibold">
                                        Mensaje
                                    </label>
                                    <span className="text-xs text-slate-400">
                                        {formData.message.length} caracteres
                                    </span>
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Cuéntame sobre tu idea..."
                                    className={`${fieldClass} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-600 hover:shadow-sky-500/35 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSending ? 'Enviando...' : 'Enviar mensaje'}
                                <FaPaperPlane className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>

                            {status && (
                                <motion.p
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    role="status"
                                    className={`mt-4 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm font-medium ${
                                        status.type === 'success'
                                            ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                                            : 'bg-red-500/10 text-red-600 dark:text-red-300'
                                    }`}
                                >
                                    {status.type === 'success' && <FaCheckCircle />}
                                    {status.message}
                                </motion.p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
