import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container shadow-lg shadow-primary/20',
  secondary:
    'bg-transparent text-primary border-2 border-primary hover:bg-primary/5',
  ghost:
    'bg-transparent text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-semibold rounded-xl
        transition-all duration-300 ease-in-out
        cursor-pointer select-none
        active:scale-[0.97]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="shrink-0">{icon}</span>
      )}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </button>
  )
}
