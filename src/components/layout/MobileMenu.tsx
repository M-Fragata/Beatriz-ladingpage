import { useEffect } from 'react'
import { X, Home, Stethoscope, User, Mail, Apple } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { href: '#inicio', label: 'Início', icon: Home },
  { href: '#servicos', label: 'Serviços', icon: Stethoscope },
  { href: '#sobre', label: 'Sobre', icon: User },
  { href: '#contato', label: 'Contato', icon: Mail },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-[60] ${isOpen ? 'block' : 'hidden'}`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-on-background/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`bg-surface-container-low h-full w-80 shadow-2xl relative z-10 flex flex-col gap-2 p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header do Drawer */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Apple className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-primary text-sm leading-tight">
                Beatriz Fiandrini
              </h3>
              <p className="text-xs text-on-surface-variant">
                Nutricionista Clínica
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface p-2 cursor-pointer hover:bg-surface-container-high rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links de Navegação */}
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, index) => {
            const Icon = link.icon
            const isActive = index === 0
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`mx-2 px-4 py-3 rounded-full flex items-center gap-3 transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
