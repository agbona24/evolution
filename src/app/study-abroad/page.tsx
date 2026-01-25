'use client';

import { motion } from 'framer-motion';
import Button, { ArrowIcon } from '@/components/ui/Button';
import Section, { SectionHeader } from '@/components/ui/Section';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/lib/animations';

// ============================================
// Hero Section
// ============================================

function StudyAbroadHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#f97316]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#0d9488]/20 rounded-full blur-3xl"
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
            <span className="text-[#f97316]">Study Abroad</span>
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-[#f97316] text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Overseas Advisory Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Study and Work in{' '}
            <span className="text-[#f97316]">UK & Canada</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl leading-relaxed"
          >
            Are you thinking about relocating to the United Kingdom or Canada through work or study? 
            We can help facilitate, guide, and make your dream come through!
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Countries Section
// ============================================

const countries = [
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    color: 'from-[#1e3a5f] to-[#1e293b]',
    highlights: [
      'World-class universities',
      '2-year post-study work visa',
      'Diverse career opportunities',
      'Rich cultural experience',
    ],
    programs: [
      'Masters Degree Programs',
      'Diploma & Certificate Courses',
      'Healthcare Training',
      'IT & Technology Programs',
    ],
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    color: 'from-[#dc2626] to-[#991b1b]',
    highlights: [
      'Immigration-friendly policies',
      'High quality of life',
      'Path to permanent residency',
      'Work permits for families',
    ],
    programs: [
      '2-Year Diploma Programs',
      'Masters Degree Programs',
      'Nursing Programs',
      'IT & Tech Skills Training',
    ],
  },
];

