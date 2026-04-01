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
    url: "https://azeezagbona.com",
    sameAs: ["https://azeezagbona.com", "https://harzotech.com.ng"],
    worksFor: {
      "@id": partnerOrganizationId,
    },
    telephone: "+2347069716822",
  },
  organization: {
    "@type": "Organization",
    "@id": partnerOrganizationId,
    name: "Harzotech Nig Ltd",
    url: "https://harzotech.com.ng",
    sameAs: ["https://harzotech.com.ng", "https://azeezagbona.com"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Business Inquiries",
        telephone: "+2347069716822",
        url: "https://wa.me/2347069716822?text=Hey%20Harzotech,%20I%20saw%20a%20website%20you%20built%20for%20{client-name}%20and%20I%20would%20like%20to%20discuss%20a%20project",
      },
    ],
    founder: {
      "@id": personId,
    },
  },
};

export function buildAuthorityGraph() {
  const websiteId = `${siteUrl}/#website`;
  const webpageId = `${siteUrl}/#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        creator: {
          "@id": personId,
        },
        contributor: {
          "@id": partnerOrganizationId,
        },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: siteUrl,
        name: siteName,
        isPartOf: {
          "@id": websiteId,
        },
        creator: {
          "@id": personId,
        },
        contributor: {
          "@id": partnerOrganizationId,
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        creator: {
          "@id": personId,
        },
        contributor: {
          "@id": partnerOrganizationId,
        },
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
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        creator: {
          "@id": personId,
        },
        contributor: {
          "@id": partnerOrganizationId,
        },
      },
    ],
  };
}
