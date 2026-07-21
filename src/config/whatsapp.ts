const MENSAGEM_PADRAO =
  'Olá, gostaria de fazer um planejamento nutricional com Beatriz Fiandrini'

const telefone = import.meta.env.VITE_CONTATO as string

const mensagem = encodeURIComponent(MENSAGEM_PADRAO)

export const WHATSAPP_LINK = `https://wa.me/${telefone}?text=${mensagem}`