function CountriesSection() {
  return (
    <Section background="white" paddingY="xl">
      <SectionHeader
        label="Destinations"
        title="Choose Your Destination"
        description="We provide comprehensive support for students and professionals looking to study or work in the United Kingdom or Canada."
      />

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {countries.map((country, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#e2e8f0]"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${country.color} p-8 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{country.flag}</span>
                  <h3 className="text-3xl font-bold">{country.name}</h3>
                </div>
                <p className="text-white/80">Study, work, and build your future</p>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Why {country.name}?
                    </h4>
                    <ul className="space-y-2">
                      {country.highlights.map((item, i) => (
                        <li key={i} className="text-sm text-[#64748b] flex items-start gap-2">
                          <span className="text-[#0d9488] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Programs */}
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Available Programs
                    </h4>
                    <ul className="space-y-2">
                      {country.programs.map((item, i) => (
                        <li key={i} className="text-sm text-[#64748b] flex items-start gap-2">
                          <span className="text-[#f97316] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#e2e8f0]">
                  <Button href="/contact" variant="primary" icon={<ArrowIcon />}>
                    Learn More About {country.name}
                  </Button>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

// ============================================
// Services Offered Section
// ============================================

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'University Admission',
    description: 'We help you identify suitable universities and programs, prepare your application, and guide you through the admission process.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: 'Visa Processing',
    description: 'Complete support for study visa and work permit applications, including documentation preparation and interview coaching.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Financial Guidance',
    description: 'Advice on tuition fees, living costs, scholarship opportunities, and proof of funds requirements.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Accommodation Support',
    description: 'Help finding suitable accommodation near your institution, including student housing and private rentals.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Spouse & Dependent Visas',
    description: 'Assistance with visa applications for your spouse and dependents, allowing your family to join you abroad.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'IELTS Preparation',
    description: 'Intensive English language training to help you achieve the required IELTS score for your visa and admission.',
  },
];

function ServicesSection() {
  return (
    <Section background="gray" paddingY="xl">
      <SectionHeader
        label="Our Services"
        title="How We Help You"
        description="From application to arrival, we provide end-to-end support to make your international education journey smooth and successful."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all h-full"
            >
              <div className="w-16 h-16 bg-[#f97316]/10 rounded-xl flex items-center justify-center text-[#f97316] mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{service.title}</h3>
              <p className="text-[#64748b] leading-relaxed">{service.description}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

// ============================================
// Process Section
// ============================================

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Meet with our advisors to discuss your goals, qualifications, and preferred destination.',
  },
  {
    step: '02',
    title: 'Program Selection',
    description: 'We help you identify suitable programs and institutions based on your profile and career goals.',
  },
  {
    step: '03',
    title: 'Application',
    description: 'Prepare and submit your applications with our guidance, including all required documentation.',
  },
  {
    step: '04',
    title: 'Visa Processing',
    description: 'Once admitted, we guide you through the visa application process and interview preparation.',
  },
  {
    step: '05',
    title: 'Pre-Departure',
    description: 'Receive orientation on what to expect, accommodation assistance, and travel preparation.',
  },
  {
    step: '06',
    title: 'Arrival Support',
    description: 'Get settled in your new country with our continued support and guidance.',
  },
];

function ProcessSection() {
  return (
    <Section background="dark" paddingY="xl">
      <SectionHeader
        label="The Process"
        title="Your Journey to Studying Abroad"
        description="A step-by-step guide to how we help you achieve your dream of international education."
        dark
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#f97316]/30 transition-all h-full">
                <span className="text-5xl font-bold text-[#f97316]/20 absolute top-4 right-4">{item.step}</span>
                <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{item.title}</h3>
                <p className="text-[#94a3b8] leading-relaxed relative z-10">{item.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

// ============================================
// Intake Section
// ============================================

function IntakeSection() {
  const intakes = [
    { month: 'January', status: 'Applications Open', color: 'bg-green-500' },
    { month: 'May', status: 'Applications Open', color: 'bg-green-500' },
    { month: 'September', status: 'Most Popular', color: 'bg-[#f97316]' },
  ];

  return (
    <Section background="gradient" paddingY="xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <span className="inline-block text-[#0d9488] text-sm font-semibold tracking-wider uppercase mb-4">
            Application Intakes
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
            Start Your Journey in 2025/2026
          </h2>
          <p className="text-lg text-[#64748b] leading-relaxed mb-8">
            Universities in UK and Canada have multiple intake periods throughout the year. 
            Apply early to secure your spot and allow time for visa processing.
          </p>

          <div className="space-y-4 mb-8">
            {intakes.map((intake, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className={`w-3 h-3 ${intake.color} rounded-full`} />
                <div className="flex-grow">
                  <div className="font-semibold text-[#0f172a]">{intake.month} Intake</div>
                  <div className="text-sm text-[#64748b]">{intake.status}</div>
                </div>
                <Button href="/contact" variant="outline" size="sm">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="bg-[#0f172a] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Who Can Apply?</h3>
            <ul className="space-y-4 mb-8">
              {[
                'BSc/HND holders looking for Masters programs',
                'Healthcare professionals (Nurses, Lab Scientists)',
                'IT professionals seeking international opportunities',
                'Diploma holders wanting to further their education',
                'SSCE holders for foundation programs',
                'Professionals seeking career advancement',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0d9488] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#94a3b8]">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="secondary" icon={<ArrowIcon />}>
              Check Your Eligibility
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

// ============================================
// CTA Section
// ============================================

function CTASection() {
  return (
    <Section background="white" paddingY="xl">
      <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-3xl p-8 lg:p-16 text-center text-white">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
            Ready to Study Abroad?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Take the first step towards your international education journey. 
            Contact us today for a free consultation and let us help you achieve your dreams.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="bg-white text-[#f97316] border-white hover:bg-white/90"
              icon={<ArrowIcon />}
            >
              Book Free Consultation
            </Button>
            <Button 
              href="tel:+2349166111123" 
              variant="ghost" 
              size="lg"
              className="text-white hover:bg-white/10"
            >
              Call: +234 916 611 1123
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

// ============================================
// Main Page Component
// ============================================

export default function StudyAbroadPage() {
  return (
    <>
      <StudyAbroadHero />
      <CountriesSection />
      <ServicesSection />
      <ProcessSection />
      <IntakeSection />
      <CTASection />
    </>
  );
}
