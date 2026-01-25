'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const footerLinks = {
  courses: [
    { href: '/courses#healthcare', label: 'Healthcare Courses' },
    { href: '/courses#vocational', label: 'Vocational Courses' },
    { href: '/courses#remedial', label: 'Remedial Classes' },
    { href: '/study-abroad', label: 'Study Abroad' },
  ],
  healthcare: [
    { href: '/courses#cna', label: 'Certified Nursing Assistant' },
    { href: '/courses#caregiver', label: 'Healthcare Support Worker' },
    { href: '/courses#lab', label: 'Laboratory Assistant' },
    { href: '/courses#nursing', label: 'Practical Nursing' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '#', label: 'Our Team' },
    { href: '#', label: 'Partners' },
  ],
};

const socialLinks = [
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0d9488] to-[#0f766e] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight leading-none">Evolution</span>
                  <span className="text-[10px] text-[#0d9488] font-medium tracking-wide">VOCATIONAL TUTORS</span>
                </div>
              </div>
            </Link>
            <p className="text-[#94a3b8] max-w-sm mb-6 leading-relaxed">
              Educate, Mentor, Train, and Empower for Leadership. Equipping individuals 
              with competencies and skills necessary for success in Nigeria and worldwide.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-[#94a3b8]">
                <svg className="w-5 h-5 mt-0.5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Zone A, Block 16-18, Lane 3 PPT Tescom, Irede CDA, Agura/Gberigbe, Ikorodu, Lagos</span>
              </div>
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+234 916 611 1123</span>
              </div>
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">evovocatutors@gmail.com</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center
                             text-[#94a3b8] hover:text-white hover:bg-[#0d9488] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Courses Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Our Programs</h4>
            <ul className="space-y-4">
              {footerLinks.courses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Healthcare Training</h4>
            <ul className="space-y-4">
              {footerLinks.healthcare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e293b]">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748b] text-sm text-center md:text-left">
            © {currentYear} Evolution Vocational Tutors. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-[#64748b] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#64748b] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Premium Developer Credit */}
      <DeveloperCredit />
    </footer>
  );
}

// ============================================
// Premium Developer Credit Component
// ============================================

function DeveloperCredit() {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappNumber = '2347069716822';
  const defaultMessage = encodeURIComponent("Hi! I saw the website you built for Evolution Vocational Tutors. I'd love to discuss a project with you.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0a0f1a] via-[#0f172a] to-[#0a0f1a]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl"
        />
      </div>

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative block py-4 md:py-5 group cursor-pointer"
      >
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            {/* Crafted by text with animation */}
            <motion.div 
              className="flex items-center gap-2"
              animate={{ opacity: isHovered ? 0.7 : 1 }}
            >
              <motion.span
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="text-lg"
              >
                ✨
              </motion.span>
              <span className="text-xs sm:text-sm text-[#64748b] font-medium tracking-wide">
                Crafted with precision by
              </span>
            </motion.div>

            {/* Developer name with premium styling */}
            <motion.div
              className="relative flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              {/* Glowing border effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#1e293b]/80 to-[#334155]/80 rounded-xl border border-[#334155]/50 group-hover:border-violet-500/30 transition-all duration-500">
                {/* Code icon */}
                <motion.div
                  animate={{ 
                    rotateY: isHovered ? 180 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </motion.div>

                {/* Developer name */}
                <div className="flex flex-col">
                  <motion.span
                    className="text-sm sm:text-base font-bold bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent"
                  >
                    Harzotech
                  </motion.span>
                  <span className="text-[10px] sm:text-xs text-[#64748b] font-medium tracking-wider uppercase">
                    Web Development Agency
                  </span>
                </div>

                {/* WhatsApp indicator */}
                <motion.div
                  animate={{ 
                    scale: isHovered ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
                  className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA hint */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className="hidden sm:flex items-center gap-1 text-xs text-violet-400"
            >
              <span>Click to connect</span>
              <motion.span
                animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Animated border line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5), transparent)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.a>
    </div>
  );
}
