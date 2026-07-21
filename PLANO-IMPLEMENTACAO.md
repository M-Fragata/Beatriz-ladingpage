# Plano de Implementação — Beatriz Fiandrini Landing Page

## Visão Geral do Projeto

Landing page profissional para nutricionista Beatriz Fiandrini, com design system **"Nourish & Glow"** — visual moderno, acolhedor e profissional que combina expertise clínica com a alegria sensorial da nutrição fresca.

| Item | Detalhe |
|------|---------|
| **Projeto Stitch** | `7596916793976831828` |
| **Responsivo** | Desktop (2560px) + Mobile (780px) |
| **Stack** | React 18+ / TypeScript / Tailwind CSS v4 |
| **Ícones** | Lucide React |
| **Fonte** | Plus Jakarta Sans |

---

## Design System — Tokens

### Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#E23744` | Botões CTA, destaques principais |
| `secondary` | `#FFB84D` | Acentos, badges, ícones secundários |
| `tertiary` | `#FFF1D6` | Fundos de seção, cards alternados |
| `background` | `#FFF8F7` | Fundo geral da página |
| `surface` | `#FFFFFF` | Cards, superfícies elevadas |
| `on-surface` | `#221919` | Texto principal |
| `on-surface-variant` | `#5b403f` | Texto secundário |
| `on-primary` | `#FFFFFF` | Texto sobre fundo primary |

### Tipografia

| Estilo | Tamanho | Peso | Uso |
|--------|---------|------|-----|
| `headline-xl` | 48px (36px mobile) | 700 | Títulos de seção |
| `headline-lg` | 32px | 700 | Subtítulos |
| `headline-md` | 24px | 600 | Títulos de card |
| `body-lg` | 18px | 400 | Texto corrido |
| `body-md` | 16px | 400 | Texto secundário |
| `label-md` | 14px | 600 | Botões, badges |

### Espaçamento

| Token | Valor |
|-------|-------|
| `margin-desktop` | 80px |
| `margin-mobile` | 20px |
| `gutter` | 16px |
| `container-padding` | 24px |
| `unit` | 8px |

### Bordas e Sombras

- **Border radius padrão:** 16px (cards), 24px (cards grandes), full (botões)
- **Sombra "warm glow:** `0 20px 40px -15px rgba(183, 18, 42, 0.05)`
- **Glassmorphism:** `bg-white/80 backdrop-blur-md border border-white/50`

---

## Estrutura de Componentes

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Navbar sticky + mobile trigger
│   │   ├── MobileMenu.tsx          # Drawer lateral mobile
│   │   └── Footer.tsx              # Rodapé
│   ├── sections/
│   │   ├── Hero.tsx                # Seção hero
│   │   ├── Services.tsx            # Cards de serviços
│   │   ├── Benefits.tsx            # Benefícios (fundo vermelho)
│   │   └── About.tsx               # Sobre mim
│   └── ui/
│       ├── Button.tsx              # Botão reutilizável
│       └── Card.tsx                # Card com glassmorphism
├── App.tsx                         # Layout principal
├── main.tsx                        # Entry point
└── index.css                       # Tailwind + fontes + variáveis
```

---

## Fases de Implementação

### Fase 1 — Setup do Projeto

**Objetivo:** Criar o projeto base com todas as ferramentas configuradas.

**Passos:**

1. Criar projeto Vite com React + TypeScript
   ```bash
   npm create vite@latest . -- --template react-ts
   ```

2. Instalar dependências
   ```bash
   npm install
   npm install -D tailwindcss @tailwindcss/vite
   npm install lucide-react
   ```

3. Configurar Tailwind CSS v4 no `vite.config.ts`
   ```ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })
   ```

4. Configurar `index.css` com import do Tailwind
   ```css
   @import "tailwindcss";
   ```

5. Adicionar Google Fonts no `index.html`
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```

6. Limpar `App.tsx` e `App.css`

**Entregável:** Projeto rodando com `npm run dev`, sem erros.

---

### Fase 2 — Design System no Tailwind

**Objetivo:** Configurar todas as cores, fontes e espaçamentos do design system.

**Passos:**

1. Criar variáveis CSS globais no `index.css`
   ```css
   @theme {
     --color-primary: #E23744;
     --color-secondary: #FFB84D;
     --color-tertiary: #FFF1D6;
     --color-background: #FFF8F7;
     --color-surface: #FFFFFF;
     --color-on-surface: #221919;
     --color-on-surface-variant: #5b403f;
     --color-on-primary: #FFFFFF;
     --color-primary-container: #db313f;
     --color-surface-container: #fceae9;
     --color-surface-container-low: #fff0f0;
     --color-surface-container-high: #f6e4e4;
     --color-outline-variant: #e4bebc;

     --font-family-sans: "Plus Jakarta Sans", sans-serif;

     --shadow-warm: 0 20px 40px -15px rgba(183, 18, 42, 0.05);
   }
   ```

