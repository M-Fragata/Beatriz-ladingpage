import { UtensilsCrossed, GraduationCap, Dumbbell } from 'lucide-react'

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Plano Alimentar Individualizado',
    description:
      'Nutrição personalizada adaptada aos seus objetivos, rotina e estilo de vida para resultados reais e duradouros.',
  },
  {
    icon: GraduationCap,
    title: 'Educação Nutricional',
    description:
      'Desenvolva uma relação saudável com a comida e aprenda os fundamentos da nutrição para ter autonomia.',
  },
  {
    icon: Dumbbell,
    title: 'Acompanhamento Esportivo',
    description:
      'Foco em performance, recuperação muscular e nutrição específica para atletas ou pessoas fisicamente ativas.',
  },
]

const bgImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAz56K9CT7CyOc1cE4j4eYIDPEv6BheqV--3DDNuEgdh4qXEDSrOUcTBMhr-ScDJDQeBXn0oOGU50WuFZVeWqZ4RxkQ8xSrwzyzWjKOvdUL30OHZk2Djno7aAnIQcH3UOWzgOxnUTEsQda1F2u_9R-3Zh9mGzrFogfLML6YpYp6gMd-q9OuVfs2O7CdEY-dNicn1xorwSPOgYoBSTs7RAws4QP9dlgYmiRScsHaPaPO5_9tSoCTzl3NASnIFM6ohkFZMaDkIeqto3I'

export function Services() {
  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background morangos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-20">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight text-on-surface mb-4">
            Meus Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 shadow-lg flex flex-col gap-4 transition-transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-on-surface">
                  {service.title}
                </h3>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
