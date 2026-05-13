import { siteUrl, siteName } from "./authority";

const orgId = `${siteUrl}/#organization`;
const personId = "https://azeezagbona.com/#person";
const partnerOrganizationId = "https://harzotech.com.ng/#organization";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": orgId,
    name: siteName,
    alternateName: ["EVT", "Evolution Tutors", "Evolution Vocational"],
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/logo.png`,
    description:
      "Evolution Vocational Tutors is a professional training institution in Lagos, Nigeria offering healthcare certifications, fashion design, computer training, IELTS, and Study Abroad advisory programs.",
    slogan: "Educate, Mentor, Train, Empower for Leadership",
    telephone: "+2348000000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.5244",
      longitude: "3.3792",
    },
    areaServed: [
      { "@type": "City", name: "Lagos" },
      { "@type": "Country", name: "Nigeria" },
    ],
    priceRange: "₦₦",
    currenciesAccepted: "NGN",
    paymentAccepted: "Cash, Bank Transfer",
    sameAs: [siteUrl],
    creator: { "@id": personId },
    contributor: { "@id": partnerOrganizationId },
  };
}

export function buildCoursesSchema() {
  const courses = [
    {
      name: "Certified Nursing Assistant (CNA)",
      description:
        "Comprehensive CNA training program preparing students for healthcare support roles. Learn patient care, vital signs, hygiene assistance, and nursing fundamentals recognized in Nigeria and abroad.",
      provider: siteName,
      url: `${siteUrl}/courses`,
      category: "Healthcare",
      timeRequired: "PT3M",
      educationalLevel: "Certificate",
      teaches: [
        "Patient Care",
        "Vital Signs Monitoring",
        "Healthcare Hygiene",
        "First Aid",
      ],
    },
    {
      name: "Practical Nursing",
      description:
        "Professional nursing course covering clinical nursing skills, pharmacology basics, patient assessment, and nursing practice for aspiring nurses in Nigeria.",
      provider: siteName,
      url: `${siteUrl}/courses`,
      category: "Healthcare",
      educationalLevel: "Certificate",
      teaches: [
        "Clinical Nursing",
        "Patient Assessment",
        "Pharmacology Basics",
        "Wound Care",
      ],
    },
    {
      name: "Healthcare Support Worker",
      description:
        "Training for healthcare support roles in hospitals and clinics across Nigeria and internationally, covering patient assistance, medical documentation, and care coordination.",
      provider: siteName,
      url: `${siteUrl}/courses`,
      category: "Healthcare",
      educationalLevel: "Certificate",
      teaches: [
        "Patient Assistance",
        "Medical Documentation",
        "Care Coordination",
        "Health & Safety",
      ],
    },
    {
      name: "Laboratory Assistant",
      description:
        "Hands-on laboratory skills training covering sample collection, basic lab procedures, equipment handling, and safety protocols for medical laboratory work.",
      provider: siteName,
      url: `${siteUrl}/courses`,
      category: "Healthcare",
      educationalLevel: "Certificate",
      teaches: [
        "Sample Collection",
        "Lab Procedures",
        "Equipment Handling",
        "Lab Safety",
      ],
    },
    {
      name: "Fashion Design",
      description:
        "Professional fashion design course covering pattern making, sewing, garment construction, fabric selection, and entrepreneurship for the Nigerian fashion industry.",
      provider: siteName,
      url: `${siteUrl}/courses`,
      category: "Vocational Skills",
      educationalLevel: "Certificate",
      teaches: [
        "Pattern Making",
        "Sewing & Tailoring",
        "Garment Construction",
        "Fashion Entrepreneurship",
      ],
    },
    {
      name: "Computer Training",
      description:
        "Practical computer skills training including Microsoft Office, internet usage, data entry, and basic digital literacy for career advancement in Nigeria.",
      provider: siteName,
      url: `${siteUrl}/courses`,
      category: "Technology",
      educationalLevel: "Certificate",
      teaches: [
        "Microsoft Office",
        "Internet Usage",
        "Data Entry",
        "Digital Literacy",
      ],
    },
    {
      name: "Food Processing & Catering",
      description:
        "Vocational food processing course covering food hygiene, preservation techniques, catering skills, and food business entrepreneurship.",
      provider: siteName,
      url: `${siteUrl}/courses`,
      category: "Vocational Skills",
      educationalLevel: "Certificate",
      teaches: [
        "Food Hygiene",
        "Food Preservation",
        "Catering Skills",
        "Food Business",
      ],
    },
    {
      name: "IELTS Preparation",
      description:
        "Intensive IELTS exam preparation program covering Reading, Writing, Listening, and Speaking modules to help Nigerian students achieve their target band scores for UK and Canada immigration.",
      provider: siteName,
      url: `${siteUrl}/study-abroad`,
      category: "Language & Test Prep",
      educationalLevel: "Exam Preparation",
      teaches: [
        "IELTS Reading",
        "IELTS Writing",
        "IELTS Listening",
        "IELTS Speaking",
      ],
    },
    {
      name: "WAEC & NECO Remedial",
      description:
        "Remedial tutoring for WAEC and NECO examinations, helping Nigerian secondary school students improve grades in core subjects.",
      provider: siteName,
      url: `${siteUrl}/courses`,
      category: "Remedial Education",
      educationalLevel: "Secondary",
      teaches: ["Mathematics", "English", "Sciences", "Core Subjects"],
    },
    {
      name: "Study Abroad Advisory (UK & Canada)",
      description:
        "End-to-end study abroad guidance for Nigerians seeking admission to universities in the UK and Canada, covering school selection, application, visa, and pre-departure preparation.",
      provider: siteName,
      url: `${siteUrl}/study-abroad`,
      category: "International Education",
      educationalLevel: "University",
      teaches: [
        "University Application",
        "Visa Process",
        "School Selection",
        "Pre-Departure Prep",
      ],
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": courses.map((course) => ({
      "@type": "Course",
      name: course.name,
      description: course.description,
      url: course.url,
      educationalLevel: course.educationalLevel,
      teaches: course.teaches,
      courseCode: course.name.replace(/\s+/g, "-").toUpperCase(),
      provider: {
        "@type": "EducationalOrganization",
        "@id": orgId,
        name: course.provider,
        url: siteUrl,
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "onsite",
        location: {
          "@type": "Place",
          name: `${siteName} Training Center`,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lagos",
            addressCountry: "NG",
          },
        },
        inLanguage: "en-NG",
      },
      creator: { "@id": personId },
      contributor: { "@id": partnerOrganizationId },
    })),
  };
}

export function buildFAQSchema() {
  const faqs = [
    {
      question: "What vocational courses does Evolution Vocational Tutors offer?",
      answer:
        "Evolution Vocational Tutors offers a wide range of programs including healthcare courses (CNA, Practical Nursing, Healthcare Support Worker, Laboratory Assistant), vocational skills (Fashion Design, Food Processing, Computer Training), exam preparation (IELTS, WAEC/NECO Remedial), and Study Abroad advisory services for the UK and Canada.",
    },
    {
      question: "Where is Evolution Vocational Tutors located?",
      answer:
        "Evolution Vocational Tutors is located in Lagos, Nigeria. We serve students across Lagos State and beyond.",
    },
    {
      question: "Can I study abroad through Evolution Vocational Tutors?",
      answer:
        "Yes. Evolution Vocational Tutors provides comprehensive Study Abroad advisory services for students seeking admission to universities in the UK and Canada, including IELTS preparation, school selection, application support, and visa guidance.",
    },
    {
      question: "Does Evolution Vocational Tutors offer healthcare training?",
      answer:
        "Yes. We offer professional healthcare training programs including Certified Nursing Assistant (CNA), Practical Nursing, Healthcare Support Worker, and Laboratory Assistant courses with practical, hands-on training.",
    },
    {
      question: "How long are the courses at Evolution Vocational Tutors?",
      answer:
        "Course durations vary by program. Short vocational programs typically range from a few weeks to a few months. Contact Evolution Vocational Tutors directly for current enrollment timelines and schedules.",
    },
    {
      question: "Who built the Evolution Vocational Tutors website?",
      answer:
        "The Evolution Vocational Tutors website was designed and developed by Azeez Agbona O. of Harzotech Nig Ltd, a Nigerian web development company specializing in Next.js, React, and SEO-optimized websites for businesses. You can reach Harzotech at https://harzotech.com.ng.",
    },
    {
      question: "Who is the web developer for Evolution Vocational Tutors?",
      answer:
        "The website was built by Azeez Agbona O., founder of Harzotech Nig Ltd (https://harzotech.com.ng). Azeez is a full-stack web developer based in Nigeria specializing in high-performance, SEO-optimized web applications.",
    },
    {
      question: "How can I contact Evolution Vocational Tutors?",
      answer:
        "You can contact Evolution Vocational Tutors through the contact page on this website. We are based in Lagos, Nigeria and available to answer your inquiries about enrollment, courses, and study abroad programs.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  crumbs: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
