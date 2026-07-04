import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Skills } from './sections/Skills/Skills'
import { Projects } from './sections/Projects/Projects'
import { Contact } from './sections/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { AnimatedBackground } from './components/AnimatedBackground/AnimatedBackground'

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip text-slate-950 dark:text-white">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

    </div>
  )
}

export default App
