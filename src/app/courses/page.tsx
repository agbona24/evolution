'use client';

import { motion } from 'framer-motion';
import Button, { ArrowIcon } from '@/components/ui/Button';
import Section, { SectionHeader } from '@/components/ui/Section';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/lib/animations';

// ============================================
// Hero Section
// ============================================

function CoursesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#0d9488]/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-[#0d9488] text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Our Training Programs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Professional Skills That Transform Lives
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl leading-relaxed"
          >
            Choose from our range of internationally recognized courses in Healthcare, 
            Vocational Skills, and Academic Preparation. Start your journey to a better future today.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Healthcare Courses Section
// ============================================

const healthcareCourses = [
  {
    title: 'Certified Nursing Assistant (CNA)',
    duration: '3-6 months',
    description: 'Train and equip yourself with education, knowledge and clinical skills for you to function effectively in assisting Registered Nurses in any healthcare facility. If you want to enter the healthcare industry, this programme gives you a clear edge.',
    topics: [
      'Anatomy and Physiology',
      'Human Diseases',
      'Medical Terminology',
      'Practical Nursing Concepts',
      'Care Giver Skills',
      'CPR / BLS Certification',
    ],
    badge: 'Most Popular',
    color: 'from-[#dc2626] to-[#b91c1c]',
  },
  {
    title: 'Healthcare Support Worker (Caregiver)',
    duration: '3-4 months',
    description: 'This is a preparatory course for those who wish to work with the elderly and vulnerable. Get a sound knowledge of challenges facing aging people, how to work with them, and regulations governing this rapidly growing sector.',
    topics: [
      'Understanding the Elderly',
      'Basic Care Skills',
      'Mental Health Awareness',
      'Safety & Hygiene',
      'Communication Skills',
      'End of Life Care',
    ],
    badge: 'High Demand',
    color: 'from-[#0d9488] to-[#0f766e]',
  },
  {
    title: 'Practical Nursing (Auxiliary Nursing)',
    duration: '6-12 months',
    description: 'Practical Nursing is an Auxiliary Nursing programme designed to equip students with education, skills and competency to assist qualified nursing practitioners in the day-to-day care of patients in hospitals and other clinical settings.',
    topics: [
      'Foundation of Nursing',
      'Pharmacology Basics',
      'Patient Assessment',
      'Clinical Procedures',
      'Infection Control',
      'Documentation',
    ],
    badge: 'Professional',
    color: 'from-[#7c3aed] to-[#6d28d9]',
  },
  {
    title: 'Laboratory Assistant / Phlebotomist',
    duration: '4-6 months',
    description: 'Laboratory Technician Assistant will learn how to collect, process, and prepare patient specimens for lab analysis, perform routine laboratory procedures, blood specimen collection, and electrocardiograms.',
    topics: [
      'Specimen Collection',
      'Laboratory Safety',
      'Phlebotomy Techniques',
      'ECG Procedures',
      'Quality Control',
      'Lab Equipment Usage',
    ],
    badge: 'Technical',
    color: 'from-[#f97316] to-[#ea580c]',
  },
];

