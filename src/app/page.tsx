'use client';

import { motion } from 'framer-motion';
import Button, { ArrowIcon } from '@/components/ui/Button';
import Section, { SectionHeader } from '@/components/ui/Section';
import { ServiceCard, TestimonialCard } from '@/components/ui/Card';
import { ScrollReveal, StaggerContainer, StaggerItem, Counter, Magnetic } from '@/lib/animations';

// ============================================
// Hero Section
// ============================================

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#0d9488]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#f97316]/20 rounded-full blur-3xl"
        />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <span className="w-2 h-2 bg-[#0d9488] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Now Enrolling for 2026 Sessions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Enroll Into Any of Our{' '}
            <span className="relative">
              <span className="text-[#0d9488]">Training Programs</span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8C80 2 220 2 298 8"
                  stroke="#f97316"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Get the required professional skills and certifications that will transform your life. 
            Healthcare, Vocational Skills, and Study Abroad opportunities await you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Magnetic>
              <Button href="/courses" variant="secondary" size="lg" icon={<ArrowIcon />}>
                Explore Courses
              </Button>
            </Magnetic>
            <Button href="/study-abroad" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Study Abroad
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '1000+', label: 'Graduates' },
                { value: '15+', label: 'Courses' },
                { value: '98%', label: 'Success Rate' },
                { value: '4', label: 'Countries' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-[#64748b]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================
// About Preview Section
// ============================================

function AboutSection() {
  return (
    <Section background="white" paddingY="xl">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image/Visual */}
        <ScrollReveal direction="left" className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d9488] to-[#0f766e]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-white/30 rounded-full" />
              <div className="absolute w-48 h-48 border border-white/20 rounded-full" />
              <div className="absolute w-64 h-64 border border-white/10 rounded-full" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-8xl font-bold opacity-20">EVT</span>
            </div>
          </div>
          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl"
          >
            <div className="text-3xl font-bold text-[#0d9488]">EMTEL</div>
            <div className="text-[#64748b] text-sm">Our Mission</div>
          </motion.div>
        </ScrollReveal>

        {/* Content */}
        <div>
          <ScrollReveal>
            <span className="inline-block text-[#0d9488] text-sm font-semibold tracking-wider uppercase mb-4">
              We Are Evolution Vocational Tutors
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
              Educate, Mentor, Train & Empower for Leadership
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              Our mission is to equip as many people as possible with the competencies and skills 
              necessary to become ACTIVE, filling a void in the human capital development of 
              Nigeria and the world at large.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-8">
              Academic qualifications alone are fast becoming insufficient to empower individuals 
              for the opportunities ahead. Why not enroll with us to add a suitable skill or 
              vocation to your abilities?
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/about" icon={<ArrowIcon />}>
                Learn More
              </Button>
              <Button href="/contact" variant="ghost">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}

// ============================================
// Course Categories Section
// ============================================

const courseCategories = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Healthcare Courses',
    description: 'CNA, Practical Nursing, Healthcare Support Worker, Laboratory Assistant - internationally recognized certifications.',
    href: '/courses#healthcare',
    color: 'from-[#dc2626] to-[#b91c1c]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Vocational Courses',
    description: 'Fashion Design, Cosmetics Technology, Basic Computer Training, Food Processing and more hands-on skills.',
    href: '/courses#vocational',
    color: 'from-[#0d9488] to-[#0f766e]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Remedial Courses',
    description: 'WAEC/NECO preparation, IELTS tutorials, and academic support for secondary school exams.',
    href: '/courses#remedial',
    color: 'from-[#7c3aed] to-[#6d28d9]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Study Abroad',
    description: 'UK and Canada advisory services. Study and work permits, university admissions, and relocation assistance.',
    href: '/study-abroad',
    color: 'from-[#f97316] to-[#ea580c]',
  },
];

