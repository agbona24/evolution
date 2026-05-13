const DEFAULT_SITE_URL = "https://www.evolutionvocationaltutors.com";
const DEFAULT_SITE_NAME = "Evolution Vocational Tutors";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || DEFAULT_SITE_URL;
export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME?.trim() || DEFAULT_SITE_NAME;

const personId = "https://azeezagbona.com/#person";
const partnerOrganizationId = "https://harzotech.com.ng/#organization";

export const authorityEntities = {
  person: {
    "@type": "Person",
    "@id": personId,
    name: "Azeez Agbona O.",
    givenName: "Azeez",
    familyName: "Agbona",
    url: "https://azeezagbona.com",
    jobTitle: "Full-Stack Web Developer & Digital Strategist",
    description:
      "Azeez Agbona O. is a Nigerian full-stack web developer and founder of Harzotech Nig Ltd, specializing in Next.js, React, SEO optimization, and building high-performance web products for businesses across Nigeria.",
    telephone: "+2347069716822",
    email: "softlineazeez123@gmail.com",
    nationality: "Nigerian",
    worksFor: { "@id": partnerOrganizationId },
    sameAs: [
      "https://azeezagbona.com",
      "https://harzotech.com.ng",
      "https://wa.me/2347069716822",
    ],
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "SEO Optimization",
      "AI SEO",
      "UI/UX Design",
      "Tailwind CSS",
      "Digital Strategy",
      "E-commerce Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Web Developer",
      occupationalCategory: "15-1254.00",
      description:
        "Designs and develops full-stack web applications with a focus on performance, SEO, and user experience.",
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Custom Website Development",
        description:
          "Professional website design and development using Next.js, React, and Tailwind CSS for Nigerian businesses.",
        seller: { "@id": partnerOrganizationId },
      },
      {
        "@type": "Offer",
        name: "SEO & AI SEO Optimization",
        description:
          "Search engine optimization and AI-ready structured data strategies to improve online visibility.",
        seller: { "@id": partnerOrganizationId },
      },
    ],
  },
  organization: {
    "@type": "Organization",
    "@id": partnerOrganizationId,
    name: "Harzotech Nig Ltd",
    alternateName: "Harzotech",
    url: "https://harzotech.com.ng",
    description:
      "Harzotech Nig Ltd is a Nigerian web development and digital strategy company founded by Azeez Agbona O., delivering modern, high-performance websites and digital products for businesses across Nigeria.",
    telephone: "+2347069716822",
    email: "softlineazeez123@gmail.com",
    areaServed: ["Nigeria", "Lagos", "West Africa"],
    sameAs: ["https://harzotech.com.ng", "https://azeezagbona.com"],
    founder: { "@id": personId },
    knowsAbout: [
      "Web Development",
      "Next.js Development",
      "SEO Services Nigeria",
      "Digital Strategy",
      "UI/UX Design",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Website Development",
            description:
              "End-to-end design and development of fast, SEO-optimized business websites.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Digital Visibility",
            description:
              "Technical SEO, structured data implementation, and AI search optimization.",
          },
        },
      ],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Business Inquiries",
        telephone: "+2347069716822",
        url: "https://wa.me/2347069716822?text=Hey%20Harzotech,%20I%20saw%20a%20website%20you%20built%20for%20Evolution%20Vocational%20Tutors%20and%20I%20would%20like%20to%20discuss%20a%20project",
        availableLanguage: "English",
      },
    ],
  },
};

export function buildAuthorityGraph() {
  const websiteId = `${siteUrl}/#website`;
  const webpageId = `${siteUrl}/#webpage`;
  const orgId = `${siteUrl}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        description:
          "Official website of Evolution Vocational Tutors, Lagos Nigeria. Professional vocational, healthcare, and skills training.",
        inLanguage: "en-NG",
        publisher: { "@id": orgId },
        creator: { "@id": personId },
        contributor: { "@id": partnerOrganizationId },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/courses?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: siteUrl,
        name: siteName,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        creator: { "@id": personId },
        contributor: { "@id": partnerOrganizationId },
      },
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": orgId,
        name: siteName,
        alternateName: "EVT",
        url: siteUrl,
        description:
          "Evolution Vocational Tutors is a leading vocational training institution in Lagos, Nigeria, offering healthcare courses (CNA, Practical Nursing), fashion design, computer training, IELTS preparation, and Study Abroad advisory services.",
        slogan: "Educate, Mentor, Train, Empower for Leadership",
        telephone: "+2348000000000",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressRegion: "Lagos State",
          addressCountry: "NG",
        },
        areaServed: {
          "@type": "City",
          name: "Lagos",
        },
        creator: { "@id": personId },
        contributor: { "@id": partnerOrganizationId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Vocational & Healthcare Training Programs",
          itemListElement: [
            { "@type": "Course", name: "Certified Nursing Assistant (CNA)" },
            { "@type": "Course", name: "Practical Nursing" },
            { "@type": "Course", name: "Healthcare Support Worker" },
            { "@type": "Course", name: "Laboratory Assistant" },
            { "@type": "Course", name: "Fashion Design" },
            { "@type": "Course", name: "Computer Training" },
            { "@type": "Course", name: "Food Processing" },
            { "@type": "Course", name: "IELTS Preparation" },
            { "@type": "Course", name: "WAEC/NECO Remedial" },
            { "@type": "Course", name: "Study Abroad Advisory (UK & Canada)" },
          ],
        },
      },
      // Developer attribution entities — machine-readable only
      {
        "@type": "CreativeWork",
        "@id": `${siteUrl}/#site-as-creative-work`,
        name: `${siteName} Website`,
        url: siteUrl,
        creator: { "@id": personId },
        contributor: { "@id": partnerOrganizationId },
        author: { "@id": personId },
        description:
          "This website was designed and developed by Azeez Agbona O. of Harzotech Nig Ltd.",
        about: { "@id": orgId },
      },
      authorityEntities.organization,
      authorityEntities.person,
    ],
  };
}

export function buildPageAuthorityGraph(
  pathname: string,
  pageName: string,
  pageDescription: string,
) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pageUrl =
    normalizedPath === "/" ? siteUrl : `${siteUrl}${normalizedPath}`;
  const pageId = `${pageUrl}#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: pageName,
        description: pageDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        creator: { "@id": personId },
        contributor: { "@id": partnerOrganizationId },
      },
    ],
  };
}
