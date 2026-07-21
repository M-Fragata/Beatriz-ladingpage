const images = {
  background:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDn66ryUQFtJ0uEHmcIAQPAac63MxI5JywX-vgPOA-kP17H9ncmG9worFX356KAcNJn7OtBRT9zj7EcM-a7vseLJjZL-QqsyIB83z4q2IIOIofjF_hqZz9lx_z9A8hoiiSMknR8Xw5ZU51GOdIXHlUOn9SHKdYj-zlKuU1LvHrMOM7yS1F0YH81NL9GSVNHj1WS3FPi5OlX198CX9fMutF9ru-5aYSEbuUvR-ldhbzlYD0auh-LSbsYxpAbvfaqIG-LUnCxHuwrYY8',
  backgroundMobile:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDJoaEup_dIToByxs6d-D-puhiTCuL7pkSZsiAc4q2yuvkgjg1JZ2uque2TvT83nvITwp-mhJunxjlbmmS7B3VkHeOReGBOdsPJ5Y9NcCWclh3T4EaqAuP4jWlNzUjelewYoScD5tuw7kv-ZxksMHkckHhaKXV6twDNjODxiBakE1x2jmewoDrgB8HsCdzGNHYciBktO95pVU0bbTyLULKTE-1ZmP2wa8FS5tDmmunayOMhJ8kVW3Z3rF0-p-eaCiwyxls6Cwfc78s',
  profile:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBGtLjlAl-YIJtJAAOuj5sCCiFeEzxomafqv8bWuIwv26mW7RNAR12JBDswfURXZddN447faYvI3-Ufb5vVsqyXwXC4lXz50f-F9G7SPBb987q55GHNTWSXQEiaaptAZnp20aw6S_oYtmVKUmhKxd2zh5T2MlGKSxvLdyHR2RdKyyABM1iejUODOBRbl1j9YkLVk3HbsL69V2hgrIMUzNRx678PtUtXKkf3UknJQ1Iq6kum5Kd8aCuZlEVXKZg5G-kz2HQ4pZqFY50',
  profileMobile:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAK0xMwjFqwE96g_krs-cCwLy_NvP6CYqV2XT2zylXAGO4CyeF2G_0tTCLYhLp_Y1iAFg8sQSa9TFBas2FMKbOPkaraeMvFTmtg7bsfhaJeVk_ekZyD4V6Xzm4zdka_lSoKjfiiTMWQAIqBgYkcJKBDQmXR0BGktXbpALNKrT_1luUlWm_gvmwLn4ls3Ik50kVsJJD_Q9YSWtQSmgfiswsrLNlrdV6Z985oVIzoehWCAF66zlXR_8MuwmKZCtO3Yqp_uWuHA-1Css8',
}

import { WHATSAPP_LINK } from '../../config/whatsapp'

export function Hero() {
  return (
    <>
      {/* ═══════════ DESKTOP ═══════════ */}
      <section id="hero" className="relative min-h-[90vh] items-center pt-20 pb-24 overflow-hidden hidden lg:flex">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={images.background}
            alt="Maçãs frescas sobre fundo vermelho"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-20 grid grid-cols-2 gap-4 items-center">
          {/* Coluna de Texto */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-white">
              Transforme sua saúde através de uma alimentação equilibrada e prazerosa
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mt-2">
              Acompanhamento nutricional personalizado para você alcançar sua melhor versão de forma leve,
              equilibrada e sem terrorismo nutricional.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary text-sm font-semibold px-8 py-4 rounded-xl hover:bg-primary-container transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
              >
                Agende sua consulta
              </a>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="relative h-[600px] flex items-center justify-end">
            {/* Elementos Decorativos */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-fixed/20 rounded-full blur-3xl -z-10" />

            {/* Card da Imagem */}
            <div className="relative w-full max-w-md h-full rounded-[2rem] overflow-hidden shadow-warm-lg border border-white/50 bg-white">
              <img
                src={images.profile}
                alt="Beatriz Fiandrini - Nutricionista"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MOBILE ═══════════ */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-end pb-12 lg:hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={images.backgroundMobile}
            alt="Fundo de maçãs frescas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 px-5 flex flex-col items-center text-center gap-6 ">
          {/* Foto de Perfil */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-surface shadow-warm mb-4">
            <img
              src={images.profileMobile}
              alt="Beatriz Fiandrini - Nutricionista"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Título */}
          <h1 className="text-[32px] font-bold leading-tight text-white max-w-md">
            Transforme sua saúde através de uma alimentação equilibrada e prazerosa
          </h1>

          {/* Botão CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary font-semibold py-4 px-8 rounded-full shadow-lg mt-4 active:scale-95 transition-transform flex items-center gap-2"
          >
            <span>Agende sua consulta</span>
          </a>
        </div>
      </section>
    </>
  )
}
