import { Heart, TrendingUp, MessageCircle, UtensilsCrossed } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Saúde e Vitalidade',
    description: 'Melhore sua disposição e energia diária com uma alimentação pensada para o seu corpo.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Duradouros',
    description: 'Esqueça dietas restritivas. Foco em reeducação alimentar para manter o peso ideal para sempre.',
  },
  {
    icon: MessageCircle,
    title: 'Acompanhamento Próximo',
    description: 'Suporte contínuo para tirar dúvidas e ajustar o plano conforme sua evolução.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Pratos Saborosos',
    description: 'Descubra que comer bem não é sinônimo de comer sem graça. Receitas práticas e deliciosas.',
  },
]

const bgImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC1R_I67YIvHYVw3C-b_pKToOyQqCpbtB8Pu0D9Kz-waizq6nseYqjNWAns1cCZrI_cgYUQXxaAt23zj_9inLOYnSmptQ7OrjGBEJLrtbRXXayZ0-idQgof4LcSbBvct10OQJ0iF4mreMUxw39kw7cDcRfIGexQ7g_L70Idg4OxltvU9T0FdrkSA3gvN7X2GNn3549UVMib1UVIoY3xMtnZShbdb0LffYS3QBX6SD9IXFo1CZ7t5zis_qW4XYyyXKoNkRkJFf1pwLU'

export function Benefits() {
  return (
    <section className="relative min-h-screen flex items-center py-24 bg-primary overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Conteúdo & Cards */}
          <div className="flex flex-col gap-8">
            <div className="text-left">
              <h2 className="text-[36px] md:text-[48px] font-bold leading-tight text-white mb-6">
                Por que escolher a Nutrição de Precisão?
              </h2>
              <div className="w-24 h-1 bg-white/30 rounded-full mb-8" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-secondary-fixed-dim" />
                      <h3 className="text-xl font-bold text-white">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Coluna Direita: Imagem */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
              <img
                src={bgImage}
                alt="Melancia fresca fatiada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
