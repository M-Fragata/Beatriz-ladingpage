import { Button } from '../ui/Button'
import { WHATSAPP_LINK } from '../../config/whatsapp'

const profileImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD1ciuU46CY4yTn2_FAuxZkX151MYsLfhNnSU2aHGck0XGmdWoeXdIemk4_iAkDQ1EEO2A-W3NYKcfyk9nVPZ0oO7YbJH15l65s5xD1werpWLnq900L3tEDCSytdkVM6YH0zGXhc56x0CVhVFS0AA6o07tJo0VincUgTq0pEysCo3eznuNgYI98xI46zDQ19Z4EDPwKmB_rwnmuy0yAz71-qCcvGw2jTYQGCfawmA--G4R9xjePWlx3QCNkxjEpKCBv5PyW7G5VR_g'

const profileImageMobile =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAK0xMwjFqwE96g_krs-cCwLy_NvP6CYqV2XT2zylXAGO4CyeF2G_0tTCLYhLp_Y1iAFg8sQSa9TFBas2FMKbOPkaraeMvFTmtg7bsfhaJeVk_ekZyD4V6Xzm4zdka_lSoKjfiiTMWQAIqBgYkcJKBDQmXR0BGktXbpALNKrT_1luUlWm_gvmwLn4ls3Ik50kVsJJD_Q9YSWtQSmgfiswsrLNlrdV6Z985oVIzoehWCAF66zlXR_8MuwmKZCtO3Yqp_uWuHA-1Css8'

export function About() {
  return (
    <section className="relative min-h-screen flex items-center py-24 bg-surface-container-low">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Coluna Esquerda: Imagem (Desktop) */}
        <div className="hidden lg:flex justify-start">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30">
            <img
              src={profileImage}
              alt="Beatriz Fiandrini - Nutricionista"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Coluna Direita: Conteúdo */}
        <div className="flex flex-col gap-4">
          {/* Imagem (Mobile) */}
          <div className="lg:hidden flex justify-center mb-4">
            <div className="w-64 h-80 rounded-[2rem] overflow-hidden shadow-warm">
              <img
                src={profileImageMobile}
                alt="Beatriz Fiandrini - Nutricionista"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-on-surface">Sobre Mim</h2>
          <h3 className="text-[36px] md:text-[48px] font-bold text-primary leading-tight">
            Olá, sou Beatriz Fiandrini
          </h3>
          <div className="w-16 h-1 bg-primary rounded-full my-2" />
          <p className="text-lg text-on-surface leading-relaxed">
            Sou nutricionista apaixonada por transformar vidas através de uma alimentação consciente e prazerosa.
            Minha abordagem foca no equilíbrio, sem restrições severas, ajudando você a alcançar sua melhor
            versão com saúde e bem-estar.
          </p>
          <p className="text-lg text-on-surface leading-relaxed">
            Acredito que a nutrição vai muito além de contar calorias. É sobre nutrir o corpo, respeitar a mente
            e celebrar a cultura alimentar. Minha missão é ajudar você a encontrar um caminho saudável que seja
            sustentável e, acima de tudo, prazeroso.
          </p>
          <div className="mt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                iconPosition="right"
              >
                Agendar Consulta
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