function HealthcareSection() {
  return (
    <Section id="healthcare" background="white" paddingY="xl">
      <SectionHeader
        label="Healthcare Training"
        title="High-Demand Healthcare Careers"
        description="All over the world, there is an increasingly high demand for healthcare professionals. Our programmes train graduates to seek job opportunities worldwide."
      />

      <StaggerContainer className="space-y-8">
        {healthcareCourses.map((course, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-lg hover:shadow-xl hover:border-[#0d9488]/30 transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Course Info */}
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${course.color} text-white text-xs font-semibold rounded-full`}>
                      {course.badge}
                    </span>
                    <span className="text-sm text-[#64748b] flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-[#0d9488] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-[#64748b] leading-relaxed mb-6">{course.description}</p>
                  <Button href="/contact" variant="primary" icon={<ArrowIcon />}>
                    Enroll Now
                  </Button>
                </div>

                {/* Topics Covered */}
                <div className="bg-[#f8fafc] p-6 rounded-xl">
                  <h4 className="font-semibold text-[#0f172a] mb-4">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#64748b]">
                        <svg className="w-4 h-4 text-[#0d9488] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
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
// Vocational Courses Section
// ============================================

const vocationalCourses = [
  {
    title: 'Fashion Design & Tailoring',
    duration: '6-12 months',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Learn fashion design from basics to advanced techniques. Master pattern making, cutting, sewing, and fashion business management.',
  },
  {
    title: 'Basic Computer Training',
    duration: '3-6 months',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Master essential computer skills including Microsoft Office, internet usage, email, and basic troubleshooting for the digital age.',
  },
  {
    title: 'Cosmetics Technology',
    duration: '3-6 months',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    description: 'Learn soap making, cream production, perfume formulation, and other cosmetic product development with practical hands-on training.',
  },
  {
    title: 'Food Processing & Preservation',
    duration: '3-6 months',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    description: 'Master food processing, packaging, and preservation techniques. Learn to create commercial products for retail and distribution.',
  },
  {
    title: 'Hair Styling & Beauty',
    duration: '6-12 months',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Professional hair styling, braiding, weaving, makeup artistry, and salon management for a career in the beauty industry.',
  },
  {
    title: 'Graphic Design & Digital Skills',
    duration: '4-6 months',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Learn Photoshop, CorelDraw, Canva and digital design skills for branding, social media graphics, and print materials.',
  },
];

function VocationalSection() {
  return (
    <Section id="vocational" background="gray" paddingY="xl">
      <SectionHeader
        label="Vocational Skills"
        title="Practical Skills for Self-Employment"
        description="Acquire hands-on skills that can help you start your own business or secure employment in growing industries."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocationalCourses.map((course, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full flex flex-col"
            >
              <div className="w-16 h-16 bg-[#0d9488]/10 rounded-xl flex items-center justify-center text-[#0d9488] mb-6">
                {course.icon}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-[#64748b] flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#0d9488] transition-colors">
                {course.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-6 flex-grow">{course.description}</p>
              <Button href="/contact" variant="outline" size="sm" icon={<ArrowIcon />}>
                Learn More
              </Button>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

// ============================================
// Remedial Courses Section
// ============================================

const remedialCourses = [
  {
    title: 'WAEC / NECO Preparation',
    description: 'Comprehensive preparation for West African Examinations Council (WAEC) and National Examination Council (NECO) exams. Expert tutoring in all subjects with past questions practice.',
    features: ['All Core Subjects', 'Past Questions Practice', 'Mock Exams', 'One-on-One Support'],
  },
  {
    title: 'IELTS Preparation',
    description: 'Intensive IELTS preparation for students planning to study or work abroad. Covers all four modules: Listening, Reading, Writing, and Speaking.',
    features: ['Speaking Practice', 'Writing Feedback', 'Mock Tests', 'Score Improvement Strategies'],
  },
  {
    title: 'JAMB / UTME Tutorials',
    description: 'Prepare for the Joint Admissions and Matriculation Board exam with comprehensive subject coverage and practice tests.',
    features: ['All JAMB Subjects', 'CBT Practice', 'Past Questions', 'Score Tracking'],
  },
];

function RemedialSection() {
  return (
    <Section id="remedial" background="white" paddingY="xl">
      <SectionHeader
        label="Academic Preparation"
        title="Remedial & Exam Preparation"
        description="Expert academic support to help you achieve excellent results in your examinations and gain admission to your dream institution."
      />

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {remedialCourses.map((course, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-[#f8fafc] to-white p-8 rounded-2xl border border-[#e2e8f0] shadow-md hover:shadow-xl hover:border-[#7c3aed]/30 transition-all h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-[#7c3aed]/10 rounded-xl flex items-center justify-center text-[#7c3aed] mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#7c3aed] transition-colors">
                {course.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-6 flex-grow">{course.description}</p>
              <ul className="space-y-2 mb-6">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#334155]">
                    <svg className="w-4 h-4 text-[#7c3aed] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="outline" size="sm" icon={<ArrowIcon />} className="mt-auto">
                Register
              </Button>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

// ============================================
// Course Delivery Section
// ============================================

function CourseDeliverySection() {
  const deliveryMethods = [
    {
      step: '01',
      title: 'Theory Classes',
      description: 'Comprehensive classroom instruction covering all theoretical aspects of your chosen program.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Skills Laboratory',
      description: 'Practice in our well-equipped skills lab with mannequins, models, and simulation equipment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Clinical / Practical Experience',
      description: 'Hands-on training at partner facilities including hospitals, clinics, and industry sites.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Certification',
      description: 'Receive internationally recognized certificates upon successful completion of your program.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <Section background="dark" paddingY="xl">
      <SectionHeader
        label="How We Teach"
        title="Course Delivery Method"
        description="Our structured approach combines theory, practice, and real-world experience to ensure you&apos;re fully prepared for your career."
        dark
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {deliveryMethods.map((method, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="relative text-center">
              {/* Connector */}
              {index < deliveryMethods.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-[#0d9488] to-[#0d9488]/20" />
              )}
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto bg-[#0d9488]/20 rounded-full flex items-center justify-center text-[#0d9488] mb-6">
                  {method.icon}
                </div>
                <span className="inline-block text-[#0d9488] font-bold text-sm mb-2">{method.step}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-[#94a3b8] leading-relaxed">{method.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

// ============================================
// Flexible Payment Section
// ============================================

function PaymentSection() {
  return (
    <Section background="gradient" paddingY="xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <span className="inline-block text-[#f97316] text-sm font-semibold tracking-wider uppercase mb-4">
            Affordable Education
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
            Flexible Payment Plans Available
          </h2>
          <p className="text-lg text-[#64748b] leading-relaxed mb-6">
            We understand that education is an investment. That&apos;s why we offer flexible payment options 
            to make our programs accessible to everyone who is committed to learning.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              'Pay tuition over 6 months after registration',
              'Installment plans available for all courses',
              'No interest on payment plans',
              'Discounts for full upfront payment',
              'Group enrollment discounts',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#0d9488] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#334155]">{item}</span>
              </li>
            ))}
          </ul>
          <Button href="/contact" icon={<ArrowIcon />}>
            Get Fee Structure
          </Button>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Ready to Enroll?</h3>
            <p className="text-[#64748b] mb-6">
              Contact us today to learn more about our courses, fees, and enrollment process.
            </p>
            <div className="space-y-4">
              <a href="tel:+2349166111123" className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl hover:bg-[#f1f5f9] transition-colors">
                <div className="w-12 h-12 bg-[#0d9488]/10 rounded-full flex items-center justify-center text-[#0d9488]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#0f172a]">Call Us</div>
                  <div className="text-[#64748b]">+234 916 611 1123</div>
                </div>
              </a>
              <a href="mailto:evovocatutors@gmail.com" className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl hover:bg-[#f1f5f9] transition-colors">
                <div className="w-12 h-12 bg-[#0d9488]/10 rounded-full flex items-center justify-center text-[#0d9488]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#0f172a]">Email Us</div>
                  <div className="text-[#64748b]">evovocatutors@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/2349166111123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl hover:bg-[#f1f5f9] transition-colors">
                <div className="w-12 h-12 bg-[#25d366]/10 rounded-full flex items-center justify-center text-[#25d366]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#0f172a]">WhatsApp</div>
                  <div className="text-[#64748b]">Chat with us</div>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

// ============================================
// Main Page Component
// ============================================

export default function CoursesPage() {
  return (
    <>
      <CoursesHero />
      <HealthcareSection />
      <VocationalSection />
      <RemedialSection />
      <CourseDeliverySection />
      <PaymentSection />
    </>
  );
}
