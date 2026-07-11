import { motion } from 'framer-motion'
import { FaTerminal } from 'react-icons/fa'

export const About = () => {
    return (
        <section id="about" className="py-16 sm:py-24 md:py-32">
            <div className="section-shell">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55 }}
                    className="mb-8 sm:mb-10"
                >
                    <span className="section-eyebrow">Sobre mí</span>
                    <h2 className="section-title max-w-3xl">
                        Un poco sobre mí,
                        <span className="text-gradient"> sin el discurso largo.</span>
                    </h2>
                </motion.div>

                <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                    <motion.article
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.6 }}
                        className="skeuo-card max-w-full overflow-hidden rounded-2xl sm:rounded-3xl"
                    >
                        <div className="flex items-center justify-between border-b border-slate-400/60 bg-gradient-to-b from-slate-100 to-slate-300 px-5 py-3 shadow-[inset_0_1px_white] dark:border-black/50 dark:from-slate-600 dark:to-slate-800">
                            <div className="flex gap-2" aria-hidden="true">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-amber-400" />
                                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                            </div>
                            <span className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                                <FaTerminal />
                                roberto.js
                            </span>
                        </div>

                        <div className="skeuo-inset m-2 overflow-x-auto rounded-xl p-4 font-mono text-xs leading-7 sm:m-3 sm:p-6 sm:text-sm sm:leading-8 md:p-8 md:text-base">
                            <p><span className="mr-5 select-none text-slate-300 dark:text-slate-600">01</span><span className="text-fuchsia-600 dark:text-fuchsia-400">const</span> <span className="text-sky-600 dark:text-sky-300">roberto</span> <span className="text-slate-700 dark:text-white">= {'{'}</span></p>
                            <p><span className="mr-5 select-none text-slate-300 dark:text-slate-600">02</span>  <span className="text-indigo-600 dark:text-indigo-300">rol</span><span className="text-slate-700 dark:text-white">:</span> <span className="text-emerald-700 dark:text-emerald-300">&apos;Full Stack Developer&apos;</span><span className="text-slate-700 dark:text-white">,</span></p>
                            <p><span className="mr-5 select-none text-slate-300 dark:text-slate-600">03</span>  <span className="text-indigo-600 dark:text-indigo-300">disfruta</span><span className="text-slate-700 dark:text-white">:</span> <span className="text-emerald-700 dark:text-emerald-300">&apos;resolver problemas&apos;</span><span className="text-slate-700 dark:text-white">,</span></p>
                            <p><span className="mr-5 select-none text-slate-300 dark:text-slate-600">04</span>  <span className="text-indigo-600 dark:text-indigo-300">aprende</span><span className="text-slate-700 dark:text-white">:</span> <span className="text-emerald-700 dark:text-emerald-300">&apos;construyendo&apos;</span><span className="text-slate-700 dark:text-white">,</span></p>
                            <p><span className="mr-5 select-none text-slate-300 dark:text-slate-600">05</span>  <span className="text-indigo-600 dark:text-indigo-300">objetivo</span><span className="text-slate-700 dark:text-white">:</span> <span className="text-emerald-700 dark:text-emerald-300">&apos;crear software útil&apos;</span></p>
                            <p><span className="mr-5 select-none text-slate-300 dark:text-slate-600">06</span><span className="text-slate-700 dark:text-white">{'}'}</span></p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                className="mt-4 text-slate-500"
                            >
                                <span className="mr-5 select-none text-slate-300 dark:text-slate-600">07</span>
                                <span className="text-slate-500">// sigo aprendiendo cada día_</span>
                            </motion.p>
                        </div>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55 }}
                        className="glass-panel flex h-full flex-col justify-center rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:min-h-80 lg:p-10"
                    >
                        <span className="mb-7 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                        <p className="text-xl font-bold leading-snug sm:text-2xl lg:text-3xl">
                            Me gusta entender cómo encaja todo:
                            <span className="text-sky-500"> interfaz, servidor y datos.</span>
                        </p>
                        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-lg">
                            Por eso trabajo de lado a lado en cada proyecto y cuido tanto
                            lo que ve el usuario como lo que sucede detrás.
                        </p>
                    </motion.article>
                </div>
            </div>
        </section>
    )
}
