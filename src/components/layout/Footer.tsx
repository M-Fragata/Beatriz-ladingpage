import { Mail } from 'lucide-react'

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#contato', label: 'Contatos' },
]

export function Footer() {
  return (
    <footer id="contato" className="bg-primary w-full pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20 w-full">
        {/* Grid de Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1: Marca */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Beatriz Fiandrini</h3>
            <p className="text-white/80">Nutrição com leveza, ciência e sabor.</p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Contato</h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:contato@exemplo.com"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                contato@exemplo.com
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
          © 2026 Beatriz Fiandrini Nutrição. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
