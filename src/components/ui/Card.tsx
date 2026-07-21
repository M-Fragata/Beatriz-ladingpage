import { type ReactNode } from 'react'

type CardVariant = 'glass' | 'solid' | 'outlined'
type CardPadding = 'sm' | 'md' | 'lg'
type CardRounded = 'md' | 'lg' | 'xl' | '2xl'

interface CardProps {
  variant?: CardVariant
  padding?: CardPadding
  rounded?: CardRounded
  hover?: boolean
  className?: string
  children: ReactNode
}

const variantStyles: Record<CardVariant, string> = {
  glass:
    'glass shadow-warm',
  solid:
    'bg-surface shadow-warm border border-outline-variant/20',
  outlined:
    'bg-transparent border-2 border-outline-variant/40',
}

const paddingStyles: Record<CardPadding, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const roundedStyles: Record<CardRounded, string> = {
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  '2xl': 'rounded-3xl',
}

export function Card({
  variant = 'solid',
  padding = 'md',
  rounded = 'xl',
  hover = false,
  className = '',
  children,
}: CardProps) {
  return (
    <div
      className={`
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${roundedStyles[rounded]}
        transition-all duration-300 ease-in-out
        ${hover ? 'hover:-translate-y-1 hover:shadow-warm-lg' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
