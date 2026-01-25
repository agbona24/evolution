'use client';

import { motion } from 'framer-motion';
import Button, { ArrowIcon } from '@/components/ui/Button';
import Section, { SectionHeader } from '@/components/ui/Section';
import { TeamCard } from '@/components/ui/Card';
import { ScrollReveal, StaggerContainer, StaggerItem, Counter } from '@/lib/animations';

// ============================================
// Hero Section
// ============================================

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-[#c9a227] text-sm font-semibold tracking-wider uppercase mb-4"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight mb-6"
          >
            We Build the Future of Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#64748b] max-w-2xl leading-relaxed"
          >
            For over 15 years, Evolution has been the trusted partner for companies 
            seeking transformative growth through strategic innovation and digital excellence.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Story Section
// ============================================

function StorySection() {
  return (
    <Section background="white" paddingY="xl">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image/Visual */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="w-72 h-72 border border-[#c9a227]/20 rounded-full"
                />
                <div className="absolute w-56 h-56 border-2 border-[#c9a227]/30 rounded-full" />
                <div className="absolute w-40 h-40 border border-[#c9a227]/40 rounded-full" />
                <span className="absolute text-[#c9a227] text-9xl font-bold opacity-20">E</span>
              </div>
            </div>
            {/* Timeline Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0f172a]">300%</div>
                  <div className="text-sm text-[#64748b]">Average ROI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div>
          <ScrollReveal>
            <span className="inline-block text-[#c9a227] text-sm font-semibold tracking-wider uppercase mb-4">
              Our Story
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
              From Humble Beginnings to Industry Leadership
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              Evolution was founded in 2010 with a simple yet powerful vision: to help businesses 
              navigate the complexities of modern markets through strategic thinking and innovative solutions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              What started as a small consultancy has grown into a global firm with offices in 
              New York, London, Singapore, and Sydney. Today, we serve Fortune 500 companies 
              and ambitious startups alike, delivering measurable results that drive sustainable growth.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-lg text-[#64748b] leading-relaxed">
              Our success is built on a foundation of deep expertise, unwavering commitment to 
              client outcomes, and a culture that attracts the brightest minds in the industry.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}

// ============================================
// Values Section
// ============================================

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Integrity',
    description: 'We operate with unwavering honesty and transparency in every interaction.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to deliver cutting-edge solutions.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Collaboration',
    description: 'We work as true partners, fostering strong relationships with clients and teams.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Excellence',
    description: 'We pursue the highest standards in everything we do, every single day.',
  },
];

function ValuesSection() {
  return (
    <Section background="gray" paddingY="xl">
      <SectionHeader
        label="Our Values"
        title="Principles That Guide Us"
        description="These core values define who we are and how we work with our clients and each other."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#f8fafc] rounded-xl flex items-center justify-center text-[#c9a227] mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{value.title}</h3>
              <p className="text-[#64748b] leading-relaxed">{value.description}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

// ============================================
// Team Section
// ============================================

const team = [
  { name: 'Alexandra Chen', role: 'Chief Executive Officer' },
  { name: 'Marcus Williams', role: 'Chief Strategy Officer' },
  { name: 'Sarah Thompson', role: 'Chief Technology Officer' },
  { name: 'David Rodriguez', role: 'Chief Operations Officer' },
  { name: 'Emily Parker', role: 'VP of Consulting' },
  { name: 'James Mitchell', role: 'VP of Engineering' },
  { name: 'Lisa Anderson', role: 'VP of Client Success' },
  { name: 'Michael Brown', role: 'VP of Business Development' },
];

function TeamSection() {
  return (
    <Section background="white" paddingY="xl">
      <SectionHeader
        label="Our Team"
        title="Meet the Leaders"
        description="Our diverse team of experts brings decades of combined experience across industries and disciplines."
      />

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <StaggerItem key={index}>
            <TeamCard name={member.name} role={member.role} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal delay={0.4} className="text-center mt-12">
        <Button href="/contact" variant="outline" icon={<ArrowIcon />}>
          Join Our Team
        </Button>
      </ScrollReveal>
    </Section>
  );
}

// ============================================
// Milestones Section
// ============================================

const milestones = [
  { year: '2010', title: 'Founded', description: 'Evolution established in New York City' },
  { year: '2013', title: 'Expansion', description: 'Opened offices in London and Singapore' },
  { year: '2016', title: '100 Clients', description: 'Milestone of serving 100+ enterprise clients' },
  { year: '2019', title: 'Award', description: 'Named Top Consulting Firm by Forbes' },
  { year: '2022', title: 'Global', description: 'Expanded to 4 continents with 500+ employees' },
  { year: '2024', title: 'Innovation', description: 'Launched AI-powered analytics platform' },
];

function MilestonesSection() {
  return (
    <Section background="dark" paddingY="xl">
      <SectionHeader
        label="Our Journey"
        title="Key Milestones"
        description="A timeline of growth, achievement, and continuous innovation."
        dark
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#334155] hidden lg:block" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="text-[#c9a227] font-bold text-xl mb-2">{milestone.year}</div>
                  <h3 className="text-white text-2xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-[#94a3b8]">{milestone.description}</p>
                </div>
                <div className="hidden lg:flex w-4 h-4 bg-[#c9a227] rounded-full relative z-10 ring-4 ring-[#0f172a]" />
                <div className="flex-1 hidden lg:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============================================
// Stats Section
// ============================================

const aboutStats = [
  { value: 4, label: 'Global Offices' },
  { value: 500, suffix: '+', label: 'Team Members' },
  { value: 50, suffix: '+', label: 'Industries Served' },
  { value: 15, suffix: '+', label: 'Years Experience' },
];

function AboutStatsSection() {
  return (
    <Section background="gradient" paddingY="lg">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {aboutStats.map((stat, index) => (
          <ScrollReveal key={index} delay={index * 0.1} className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-2">
              <Counter to={stat.value} duration={2} suffix={stat.suffix || ''} />
            </div>
            <div className="text-[#64748b] font-medium">{stat.label}</div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

// ============================================
// CTA Section
// ============================================

function AboutCTA() {
  return (
    <Section background="white" paddingY="xl">
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-12 lg:p-16 text-center">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how Evolution can help transform your business and achieve your strategic goals.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Button href="/contact" variant="secondary" size="lg" icon={<ArrowIcon />}>
            Get in Touch
          </Button>
        </ScrollReveal>
      </div>
    </Section>
  );
}

// ============================================
// Main Page Component
// ============================================

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <AboutStatsSection />
      <ValuesSection />
      <TeamSection />
      <MilestonesSection />
      <AboutCTA />
    </>
  );
}
