import { useState, useEffect } from 'react'
import { WHATSAPP_LINK } from '../../config/whatsapp'

const navLinks = [
  { href: '#', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#contato', label: 'Contatos' },
]

export function Header() {
  const [activeHash, setActiveHash] = useState('#')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => {
        const id = link.href === '#' ? 'hero' : link.href.slice(1)
        return document.getElementById(id)
      })

      const scrollY = window.scrollY + 100
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150

      if (isAtBottom) {
        setActiveHash('#contato')
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollY) {
          setActiveHash(navLinks[i].href)
          return
        }
      }
      setActiveHash('#')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-5 md:px-20 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-primary tracking-tight"
        >
          Beatriz Fiandrini
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all ${
                activeHash === link.href
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-primary text-on-primary text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm items-center gap-2"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  )
}
