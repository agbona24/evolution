'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/courses', label: 'Courses' },
  { href: '/study-abroad', label: 'Study Abroad' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center"
          >
            <img 
              src="/images/logo.png" 
              alt="Evolution Vocational Tutors" 
              className="h-12 sm:h-14 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <motion.span
                className={`relative text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-[#c9a227]'
                    : isScrolled
                    ? 'text-[#334155] hover:text-[#0f172a]'
                    : 'text-[#334155] hover:text-[#0f172a]'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c9a227]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Link href="/courses">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#f97316] text-white rounded-full text-sm font-medium
                         hover:bg-[#ea580c] transition-colors shadow-lg shadow-[#f97316]/20"
            >
              Enroll Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              className={`block h-0.5 w-full rounded-full transition-colors ${
                isMobileMenuOpen || isScrolled ? 'bg-[#0f172a]' : 'bg-[#0f172a]'
              }`}
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className={`block h-0.5 w-full rounded-full transition-colors ${
                isMobileMenuOpen || isScrolled ? 'bg-[#0f172a]' : 'bg-[#0f172a]'
              }`}
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              className={`block h-0.5 w-full rounded-full transition-colors ${
                isMobileMenuOpen || isScrolled ? 'bg-[#0f172a]' : 'bg-[#0f172a]'
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Close button area */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center">
                  <img 
                    src="/images/logo.png" 
                    alt="Evolution Vocational Tutors" 
                    className="h-10 w-auto"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-4 px-4 rounded-xl transition-all ${
                        pathname === link.href 
                          ? 'bg-[#0d9488]/10 text-[#0d9488]' 
                          : 'text-[#0f172a] hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-lg font-medium">{link.label}</span>
                      {pathname === link.href && (
                        <motion.div
                          layoutId="mobileActiveNav"
                          className="w-2 h-2 bg-[#0d9488] rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="p-6 pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link href="/courses">
                    <button className="w-full py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-xl font-semibold text-lg shadow-lg shadow-[#f97316]/25 active:scale-[0.98] transition-transform">
                      Enroll Now
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className="p-6 pt-0 border-t border-gray-100 mt-4">
                <div className="space-y-4">
                  <a href="tel:+2349166111123" className="flex items-center gap-3 text-[#64748b] hover:text-[#0d9488] transition-colors">
                    <div className="w-10 h-10 bg-[#0d9488]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">+234 916 611 1123</span>
                  </a>
                  <a href="mailto:evovocatutors@gmail.com" className="flex items-center gap-3 text-[#64748b] hover:text-[#0d9488] transition-colors">
                    <div className="w-10 h-10 bg-[#0d9488]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">evovocatutors@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
