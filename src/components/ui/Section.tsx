'use client';

import { ReactNode } from 'react';
import { ScrollReveal } from '@/lib/animations';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  paddingY = 'lg',
  animate = true,
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-[#f8fafc]',
    dark: 'bg-[#0f172a] text-white',
    gradient: 'bg-gradient-to-b from-[#f8fafc] to-white',
  };

  const paddingStyles = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-20',
    lg: 'py-20 lg:py-28',
    xl: 'py-24 lg:py-32',
  };

  const content = (
    <section
      id={id}
      className={`
        ${backgroundStyles[background]}
        ${paddingStyles[paddingY]}
        ${className}
      `}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );

  if (!animate) return content;

  return content;
}

// Section Header component
interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className = '',
  dark = false,
}: SectionHeaderProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <ScrollReveal className={`max-w-3xl ${alignStyles[align]} mb-12 lg:mb-16 ${className}`}>
      {label && (
        <span className="inline-block text-[#c9a227] text-sm font-semibold tracking-wider uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 ${
        dark ? 'text-white' : 'text-[#0f172a]'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${dark ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