2. Configurar `tailwind.config.ts` (se necessário para extensões)

3. Criar estilos utilitários base
   ```css
   @layer base {
     body {
       font-family: var(--font-family-sans);
       background-color: var(--color-background);
       color: var(--color-on-surface);
       -webkit-font-smoothing: antialiased;
     }
   }
   ```

**Entregável:** Tokens de design disponíveis via classes Tailwind.

---

### Fase 3 — Componentes UI Base

**Objetivo:** Criar componentes reutilizáveis (Button, Card).

**Passos:**

1. Criar `src/components/ui/Button.tsx`
   - Variantes: `primary`, `secondary`, `ghost`
   - Tamanhos: `sm`, `md`, `lg`
   - Suporte a ícone à direita
   - Hover com transição suave

   ```tsx
   interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: 'primary' | 'secondary' | 'ghost'
     size?: 'sm' | 'md' | 'lg'
     icon?: React.ReactNode
     iconPosition?: 'left' | 'right'
   }
   ```

2. Criar `src/components/ui/Card.tsx`
   - Variantes: `glass` (glassmorphism), `solid`, `outlined`
   - Props: `padding`, `rounded`

   ```tsx
   interface CardProps {
     variant?: 'glass' | 'solid' | 'outlined'
     padding?: 'sm' | 'md' | 'lg'
     rounded?: 'md' | 'lg' | 'xl' | '2xl'
     children: React.ReactNode
   }
   ```

**Entregável:** Componentes UI prontos para uso.

---

### Fase 4 — Header e Mobile Menu

**Objetivo:** Criar navegação sticky com menu mobile.

**Passos:**

1. Criar `src/components/layout/Header.tsx`
   - Desktop: logo à esquerda, nav links ao centro, CTA à direita
   - Mobile: logo à esquerda, hamburger à direita
   - Sticky com `backdrop-blur-md` e sombra sutil
   - Links: Início, Serviços, Benefícios, Sobre Mim, Contatos

2. Criar `src/components/layout/MobileMenu.tsx`
   - Drawer lateral esquerdo (w-80)
   - Overlay escuro com `backdrop-blur-sm`
   - Animação de slide com `transform` + `transition`
   - Ícones nos links (Home, Clinical Notes, Person, Mail)
   - Botão de fechar

3. Integrar estado do menu no `App.tsx`
   - `useState` para controlar abertura/fechamento
   - Fechar ao clicar em link ou overlay

**Entregável:** Navegação funcional em desktop e mobile.

---

### Fase 5 — Seção Hero

**Objetivo:** Criar a seção principal com imagem de fundo, texto e CTA.

**Passos:**

1. Criar `src/components/sections/Hero.tsx`

2. **Desktop (2 colunas):**
   - Fundo: imagem de maçãs com overlay gradiente
   - Coluna esquerda: título (48px bold), subtítulo, botão CTA
   - Coluna direita: foto da nutricionista em card arredondado (2rem)
   - Elementos decorativos: círculos desfocados com cores secundárias

3. **Mobile (centralizado):**
   - Fundo: imagem com overlay escuro
   - Foto redonda (w-48 h-48) com borda
   - Título centralizado branco
   - Botão CTA redondo (pill-shaped)

4. Usar imagem do Stitch:
   - Background: URL do CDN Google
   - Foto Beatriz: URL do CDN Google

**Entregável:** Hero responsivo com visual impactante.

---

### Fase 6 — Seção Serviços

**Objetivo:** Criar cards dos 3 serviços oferecidos.

**Passos:**

1. Criar `src/components/sections/Services.tsx`

2. **Desktop:**
   - Fundo: imagem de morangos com gradiente overlay
   - Título centralizado "Meus Serviços"
   - Barra decorativa vermelha (w-24 h-1 bg-primary)
   - Grid 3 colunas com cards glassmorphism
   - Cada card: ícone (bg-primary), título, descrição
   - Hover: `hover:-translate-y-2` ( elevação sutil )

3. **Mobile:**
   - Fundo: textura com overlay sutil
   - Cards empilhados verticalmente
   - Ícones com cores diferentes (primary, secondary, tertiary)

4. Serviços:
   - **Plano Alimentar Individualizado** — ícone `restaurant_menu`
   - **Educação Nutricional** — ícone `school`
   - **Acompanhamento Esportivo** — ícone `fitness_center`

**Entregável:** Seção de serviços com cards interativos.

---

### Fase 7 — Seção Benefícios

**Objetivo:** Criar seção com fundo vermelho destacando benefícios.

**Passos:**

1. Criar `src/components/sections/Benefits.tsx`

2. **Desktop (2 colunas):**
   - Fundo: `bg-[#b7122a]` (primary escuro)
   - Coluna esquerda: título branco + grid 2x2 de cards
   - Cards: `bg-white/10 backdrop-blur-md` com borda sutil
   - Coluna direita: imagem de melancia em card arredondado

