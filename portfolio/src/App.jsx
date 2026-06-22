import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Skills } from './sections/Skills/Skills'
import { Projects } from './sections/Projects/Projects'
import { Contact } from './sections/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

    </div>
  )
}

export default App