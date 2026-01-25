'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
  type = 'button',
}: ButtonProps) {
  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  // Variant styles
  const variantStyles = {
    primary: `
      bg-[#0f172a] text-white hover:bg-[#1e293b]
      shadow-lg shadow-[#0f172a]/20 hover:shadow-xl hover:shadow-[#0f172a]/30
    `,
    secondary: `
      bg-[#c9a227] text-white hover:bg-[#a88620]
      shadow-lg shadow-[#c9a227]/20 hover:shadow-xl hover:shadow-[#c9a227]/30
    `,
    outline: `
      bg-transparent text-[#0f172a] border-2 border-[#0f172a]
      hover:bg-[#0f172a] hover:text-white
    `,
    ghost: `
      bg-transparent text-[#0f172a] hover:bg-[#f1f5f9]
    `,
  };

  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-medium rounded-full
    transition-all duration-300 ease-out cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  // Motion animation settings
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02, y: -2 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href}>
        <motion.span {...motionProps} className={baseStyles}>
          {content}
        </motion.span>
      </Link>
    );
  }

  // Render as button
  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {content}
    </motion.button>
  );
}

// Arrow icon component for common use
export function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}
