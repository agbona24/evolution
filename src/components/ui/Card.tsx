'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'lg',
  shadow = 'md',
  rounded = 'xl',
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  const roundedStyles = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`
        bg-white border border-[#e2e8f0]
        ${paddingStyles[padding]}
        ${shadowStyles[shadow]}
        ${roundedStyles[rounded]}
        ${hover ? 'hover:shadow-xl hover:border-[#c9a227]/20 transition-shadow' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

// Service Card variant with icon
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, className = '' }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`
        group bg-white p-8 rounded-2xl border border-[#e2e8f0]
        shadow-md hover:shadow-2xl hover:border-[#c9a227]/30
        transition-all duration-300
        ${className}
      `}
    >
      <div className="w-14 h-14 bg-[#f8fafc] rounded-xl flex items-center justify-center
                      text-[#c9a227] mb-6 group-hover:bg-[#c9a227] group-hover:text-white
                      transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{title}</h3>
      <p className="text-[#64748b] leading-relaxed">{description}</p>
    </motion.div>
  );
}

// Stats Card variant
interface StatsCardProps {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
}

export function StatsCard({ value, label, suffix = '', className = '' }: StatsCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-2">
        {value}
        {suffix && <span className="text-[#c9a227]">{suffix}</span>}
      </div>
      <div className="text-[#64748b] font-medium">{label}</div>
    </div>
  );
}

// Team Card variant
interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  className?: string;
}

export function TeamCard({ name, role, image, className = '' }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group text-center ${className}`}
    >
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 md:mb-6 overflow-hidden rounded-xl md:rounded-2xl bg-[#f1f5f9]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1]">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#94a3b8]">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/10 transition-colors duration-300" />
      </div>
      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#0f172a] mb-1 px-2">{name}</h4>
      <p className="text-xs sm:text-sm text-[#64748b] px-2">{role}</p>
    </motion.div>
  );
}

// Project Card variant
interface ProjectCardProps {
  title: string;
  category: string;
  image?: string;
  href?: string;
  className?: string;
}

export function ProjectCard({ title, category, image, href = '#', className = '' }: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`group block relative overflow-hidden rounded-2xl ${className}`}
    >
      <div className="aspect-[4/3] bg-[#f1f5f9] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
            <span className="text-[#c9a227] text-6xl font-bold opacity-20">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/50 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      flex flex-col justify-end p-6">
        <span className="text-[#c9a227] text-sm font-medium mb-2">{category}</span>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
      {/* Always visible label */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0f172a]/80 to-transparent
                      group-hover:opacity-0 transition-opacity duration-300">
        <span className="text-[#c9a227] text-sm font-medium mb-1 block">{category}</span>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </motion.a>
  );
}

// Testimonial Card variant
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, company, className = '' }: TestimonialCardProps) {
  return (
    <div className={`bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-lg ${className}`}>
      {/* Quote Icon */}
      <svg className="w-10 h-10 text-[#c9a227] mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-[#334155] text-lg leading-relaxed mb-8">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center">
          <span className="text-[#64748b] font-semibold">{author.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <div>
          <div className="font-semibold text-[#0f172a]">{author}</div>
          <div className="text-sm text-[#64748b]">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
}
