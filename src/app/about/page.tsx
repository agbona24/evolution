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
            <span className="text-[#0d9488]">About Us</span>
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-[#0d9488] text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Who We Are
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Evolution Vocational Tutors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl leading-relaxed"
          >
            Our mission is to Educate, Mentor, Train, and Empower for Leadership (EMTEL) 
            by equipping as many people as possible with the competencies and skills necessary 
            to become ACTIVE contributors in the workforce.
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src="/images/building/office_building.jpeg" 
                alt="Evolution Vocational Tutors Building"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0f172a]">1000+</div>
                  <div className="text-sm text-[#64748b]">Graduates</div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div>
          <ScrollReveal>
            <span className="inline-block text-[#0d9488] text-sm font-semibold tracking-wider uppercase mb-4">
              Our Story
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
              Empowering Futures Through Quality Vocational Training
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              Evolution Vocational Tutors was founded with a powerful mission: to Educate, Mentor, 
              Train, and Empower for Leadership (EMTEL). We believe that practical skills and quality 
              education are the keys to unlocking limitless opportunities.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              Based in Lagos, Nigeria, we have grown from a small training center to a comprehensive 
              vocational institution offering healthcare training, professional certifications, and 
              study abroad advisory services. Our graduates are now making their mark across Nigeria 
              and internationally.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-lg text-[#64748b] leading-relaxed">
              Our success is built on experienced tutors, hands-on practical training, and a 
              commitment to student success that goes beyond the classroom.
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
  { name: 'Chief (Dr). Ogundipe Tony Bosun', role: 'Chief Executive Officer', image: '/images/ceo.jpeg' },
  { name: 'Salami Babatunde Ayinla', role: 'Evolution Manager', image: '/images/salami.jpeg' },
  { name: 'Hammed Kazeem', role: 'Bursar', image: '/images/bursar.jpeg' },
  { name: 'Dr Chen James', role: 'Tutor, Evolution Vocational Tutors', image: '/images/tutor1.jpeg' },
  { name: 'Jimoh Ayinde M.', role: 'Admission Officer', image: '/images/admission_officer.jpeg' },
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
            <TeamCard name={member.name} role={member.role} image={member.image} />
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
// Practical Training Gallery Section
// ============================================

const practicalImages = [
  { src: '/images/practical/2.jpeg', alt: 'Healthcare Practical Training' },
  { src: '/images/practical/3.jpeg', alt: 'Hands-on Medical Training' },
  { src: '/images/practical/4.jpeg', alt: 'Student Practical Session' },
  { src: '/images/practical/5.jpeg', alt: 'Healthcare Skills Training' },
  { src: '/images/practical/6.jpeg', alt: 'Medical Equipment Training' },
  { src: '/images/practical/7.jpeg', alt: 'Clinical Practice Session' },
  { src: '/images/practical/8.jpeg', alt: 'Healthcare Demonstration' },
  { src: '/images/practical/9.jpeg', alt: 'Student Healthcare Training' },
];

function PracticalGallerySection() {
  return (
    <Section background="gray" paddingY="xl">
      <SectionHeader
        label="Hands-On Learning"
        title="Healthcare Practical Training"
        description="Our state-of-the-art facilities provide students with real-world practical experience in healthcare settings."
      />

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {practicalImages.map((image, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{image.alt}</span>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

// ============================================
// Facilities Section
// ============================================

function FacilitiesSection() {
  return (
    <Section background="white" paddingY="xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <ScrollReveal>
            <span className="inline-block text-[#0d9488] text-sm font-semibold tracking-wider uppercase mb-4">
              Our Facilities
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
              Modern Training Environment
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              Our purpose-built training facility in Lagos provides the ideal environment for 
              learning. With well-equipped classrooms, practical training areas, and modern 
              amenities, students receive education that prepares them for real-world success.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ul className="space-y-4">
              {['Equipped Healthcare Training Labs', 'Modern Lecture Halls', 'Comfortable Study Areas', 'Resource Library'].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#0d9488]/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#64748b]">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
        
        <ScrollReveal direction="right">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <img 
                  src="/images/building/office_building.jpeg" 
                  alt="Evolution Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <img 
                  src="/images/building/office_building2.jpeg" 
                  alt="Evolution Facilities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

// ============================================
// Milestones Section
// ============================================

const milestones = [
  { year: '2018', title: 'Founded', description: 'Evolution Vocational Tutors established in Lagos, Nigeria' },
  { year: '2019', title: 'First Graduation', description: 'Celebrated our first cohort of healthcare graduates' },
  { year: '2020', title: 'Expansion', description: 'Added Study Abroad advisory services' },
  { year: '2022', title: 'Partnerships', description: 'Established international university partnerships' },
  { year: '2024', title: 'Growth', description: 'Expanded training facilities and course offerings' },
  { year: '2025', title: 'Excellence', description: 'Recognized for outstanding vocational training' },
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
  { value: 1000, suffix: '+', label: 'Graduates' },
  { value: 20, suffix: '+', label: 'Expert Tutors' },
  { value: 10, suffix: '+', label: 'Course Programs' },
  { value: 7, suffix: '+', label: 'Years Experience' },
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
            Ready to Start Your Journey?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8">
            Take the first step towards a rewarding career. Contact us today to learn about our programs and enrollment options.
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
      <FacilitiesSection />
      <PracticalGallerySection />
      <ValuesSection />
      <TeamSection />
      <MilestonesSection />
      <AboutCTA />
    </>
  );
}
