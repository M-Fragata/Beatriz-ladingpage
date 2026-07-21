import { useState } from 'react'
import { Header } from './components/layout/Header'
import { MobileMenu } from './components/layout/MobileMenu'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Benefits } from './components/sections/Benefits'
import { About } from './components/sections/About'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <div id="inicio">
          <Hero />
        </div>
        <div id="servicos">
          <Services />
        </div>
        <div id="beneficios">
          <Benefits />
        </div>
        <div id="sobre">
          <About />
        </div>
      </main>

      <div id="contato">
        <Footer />
      </div>
    </div>
  )
}

export default App