3. **Mobile:**
   - Fundo vermelho com textura overlay
   - Lista vertical com ícones (Lucide: Heart, TrendingUp, MessageCircle, UtensilsCrossed)
   - Cada item: ícone dourado + título + descrição

4. Benefícios:
   - **Saúde e Vitalidade** — Heart
   - **Resultados Duradouros** — TrendingUp
   - **Acompanhamento Próximo** — MessageCircle
   - **Pratos Saborosos** — UtensilsCrossed

**Entregável:** Seção de benefícios com contraste visual forte.

---

### Fase 8 — Seção Sobre Mim

**Objetivo:** Criar seção pessoal com foto e biografia.

**Passos:**

1. Criar `src/components/sections/About.tsx`

2. **Desktop (2 colunas):**
   - Coluna esquerda: foto da Beatriz em card com borda
   - Coluna direita: badge "Sua Parceira", título, bio, botão CTA

3. **Mobile:**
   - Centralizado
   - Foto em card arredondado (2rem)
   - Card de bio com fundo branco e sombra

4. Texto da bio:
   > "Olá! Sou Beatriz, nutricionista apaixonada por transformar vidas através de uma alimentação que faz sentido para você..."

**Entregável:** Seção "Sobre" com toque pessoal.

---

### Fase 9 — Footer

**Objetivo:** Criar rodapé com informações e links.

**Passos:**

1. Criar `src/components/layout/Footer.tsx`

2. **Desktop (3 colunas):**
   - Coluna 1: Nome + tagline
   - Coluna 2: Links rápidos (Início, Serviços, Benefícios, Sobre, Contatos)
   - Coluna 3: Contato (email)
   - Divisor + copyright

3. **Mobile:**
   - Centralizado
   - Links empilhados verticalmente
   - Links de Privacidade, Termos, Agendar Consulta

**Entregável:** Rodapé completo e responsivo.

---

### Fase 10 — Integração e Responsividade

**Objetivo:** Montar tudo junto e testar em diferentes telas.

**Passos:**

1. Montar `App.tsx` com todas as seções na ordem:
   ```tsx
   <Header />
   <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
   <main>
     <Hero />
     <Services />
     <Benefits />
     <About />
   </main>
   <Footer />
   ```

2. Testar breakpoints:
   - Mobile: < 768px
   - Tablet: 768px - 1024px
   - Desktop: > 1024px

3. Ajustar:
   - Font sizes responsivos (`text-xl md:text-3xl`)
   - Grid layouts (`grid-cols-1 md:grid-cols-3`)
   - Padding/margin (`px-5 md:px-20`)
   - Visibilidade (`hidden md:flex`)

4. Testar:
   - Menu mobile abre/fecha
   - Scrolls suaves para âncoras
   - Hover states em desktop
   - Touch targets em mobile (min 48px)

**Entregável:** Landing page完全 funcional e responsiva.

---

### Fase 11 — Otimizações Finais

**Objetivo:** Ajustes de performance e acessibilidade.

**Passos:**

1. **Performance:**
   - Adicionar `loading="lazy"` nas imagens
   - Usar `font-display: swap` no Google Fonts
   - Minificar CSS/JS (já feito pelo Vite)

2. **Acessibilidade:**
   - Alt text em todas as imagens
   - Contraste de cores WCAG AA
   - Focus states visíveis
   - `aria-label` em botões

3. **SEO:**
   - Meta tags no `index.html`
   - Title e description
   - Open Graph tags

4. **Build final:**
   ```bash
   npm run build
   ```

**Entregável:** Projeto pronto para deploy.

---

## Resumo das Fases

| Fase | Descrição | Dependências |
|------|-----------|--------------|
| 1 | Setup do projeto | Nenhuma |
| 2 | Design System | Fase 1 |
| 3 | Componentes UI | Fase 2 |
| 4 | Header + Mobile Menu | Fase 3 |
| 5 | Hero | Fase 3 |
| 6 | Serviços | Fase 3 |
| 7 | Benefícios | Fase 3 |
| 8 | Sobre Mim | Fase 3 |
| 9 | Footer | Fase 3 |
| 10 | Integração | Fases 4-9 |
| 11 | Otimizações | Fase 10 |

---

## Imagens (CDN Google)

| Imagem | Uso | URL |
|--------|-----|-----|
| Maçãs fundo | Hero background | `lh3.googleusercontent.com/aida-public/...` |
| Foto Beatriz | Hero, Sobre, Menu | `lh3.googleusercontent.com/aida-public/...` |
| Morangos | Serviços background | `lh3.googleusercontent.com/aida-public/...` |
| Melancia | Benefícios | `lh3.googleusercontent.com/aida-public/...` |

> Todas as URLs estão no HTML original do Stitch e serão copiadas diretamente para o código.

---

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```
