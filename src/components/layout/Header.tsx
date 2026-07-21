import { Menu } from 'lucide-react'

interface HeaderProps {
  onMenuOpen: () => void
}

const navLinks = [
  { href: '#', label: 'Início', active: true },
  { href: '#servicos', label: 'Serviços' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#contato', label: 'Contatos' },
]

export function Header({ onMenuOpen }: HeaderProps) {
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
                link.active
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
          href="https://wa.me/5521995408157?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20planejamento%20nutricional%20com%20Beatriz%20Fiandrini"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-primary text-on-primary text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm items-center gap-2"
        >
          Agendar Consulta
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuOpen}
          className="md:hidden text-on-surface-variant p-2 rounded-lg hover:bg-surface-variant/50 transition-colors cursor-pointer"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
