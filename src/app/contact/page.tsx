'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button, { ArrowIcon } from '@/components/ui/Button';
import Section, { SectionHeader } from '@/components/ui/Section';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/lib/animations';

// ============================================
// Hero Section
// ============================================

function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#0d9488]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#f97316]/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <a href="/" className="text-[#94a3b8] hover:text-white transition-colors">Home</a>
            <span className="text-[#64748b]">/</span>
            <span className="text-[#0d9488]">Contact Us</span>
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-[#0d9488] text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Let&apos;s Start Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl leading-relaxed"
          >
            Ready to transform your career with professional skills and certifications? 
            Get in touch with our team to discuss how we can help you achieve your goals.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Contact Form Component
// ============================================

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Strategy Consulting',
    'Digital Transformation',
    'Product Development',
    'Data & Analytics',
    'Cybersecurity',
    'Cloud Solutions',
    'Other',
  ];

  const budgets = [
    'Under $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K+',
    'Not Sure',
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-2xl shadow-xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Thank You!</h3>
        <p className="text-[#64748b] mb-8">
          Your message has been received. Our team will get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#0f172a] mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.name ? 'border-red-500' : 'border-[#e2e8f0]'
            } focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all`}
            placeholder="John Doe"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0f172a] mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email ? 'border-red-500' : 'border-[#e2e8f0]'
            } focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all`}
            placeholder="john@company.com"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#0f172a] mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all"
            placeholder="Acme Inc."
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#0f172a] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[#0f172a] mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all bg-white"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[#0f172a] mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all bg-white"
          >
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-[#0f172a] mb-2">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.message ? 'border-red-500' : 'border-[#e2e8f0]'
          } focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all resize-none`}
          placeholder="Tell us about your project, challenges, and goals..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-[#0f172a] text-white rounded-xl font-medium
                   hover:bg-[#1e293b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                   flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowIcon />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}

// ============================================
// Contact Info Section
// ============================================

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Visit Us',
    lines: ['350 Fifth Avenue', 'New York, NY 10118', 'United States'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Us',
    lines: ['hello@evolution.com', 'careers@evolution.com'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Call Us',
    lines: ['+1 (123) 456-7890', 'Mon-Fri 9am-6pm EST'],
  },
];

function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactInfo.map((info, index) => (
        <ScrollReveal key={index} delay={index * 0.1}>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 bg-[#f8fafc] rounded-xl flex items-center justify-center text-[#c9a227] flex-shrink-0">
              {info.icon}
            </div>
            <div>
              <h4 className="font-semibold text-[#0f172a] mb-1">{info.title}</h4>
              {info.lines.map((line, i) => (
                <p key={i} className="text-[#64748b]">{line}</p>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  );
}

// ============================================
// Offices Section
// ============================================

const offices = [
  { city: 'New York', country: 'United States', timezone: 'EST' },
  { city: 'London', country: 'United Kingdom', timezone: 'GMT' },
  { city: 'Singapore', country: 'Singapore', timezone: 'SGT' },
  { city: 'Sydney', country: 'Australia', timezone: 'AEST' },
];

function OfficesSection() {
  return (
    <Section background="gray" paddingY="xl">
      <SectionHeader
        label="Global Presence"
        title="Our Offices"
        description="With offices across four continents, we're ready to serve clients around the world."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offices.map((office, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-1">{office.city}</h3>
              <p className="text-[#64748b] mb-2">{office.country}</p>
              <span className="inline-block px-3 py-1 bg-[#f1f5f9] text-[#64748b] text-sm rounded-full">
                {office.timezone}
              </span>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

// ============================================
// FAQ Section
// ============================================

const faqs = [
  {
    question: 'How long does a typical engagement last?',
    answer: 'Engagement length varies based on scope and complexity. Strategy projects typically run 8-12 weeks, while implementation projects can extend 6-12 months. We\'ll provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have deep expertise in Financial Services, Healthcare, Retail, Technology, and Manufacturing. However, our methodologies are industry-agnostic and we\'ve successfully delivered projects across 50+ industries.',
  },
  {
    question: 'How do you price your services?',
    answer: 'We offer flexible pricing models including fixed-fee projects, time-and-materials, and retainer arrangements. Pricing is based on project scope, complexity, and duration. We\'ll discuss options during our initial conversation.',
  },
  {
    question: 'What makes Evolution different from other consultancies?',
    answer: 'We combine strategic thinking with hands-on execution. Unlike traditional consultancies that deliver reports and leave, we stay engaged through implementation to ensure our recommendations drive real results.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section background="white" paddingY="xl">
      <SectionHeader
        label="FAQ"
        title="Common Questions"
        description="Find answers to frequently asked questions about working with Evolution."
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <motion.div
              className="bg-[#f8fafc] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between"
              >
                <span className="font-semibold text-[#0f172a]">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 text-[#64748b] flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-[#64748b] leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

// ============================================
// Main Contact Form Section
// ============================================

function ContactFormSection() {
  return (
    <Section background="white" paddingY="xl">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Left Column - Info */}
        <div className="lg:col-span-2">
          <ScrollReveal>
            <span className="inline-block text-[#c9a227] text-sm font-semibold tracking-wider uppercase mb-4">
              Get in Touch
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
              We&apos;d Love to Hear From You
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-8">
              Whether you have a question about our services, need a quote, 
              or want to discuss a potential project, our team is ready to help.
            </p>
          </ScrollReveal>
          <ContactInfo />
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

// ============================================
// Main Page Component
// ============================================

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <OfficesSection />
      <FAQSection />
    </>
  );
}