function CourseCategoriesSection() {
  return (
    <Section id="courses" background="gray" paddingY="xl">
      <SectionHeader
        label="Our Programs"
        title="Transform Your Future With Our Courses"
        description="We offer comprehensive training programs designed to equip you with internationally recognized skills and certifications."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courseCategories.map((category, index) => (
          <StaggerItem key={index}>
            <motion.a
              href={category.href}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group block bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#0d9488] transition-colors">
                {category.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">{category.description}</p>
              <span className="inline-flex items-center gap-2 text-[#0d9488] font-medium">
                View Courses
                <ArrowIcon className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

// ============================================
// Featured Healthcare Courses
// ============================================

const healthcareCourses = [
  {
    title: 'Certified Nursing Assistant (CNA)',
    description: 'Train and equip yourself with knowledge and clinical skills to function effectively in assisting Registered Nurses in any healthcare facility.',
    duration: '3-6 months',
    badge: 'In-Demand',
  },
  {
    title: 'Healthcare Support Worker',
    description: 'Prepare to work with the elderly and vulnerable. Learn about challenges, practical skills, and regulations governing this fast-growing sector.',
    duration: '3-4 months',
    badge: 'Caregiver',
  },
  {
    title: 'Practical Nursing',
    description: 'Auxiliary Nursing programme that equips students with education, skills and competency to assist qualified nursing practitioners.',
    duration: '6-12 months',
    badge: 'Professional',
  },
  {
    title: 'Laboratory Assistant',
    description: 'Learn to collect, process, and prepare patient specimens, perform basic laboratory procedures and electrocardiograms.',
    duration: '4-6 months',
    badge: 'Technical',
  },
];

function HealthcareCoursesSection() {
  return (
    <Section background="white" paddingY="xl">
      <SectionHeader
        label="Healthcare Training"
        title="High-Demand Healthcare Careers"
        description="All over the world, there is an increasingly high demand for healthcare professionals. Our courses equip you with training, skills and certification to seek job opportunities worldwide."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {healthcareCourses.map((course, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-md hover:shadow-xl hover:border-[#0d9488]/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-[#0d9488]/10 text-[#0d9488] text-xs font-semibold rounded-full">
                  {course.badge}
                </span>
                <span className="text-sm text-[#64748b]">{course.duration}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#0d9488] transition-colors">
                {course.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-6">{course.description}</p>
              <Button href="/courses#healthcare" variant="outline" size="sm" icon={<ArrowIcon />}>
                Learn More
              </Button>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal delay={0.4} className="text-center mt-12">
        <Button href="/courses" icon={<ArrowIcon />}>
          View All Courses
        </Button>
      </ScrollReveal>
    </Section>
  );
}

// ============================================
// Why Choose Us Section
// ============================================

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'International Standard',
    description: 'Accredited, internationally recognized certificate and diploma programs through partnerships with healthcare institutions.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Qualified Instructors',
    description: 'Highly qualified professionals with years of experience and a passion for helping students achieve their goals.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Practical Classes',
    description: 'Hands-on learning experience with real-world scenarios, ensuring students are prepared for actual work environments.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Payment',
    description: 'Pay for training over six months after registration. Convenient options for those who cannot afford full tuition upfront.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'International Exposure',
    description: 'Programs designed with content from Nigeria, UK, Canada, and USA. Meet training requirements for licensure in multiple nations.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Job Security',
    description: 'Work in a sector with stable, secure career paths, good pay, great benefits, and opportunities for advancement.',
  },
];

function WhyChooseUsSection() {
  return (
    <Section background="dark" paddingY="xl">
      <SectionHeader
        label="Why Choose Us"
        title="Prepare for Success - Anywhere"
        description="Our courses are designed to make graduates sufficiently proficient to function independently in the economy space, locally and internationally."
        dark
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#0d9488]/50 transition-all"
            >
              <div className="w-14 h-14 bg-[#0d9488]/20 rounded-xl flex items-center justify-center text-[#0d9488] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{feature.description}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

// ============================================
// How It Works Section
// ============================================

const steps = [
  { step: '01', title: 'Theory Classes', description: 'Learn the fundamentals and theoretical knowledge required for your chosen program.' },
  { step: '02', title: 'Skills Laboratory', description: 'Practice in a safe, controlled environment with modern equipment and supervision.' },
  { step: '03', title: 'Practical Classes', description: 'Apply your skills in real-world scenarios through hands-on training at partner facilities.' },
  { step: '04', title: 'Certification', description: 'Receive your internationally recognized certificate upon successful completion.' },
];

function HowItWorksSection() {
  return (
    <Section background="gradient" paddingY="xl">
      <SectionHeader
        label="How Courses Are Delivered"
        title="Your Learning Journey"
        description="A structured approach that combines theory, practice, and real-world experience."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-[#0d9488] to-[#0d9488]/20" />
              )}
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-[#0d9488]">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-[#64748b] leading-relaxed">{item.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

// ============================================
// Study Abroad CTA Section
// ============================================

function StudyAbroadSection() {
  return (
    <Section background="white" paddingY="xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#f97316] to-[#ea580c]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-4xl font-bold mb-2">UK & Canada</div>
                  <div className="text-white/80">Study & Work Opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <span className="inline-block text-[#f97316] text-sm font-semibold tracking-wider uppercase mb-4">
              Overseas Advisory Services
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
              Study and Work Abroad
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              Are you thinking about relocating to the United Kingdom or Canada through work or study? 
              We can help facilitate, guide, and make your dream come through!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ul className="space-y-4 mb-8">
              {[
                'Apply for 2-year Diploma or Masters programs',
                'Study/work permit for self and spouse',
                'January, May, or September intakes available',
                'Nursing and IT professionals can relocate to Canada',
                'Work permit puts you on track to permanent residency',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0d9488] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Button href="/study-abroad" variant="secondary" icon={<ArrowIcon />}>
              Learn More
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}

// ============================================
// CTA Section
// ============================================

function CTASection() {
  return (
    <Section background="dark" paddingY="xl">
      <div className="text-center max-w-3xl mx-auto">
        <ScrollReveal>
          <span className="inline-block text-[#0d9488] text-sm font-semibold tracking-wider uppercase mb-4">
            Start Your Journey Today
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Transform Your Future?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-10">
            Enroll in any of our training programs and get the professional skills and 
            certifications that will open doors to new opportunities.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic>
              <Button href="/courses" variant="secondary" size="lg" icon={<ArrowIcon />}>
                Explore Courses
              </Button>
            </Magnetic>
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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CourseCategoriesSection />
      <HealthcareCoursesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <StudyAbroadSection />
      <CTASection />
    </>
  );
}
