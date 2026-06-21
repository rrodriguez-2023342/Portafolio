import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <main>
        <section className="flex min-h-screen items-center justify-center">
          <h1 className="text-6xl font-bold">
            Roberto Rodríguez
          </h1>
        </section>
      </main>
    </div>
  )
}

export default App