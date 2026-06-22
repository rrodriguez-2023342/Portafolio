import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [isSending, setIsSending] = useState(false)
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSending(true)
        setStatus('')
        
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
        
            setStatus('Mensaje enviado correctamente.')
            setFormData({
                name: '',
                email: '',
                message: '',
            })
        } catch (error) {
            setStatus('Ocurrió un error al enviar el mensaje.')
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section id="contact" className="py-24">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-12 lg:grid-cols-2"
                >
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-500">
                            Contacto
                        </p>

                        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                            ¿Trabajamos juntos?
                        </h2>

                        <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                            Si tienes una oportunidad, proyecto o colaboración, puedes enviarme
                            un mensaje directamente desde este formulario.
                        </p>

                        <div className="flex gap-5">
                            <a
                                href="mailto:robertoandre0307@gmail.com"
                                className="text-2xl text-slate-500 hover:text-sky-500 dark:text-slate-400"
                            >
                                <FaEnvelope />
                            </a>

                            <a
                                href="https://github.com/rrodriguez-2023342"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl text-slate-500 hover:text-sky-500 dark:text-slate-400"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/in/roberto-rodriguez-422724324"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl text-slate-500 hover:text-sky-500 dark:text-slate-400"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 
                                                                dark:bg-slate-900/50">
                        <div className="mb-4">
                            <label className="mb-2 block text-sm font-medium">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-2 block text-sm font-medium">
                                Correo
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-medium">
                                Mensaje
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="w-full cursor-pointer rounded-full bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSending ? 'Enviando...' : 'Enviar mensaje'}
                        </button>

                        {status && (
                            <p className="mt-4 text-center text-sm text-sky-500">
                                {status}
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    )
}