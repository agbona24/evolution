'use client';

import { ReactNode } from 'react';
import { ScrollReveal } from '@/lib/animations';
import VectorOverlay from './VectorOverlay';

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
    white:    'bg-gradient-to-br from-white via-[#f0fdfa] to-white',
    gray:     'bg-gradient-to-br from-[#f8fafc] via-[#f0fdfa] to-[#f8fafc]',
    dark:     'bg-gradient-to-br from-[#0f172a] via-[#0d2337] to-[#0f172a] text-white',
    gradient: 'bg-gradient-to-br from-[#f0fdfa] via-white to-[#fff7ed]',
  };

  const paddingStyles = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-20',
    lg: 'py-20 lg:py-28',
    xl: 'py-24 lg:py-32',
  };

  const overlayVariant = background === 'dark' ? 'dark' : 'light';

  const content = (
    <section
      id={id}
      className={`
        relative overflow-hidden
        ${backgroundStyles[background]}
        ${paddingStyles[paddingY]}
        ${className}
      `}
    >
      <VectorOverlay variant={overlayVariant} />
      <div className="container-custom relative z-10">
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
        <span className="inline-block text-[#c9a227] text-sm font-semibold tracking-wider uppercase mb-4 relative">
          <span className="relative z-10">{label}</span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c9a227]/20 rounded-full" />
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
